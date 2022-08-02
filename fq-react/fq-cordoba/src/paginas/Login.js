import logo from '../media/Logo.png';
import './Login.css';
import mail from "../media/mail.png"
import pass from "../media/pass.jpeg"
import user from "../media/user.png"

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-images">
              <img src={user} alt="IMG" className="img-user"></img>
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={mail} alt="IMG" className="img-email"></img>
              <input type="text" placeholder="Username" className="username"></input>
            </div>
            <div className="second-input">
              <img src={pass} alt="IMG" className="img-email"></img>
              <input type="password" placeholder="Pass" className="username"></input>
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <div>
              <p className="link">
                <a href="#">¿Olvidaste tu contraseña?</a> O <a href="#">Registrate</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;