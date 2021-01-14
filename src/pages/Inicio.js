import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import image1 from '../assets/images/Inicio/1.jpeg'
import image2 from '../assets/images/Inicio/2.jpeg'
import image3 from '../assets/images/Inicio/3.jpeg'
import image4 from '../assets/images/Inicio/4.jpeg'
import image5 from '../assets/images/Inicio/5.jpeg'
import image6 from '../assets/images/Inicio/6.jpeg'
import { Link } from 'react-router-dom';
import imageMision from '../assets/images/Inicio/group.jpeg';
import imageVision from '../assets/images/Inicio/group2.jpg';
import ReactPlayer from 'react-player'
import './Inicio.css';
import Modal from 'react-modal'

Modal.setAppElement('#root');
class Inicio extends Component {

  state = {
    videoPresentacion: true,
  }

  cerrarModal = () => {
    this.setState({videoPresentacion:false})
  }

  componentDidMount() {
    
  }

  customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '80%'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor:'rgba(255,255,255,0.35)'
    }
  };

/*<ReactPlayer url='https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Video_presentacion_GRPUCP_2020.mp4?alt=media&token=e6263c2f-8841-40f0-841a-941013f3b80e'
                    width='100%'
                    height='80%' playing={true} controls>
                  </ReactPlayer>*/
  render() {
    
      return (
        <React.Fragment>
          {
            this.state.videoPresentacion === true ? (
              <React.Fragment>
                <Modal
                  isOpen={this.state.videoPresentacion}
                  style={this.customStyles}
                  onRequestClose={this.cerrarModal}
                  preventScroll={true}
                >

                <iframe width="100%" height="99%" src="https://www.youtube.com/embed/dWwcziY-gq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                </Modal>
              <section className="container-mision">
                  <h2 className="titulo">
                    Misión 
                  </h2>
                  <p className="texto_descripcion">
                    Generar la investigación y participación de proyectos en alumnos de la universidad y trabajo en conjunto con la universidad.
                  </p>
                  <img src={imageMision} className="imagen_container"></img>
                </section>
                <section className="container-vision">
                  <h2 className="titulo">
                    Visión 
                  </h2>
                  <p className="texto_descripcion">
                    Ser la mejor opción dentro de la PUCP 
                    para adquirir y/o perfeccionar habilidades técnicas mediante 
                    la participación en proyectos de robótica y difusión de conocimiento
                  </p>
                  <img src={imageVision} className="imagen_container"></img>
                </section>
                <h2 className="titulo">
                  Compromisos 
                </h2>
                <section className="container-compromisos container">
                  <ul>
                    <li>Hacer proyectos que hagan cambios en la sociedad.</li>
                    <li>Ganar concursos dentro y fuera de la universidad</li>
                    <li>Apoyar desde la experiencia a alumnos de ciclos menores.</li>
                    <li>Incentivar el aprendizaje autónomo.</li>
                    
                  </ul>
                  <Link className="boton-interesado" to="/postular">¿Interesado?</Link>
                </section>
              </React.Fragment>
            ) : (
              <>
                  
                <div id="carouselExampleCaptions" className="carousel slide tamano-carousel container-xl" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={image1} className="d-block w-100 tamano-imagen " alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={image2} className="d-block w-100 tamano-imagen " alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={image3} className="d-block w-100 tamano-imagen" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={image4} className="d-block w-100 tamano-imagen" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={image5} className="d-block w-100 tamano-imagen" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={image6} className="d-block w-100 tamano-imagen" alt="..."></img>
                      <div className="carousel-caption d-none d-md-block btn-slide">
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                
                <section className="container-mision">
                  <h2 className="titulo">
                    Misión 
                  </h2>
                  <p className="texto_descripcion">
                    Generar la investigación y participación de proyectos en alumnos de la universidad y trabajo en conjunto con la universidad.
                  </p>
                  <img src={imageMision} className="imagen_container"></img>
                </section>
                <section className="container-vision">
                  <h2 className="titulo">
                    Visión 
                  </h2>
                  <p className="texto_descripcion">
                    Ser la mejor opción dentro de la PUCP 
                    para adquirir y/o perfeccionar habilidades técnicas mediante 
                    la participación en proyectos de robótica y difusión de conocimiento
                  </p>
                  <img src={imageVision} className="imagen_container"></img>
                </section>
                <h2 className="titulo">
                  Compromisos 
                </h2>
                <section className="container-compromisos container">
                  <ul>
                    <li>Hacer proyectos que hagan cambios en la sociedad.</li>
                    <li>Ganar concursos dentro y fuera de la universidad</li>
                    <li>Apoyar desde la experiencia a alumnos de ciclos menores.</li>
                    <li>Incentivar el aprendizaje autónomo.</li>
                    
                  </ul>
                  <Link className="boton-interesado" to="/postular">¿Interesado?</Link>
                </section>
              </>
            )
          }
              

          
          
        </React.Fragment>
      );
    }
}
  
export default Inicio;


/*
<div className="carousel-container-image">
                  <div className="carousel-container-boton"></div>
                  <div className="carousel-container-boton"></div>
                  <div className="carousel-container-boton"></div>
              </div>
*/