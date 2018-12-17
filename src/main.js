import Fireworks from 'fireworks-canvas';
 
export default () => {
  const container = document.getElementById('container');
  const options = {
    maxRockets: 500,            // max # of rockets to spawn
    rocketSpawnInterval: 10, // millisends to check if new rockets should spawn
    numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 0.4,  // percentage. min height at which rockets can explode
    explosionMaxHeight: 1,  // percentage. max height before a particle is exploded
    explosionChance: 0.04     // chance in each tick the rocket will explode
    }
  const fireworks = new Fireworks(container, options);
  fireworks.start();
};

 
// const Fireworks = require('fireworks-canvas') // cjs
 
// requirejs(['Fireworks'], (Fireworks) =>  {}) // amd
 
// // const Fireworks = window.Fireworks // browser global
 
// // needs at least a container element, you can provide options
// // (options are optional, defaults defined below)
// const container = document.getElementById('container')

 
// // instantiate the class and call start
// // this returns a disposable - calling it will stop fireworks.
// const fireworks = new Fireworks(container, options)
// const stop = fireworks.start()
// stop() // stop rockets from spawning
// fireworks.stop() // also stops fireworks.
// fireworks.kill() // forcibly stop fireworks
// fireworks.fire() // fire a single rocket.
