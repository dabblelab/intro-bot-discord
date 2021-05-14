'use strict';

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});
const greeting = ['Hi', 'hi', 'hello', 'Hello', 'Hey there', 'hey there', 'Namaste', 'hola', 'Hola', 'namaste']

// Create an event listener for messages
client.on('message', message => {
  if (message.author === client.user) {
    
    return;
  }
  if (message.content === 'sohini' || message.content === 'Sohini') {
    
    message.channel.send('White is her favourite color');
  }
  if (message.content === 'Brito' || message.content === 'brito') {
    
    message.channel.send('It is is Blue');
  }
  if (message.content === 'Kartikey' || message.content === 'kartikey') {
    
    message.channel.send('Orange it is!');
  }
  if (message.content === 'Shubham' || message.content === 'shubham') {
    
    message.channel.send('Black ofcourse!');
  }
  //name here with if condition
  else{
    message.channel.send("I'm sorry i don't have an answer to this question. I'll get back to this later. Thank you!")
  }
  for(let i=0; i<greeting.length; i++){
    if(message.content === greeting[i]){
    message.channel.send("Hey there! You've just reached Intro bot. Welcome to Dabble Lab's Discord Server. This bot responds back with your favourite color if it has your name registered in the code! If you are willing to do that, you can write your first name and favourite color in the #general channel and tag the developer @sohinip. She will register your name and color in the bot. Thanks! ")
  }
  }
});
// Log our bot in using the token from https://discord.com/developers/applications
client.login('ODQyNzk3NTg5NTk3NjUwOTU1.YJ6iaw.gqLdgm-gZlG3UNykyq-dNMbl4T4');