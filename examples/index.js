const { createInterface } = require("readline");
const {
  Client,
  SessionExpired,
  TwoFactorAuthenticationRequired,
} = require("./dist");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const client = new Client("session.json");

const getInput = (q) => new Promise((r) => readline.question(q, r));

(async () => {
  if (!client.session.sessionExists) {
    await client.session.create();
  }

  let authenticated;

  try {
    authenticated = (await client.session.get()).authenticated;
  } catch (err) {
    if (err instanceof SessionExpired) {
      const username = await getInput("Username: ");
      const password = await getInput("Password: ");

      try {
        await client.session.authenticateUser(username, password);
      } catch (err) {
        if (err instanceof TwoFactorAuthenticationRequired) {
          const otp = await getInput("OTP: ");
          await client.session.authenticateUser(username, password, otp);
        }
      }
    }
  }

  console.log(await client.network.getMe());
})();
