function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    const text = await res.text();
    el.innerHTML = text;
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);

let molds = []; 
let num = 4000;
let d; 

function setup() {
  const container = document.getElementById('canvas-container');
  const w = container.offsetWidth;
  const h = container.offsetHeight;

  const cnv = createCanvas(w, h);
  cnv.parent('canvas-container');

  angleMode(DEGREES);
  d = pixelDensity();
  
  for (let i=0; i<num; i++) {
    molds[i] = new Mold();
  }
}

function draw() {
  background(0, 5);
  loadPixels();
  
  for (let i=0; i<num; i++) {
    molds[i].update();
    molds[i].display();
  }
  
}