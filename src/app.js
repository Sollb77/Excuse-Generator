window.onload =() => {
  document.querySelector('#btn').addEventListener('click', () =>{
      document.querySelector('#the-excuse').innerHTML = generateExcuse();
  });
  
};

let generateExcuse = () => {
let pronoun = ['A','The'];
let subject = ['clown','dolphin','dog','baby','driver','comedian'];
let action= ['took my','threw my', 'yelled at my','stole my','bit my'];
let possetion= ['homework','toe', 'car','shoe'];
let where= ['on the street','in my house', 'in my driveway'];

let proIndex= Math.floor(Math.random()*pronoun.length);
let subIndex= Math.floor(Math.random()*subject.length);
let actIndex= Math.floor(Math.random()*action.length);
let possIndex= Math.floor(Math.random()*possetion.length);
let whereIndex= Math.floor(Math.random()*where.length);

return pronoun[proIndex]+' '+subject[subIndex]+' '+action[actIndex]+' '+possetion[possIndex]+' '+where[whereIndex]


}