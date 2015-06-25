module.exports = function(creep, spawn)
{
    var lodash = require('lodash');
    var count = lodash.filter(Game.creeps, function(creepNum){ return creepNum.memory.role == 'harvester' && creep.ticksToLive > 20;}).length;
    
    var target = creep.pos.findClosest(FIND_MY_STRUCTURES, 
    {
        filter:function(structure)
        {
            return structure.hits < structure.hitsMax - 100;
        }
    });
    
    if(count > 3)
    {
        if(creep.energy == 0 && Game.spawns.Spawn1.energy > 0)
        {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else if(target)
        {
            creep.moveTo(target);
            creep.repair(target);
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
            creep.moveTo(Game.flags.HealerFlag);
        }
    }
}