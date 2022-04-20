import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x611F79cA7D924c9dBc612c086A975dAb76dA4217");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Dao picture symbol",
        description: "This NFT will give you access to DefiDAO!",
        image: readFileSync("scripts/assets/dao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();