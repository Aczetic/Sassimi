import logo from '../assets/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';

const ExtraLinks = ()=>{


    return (
      <>
        <div data-aos = 'fade' id="extra-links">
          <div id="info">
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <img src={logo} height="30px" width="30px" />
              <div style={{ fontWeight: "bolder", fontSize: "1.8rem" }}>
                Sassimi
              </div>
            </div>
            <div style = {{width:'15rem'}}>
              <div className="text">We build an elegant solution.</div>
              <div className="text">
                Our team creating a fully integrated sales
                and marketing solution for SMBs</div>
            </div>
            <div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <EmailIcon className="text" style = {{fontSize:'1.2rem'}}/>
                constact@sassimi.com
              </div>
              <div style={{marginTop:'0.5rem', display: "flex", gap: "1rem" }}>
                <PhoneIcon className="text" style = {{fontSize:'1.2rem'}}/>
                +1234567890
              </div>
            </div>
          </div>
          <div className="links">
            <div className="heading">Company</div>
            <div className="text">About</div>
            <div className="text">Pricing</div>
            <div className="text">Jobs</div>
            <div className="text">Blogs</div>
            <div className="text">Careers</div>
          </div>
          <div className="links">
            <div className="heading">Product</div>
            <div className="text">Sales Software</div>
            <div className="text">Features</div>
            <div className="text">Privacry and Security</div>
            <div className="text">Marketplace</div>
            <div className="text">Status</div>
            <div className="text">API</div>
          </div>
          <div className="links">
            <div className="heading">Discover</div>
            <div className="text">Partner Program</div>
            <div className="text">Newsletter</div>
            <div className="text">What is SaaS?</div>
            <div className="text">SaaS Organization</div>
            <div className="text">Resources</div>
          </div>
        </div>
      </>
    );
}

export default ExtraLinks;