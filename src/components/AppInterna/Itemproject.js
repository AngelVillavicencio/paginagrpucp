import React from 'react';
import './Itemproject.css';

const Itemproject = (props) => {
    const { name, description, yourWork } = props;
    return (
        <div className="item-project">
            <div className="item-project_title">
                <p>{name}</p>
            </div>
            <div className="item-project_description">
                <p>{description}</p>
            </div>
            <div className="item-project_yourWork">
                <p>{yourWork}</p>
            </div>
        </div>
    )   
}

export default Itemproject;