require("dotenv").config();
const crypto = require("crypto");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

const hash = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

const encrypt = (data) => {
  let iv = crypto.randomBytes(16);

  let cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );

  let encrypted = cipher.update(data);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
};

module.exports = { encrypt, hash };
