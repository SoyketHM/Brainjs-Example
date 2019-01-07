const brain = require('brain.js');
const data = require('./data.json');
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
   input: item.match,
   output: item.won
}));

network.train(trainingData,{
    log: true,
    logPeriod: 100,
    iterations: 1000
});

const output = network.run("Sylhet Sixers vs Comilla Victorians");

console.log('Winer of the match: ' + output);
