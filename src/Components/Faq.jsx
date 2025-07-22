import { useState } from 'react';
import FAQS from '../constants/FAQS.js';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';

const FAQ = ({faq})=>{
    const [show,setShow] = useState(false);
    return <div className = 'faq' >
    <div className = 'question'>{faq.question}{show?<ArrowUp className = 'btn' onClick = {()=>setShow(false)}/>:<ArrowDown className = 'btn' onClick = {()=>setShow(true)}/>}</div>
    <div  className = {`answer ${show?'answer-show':''}`}>
        {faq.answer}
    </div>
</div>
}

const Faq = () => {

  return (
    <div data-aos = 'fade-up' id = 'faq-parent'>
      <div className = 'headings'>
        <div className = 'green-heading'>FAQS</div>
        <div className = 'big-heading center-text'>Frenquently Asked Questions</div>
        <div className = 'text center-text'>We have put together some frequently asked questions</div>
      </div>
      <div id = 'faq-container'>
        {
            FAQS.map((faq,index)=>{
                return <FAQ key = {index} faq = {faq}/>
            })
        }
      </div>
    </div>
  )
}

export default Faq
