import logo from './logo.svg';
import './App.css';
import Sketch from 'react-p5'

function App() {
  let cx, cy;
  let secondsRadius;
  let minutesRadius;
  let hoursRadius;
  let clockDiameter;

  let setup = (p5, canvasParentRef) => {
    let xyz = p5.createCanvas(1000, 800).parent(canvasParentRef);

    let radius = p5.min(p5.width, p5.height) / 2;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.6;
    hoursRadius = radius * 0.5;
    clockDiameter = radius * 1.7
    //Calculation to center the canvas 
    // p5.angleMode(p5.DEGREES);
    // p5.rectMode(p5.BOTTOM);
    // for (var i = 0; i < 100; i = i + 1) {
    //   var randomNumber = p5.random(20, 80);
    //   data.push(randomNumber);
    // }
    // maxData = p5.max(data);
    // let x = (p5.windowWidth - p5.width) / 2;
    // let y = (p5.windowHeight - p5.height) / 2;
    cx = p5.width / 2;
    cy = p5.height / 2;
    // xyz.position(x, y);
  };


  let draw = (p5) => {
    p5.background(230);
    p5.noStroke();
    p5.fill(244, 122, 158);
    p5.ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
    p5.fill(237, 34, 93);
    p5.ellipse(cx, cy, clockDiameter, clockDiameter);
    // p5.fill(139, 171, 203);
    // p5.stroke(89, 86, 74);
    // p5.noFill()
    // p5.ellipse(a,b,100,100)
    let s = p5.map(p5.second(), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
    let m = p5.map(p5.minute() + p5.norm(p5.second(), 0, 60), 0, 60, 0, p5.TWO_PI) - p5.HALF_PI;
    let h = p5.map(p5.hour() + p5.norm(p5.minute(), 0, 60), 0, 24, 0, p5.TWO_PI * 2) - p5.HALF_PI;

    p5.stroke(255);
    p5.strokeWeight(1);
    p5.line(cx, cy, cx + p5.cos(s) * secondsRadius, cy + p5.sin(s) * secondsRadius);
    p5.strokeWeight(2);
    p5.line(cx, cy, cx + p5.cos(m) * minutesRadius, cy + p5.sin(m) * minutesRadius);
    p5.strokeWeight(4);
    p5.line(cx, cy, cx + p5.cos(h) * hoursRadius, cy + p5.sin(h) * hoursRadius);


    p5.strokeWeight(2);
    p5.beginShape(p5.POINTS);
    for (let a = 0; a < 360; a += 6) {
      let angle = p5.radians(a);
      let x = cx + p5.cos(angle) * secondsRadius;
      let y = cy + p5.sin(angle) * secondsRadius;
      p5.vertex(x, y);
    }
    p5.endShape();
    // var maxValue
    // var angleSeparation = 360 / data.length;
    // var padding = 10;
    // if (p5.frameCount <= 400) {
    //    maxValue = p5.constrain(p5.frameCount * 2, 0, 400);
    // } else {
    //   maxValue = 400;
    // }
    // var offset = 200;
    // var dataMultiplier = (p5.windowWidth/2-offset-padding) / maxData;
  
  
    // for (var i = 0; i < data.length; i = i + 1) {
    //   p5.push();
    //   var currentData = data[i].affectedCountries;
    //   var finalHeight = currentData * dataMultiplier;
    //   var animatedHeight = p5.map(maxValue, 0, 400, 0, finalHeight);
    //   p5.translate(p5.width / 2, p5.height/2);
    //   p5.rotate(angleSeparation * i);
    //   p5.rect(0, offset, angleSeparation*2, animatedHeight);
    //   p5.text(Math.floor(currentData), offset-20, 0);
    //   p5.pop();
    // }
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  );
}

export default App;
