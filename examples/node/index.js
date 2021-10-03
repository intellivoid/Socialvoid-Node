const { Client } = require("../../dist");

const client = new Client("session.json");

(async () => {
  if (!client.session.sessionExists) {
    await client.session.create();
  }

  await client.session.authenticateUser(
    "username",
    "password"
    // "otp"
  );

  console.log(await client.network.getMe());
})();
