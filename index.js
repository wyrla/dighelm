const sqlite3 = require("sqlite3").verbose();
const crc32 = require("crc32");
const fs = require("fs");
let dbLocation = process.env.HXCORE_DB || process.argv[2];

const keys = require("./keycodes");
const serializeSequence = require("./serializeSequence");

if (!dbLocation) {
  console.log(`Invalid db file path value ${dbLocation} present! Exiting...`);
  process.exit(1);
}

let strings = [process.argv[3]];
const commandArgument = strings;

if (commandArgument.includes(".txt")) {
  if (!stringsFilePath) {
    console.log(
      `Invalid strings file path value ${dbLocation} present! Exiting...`
    );
    process.exit(1);
  }

  try {
    strings = fs
      .readFileSync(stringsFilePath, "utf8")
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => !!s);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

const macros = [];

const returnStringSequence = (string) => {
  let downTime = 0;
  let upTime = 25;
  return [...string]
    .map((letter) => keys[letter])
    .flat()
    .map((letter) => {
      downTime += 25;
      upTime += 25;
      return {
        keyCode: letter.value,
        downTime,
        upTime,
      };
    });
};

for (const string of strings) {
  const keyCodeRef = returnStringSequence(string);

  macros.push({
    name: string,
    sequence: keyCodeRef,
  });
}

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbLocation);
    db.serialize(() => {
      resolve(db);
    });

    db.on("error", (error) => {
      reject(error);
    });
  });
}

function insertMacro(id, crc, name, serializedSequence, db) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO kbd_macro_new (id, group_id, icon, uuid, name, macro_value) values ('${
        id + 1
      }', '0', '0', '${crc}', '${name}', '${serializedSequence}')`,
      {},
      (err) => {
        if (err) reject(err);
        resolve(this.lastID);
      }
    );
  });
}

function getLastId(db) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM kbd_macro_new WHERE id=(SELECT max(id) FROM kbd_macro_new)`,
      (err, row) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
}

(async () => {
  try {
    const db = await connectToDatabase();

    for (const macro of macros) {
      const { name, sequence } = macro;

      const serializedSequence = JSON.stringify(serializeSequence(sequence));

      const crc = crc32(serializedSequence);
      let { id } = await getLastId(db);

      await insertMacro(id, crc, name, serializedSequence, db);
    }

    db.close();
  } catch (error) {
    console.error(error);
  }
})();
