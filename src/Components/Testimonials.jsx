import StarIcon from '@mui/icons-material/Star';
import LeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useCallback, useEffect, useRef } from 'react';
import TESTIMONIALS from "../constants/TESTIMONIALS.js";


const Testimonials = ()=>{

    const ref = useRef();
    const intervalRef = useRef();
   
    const move = useCallback((dir)=>{
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(()=>{
        move('right');
      },6000)
      const distToMove = ref.current.children[0].scrollWidth;
      if(dir === 'right'){

          if( ref.current.currentDist === TESTIMONIALS.length-1){
            ref.current.style.transform = 'translateX(0)';  
            ref.current.currentDistVal = 0;
            ref.current.currentDist = 0;
          } else{
            ref.current.currentDist++;
            ref.current.currentDistVal -= (distToMove-17);
            ref.current.style.transform =  `translateX(${ref.current.currentDistVal}px)`;
          }
      }else if( dir === 'left'){
          
          if( ref.current.currentDistVal === 0){
            ref.current.style.transform = `translateX(-${(TESTIMONIALS.length-1)*(distToMove-17)}px)`;
            ref.current.currentDist = TESTIMONIALS.length-1;
            ref.current.currentDistVal = -(TESTIMONIALS.length-1)*(distToMove-17);
          } else{
            ref.current.currentDist--;
            ref.current.currentDistVal += (distToMove-17);
            ref.current.style.transform =  `translateX(${ref.current.currentDistVal}px)`;
          }
      }
    },[]);

    useEffect(()=>{
      ref.current.currentDist = 0;
      ref.current.currentDistVal = 0;
      intervalRef.current = setInterval(()=>{
        move('right');
      },6000)

      window.addEventListener('resize',()=>{
        clearInterval(intervalRef.current);
        ref.current.currentDist = 0;
        ref.current.currentDistVal = 0;
        ref.current.style.transform = 'translate(0)'
        intervalRef.current = setInterval(()=>{
          move('right');
        },6000)
      })
      return ()=>clearInterval(intervalRef.current);
    },[])

    return (
      <>
        <div id="testimonials" data-aos = 'fade-up'>
          <div id="heading">
            <div className="green-heading">TESTIMONIALS</div>
            <div className="big-heading">Loved By Industry Leaders</div>
            <div className="text center-text">
              Listen to what our customers are saying about us
            </div>
          </div>
          <div id="testimonial-window">
            <div className = 'gradient-cover'></div>
              <LeftIcon id = 'leftArrow' onClick = {()=>move('left')}/>
            <div id="testimonial-list" ref = {ref}>
                {TESTIMONIALS.map((t,index) => {
                  return (
                    <div key={index} className="testimonial-container">
                    <div className="testimonial">
                      <div className="user-info"> 
                        <img src={t.img} className="profile-picture" />
                        <div className="user-details">
                          <div className="user-name">{t.name}</div>
                          <div className="company-name">{t['company-name']}</div>
                        </div>
                      </div>
                      <div className="testimoni">{t.review}
                      </div>
                      <div className="stars">
                        {new Array(t.stars).fill(0).map((_,index)=>{
                          return <StarIcon key = {index}/>})}
                      </div>
                    </div>
                   </div>
                  );
                })}
            </div>
              <RightIcon id = 'rightArrow' onClick = {()=>move('right')}/>
          </div>
        </div>
      </>
    );
}

export default Testimonials;

{/*  */}