import { readFile, writeFile } from "node:fs/promises";

const DATABASE_PATH = new URL("./database.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }
}