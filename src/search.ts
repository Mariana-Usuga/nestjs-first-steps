const algoliasearch = require("algoliasearch");

const client = algoliasearch("DL46AI7XDY", "bccf6ef7f0a3afc56c1306352465c94f");
const index = client.initIndex("market_pul");

const objects = [
  {
    objectID: 1,
    name: "Marina ana",
    lastname:"usuga"
  },
  {
    objectID: 2,
    name: "Mario",
    lastname: "usuga"
  },
  {
    objectID:3,
    name: "Sara",
    lastname: "sanchez"
  },
];

index
  .saveObjects(objects)
  .then(({ objectIDs }) => {
    console.log(objectIDs);
  })
  .catch(err => {
    console.log(err);
  });