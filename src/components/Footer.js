import React, { Component } from 'react';
import icon_fb from '../assets/images/icon-facebook.png';
import icon_ig from '../assets/images/icon-instagram.png';
import icon_tw from '../assets/images/icon-twitter.png';
import icon_pucp from '../assets/images/logoPUCP.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
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
                <p>
                  Somos un grupo unido comprometido en ayudar <br></br>con la
                  educación tecnológica del Perú
                </p>
              </div>
              <div className="col footer-icons">
                <a href="">
                  <FacebookIcon
                    className="footer-icon"
                    style={{ color: 'white' }}
                  />
                </a>
                <a href="">
                  <InstagramIcon
                    className="footer-icon"
                    style={{ color: 'white' }}
                  />
                </a>
                <a href="">
                  <TwitterIcon
                    className="footer-icon"
                    style={{ color: 'white' }}
                  />
                </a>
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
