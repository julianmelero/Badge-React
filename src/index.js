// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import Badge from './components/Badge';


const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge photo="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" firstName="Lilly" lastName="Lala" jobTitle="Web Engineer" socialName="julianmelero_"/>, container);
