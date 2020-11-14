import React,{Component} from 'react';
import icon_fb from '../assets/images/icon-facebook.png';
import icon_ig from '../assets/images/icon-instagram.png';
import icon_tw from '../assets/images/icon-twitter.png';
import icon_pucp from '../assets/images/logoPUCP.png';
import './Footer.css';
class Footer extends Component {
    render() {
      return (
        <React.Fragment>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row container-footer">
                        <div className="col footer-text">
                            
                            <h3>GRPUCP</h3>
                            <p>Somos un grupo unido comprometido en ayudar <br></br>con la educación tecnológica del Perú</p>
                            
                        </div>
                        <div className="col footer-icons">
                            
                            <a href=""><img className="footer-icon" src={icon_fb}></img></a>
                            <a href=""><img className="footer-icon" src={icon_ig}></img></a>
                            <a href=""><img className="footer-icon" src={icon_tw}></img></a>
                            
                        </div>
                        <div className="col footer-auspicios">
                            
                            <img className="image-icon-pucp" src={icon_pucp}></img>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
    }
}
  
export default Footer;