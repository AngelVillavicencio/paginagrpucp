import React,{Component} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom'
import image_Cplus from '../assets/images/taller-c++.png';
import './Actividades.css';
import Testimonio from '../components/Testimonio';



const Actividades = ()=>{

    let talleres=[
        {
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
    ]

    let eventos=[
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
        {
            titulo:'Hablando de la Web',
            descripcion:'En este evento hablaremos de cómo es el mundo WEB y cómo iniciarte en este mundo!',
            urlPhoto:''
        },
    ]

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
