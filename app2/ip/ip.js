const Docker = require('dockerode');
const docker = new Docker();

docker.getContainer('bbb-mysql-1').inspect((err, data) => {
  if (err) {
    console.error(err);
    throw err;
  }

  const ipAddress = data.NetworkSettings.Networks.bbb_default.IPAddress;
   console.log(`MySQL container IP address: ${ipAddress}`);

  // Export the IP address as an environment variable
  process.env.MYSQL_IP_ADDRESS = ipAddress;

  
  // Export the IP address as a named constant
  module.exports = {
    ipAddress
  };
});
