import Hero from '../components/Hero.jsx';
import {amazonLogo , canonLogo , googleLogo , netflixLogo , microsoftLogo , tataLogo , walmartLogo , flipkartLogo , appleLogo} from "../assets/companyImages.js";
import {asanaLogo , intercomLogo , zendeskLogo, jiraLogo , salesmateLogo , tableauLogo , zohoLogo} from '../assets/companyImages.js';
import StarIcon from '@mui/icons-material/Star';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import contentImageOne from '../assets/first-content-img.jfif';
import contentImageTwo from '../assets/second-content-img.jfif';
import contentImageThree from '../assets/third-content-img.jfif';
import DonutLargeIcon from '@mui/icons-material/DonutLarge'; // analyazingIcon
import SecurityIcon from '@mui/icons-material/Security'; // protection icon
import AssessmentIcon from '@mui/icons-material/Assessment'; // analytics
import PsychologyIcon from '@mui/icons-material/Psychology'; // easy and intuitive
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';
import Testimonials from '../components/Testimonials.jsx';
import Faq from '../components/Faq.jsx';
import Footer from '../components/Footer.jsx';
import ExtraLinks from '../components/ExtraLinks.jsx';


AOS.init({
  startEvent:'DOMContentLoaded',
  once:true,
  mirror:false,
  offset:200,
  duration:800
});


const FEATURES = [
  {id: crypto.randomUUID() , bgcolor:'rgb(255, 255, 137)' , logo: DonutLargeIcon , name:'Analyze your data', text:'Create reports with an easy to use drag-and-drop designer'},
  {id: crypto.randomUUID() , bgcolor:'rgb(202, 255, 137)', name:'Collaborate Securely' , logo: SecurityIcon , text:'Share/publish your reports with your colleagues'} ,
  {id: crypto.randomUUID() , bgcolor:'rgb(137, 218, 255)', name:'Embedded Analytics'  , logo: AssessmentIcon, text : 'Get a powerful analytics tool in your own brand name'} ,
  {id: crypto.randomUUID() , bgcolor: 'rgb(255, 137, 186)' , name : 'Easy and intuitive', logo: PsychologyIcon , text:'Easily converse with your data using every day language'}
];

const COMPANIES = [amazonLogo , canonLogo , googleLogo , netflixLogo , microsoftLogo , tataLogo , walmartLogo , flipkartLogo , appleLogo]
const INTEGRATION_COMPANIES = [asanaLogo , intercomLogo , zendeskLogo, jiraLogo , salesmateLogo , tableauLogo , zohoLogo];

const Carousel = ({LIST})=>{
  return <div className = 'carousel'>
    {
      LIST.map((company)=>{
        return <img className = 'company-logo' src = {company} key = {company}  />
      })
    }
  </div>
}

