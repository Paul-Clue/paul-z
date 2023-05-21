

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <h2>Sign in</h2>
      <form action="/api/auth/login/password" method="post">
          <section>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required autoFocus />
          </section>
          <section>
              <label htmlFor="current-password">Password</label>
              <input id="current-password" name="password" type="password" autoComplete="current-password" required />
          </section>
          <button type="submit">Sign in</button>
      </form>
    </div>
  )
};

export default Login;