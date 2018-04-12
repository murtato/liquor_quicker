import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// var cocktailList = ['AMF', 'Long Island', 'Fuzzy Navel', 'Manhattan']
var cocktailList = [
  drink: {
    name : 'myDrink',
    recipe: {
      ingredient : 'myFirstIngredient',
      ingredient : 'mySecondIngredient'
    }
  }
]; console.log(cocktailList.drink)

function randomizeMe (aList) {
  return (Math.floor(Math.random() * aList.length))
} console.log('randomizeMe', randomizeMe(cocktailList.drink))

function myCocktailList () {
  return cocktailList[randomizeMe(cocktailList.myDrink)]
} console.log('myCocktailList', myCocktailList())