const Home = () => {
  return (
    <>
    <div id = 'home'>
      <Hero />
      <div data-aos='fade-up' data-aos-delay='300' data-aos-duration = '700' id = 's-hero'>
        <div style = {{display:'flex' , flexDirection:'column' , gap:'2rem' , width:'100%'}}>
          <div className = 'small-heading'>
              Trusted By industry leaders
          </div>
          <div className = 'company-carousel'>
            <div className = 'cover' ></div>
            <div className = 'gradient-cover'></div>
            <Carousel LIST = {COMPANIES}/>
            <Carousel LIST = {COMPANIES}/>
        </div>

        </div>
        <div id = 'basic-review'>
          <div id = 'titles'>
            <div id = 'big'>More than 13,000 users use Saasimi platform </div>
            <div id = 'small'>Boost revenues , gain insights that help you grow and scale faster.</div>
          </div>
          <div id = 'reviews' >
          <div className = 'rating'>  
            <div className = 'num-heading'>4.8</div>
            <div className = 'stars'>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
            <div className = 'small-heading'>Trustpilot</div>
          </div>
          <div className = 'rating'>  
            <div className = 'num-heading'>4.8</div>
            <div className = 'stars'>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
            <div className = 'small-heading'>Alberra</div>
          </div>
          </div>
        </div>
        <div data-aos = 'fade-up' id = 'features'>
          <div className = 'headings'>
            <div className = 'green-heading'>FEATURES</div>
            <div className = 'big-heading center-text'>Explore our amazing features</div>
            <div className = 'text center-text'>We are self-service data analytics software company that lets you create visually appealing data visualizations and insightful dashboards in minutes</div>
          </div>
          <div id = 'feature-list'>
            {
              FEATURES.map((feature)=>{
                return <div key = {feature.id} className = 'feature'>
                  <div className = 'feature-info'>
                    <div className = 'feature-logo' style = {{backgroundColor:feature.bgcolor}}>{<feature.logo/>}</div>
                    <div className = 'line-spacer'></div>
                    <div className = 'feature-text'>
                      <div className = 'feature-heading'>{feature.name}</div>
                      <div className = 'text'>{feature.text}</div>
                    </div>
                  </div>
                  <Link className = 'feature-link' to = '/'>{"Learn More"}<ArrowForwardIcon style = {{fontSize:'1rem'}} /></Link>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div id = 'contents'>
          <div className = 'content'>
            <img src = {contentImageOne} className = 'content-image' data-aos = 'fade-right'/>
            <div className = 'content-info' data-aos = 'fade-left'>
              <div className = 'content-text'>
                <div className = 'green-heading'>GREEN HEADING</div>
                <div className = 'big-heading'>We make it effortlessly to track all user metrics</div>
                <div className = 'text'>Self-service software analytics that lets you create appealing visualizations and insightful dashboard in minutes</div>
              </div>
              <div className = 'line-spacer'></div>
              <div id = 'content-info-one'>
                <div className = 'content-info-one-detail'>
                  <div className = 'icon-container' style = {{backgroundColor:'rgb(255, 255, 137)'}}>
                  <DonutLargeIcon/>
                  </div>
                  <div className = 'content-info-one-heading'>Powerful dashboard</div>
                  <div className = 'text'>Combine multiple reports into a single beautiful dashboard</div>
                </div>
                <div className = 'content-info-one-detail'>
                  <div className = 'icon-container' style = {{backgroundColor:'rgb(255, 137, 202)'}}>
                  <DonutLargeIcon/>
                  </div>
                  <div className = 'content-info-one-heading'>Always in Sync</div>
                  <div className = 'text'>{"Don't worry about the data always be in sync"}</div>
                </div>
              </div>
              
            </div>
          </div> 
          <div className = 'content'>
            <img src = {contentImageTwo} className = 'content-image order-rev' data-aos = 'fade-left'/>
            <div className = 'content-info' data-aos = 'fade-right'>
              <div className = 'content-text'>
                <div className = 'green-heading'>GREEN HEADING</div>
                <div className = 'big-heading'>We make it effortlessly to track all user metrics</div>
                <div className = 'text'>Self-service software analytics that lets you create appealing visualizations and insightful dashboard in minutes</div>
              </div>
              <div className = 'line-spacer'></div>
              <div id = 'content-info-list'>
                <div className = 'list-item'>
                  <DoneIcon style = {{backgroundColor:'rgb(200,255,200)',color:'green', borderRadius:'100%', padding:'2px',boxSizing:'border-box'}}/> Organize your data
                </div>
                <div className = 'list-item'>
                  <DoneIcon style = {{backgroundColor:'rgb(200,255,200)',color:'green', borderRadius:'100%', padding:'2px',boxSizing:'border-box'}}/> Organize your data
                </div>
                <div className = 'list-item'>
                  <DoneIcon style = {{backgroundColor:'rgb(200,255,200)',color:'green', borderRadius:'100%', padding:'2px',boxSizing:'border-box'}}/> Organize your data
                </div>
                <div className = 'list-item'>
                  <DoneIcon style = {{backgroundColor:'rgb(200,255,200)',color:'green', borderRadius:'100%', padding:'2px',boxSizing:'border-box'}}/> Organize your data
                </div>
                <div className = 'list-item'>
                  <DoneIcon style = {{backgroundColor:'rgb(200,255,200)',color:'green', borderRadius:'100%', padding:'2px',boxSizing:'border-box'}}/> Organize your data
                </div>
              </div>
              
            </div>
          </div>  
          <div className = 'content'>
            <img src = {contentImageThree} className = 'content-image' data-aos = 'fade-right'/>
            <div className = 'content-info' data-aos = 'fade-left'>
              <div className = 'content-text'>
                <div className = 'green-heading'>GREEN HEADING</div>
                <div className = 'big-heading'>We make it effortlessly to track all user metrics</div>
                <div className = 'text'>Self-service software analytics that lets you create appealing visualizations and insightful dashboard in minutes</div>
              </div>
              <div className = 'line-spacer'></div>
              <div style = {{height:'100%' , display:'flex', flexDirection:'column' , gap:'1.5rem'}}>
                <div className = 'list-item-normal'>
                  <span style = {{fontSize:'1.2rem', fontWeight:'bolder'}}>25%</span> Increase in retention
                </div>
                <div className = 'list-item-normal'>
                  <span style = {{fontSize:'1.2rem', fontWeight:'bolder'}}>1.7X</span> User base growth
                </div>
                <div className = 'list-item-normal'>
                  <span style = {{fontSize:'1.2rem', fontWeight:'bolder'}}>30%</span> Revenue growth projections
                </div>
              </div>    
            </div>
          </div>
      </div>      
      <div data-aos = 'fade-up' id = 'integrations'>
          <div className = 'headings'>
            <div className = 'green-heading'>INTEGRATIONS</div>
            <div className = 'big-heading center-text'>Seemless integrations with other tools</div>
            <div className = 'text center-text'>Sassimi absolutely works great with your tools in other platforms</div>
          </div>
          <div className = 'company-carousel'>
            <div className = 'cover' ></div>
            <div className = 'gradient-cover'></div>
            <Carousel LIST = {INTEGRATION_COMPANIES}/>
            <Carousel LIST = {INTEGRATION_COMPANIES}/>
          </div>
      </div>
      <Testimonials/>
      <Faq/>
      <Footer/>
      <ExtraLinks/>
    </div>
    </>
  )
}

export default Home
