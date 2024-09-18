const os = require("os");
//userInfo
console.log(os.userInfo());
console.log(`uptime in seconds  ${os.uptime()}`);

const overall = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(overall);
