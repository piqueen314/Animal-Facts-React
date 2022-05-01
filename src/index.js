
import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import oceanImg from './images/ocean.jpg';
import dolphinImg from './images/dolphin.jpg';
import lobsterImg from './images/lobster.jpg';
import starfishImg from './images/starfish.jpg';
const title = "";

const background = <img className='background' alt='ocean' src={oceanImg}/>;
const images = [];
for(let animal in animals){
  let animalImg = <img onClick={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button'/>;
  images.push(animalImg);
}
console.log("images="+images);

function displayFact (e){
  const animalName = e.target.alt;
  let randomIndex = Math.floor(Math.random()*3);
   console.log('cece ' + randomIndex)
  let funFact = animals[`${animalName}`].facts[randomIndex];
  console.log('cece ' + funFact)
  document.getElementById('fact').innerHTML = funFact;
}
const animalFacts = (
  <div>
    <h1>
      {title ? title : "Click an animal for a fun fact" }   
    </h1>
    {background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
  );
ReactDOM.render(animalFacts, document.getElementById('root') );