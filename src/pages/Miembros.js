import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import greg from '../assets/images/miembros/greg.jpg';
import cristian from '../assets/images/miembros/cristian.jpg';
import icon_fb from '../assets/images/icon-facebook.png';
import icon_ig from '../assets/images/icon-instagram.png';
import icon_tw from '../assets/images/icon-twitter.png';
import './Miembros.css';
class Miembros extends Component {

    
    miembros = [
                {
                    id:1,
                    nombres:'Felix',
                    apellidos:'Calla Sime',
                    cargo:'Presidente',
                    fraseDescriptiva:'PREGUNTARLEEE',
                    urlFacebook:'www.asfdasdds',
                    urlInstagram:'www.asfdasdds',
                    urlLinkedin:'www.asfdasdds',
                    urlTwitter:'www.asfdasdds',
                    urlPhoto:''
                },
                {
                    id:2,
                    nombres:'Felix',
                    apellidos:'Calla Sime',
                    cargo:'Presidente',
                    fraseDescriptiva:'PREGUNTARLEEE',
                    urlFacebook:'www.asfdasdds',
                    urlInstagram:'www.asfdasdds',
                    urlLinkedin:'www.asfdasdds',
                    urlTwitter:'www.asfdasdds',
                    urlPhoto:''
                }
            ];
    
    

    render() {
      return (
        <React.Fragment>
            <div className="container">

                <div className="row">
                    <div className="col title">
                        <h2>Directiva</h2>
                        <div className="linea"></div>
                    </div>
                </div>

                <div className="mesa row ">
                    <div className="col-12">
                            <div className="card-presi">
                                <img src={cristian}></img>
                                <div className="card-miembro-info">
                                    <h4>{this.miembros[0].nombres} {this.miembros[0].apellidos}</h4>
                                    <h5>presidente</h5>
                                    <h6>“Aveces se me sale un GA”</h6>
                                    <div className="card-miembro-icons">
                                    <a href="#"><img src={icon_fb}></img></a>
                                    <a href="#"><img src={icon_ig}></img></a>
                                    <a href="#"><img src={icon_tw}></img></a>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="card-miembro">
                                <img src={cristian}></img>
                                <div className="card-miembro-info">
                                    <h4>Cristhian Mallqui Castro</h4>
                                    <h5>vice presidente</h5>
                                    <h6>“Si yo soy un LED, tu eres mi resistencia”</h6>
                                    <div className="card-miembro-icons">
                                    <a href="#"><img src={icon_fb}></img></a>
                                    <a href="#"><img src={icon_ig}></img></a>
                                    <a href="#"><img src={icon_tw}></img></a>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="card-miembro">
                                <img src={cristian}></img>
                                <div className="card-miembro-info">
                                    <h4>Cristhian Mallqui Castro</h4>
                                    <h5>vice presidente</h5>
                                    <h6>“Si yo soy un LED, tu eres mi resistencia”</h6>
                                    <div className="card-miembro-icons">
                                    <a href="#"><img src={icon_fb}></img></a>
                                    <a href="#"><img src={icon_ig}></img></a>
                                    <a href="#"><img src={icon_tw}></img></a>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="card-miembro">
                                <img src={cristian}></img>
                                <div className="card-miembro-info">
                                    <h4>Cristhian Mallqui Castro</h4>
                                    <h5>vice presidente</h5>
                                    <h6>“Si yo soy un LED, tu eres mi resistencia”</h6>
                                    <div className="card-miembro-icons">
                                    <a href="#"><img src={icon_fb}></img></a>
                                    <a href="#"><img src={icon_ig}></img></a>
                                    <a href="#"><img src={icon_tw}></img></a>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div className="col">
                            <div className="card-miembro">
                                <img src={cristian}></img>
                                <div className="card-miembro-info">
                                    <h4>Cristhian Mallqui Castro</h4>
                                    <h5>vice presidente</h5>
                                    <h6>“Si yo soy un LED, tu eres mi resistencia”</h6>
                                    <div className="card-miembro-icons">
                                    <a href="#"><img src={icon_fb}></img></a>
                                    <a href="#"><img src={icon_ig}></img></a>
                                    <a href="#"><img src={icon_tw}></img></a>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>



                
                <div className="row">
                    <div className="col title">
                        <h2>Miembros</h2>
                        <div className="linea"></div>
                    </div>
                </div>
                <div className="flex-row flex-wrap d-flex justify-content-around miembros">
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                    <a href="#"><img src={greg} ></img></a>
                </div>
            </div>
        </React.Fragment>
      );
    }
}
  
export default Miembros;