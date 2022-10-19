import { openDB } from "idb";

const initdb = async () =>
  openDB("snipp-it", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("snipp-it")) {
        console.log("snipp-it database already exists");
        return;
      }
      db.createObjectStore("snipp-it", { keyPath: "id", autoIncrement: true });
      console.log("snipp-it database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB("snipp-it", 1);
  const tx = db.transaction("snipp-it", "readwrite");
  const store = tx.objectStore("snipp-it");
  const request = store.put({ id: 0, content });
  const result = await request;
  console.log("snipp-it database updated", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB("snipp-it", 1);
  const tx = db.transaction("snipp-it", "readonly");
  const store = tx.objectStore("snipp-it");
  const request = store.getAll();
  const result = await request;
  const { content } = result[0] || ''
  return content;
};

initdb();
