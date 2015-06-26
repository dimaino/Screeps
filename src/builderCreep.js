module.exports = function(creep, spawn)
{    
    var lodash = require('lodash');

    var count = lodash.filter(Game.creeps, function(creepNum){ return creepNum.memory.role == 'harvester' && creep.ticksToLive > 20;}).length;
    
    var site = creep.room.controller;
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    console.log('there are: ' + count + ' harvesters alive');
    if(count > 3)
    {
        if(creep.energy == 0 && Game.spawns.Spawn1.energy != 0) 
    	{	
    		creep.moveTo(Game.spawns.Spawn1);
    		Game.spawns.Spawn1.transferEnergy(creep);
    	}
    	else if(targets.length && creep.energy > 0) 
    	{	
    		creep.moveTo(targets[0]);
    		creep.build(targets[0]);
    	}
    	else if(site && !targets.length && creep.energy > 0)
    	{
    	    creep.moveTo(site);
    		creep.upgradeController(site);
    	}
    	else 
    	{
    	    creep.moveTo(Game.flags.BuilderFlag);
	    }
    }
    else
    {
        if(creep.energy > 0)
        {
            creep.moveTo(Game.spawns.Spawn1);
    		creep.transferEnergy(Game.spawns.Spawn1);
        }
        else
        {
            creep.moveTo(Game.flags.BuilderFlag);
        }
    }
}