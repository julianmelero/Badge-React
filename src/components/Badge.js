import React from 'react';

/* Importamos CSS */
import "./styles/Badge.css";

import confLogo from '../images/badge-header.svg';



class Badge extends React.Component {
    // Método obligatorio
    render() {        
        return (
            <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="badge_logo"></img>
            </div>        

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.photo} alt="avatar"></img>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.socialName}</div>
            </div>
            <div className="Badge__footer"></div>
            </div>

        );
    }
}

export default Badge;