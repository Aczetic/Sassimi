import heroImg from '../assets/hero-img.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Hero = ()=>{


    return <>
    <div data-aos = 'fade' data-aos-duration='1500' id = 'hero'>
        <div id = 'hero-heading' >
            <div id = 'hero-heading-big'>Next-gen SaaS tool that boosts your marketing and sales</div>
            <div id = 'hero-heading-small'>A awesome and powerful tool to boost your business revenues with enterprise grade links built to acquire and engage more customers</div>
        </div>
        <div style = {{width:'100%' , display:'flex' , flexDirection:'column' , gap:'0.5rem', alignItems:'center'}}>
            <div id = 'hero-input'>
                <input placeholder = 'Enter your email' type = 'email'/>
                <button className = 'primary-btn btn'>Get Started</button>
            </div>
            <div id = 'hero-heading-small' style = {{fontSize:'0.8rem'}}><CheckBoxIcon style = {{color:'green'}} />Full access no credit-card required</div>
        </div>
        <img id = 'hero-img' src = {heroImg}/>
    </div>
    </>
}

export default Hero;