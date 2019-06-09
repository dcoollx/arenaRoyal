/* eslint-disable no-unused-vars */
// this file just declares global classess to be uesed in the game.js file

'use strict';
var entityManager = [];
/**
 * @param {object,string}reference to game object, name of sprite  */ 

class entity{
  constructor(game,sName){
    entityManager.push(this);// add this entity to list
    this.sprite;
    this.sprite = game.add.sprite(400,300,sName);
    //this.sprite.setCollideWorldBounds(true);

  }
  getEntityIndex(){ return entityManager.indexOf(this);} //return the index of this item in entity manager
  
}
class player extends entity{
  constructor(game,sName,playerName){
    super(game,sName);
    this.socketId;//for networking
    this.playerName = playerName;

  }
}