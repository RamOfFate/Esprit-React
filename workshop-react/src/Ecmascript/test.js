import { Search } from "./fonction.js";

let lastId = 0;

let Tab = [
  { id: ++lastId, name: "Alice", role: "Admin" },
  { id: ++lastId, name: "Bob", role: "User" },
];

Tab.push({ id: ++lastId, name: "Charlie", role: "Guest" });

const result = Search(Tab, 2);

console.log("Search Result:", result);
