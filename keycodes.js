const KeyCodes = {
  1: [{ name: "1", value: 30 }],
  2: [{ name: "2", value: 31 }],
  3: [{ name: "3", value: 32 }],
  4: [{ name: "4", value: 33 }],
  5: [{ name: "5", value: 34 }],
  6: [{ name: "6", value: 35 }],
  7: [{ name: "7", value: 36 }],
  8: [{ name: "8", value: 37 }],
  9: [{ name: "9", value: 38 }],
  0: [{ name: "0", value: 39 }],
  Esc: [{ name: "Esc", info: "Esc", value: 41 }],
  "-": [{ name: "-", value: 86 }],
  "=": [{ name: "=+", value: 46 }],
  Backspace: [{ name: "Backspace", info: "Backspace", value: 42 }],
  Tab: [{ name: "Tab", info: "Tab", value: 43 }],
  q: [{ name: "Q", value: 20 }],
  w: [{ name: "W", value: 26 }],
  e: [{ name: "E", value: 8 }],
  r: [{ name: "R", value: 21 }],
  t: [{ name: "T", value: 23 }],
  y: [{ name: "Y", value: 28 }],
  u: [{ name: "U", value: 24 }],
  i: [{ name: "I", value: 12 }],
  o: [{ name: "O", value: 18 }],
  p: [{ name: "P", value: 19 }],
  ps: [{ name: "PrintScreen", value: 70, alias: "PS" }],
  "[": [{ name: "[[{", value: 47 }],
  "]": [{ name: "]}", value: 48 }],
  Enter: [{ name: "Enter", value: 88 }],
  Ctrl: [{ name: "Ctrl", info: "Right Ctrl", value: 228 }],
  a: [{ name: "A", value: 4 }],
  s: [{ name: "S", value: 22 }],
  d: [{ name: "D", value: 7 }],
  f: [{ name: "F", value: 9 }],
  g: [{ name: "G", value: 10 }],
  h: [{ name: "H", value: 11 }],
  j: [{ name: "J", value: 13 }],
  k: [{ name: "K", value: 14 }],
  l: [{ name: "L", value: 15 }],
  ";": [{ name: ";:", value: 51 }],
  '"': [{ name: '"', value: 52 }],
  "`": [{ name: "`~", value: 53 }],
  Shift: [{ name: "Shift", info: "Right Shift", value: 229 }],
  "\\": [{ name: "\\|", value: 49 }],
  z: [{ name: "Z", value: 29 }],
  x: [{ name: "X", value: 27 }],
  c: [{ name: "C", value: 6 }],
  v: [{ name: "V", value: 25 }],
  b: [{ name: "B", value: 5 }],
  n: [{ name: "N", value: 17 }],
  m: [{ name: "M", value: 16 }],
  ",": [{ name: ",<", value: 54 }],
  ".": [{ name: ".", value: 99 }],
  "/": [{ name: "/?", value: 56 }],
  Alt: [{ name: "Alt", info: "Right Alt", value: 230 }],
  " ": [{ name: "Space", info: "Space", value: 44 }],
  CapsLock: [{ name: "CapsLock", info: "CapsLock", value: 57 }],
  F1: [{ name: "F1", value: 58 }],
  F2: [{ name: "F2", value: 59 }],
  F3: [{ name: "F3", value: 60 }],
  F4: [{ name: "F4", value: 61 }],
  F5: [{ name: "F5", value: 62 }],
  F6: [{ name: "F6", value: 63 }],
  F7: [{ name: "F7", value: 64 }],
  F8: [{ name: "F8", value: 65 }],
  F9: [{ name: "F9", value: 66 }],
  F10: [{ name: "F10", value: 67 }],
  NumLock: [{ name: "NumLock", value: 83 }],
  "Scroll Lock": [{ name: "Scroll Lock", value: 71 }],
  "+": [{ name: "+", value: 87 }],
  F11: [{ name: "F11", value: 68 }],
  F12: [{ name: "F12", value: 69 }],
  Pause: [{ name: "Pause", value: 72 }],
  HOME: [{ name: "Home", value: 74, alias: "HOME" }],
  PGUP: [{ name: "PageUp", value: 75, alias: "PGUP" }],
  END: [{ name: "End", value: 77, alias: "END" }],
  PGDN: [{ name: "PageDown", value: 78, alias: "PGDN" }],
  INSERT: [{ name: "Insert", value: 73, alias: "INSERT" }],
  DELETE: [{ name: "Delete", value: 76, alias: "DELETE" }],
  "Win/Cmd": [
    {
      name: "icon.right_gui",
      alias: "Win/Cmd",
      icon: "win-mac",
      value: 231,
    },
  ],
  Menu: [{ name: "Menu", value: 101 }],
  "↑": [{ name: "↑", value: 82 }],
  "←": [{ name: "←", value: 80 }],
  "→": [{ name: "→", value: 79 }],
  "↓": [{ name: "↓", value: 81 }],
  A: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "A", value: 4 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  S: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "S", value: 22 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  D: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "D", value: 7 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  F: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "F", value: 9 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  G: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "G", value: 10 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  H: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "H", value: 11 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  J: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "J", value: 13 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  K: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "K", value: 14 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  L: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "L", value: 15 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  Q: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "Q", value: 20 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  W: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "W", value: 26 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  E: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "E", value: 8 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  R: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "R", value: 21 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  T: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "T", value: 23 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  Y: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "Y", value: 28 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  U: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "U", value: 24 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  I: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "I", value: 12 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  O: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "O", value: 18 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  P: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "P", value: 19 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  Z: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "Z", value: 29 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  X: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "X", value: 27 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  C: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "C", value: 6 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  V: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "V", value: 25 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  B: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "B", value: 5 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  N: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "N", value: 17 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  M: [
    { name: "CapsLock", info: "CapsLock", value: 57 },
    { name: "M", value: 16 },
    { name: "CapsLock", info: "CapsLock", value: 57 },
  ],
  "@": [
    { name: "2", value: 90, special: true },
  ],
};

module.exports = KeyCodes;
