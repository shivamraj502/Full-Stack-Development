const fs = require("fs").promises;

async function readFileData() {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    console.log("File Content:");
    console.log(data);
  } catch (error) {
    console.log("Error reading file:", error);
  }
}

readFileData();