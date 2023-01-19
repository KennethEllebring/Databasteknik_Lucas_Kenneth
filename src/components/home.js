import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="loggin-wrapper">
      <div className="frame">
        <div className="logginform">
          <form action="" method="post">
            <label>Username:</label>
            <br />
            <input type="text" placeholder="Type your username" />
            <br />
            <label>Password:</label>
            <br />
            <input type="password" placeholder="Type your password" />
            <br />
            <button>Login</button>
          </form>
          <Link to="/register">
            <span>Register new user</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
