const { Client } = require("../../dist");

const client = new Client("session.json");

(async () => {
  if (!client.sessionExists) {
    await client.newSession();
  }

  const session = await client.session.get();

  if (!session.authenticated) {
    await client.session.authenticateUser(
      "username",
      "password"
      // "otp"
    );
  }

  const me = await client.network.getMe();
  console.log("Logged in as", me.name + ".");
  console.log(`${me.name}’s username is`, me.username + ".");
  console.log(`@${me.username}’s ID is`, me.id + ".");
})();
