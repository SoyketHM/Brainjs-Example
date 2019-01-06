const brainjs = require('brainjs');

const network = new brainjs.NeuralNetwork;

network.train([
    { input: [0,0,0], output: [0]},
    { input: [0,0,1], output: [0]},
    { input: [0,1,0], output: [0]},
    { input: [0,1,1], output: [1]},
    { input: [1,0,0], output: [1]},
    { input: [1,0,1], output: [1]},
    { input: [1,1,0], output: [1]},
]);

const output = network.run([1,1,1]);

console.log('Output:' + output);




