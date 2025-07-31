import { useState } from "react";
import "../styles/form.css";
import EmailIcon from "@mui/icons-material/EmailRounded";
import EyeOpenIcon from "@mui/icons-material/Visibility";
import EyeClosedIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers:{
        'Content-Type':'application/json',
        
      },
      credentials:'include',
      body: JSON.stringify({ userName, email, password }),
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        alert('Log in successful');
      }else if( data.message === 'USER_DOES_NOT_EXIST'){
        alert("Please Sign Up");
      }else if( data.message === 'INCORRECT_CREDENTIALS'){
        alert('Please provide correct information');
      }
    });
  };

  return (
    <form id="sign-up" className="form">
      <div className = 'headings'>Log In</div>
      <label className="label">
        {"Username :"}
        <input
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <PersonIcon />
      </label>
      <label className="label">
        {"Email :"}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EmailIcon />
      </label>
      <label className="label">
        {"Password :"}
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordVisible ? (
          <EyeOpenIcon onClick={() => setPasswordVisible(false)} />
        ) : (
          <EyeClosedIcon onClick={() => setPasswordVisible(true)} />
        )}
      </label>
      <button
        onClick={handleClick}
        className="primary-btn btn"
        id="sign-up-btn"
      >
        Log In
      </button>
    </form>
  );
};

export default SignUp;
