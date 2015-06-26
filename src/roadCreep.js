module.exports = function(creep, spawn)
{
    var lodash = require('lodash');
    var count = lodash.filter(Game.creeps, function(creepNum){ return creepNum.memory.role == 'harvester' && creep.ticksToLive > 20;}).length;
    
    var road = creep.pos.findClosest(FIND_STRUCTURES,
    {
        filter:function(c)
        {
            if(c.structureType == STRUCTURE_ROAD && c.hits < c.hitsMax - 100)
            {
                return c.structureType == STRUCTURE_ROAD;
            }
        }
    });
    
    if(count > 3)
    {
        if(creep.energy == 0 && Game.spawns.Spawn1.energy > 0)
        {
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }
        else if(road)//.hits < road.hitsMax - 100)
        {
            creep.moveTo(road);
            creep.repair(road);
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