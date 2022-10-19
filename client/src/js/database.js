import { openDB } from "idb";

const initdb = openDB("snipp-it", 1, {
  upgrade(db) {
    if (db.objectStoreNames.contains("snipp-it")) {
      console.log("snipp-it database already exists");
      return;
    }
    db.createObjectStore("snipp-it", { keyPath: "id", autoIncrement: true });
    console.log("snipp-it database created");
  },
});

export const putDb = async (content) => {
  return (await initdb).put("snipp-it", content);
}

export const getDb = async () => {
  return (await initdb).getAll("snipp-it");
};

initdb();
