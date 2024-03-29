const fs = require('fs');
const publicKey = fs.readFileSync('/usr/src/app/public_api.pem', 'utf8');
const privateKey = fs.readFileSync('/usr/src/app/private_api.pem', 'utf8');
export default {
  port: 1337,
  dbUri: "mongodb://mongo:27017/rest-api-tutorial",
  publicKey: publicKey,
  privateKey: privateKey,
  saltWorkFactor: 10,
  accessTokenTtl: "30m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
