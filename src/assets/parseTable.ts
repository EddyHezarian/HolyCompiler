type block = null | number | "lambda";

export type row = {
  program: block;
  var: block;
  begin: block;
  end: block;
  integer: block;
  show: block;
  ",": block;
  ":": block;
  "=": block;
  "+": block;
  "-": block;
  "*": block;
  "/": block;
  "0": block;
  "1": block;
  "2": block;
  "3": block;
  "4": block;
  "5": block;
  "6": block;
  "7": block;
  "8": block;
  "9": block;
  a: block;
  b: block;
  c: block;
  d: block;
  e: block;
  ";": block;
  "(": block;
  ")": block;
};
type parseTable = {
  "<prog>": row;
  "<id>": row;
  "<alphaNum>": row;
  "<dec-list>": row;
  "<dec>": row;
  "<moreDec>": row;
  "<type>": row;
  "<stat-list>": row;
  "<moreStat>": row;
  "<stat>": row;
  "<write>": row;
  "<assign>": row;
  "<expr>": row;
  "<exprPrime>": row;
  "<term>": row;
  "<termPrime>": row;
  "<factor>": row;
  "<number>": row;
  "<moreDigits>": row;
  "<sign>": row;
  "<digit>": row;
  "<letter>": row;
};

export const parseTable: parseTable = {
  "<prog>": {
    program: 1,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<id>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 2,
    b: 2,
    c: 2,
    d: 2,
    e: 2,
  },
  "<alphaNum>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "lambda",
    ",": "lambda",
    integer: null,
    show: null,
    "=": "lambda",
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": 4,
    "1": 4,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4,
    "7": 4,
    "8": 4,
    "9": 4,
    a: 3,
    b: 3,
    c: 3,
    d: 3,
    e: 3,
  },
  "<dec-list>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
  },
  "<dec>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 6,
    b: 6,
    c: 6,
    d: 6,
    e: 6,
  },
  "<moreDec>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "lambda",
    ",": "lambda",
    integer: null,
    show: null,
    "=": "lambda",
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<type>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: 8,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<stat-list>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: 9,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 9,
    b: 9,
    c: 9,
    d: 9,
    e: 9,
  },
  "<moreStat>": {
    program: null,
    var: null,
    begin: null,
    end: "lambda",
    ":": null,
    ",": null,
    integer: null,
    show: 10,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 10,
    b: 10,
    c: 10,
    d: 10,
    e: 10,
  },
  "<stat>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: 11,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 12,
    b: 12,
    c: 12,
    d: 12,
    e: 12,
  },
  "<write>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: 13,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<assign>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 14,
    b: 14,
    c: 14,
    d: 14,
    e: 14,
  },
  "<expr>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 15,
    "-": 15,
    "*": null,
    "/": null,
    ";": null,
    "(": 15,
    ")": null,
    "0": 15,
    "1": 15,
    "2": 15,
    "3": 15,
    "4": 15,
    "5": 15,
    "6": 15,
    "7": 15,
    "8": 15,
    "9": 15,
    a: 15,
    b: 15,
    c: 15,
    d: 15,
    e: 15,
  },
  "<exprPrime>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 16,
    "-": 17,
    "*": null,
    "/": null,
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<term>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 18,
    "-": 18,
    "*": null,
    "/": null,
    ";": null,
    "(": 18,
    ")": null,
    "0": 18,
    "1": 18,
    "2": 18,
    "3": 18,
    "4": 18,
    "5": 18,
    "6": 18,
    "7": 18,
    "8": 18,
    "9": 18,
    a: 18,
    b: 18,
    c: 18,
    d: 18,
    e: 18,
  },
  "<termPrime>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": "lambda",
    "-": "lambda",
    "*": 19,
    "/": 20,
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<factor>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 22,
    "-": 22,
    "*": null,
    "/": null,
    ";": null,
    "(": 23,
    ")": null,
    "0": 22,
    "1": 22,
    "2": 22,
    "3": 22,
    "4": 22,
    "5": 22,
    "6": 22,
    "7": 22,
    "8": 22,
    "9": 22,
    a: 21,
    b: 21,
    c: 21,
    d: 21,
    e: 21,
  },
  "<number>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 25,
    "-": 25,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<moreDigits>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<sign>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 27,
    "-": 28,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<digit>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": 30,
    "1": 31,
    "2": 32,
    "3": 33,
    "4": 34,
    "5": 35,
    "6": 36,
    "7": 37,
    "8": 38,
    "9": 39,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<letter>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 40,
    b: 41,
    c: 42,
    d: 43,
    e: 44,
  },
};
