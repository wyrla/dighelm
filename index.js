const sqlite3 = require('sqlite3').verbose();
const crc32 = require('crc32');
const fs = require('fs');
const prompt = require('prompt-sync')();
let dbLocation = process.env.HXCORE_DB || process.argv[2]

const keycodes = require('./keycodes');
const serializeSequence = require('./serializeSequence');

while (!dbLocation) {
    dbLocation = prompt('Informar anne pro databse location path: ')
}

if (!dbLocation) {
    console.log(`Invalid db file path value ${dbLocation} present! Exiting...`);
    process.exit(1);
}

const db = new sqlite3.Database(dbLocation);

let startId = 69;

let stringsFilePath = process.argv[3];

if (!stringsFilePath)  {
    console.log(`Invalid strings file path value ${dbLocation} present! Exiting...`);
    process.exit(1);
}

let strings;

try {
    strings = fs.readFileSync(stringsFilePath, 'utf8').split('\n').map(s => s.trim()).filter(s => !!s);
} catch (e) {
    console.log(e);
    process.exit(1);
}

const macros = [];

for (const string of strings) {
    console.log(string)
    const sequence = [];

    let downTime = 0;
    let upTime = 25;

    for (const letter of string) {
        sequence.push({
            keyCode: keycodes[letter.toUpperCase()].value,
            downTime,
            upTime
        })

        downTime += 25;
        upTime += 25;
    }

    macros.push({
        id: startId,
        name: string,
        sequence
    })

    startId += 1;
}



db.serialize(function () {
    for (const macro of macros) {
        const {id, name, sequence} = macro;

        const serializedSequence = JSON.stringify(serializeSequence(sequence));

        const crc = crc32(serializedSequence);

        db.run(`INSERT INTO kbd_macro_new (id, group_id, icon, uuid, name, macro_value) values ('${id}', '0', '0', '${crc}', '${name}', '${serializedSequence}')`, {}, err => {
            if (err && err.code !== 'SQLITE_CONSTRAINT') {
                console.log(err)
            }
        })
    }
});

db.close();
