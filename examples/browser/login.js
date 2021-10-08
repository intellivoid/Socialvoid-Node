async function login(client, greet = true) {
  if (!client.sessionExists) {
    await client.newSession();
  }

  const session = await client.session.get();

  if (!session.authenticated) {
    const username = prompt("Enter your username.");
    const password = prompt("Enter your password.");
    const otp = prompt("Enter your OTP (if set).");

    await client.session.authenticateUser(
      username,
      password,
      otp == "" ? undefined : otp
    );
  }

  const me = await client.network.getMe();

  if (greet) {
    alert(`Hello, ${me.name}!`);
  }
}
