var distributor = require('distributor');
//var flagCreator = require('flagCreator');
var deathHandler = require('deathHandler');
var lodash = require('lodash');

var count = lodash.filter(Game.creeps, function(creep){ return creep.ticksToLive > 20;}).length;

var spawn = Game.spawns.Spawn1;
var creeps = Game.creeps;

//var flagCreator = flagCreator();



var round1 = true;

if(round1)
{
//console.log('Calling spawner with '+creeps+' and '+spawn);
//spawner(creeps, spawn);

console.log('Calling distributor with '+creeps+' and '+spawn);
distributor(creeps, spawn);
console.log('Total Creeps Left: ' + count);

//console.log('Calling deathHandler with '+creeps+' and '+spawn);
//deathHandler(creeps, spawn);
}