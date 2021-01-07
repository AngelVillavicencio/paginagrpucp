import React,{Component} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'
import image_Cplus from '../assets/images/taller-c++.png';
import gif_proximamente from '../assets/images/actividades/proximamente.gif'
import './Actividades.css';
import Testimonio from '../components/Testimonio';



const Actividades = ()=>{

  /*const Talleres = [
    {
      titulo:'Taller de Python',
      descripcion : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam magni hic vitae autem, ex optio? Quas mollitia neque dolore possimus nobis! Non sed enim sapiente ad, incidunt officiis mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, earum quaerat voluptatibus aperiam doloribus itaque dolore, dolorem laboriosam similique, enim officia hic velit ratione ullam eum maxime consequatur ex error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam laborum consequatur aliquam eos vel sunt voluptatibus veritatis quis eum maxime, ipsam expedita neque, enim fuga voluptatem! Sequi, quasi veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti unde libero, rerum sunt enim magnam officia laudantium sint aspernatur, nemo eius expedita fuga, ipsum esse ad illo consectetur perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti voluptatum? Nihil atque quaerat vel in, officia doloremque quas vero voluptatem eveniet voluptas recusandae porro deserunt necessitatibus facilis corrupti qui.',
      Sesiones: [
        {
          titulo_sesion: 'Sesion1: Introdudcción al lenguaje',
          puntosAtratar: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam'
          ]
        },
        {
          titulo_sesion: 'Sesion2: Introdudcción al lenguaje2',
          puntosAtratar: [
            '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.',
            '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam',
            '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam',
            '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque cum eveniet deserunt officiis eius magni quibusdam? Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam'
          ]
        }
      ]
    }
  ]*/

    let talleres=[];
        /*{
            titulo:'Taller de C++',
            descripcion:'Taller donde aprenderás Python 3 de una manera más rápida y efectiva. 4 semanas de pura emoción.',
            urlPhoto:'',
            sesiones:[
                {
                    id:1,
                    title:'Sesion',
                    descripcion:':Introduccion de las clases',
                    puntos:[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Ex cumque cum eveniet deserunt officiis eius magni quibusdam?',
                        'Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.'
                    ]
                },
                {
                    id:2,
                    title:'Sesion',
                    descripcion:':Introduccion de las puntos',
                    puntos:[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Ex cumque cum eveniet deserunt officiis eius magni quibusdam?',
                        'Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.'
                    ]
                },
                {
                    id:3,
                    title:'Sesion',
                    descripcion:':Hablando de las clases3',
                    puntos:[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Ex cumque cum eveniet deserunt officiis eius magni quibusdam?',
                        'Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.'
                    ]
                },
                {
                    id:4,
                    title:'Sesion',
                    descripcion:':Hablando de las clases4',
                    puntos:[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Ex cumque cum eveniet deserunt officiis eius magni quibusdam?',
                        'Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.'
                    ]
                },
                {
                    id:5,
                    title:'Sesion',
                    descripcion:':Hablando de las clases5',
                    puntos:[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Ex cumque cum eveniet deserunt officiis eius magni quibusdam?',
                        'Ipsum quod, rerum voluptate ipsam quos, perspiciatis itaque numquam voluptatem vel voluptatum quibusdam.'
                    ]
                }
            ]
        },
        {
            titulo:'Taller de Fundamento de Programación',
            descripcion:'Taller donde aprenderás C!!! Con esto serás un experto de un lenguaje que corre cerca a lenguaje máquinaaa.',
            urlPhoto:''
        },
        {
            titulo:'Taller de Python',
            descripcion:'Taller donde aprenderás PYTHON!!! 3 SEMANAS DE PURO CODIGOOO PERRO!!',
            urlPhoto:''
        }
    ]*/

    let eventos=[];
        /*{
            titulo:'Hablando de la Web',
            descripcion:'En este evento hablaremos de cómo es el mundo WEB y cómo iniciarte en este mundo!',
            urlPhoto:''
        },
        {
            titulo:'Hablando de la Web',
            descripcion:'En este evento hablaremos de cómo es el mundo WEB y cómo iniciarte en este mundo!',
            urlPhoto:''
        },
        {
            titulo:'Hablando de la Web',
            descripcion:'En este evento hablaremos de cómo es el mundo WEB y cómo iniciarte en este mundo!',
            urlPhoto:''
        },
    ]*/

    let history = useHistory();
    let {url}=useRouteMatch();


 
    return (
      <React.Fragment>
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
                
                {
                    talleres.map((taller)=>{
                        return(
                        <div className="card taller rounded-0">
                            <img
                                src={image_Cplus}
                                className="card-img-top taller-image"
                                alt="..."
                            ></img>
                            <div className="card-body taller-body">
                                <h5 className="card-title">{taller.titulo}</h5>
                                <p className="card-text">
                                {taller.descripcion}  
                                </p>
                            </div>
                            <a className="btn taller-boton" onClick={()=>history.push(`${url}/taller/${taller.titulo}`)}> 
                                MORE
                            </a>
                        </div>
                        );
                    })
                }
                {
                  talleres.length == 0 &&(
                    <p className="no-available">
                      ¡ PRÓXIMAMENTE !
                    </p>


                  )
                }
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
                {
                    eventos.map((evento)=>{
                        return(
                            <div className="card taller rounded-0">
                                <img
                                    src={image_Cplus}
                                    className="card-img-top taller-image"
                                    alt="..."
                                ></img>
                                <div className="card-body taller-body">
                                    <h5 className="card-title">{evento.titulo}</h5>
                                    <p className="card-text">
                                    {evento.descripcion}
                                    </p>
                                </div>
                                <a className="btn taller-boton" onClick={()=>history.push(`${url}/evento/${evento.titulo}`)}>
                                    MORE
                                </a>
                            </div>
                        );
                    })
                }
                {
                  eventos.length == 0 &&(
                    <React.Fragment>
                    
                    <img src={gif_proximamente} alt="loading..." />
                    </React.Fragment>
                    

                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container-testimonio">
          <div className="container-fluid">
            <div className="talleres-tittle">
              <h2>Testimonios</h2>
              <div className="line"></div>
              <Testimonio />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Actividades;
