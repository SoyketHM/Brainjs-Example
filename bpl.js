const brainjs = require('brainjs');
const data = require('./data.json');
const network = new brainjs.recurrent.LSTM();

const trainingData = data.map(item => ({
   input: item.match,
   output: item.won
}));

network.train(trainingData,{
    iterations: 2000
});

const output = network.run("Chittagong Vikings vs Comilla Victorians");

console.log('Winer of the match: ' + output);
