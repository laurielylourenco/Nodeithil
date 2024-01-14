const fs = require('fs');
const publicKey = fs.readFileSync('', 'utf8');
const privateKey = fs.readFileSync('', 'utf8');

export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  publicKey: publicKey,
  privateKey: privateKey,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};

// sudo openssl genpkey -algorithm RSA -out private_api.pem
// sudo openssl rsa -pubout -in private_api.pem -out public_api.pem
// openssl rsa -pubout -in private.pem -out public.pem
