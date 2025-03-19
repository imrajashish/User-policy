const os = require("os");
const { exec } = require("child_process");

const monitorCPU = () => {
  setInterval(() => {
    const load = (os.loadavg()[0] * 100) / os.cpus().length;
    console.log(`CPU Usage: ${load.toFixed(2)}%`);

    if (load > 70) {
      console.log("CPU Usage exceeded 70%. Restarting server...");
      exec("pm2 restart all", (error, stdout) => {
        if (error) {
          console.error(`Error restarting server: ${error.message}`);
          return;
        }
        console.log(`Restart Output: ${stdout}`);
      });
    }
  }, 5000);
};

module.exports = { monitorCPU };
