import React, { Component } from 'react';
import './App.css';
import './StyleEvento.css';
import AppEvento from './AppEvento';

class App extends Component {
  render() {


    const friends = [
      {
        imagem:"lemonade.jpg",
        title: "New Summer refreshments",
        descrição: 'It’s July and the heat is on, so instead of eating a fried egg from the pavement come to our store for some new cold refreshments, we have lemonade, iced coffee and fresh meringue lemon pie.'
      },
      {
        imagem:"WhiteNight.jpg",
        title: "White Night",
        descrição: 'Felling peckish for a cupcake at late night? Well we will participating on the White Night’s Event on September 9th and that means we will be opened until 12 PM. Don´t forget to bring white clothes for access to our special White Night’s Menu and discounts, such like white angel cake and 20% discount for our coffee prices.'
      },
      {
        imagem:"SoulMusic.jpg",
        title: "Book Club: Soul Music",
        descrição: 'Once again Sabores e Letras’s book club will reunite in the first Friday of the month, October 6th at 19:00. We will share our experience about “Soul Music” from Discworld’s Author Terry Pratchett. As always anyone interested on joining are welcome and only need to confirm with one of ours baristas.'
      },
      {
        imagem:"lovecraft.jpg",
        title: "H. P. Lovecraft visit",
        descrição: 'The infamous author H. P. Lovecraft will sneak to our store at October 13th, 1 PM, and for those who dare to come, he will sign your books and read us some horrors from his book “The Call of Cthulhu“'
      },
      {
        imagem:"haloween.jpg",
        title: "Halloween Party",
        descrição: 'Beware of the ghouls and tricksters of the night and take refuge at our quaint shop down the street. At October 31th we are giving 10% discount to our disguised costumers and if you’re feeling brave we hosting our own Halloween party at 10:00 PM to 1:00 AM and we would love you to join us./ If you can´t wait to celebrate then drop in from 22 to 31 of October and order the new Halloween menu just  like: “The stars are right“, “Dr Jekyll’s Potion“, “Monster Smash“ and many more.'
      }
  
    ];

    var tmp=[];
    for(var i=friends.length-1; i>=0;i--){
      tmp.push( <AppEvento info={friends[i]}  />);
    }

  
    

    return (

      <div id='front'>{tmp} </div>
    );
  }
}

export default App;

