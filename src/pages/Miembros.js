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
            fraseDescriptiva:'MERINOOO',
            urlFacebook:'https://www.facebook.com/felix.callasime',
            urlInstagram:'https://www.instagram.com/felix.calla/',
            urlLinkedin:'https://www.linkedin.com/in/felix-calla-sime-117896200/',
            urlTwitter:'#',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35'
        },
        {
            id:2,
            nombres:'Cristhian Kevin',
            apellidos:'Mallqui Castro',
            cargo:'Vicepresidente',
            fraseDescriptiva:'PREGUNTARLEEE',
            urlFacebook:'https://www.facebook.com/cristhian.mallquicastro',
            urlInstagram:'https://www.instagram.com/cristhianmallquicastro/?hl=es-la',
            urlLinkedin:'#',
            urlTwitter:'#',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35'
        },
        {
            id:3,
            nombres:'Renzo Martin',
            apellidos:'Mendoza Rabanal',
            cargo:'Coordinador General',
            fraseDescriptiva:'Siempre atento :v',
            urlFacebook:'https://www.facebook.com/renzo.mendoza.984',
            urlInstagram:'#',
            urlLinkedin:'linkedin.com/in/renzo-mendoza-rabanal-564a0b199',
            urlTwitter:'#',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Renzo_Mendoza.png?alt=media&token=cb52ec70-0471-4d74-a3ad-056693f281fd'
        },
        {
            id:4,
            nombres:'Angel Arturo',
            apellidos:'Villavicencio Muñoz',
            cargo:'Jefe de proyectos',
            fraseDescriptiva:'RAAAAAAAAAAAAAA',
            urlFacebook:'https://www.facebook.com/angelarturo.villavicenciomunoz',
            urlInstagram:'https://www.instagram.com/angell.villavicencio/?hl=es-la',
            urlLinkedin:'www.linkedin.com/in/angelvillavicencio',
            urlTwitter:'#',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35'
        },
        {
            id:5,
            nombres:'Gregory Sebastian',
            apellidos:'Chahuayla Damas',
            cargo:'Coordinador de audiovisuales',
            fraseDescriptiva:'BOTA TU GAAAAAA',
            urlFacebook:'https://www.facebook.com/Gregory.Chahuayla',
            urlInstagram:'https://www.instagram.com/greg.chd/?hl=es-la',
            urlLinkedin:'#',
            urlTwitter:'https://twitter.com/gregchd',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35'
        },
        {
            id:6,
            nombres:'Antony Jesus',
            apellidos:'Arevalo Cristobal',
            cargo:'-',
            fraseDescriptiva:'Persona autodidacta y curioso por la tecnología',
            urlFacebook:'https://www.facebook.com/arevalocristobal',
            urlInstagram:'#',
            urlLinkedin:'https://www.linkedin.com/in/antony-jes%C3%BAs-ar%C3%A9valo-crist%C3%B3bal-1a196719a/',
            urlTwitter:'#',
            urlPhoto:''
        },
        {
            id:7,
            nombres:'Cristian Samuel',
            apellidos:'Igreda Rojas',
            cargo:'-',
            fraseDescriptiva:'Todo código se puede optimizar',
            urlFacebook:'https://www.facebook.com/cristian.igreda',
            urlInstagram:'-',
            urlLinkedin:'https://www.linkedin.com/in/cristian-igreda-436832199',
            urlTwitter:'#',
            urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/IMG_20210103_231357_1.jpg?alt=media&token=da0a7b59-ada6-43bf-b065-e7fbf64eb2fe'
        },
        {
            id:8,
            nombres:'Paul Rodrigo',
            apellidos:'Canasa Mayta',
            cargo:'-',
            fraseDescriptiva:'RAAAAAAAAAAA',
            urlFacebook:'https://www.facebook.com/paul.canasa',
            urlInstagram:'https://www.instagram.com/paulcanasa/?hl=es-la',
            urlLinkedin:'https://www.linkedin.com/in/paul-rodrigo-44b961196/',
            urlTwitter:'#',
            urlPhoto:''
        },
        {
            id:9,
            nombres:'Giancarlo Josue',
            apellidos:'Agurto Tapia',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/giancarlo2000',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            urlPhoto:''
        },
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

                <div className="mesa row">
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
                    {
                        this.miembros.map((miembro,index)=>{
                            
                            if(index<5 && index>0){
                                return (
                                <div className="col">
                                    <div className="card-miembro">
                                        <img className="card-miembro-foto-perfil"src={miembro.urlPhoto}></img>
                                        <div className="card-miembro-info">
                                            <h4>{miembro.apellidos},{miembro.nombres}</h4>
                                            <h5>{miembro.cargo}</h5>
                                            <h6>{miembro.fraseDescriptiva}</h6>
                                            <div className="card-miembro-icons">
                                            <a href={miembro.urlFacebook} target="_blank"><img src={icon_fb}></img></a>
                                            <a href={miembro.urlInstagram} target="_blank"><img src={icon_ig}></img></a>
                                            <a href={miembro.urlTwitter} target="_blank"><img src={icon_tw}></img></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );}
                            
                        })
                        
                    }
                </div>

                <div className="row">
                    <div className="col title">
                        <h2>Miembros</h2>
                        <div className="linea"></div>
                    </div>
                </div>
                <div className="flex-row flex-wrap d-flex justify-content-around miembros">
                    
                    {
                        this.miembros.map((miembro)=>{

                            return(
                                <a href={miembro.urlFacebook}><img src={miembro.urlPhoto} ></img></a>
                            );

                        },5)
                    }
                    
                </div>
            </div>
        </React.Fragment>
      );
    }
}
  
export default Miembros;