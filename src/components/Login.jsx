import "./login.css";

function Login() {
  return (
    <div id="login-container">
      <form id="login-form" action="/login" method="POST">
        <label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
          />
        </label>
        <br />
        <label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <br />
        <div id="button-container">
          <input id="btn1" type="submit" value="Login" />
          <input id="btn2" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Login;
