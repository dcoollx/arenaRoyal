/* eslint-env jquery */
/* global Phaser */
'use strict';
function preload(){
  this.load.spritesheet('junko','res/junko walking.png',{frameWidth:32,frameHeight:40});
}
function create(){
  this.add.sprite(400,300,'junko');

}
function test(){
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };
  
  var game = new Phaser.Game(config);
  
  function preload ()
  {
    this.load.setBaseURL('http://labs.phaser.io');
  
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }
  
  function create ()
  {
    this.add.image(400, 300, 'sky');
  
    var particles = this.add.particles('red');
  
    var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });
  
    var logo = this.physics.add.image(400, 100, 'logo');
  
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
  
    emitter.startFollow(logo);
  }
}
var main = function(){
  /* eslint global main */
  let game = setup();
  //test();
};
function setup(){
  //sets what is needed to run
  let target = $('#target');
  let config ={
    type: Phaser.AUTO,
    parent: target,
    scale:{
      width:800,
      height:600,
      scale:'SHOW_ALL',
      orientation: 'LANDSCAPE'
    },
    scene:{
      preload:preload,
      create:create,

    }

  };
  let theGame = new Phaser.Game(config);
  return theGame;
}