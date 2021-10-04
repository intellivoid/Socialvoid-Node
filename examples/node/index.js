const { Client } = require("../../dist");

const client = new Client("session.json");

(async () => {
  await client.newSession();

  await client.session.authenticateUser(
    "username",
    "password"
    // "otp"
  );

  console.log(await client.network.getMe());
})();
