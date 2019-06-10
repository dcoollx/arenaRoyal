/* eslint-disable no-unused-vars */
// this file just declares global classess to be uesed in the game.js file

'use strict';
var entityManager = [];
/**
 * @param {object,string}reference to game object, name of sprite  */ 

class entity extends Phaser.Physics.Arcade.Sprite{
  constructor(scene,x ,y,texture ){
    super(scene,x,y,texture);
    this.setTexture(texture);
    this.setPosition(x,y);
    entityManager.push(this);
    //this.setCollideWorldBounds(true);
  
  }
  getEntityIndex(){ return entityManager.indexOf(this);} //return the index of this item in entity manager
  
}
class player extends entity{
  constructor(scene,x,y,sName,playerName){
    super(scene, x ,y ,sName);
    this.socketId;//for networking
    this.playerName = playerName;
    //this.keys = scene.input.keyboard.createCursorKeys();

  }
}