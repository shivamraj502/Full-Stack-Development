console.log("hello backend");

const os = require("os")

console.log("Operating System:", os.platform())
console.log("Username:", os.userInfo().username)
console.log("Home Directory:", os.homedir())
console.log("CPU Architecture:", os.arch())