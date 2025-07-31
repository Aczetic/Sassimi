import { useRef, useState } from "react";
import SignUp from "./SignUp.jsx";
import CloseIcon from '@mui/icons-material/Close';
import '../styles/form.css';
import LogIn from "./Login.jsx";


const Auth = () => {
  const [signUpVisible , setSignUpVisible] = useState(false);
  const [loginVisible , setLoginVisible] = useState(false);
  const backgroundRef = useRef();
  return (
    <>
      <div id="auth">
          <button
            className="secondary-btn btn"
            onClick={() => setLoginVisible(true)}
          >
            Log In
          </button>
          <button
            className="primary-btn btn"
            onClick={() => setSignUpVisible(true)}
          >
            Sign Up
          </button>
      </div>

      {(signUpVisible || loginVisible) && (
        <div
          ref = {backgroundRef}
          className="form-parent"
          onClick={(e) => {
             if(e.target === backgroundRef.current){
              setSignUpVisible(false);
              setLoginVisible(false);
             }
          }}
        >
          <CloseIcon
            onClick={() => {
              setSignUpVisible(false);
              setLoginVisible(false);
            }}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: "gray",
              fontSize: "2rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          />
          {signUpVisible && <SignUp />}
          {loginVisible && <LogIn />}
        </div>
      )}
    </>
  );
}
export default Auth
