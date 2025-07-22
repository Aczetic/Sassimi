import graphics_1 from '../assets/footer_graph_1.png';
import graphics_2 from '../assets/footer_graph_2.png';

const Footer = ()=>{


    return <>
        <div data-aos = 'fade-up' id = 'footer'>
            <img id ='graphics1' className = 'footer-graphics' src = {graphics_1}/>
            <img id ='graphics2' className = 'footer-graphics' src = {graphics_2}/>
            <div className = 'big-heading center-text'>Get Started With Sassimi Today</div>
            <div className = 'text center-text'>Join 13k+ teams who have streamlined the way they have managed their projects and collaborate remotely</div>
            <div id = 'btns'>
                <div className = 'btn' id = 'btn2'>Get Started Now</div>
                <div className = 'btn' id = 'btn1'>Request Free Demo</div>
            </div>
        </div>
    </>
}

export default Footer;