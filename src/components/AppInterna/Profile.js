import React, { useState }from 'react';

import './Profile.css'
import Itemproject from './Itemproject';

const Profile = (props) => {
    const initialState = [];
    const initialProject = {
        id:'',
        name: '',
        description: '',
        yourWork:''
    }
    const [projects, setProjects] = useState(initialState);
    const { urlImage, name, career, description, urlFacebook, urlInstagram, urlLinkedIn, title_project, description_project } = props;
    

    const [project, setProject] = useState(initialProject);

    const addProject = () => {
        projects.push(project);
        
        console.log(projects);
        setProjects(projects);
        setProject(initialProject);
    }


    const handleChange = (e) => {
        
        setProject({ ...project, [e.target.name]: e.target.value });
        console.log(project);
    }
    return (
        <div className="container Profile">
            <section className="row">
                <div className="col-12 col-sm-6">
                    <img className="img-profile"src={urlImage}></img>
                </div>
                <div className="col-12 col-sm-6">
                    <p className="subtitle">Información Personal</p>
                    <div>
                        <input type="text" className="input-profile" placeholder="Nombre completo" value={name}></input>
                    </div>
                    <div>
                        <input type="text" className="input-profile" placeholder="Carrera que estudias" value={career}></input>
                    </div>
                    <div>
                        <textarea type="text" className="textArea-profile" placeholder="Descripción(¡Sé breve!)" value={description}></textarea>
                    </div>
                    <div>
                        <p className="subtitle">Redes Sociales</p>
                        <input type="text" className="input-profile" placeholder="urlFacebook" value={urlFacebook}></input>
                        <input type="text" className="input-profile" placeholder="urlInstagram" value={urlInstagram}></input>
                        <input type="text" className="input-profile" placeholder="urlLinkedIn" value={urlLinkedIn}></input>
                    </div>
                </div>
            </section>
            <p className="title">Proyectos realizados</p>   
            <section className="row">
                
                <div className="col-12 col-sm-4">
                    <div>
                        <input type="text" name="name" className="input-profile" placeholder="Titulo del proyecto" value={project.name} onChange={handleChange} ></input>
                    </div>
                    <div>
                        <textarea type="text" name="description" className="textArea-proyecto" placeholder="Descripción del proyecto" value={project.description} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <textarea type="text" name="yourWork" className="textArea-proyecto" placeholder="¿Cuál fue tu participación en el proyecto?" value={project.yourWork} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <button onClick={addProject}>
                            Agregar a mi lista de proyectos
                        </button>
                    </div>

                </div>
                <div className="col-12 col-sm-8 projects-container">
                    {
                        projects.map((item,index) => {
                        return <Itemproject key={index} name={item.name} description={item.description} yourWork={item.yourWork}></Itemproject>
                    })
                    }
                    
                </div>

            </section>
        </div>
    ) 
}

export default Profile;