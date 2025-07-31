import { useState} from "react";
import '../styles/form.css';
import EmailIcon from '@mui/icons-material/EmailRounded';
import EyeOpenIcon from '@mui/icons-material/Visibility';
import EyeClosedIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';

const SignUp = ()=>{
    const [passwordVisible , setPasswordVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 //TODO:add validation in the frontend and backend as well

    const handleClick = (e)=>{
      e.preventDefault();
      fetch('http://localhost:3000/auth/sign-up',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({userName, fullName,email,password})
      }).then(res=>{
        return res.json();
      }).then(data=>{
        if(data.success){
          alert('Sign up successful')
        }else{
          if(data.message === 'USER_EXISTS'){
            alert('Please Login!')
          }
        }
      }).catch(e=>{
          console.log(e);
      })
    }
    
    return (
        <form id="sign-up" className="form">
        <div className = 'headings'>Sign Up</div>
        <label className="label">
            {"Username :"}
            <input type="text" placeholder="Enter username" value ={userName} onChange = {(e)=>setUserName(e.target.value)} />
            <PersonIcon />
          </label>
        <label className="label">
            {"Full Name :"}
            <input type="text" placeholder="Enter your full name" value ={fullName} onChange = {(e)=>setFullName(e.target.value)}/>
            <BadgeIcon />
          </label>
          <label className="label">
            {"Email :"}
            <input type="email" placeholder="Enter your email" value ={email} onChange = {(e)=>setEmail(e.target.value)}/>
            <EmailIcon />
          </label>
          <label className="label">
            {"Password :"}
            <input type={passwordVisible?"text":"password"} placeholder="Enter password" value ={password} onChange = {(e)=>setPassword(e.target.value)} />
            
            {passwordVisible?<EyeOpenIcon onClick = {()=>setPasswordVisible(false)} />:<EyeClosedIcon onClick = {()=>setPasswordVisible(true)}/>}
         
          </label>
          <button onClick = {handleClick} className = 'primary-btn btn' id = 'sign-up-btn'>Sign Up</button>
        </form>
    );
}

export default SignUp;