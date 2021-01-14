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
            fraseDescriptiva:'Toda teoría siempre debe ser acompañada por la práctica',
            urlFacebook:'https://www.facebook.com/felix.callasime',
            urlInstagram:'https://www.instagram.com/felix.calla/',
            urlLinkedin:'https://www.linkedin.com/in/felix-calla-sime-117896200/',
            urlTwitter:'#',
            urlPhoto:'https://i.imgur.com/cgJ2s7x.jpg'
        /* https://i.imgur.com/d6sJwTd.png */
        },
        {
            id:2,
            nombres:'Cristhian Kevin',
            apellidos:'Mallqui Castro',
            cargo:'Vicepresidente',
            fraseDescriptiva:'Tener éxito no es aleatorio, es una variable que depende del esfuerzo',
            urlFacebook:'https://www.facebook.com/cristhian.mallquicastro',
            urlInstagram:'https://www.instagram.com/cristhianmallquicastro/?hl=es-la',
            urlLinkedin:'#',
            urlTwitter:'#',
            //urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/CristhianMallqui.jpeg?alt=media&token=ea89744f-89c7-4f29-9ce6-7ad894b1ff8a',
            urlPhoto:'https://i.imgur.com/o5K1lDy.jpg'
        },
        {
            id:3,
            nombres:'Renzo Martin',
            apellidos:'Mendoza Rabanal',
            cargo:'Coordinador General',
            fraseDescriptiva:'Siempre atento',
            urlFacebook:'https://www.facebook.com/renzo.mendoza.984',
            urlInstagram:'#',
            urlLinkedin:'linkedin.com/in/renzo-mendoza-rabanal-564a0b199',
            urlTwitter:'#',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Renzo_Mendoza.png?alt=media&token=cb52ec70-0471-4d74-a3ad-056693f281fd'
            urlPhoto:'https://i.imgur.com/hcXx0bc.png'
        },
        {
            id:4,
            nombres:'Angel Arturo',
            apellidos:'Villavicencio Muñoz',
            cargo:'Jefe de proyectos',
            fraseDescriptiva:'No pain, No gain',
            urlFacebook:'https://www.facebook.com/angelarturo.villavicenciomunoz',
            urlInstagram:'https://www.instagram.com/angell.villavicencio/?hl=es-la',
            urlLinkedin:'www.linkedin.com/in/angelvillavicencio',
            urlTwitter:'#',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/perfil_angel.jpg?alt=media&token=35729466-7a64-47c3-a99f-af9dafa21e35'
            urlPhoto:'https://i.imgur.com/LMLcpBKh.jpg'
        },
        {
            id:5,
            nombres:'Gregory Sebastian',
            apellidos:'Chahuayla Damas',
            cargo:'Coordinador de audiovisuales',
            fraseDescriptiva:'Si lo puedes soñar, lo puedes lograr',
            urlFacebook:'https://www.facebook.com/Gregory.Chahuayla',
            urlInstagram:'https://www.instagram.com/greg.chd/?hl=es-la',
            urlLinkedin:'#',
            urlTwitter:'https://twitter.com/gregchd',
            //urlPhoto: 'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/greg.jpg?alt=media&token=3e767109-2265-4187-a601-99f7a1b0822e',
            urlPhoto:'https://i.imgur.com/iTLKFWH.jpg'
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
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/antony.jpg?alt=media&token=2ceee53a-89af-4838-b0f2-b17157f01f24'
            urlPhoto:'https://i.imgur.com/9TyaX30.jpg'
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
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/IMG_20210103_231357_1.jpg?alt=media&token=da0a7b59-ada6-43bf-b065-e7fbf64eb2fe'
            urlPhoto:'https://i.imgur.com/jndJ17s.jpg'
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
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/paul.jpg?alt=media&token=091cc917-a0bf-49cb-8fb5-1252dd7096be'
            urlPhoto:"https://i.imgur.com/ERo0Tbo.jpg"
        },
        {
            id:9,
            nombres:'Roxana',
            apellidos:'Tinoco',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/roxana.pereztinoco',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/roxana.jpg?alt=media&token=2f7ff263-4681-4593-bb1d-1815b10808d4'
            urlPhoto:"https://i.imgur.com/vEZAWnR.jpg"
        
        },
        {
            id:9,
            nombres:'Daniel',
            apellidos:'Menacho',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/daniel.menachoordonez',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Daniel_Menacho.jpeg?alt=media&token=fbd988c9-995b-4331-aa8f-fbf1f0f8188a'
            urlPhoto:"https://i.imgur.com/NcRk5NK.jpg"
        },
        {
            id:9,
            nombres:'Diego',
            apellidos:'Guzmán',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/diego.guzmanllontop.7',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Diego%20Guzman.JPG?alt=media&token=4ff98557-0a91-43ad-bfb4-e1fd5cb4cc38'
            urlPhoto:"https://i.imgur.com/9ZGFNIi.jpg"
        },
        {
            id:9,
            nombres:'Dario',
            apellidos:'Huanca',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/dario.huanca.52',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Dario_Huanca.jpeg?alt=media&token=f53a34b9-8393-49b0-b996-90fabc555a16'
            urlPhoto:"https://i.imgur.com/KCqQtwj.jpg"
        },
        {
            id:10,
            nombres:'Fiorella',
            apellidos:'Urbina',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/fiorella.urbina.5',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Fiorella%20Urbina.jpg?alt=media&token=6c86bf36-6d14-4edc-8fee-fbfe696dbbfc'
            urlPhoto:'https://i.imgur.com/8OBdHlN.jpg'
        },
        {
            id:9,
            nombres:'Hugo',
            apellidos:'Espinoza',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/nestorhugo.espinozaurco',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Hugo_Espinoza.jpg?alt=media&token=da5a6757-26a9-4f9b-9a14-256f05752c7a'
            urlPhoto:'https://i.imgur.com/JiwsPbL.jpg'
        },
        {
            id:9,
            nombres:'Marcelo',
            apellidos:'Ronceros',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/marceloroncerosc',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Marcelo%20Ronceros.JPG?alt=media&token=b5546e02-8f94-414e-a2b7-ddccd1785574'
            urlPhoto:"https://i.imgur.com/8s8ny80.jpg"
        },
        {
            id:9,
            nombres:'Roberto',
            apellidos:'Raez',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/roberto.raezpereyra',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/Roberto.jpg?alt=media&token=6d3c9b62-ec24-4e7a-a0bb-e58afe444049'
            urlPhoto:"https://i.imgur.com/YYo5GjH.jpg"
        },
        {
            id:9,
            nombres:'Sergio',
            apellidos:'Tello',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/sergio.tello.98434',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/SergioTello.jpg?alt=media&token=4a95bfe5-f26f-4970-8122-93de47d4f3ad'
            urlPhoto:"https://i.imgur.com/XK7NzvW.jpg"
        },
        {
            id:9,
            nombres:'Sebastian',
            apellidos:'Chacón',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/SebastianJaimesChacon',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/sebastian.jpg?alt=media&token=8628f2ee-31e3-4aa3-839f-3869a28f99c2'
            urlPhoto:"https://i.imgur.com/y2TQPEa.jpg"
        },
        {
            id:9,
            nombres:'Diego',
            apellidos:'Sanchez',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/diego.sanchezmichelena',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/diego%20Sanchez.jpg?alt=media&token=ef3c6c85-7e80-4c30-9ef2-f8b2fe934633'
            urlPhoto:"https://i.imgur.com/Za8ewgz.jpg"
        },
        {
            id:9,
            nombres:'Jafeht',
            apellidos:'Bendezú Ibarra',
            cargo:'-',
            fraseDescriptiva:'SAGASTIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
            urlFacebook:'https://www.facebook.com/jafehtmartin.bendezuibarra',
            urlInstagram:'https://www.instagram.com/giancarlo.2000/?hl=es-la',
            urlLinkedin:'',
            urlTwitter:'',
            //urlPhoto:'https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/diego%20Sanchez.jpg?alt=media&token=ef3c6c85-7e80-4c30-9ef2-f8b2fe934633'
            urlPhoto:"https://i.imgur.com/wK7gU24h.jpg"
        },
    ];
    
    

    render() {
      return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col title-miembros">
                        <h2>Directiva</h2>
                        <div className="linea"></div>
                    </div>
                </div>

                <div className="mesa row">
                    <div className="col-12">
                            <div className="card-presi">
                                <img className="card-miembro-foto-perfil-presidente" src={this.miembros[0].urlPhoto}></img>
                                <div className="card-miembro-info">
                                    <h4>{this.miembros[0].nombres} {this.miembros[0].apellidos}</h4>
                                    <h5>presidente</h5>
                                    <h6>{this.miembros[0].fraseDescriptiva}</h6>
                                    <div className="card-miembro-icons">
                                    <a target="_blank" href={this.miembros[0].urlFacebook}><img src={icon_fb}></img></a>
                                    <a target="_blank" href={this.miembros[0].urlInstagram}><img src={icon_ig}></img></a>
                                    
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
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );}
                            
                        })
                        
                    }
                </div>

                <div className="row">
                    <div className="col title-miembros">
                        <h2>Miembros</h2>
                        <div className="linea"></div>
                    </div>
                </div>
                <div className="flex-row flex-wrap d-flex justify-content-around miembros">
                    
                    {
                        this.miembros.map((miembro,index)=>{

                            if (index > 4) {
                                return(
                                <a target="_blank" href={miembro.urlFacebook}><img src={miembro.urlPhoto} className="miembros-photo-miniatura" ></img></a>
                                );
                            }
                            

                        },5)
                    }
                    
                </div>
            </div>
        </React.Fragment>
      );
    }
}
  
export default Miembros;

/*<a href={miembro.urlTwitter} target="_blank"><img src={icon_tw}></img></a>*/