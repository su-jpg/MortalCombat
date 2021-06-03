const player1 = {
  name: 'Scorpion',
  hp:200,
  img: 'stark',
  weapon: ['rifle','dart'],
  attack: function(name){
    console.log(name + '..fight')
  }
};

function createPlayer(){

  const div1 = document.createElement('div');
  div1.classList.add('player1');
  const divPrBar = document.createElement("div");
  divPrBar.classList.add("progressbar");
  const character = document.createElement("div");
  character.classList.add("character");
  const life = document.createElement("div");
  life.classList.add("life");
  const name1 = document.createElement("div");
  name1.classList.add("name1");
  const img = document.createElement('img');
  img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
      
  const body = document.querySelector("body");
  body.appendChild(div1);
  div1.appendChild(divPrBar);
  div1.appendChild(character);
  divPrBar.appendChild(life);
  divPrBar.appendChild(name1);
  name1.innerText = "SCORPION";
  character.appendChild(img);
}



