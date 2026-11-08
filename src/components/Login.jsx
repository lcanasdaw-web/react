import "./login.css";

function Login({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");

    onLogin(username, email);
  }

  return (
    <div id="login-container">
      <form id="login-form" onSubmit={handleSubmit}>
        <label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </label>
        <br />
        <label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <br />
        <div id="button-container">
          <input id="btn1" type="submit" value="Login" />
          <input id="btn2" type="button" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Login;
