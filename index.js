const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();

const attributes = { fill: 'green', stroke: 'black' }
const options = { x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes }

// ** This method only works on Node.js.
const svg = textToSVG.getSVG('hello', options);
console.log(svg);

// ** An example for loading font asynchronously.
TextToSVG.load('./fonts/MagicRetro.ttf', (err, txt2SVG)=>{ // you shoud pass font for this method ( .load )
    const svg = txt2SVG.getSVG('hello')
    console.log(svg)
})