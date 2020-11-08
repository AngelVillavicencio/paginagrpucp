import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import image_Cplus from '../assets/images/taller-c++.png';
import './Actividades.css';
class Actividades extends Component {
    render() {
      return (
      <React.Fragment>
        <Navbar></Navbar>
            <div className="container-talleres">
                <div className="container-fluid">
                    <div className="row talleres">
                        <div className="talleres-tittle">
                            <h2>Talleres Disponibles</h2>
                            <div className="line"></div>
                        </div>                    
                    </div>
                    <div className="row talleres">
                        <div className="d-flex justify-content-around flex-wrap cards-talleres">
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container-talleres">
                <div className="container-fluid">
                    <div className="row talleres">
                        <div className="talleres-tittle">
                            <h2>Eventos Disponibles</h2>
                            <div className="line"></div>
                        </div>                    
                    </div>
                    <div className="row talleres">
                        <div className="d-flex justify-content-around flex-wrap cards-talleres">
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            <div className="card taller rounded-0">
                                <img src={image_Cplus} className="card-img-top taller-image" alt="..."></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">Taller de C++</h5>
                                    <p className="card-text">Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.</p>
                                </div> 
                                <a href="#" className="btn taller-boton">MORE</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>  
        <Footer></Footer>
      </React.Fragment>
      );
    }
}
  
export default Actividades;