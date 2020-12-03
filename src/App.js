import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5'

function App() {
  let a = 300;
  let b = 300;
  let speed = 3;
  var data = [{name: 192},{a}]
var maxData;

  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);
    //Calculation to center the canvas 
    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.BOTTOM);
    for (var i = 0; i < 100; i = i + 1) {
      var randomNumber = p5.random(20, 80);
      data.push(randomNumber);
    }
    maxData = p5.max(data);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.height) / 2;
    xyz.position(x, y);
  };


  let draw = (p5) => {
    p5.background(43, 53, 63);
    p5.fill(139, 171, 203);
    p5.stroke(89, 86, 74);
    // p5.noFill()
    // p5.ellipse(a,b,100,100)
    var maxValue
    var angleSeparation = 360 / data.length;
    var padding = 10;
    if (p5.frameCount <= 400) {
       maxValue = p5.constrain(p5.frameCount * 2, 0, 400);
    } else {
      maxValue = 400;
    }
    var offset = 200;
    var dataMultiplier = (p5.windowWidth/2-offset-padding) / maxData;
  
  
    for (var i = 0; i < data.length; i = i + 1) {
      p5.push();
      var currentData = data[i].affectedCountries;
      var finalHeight = currentData * dataMultiplier;
      var animatedHeight = p5.map(maxValue, 0, 400, 0, finalHeight);
      p5.translate(p5.width / 2, p5.height/2);
      p5.rotate(angleSeparation * i);
      p5.rect(0, offset, angleSeparation*2, animatedHeight);
      p5.text(Math.floor(currentData), offset-20, 0);
      p5.pop();
    }
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
