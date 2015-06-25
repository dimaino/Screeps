module.exports = function(creep, spawn)
{
    var target = creep.pos.findClosest(FIND_DROPPED_ENERGY);
    
    if(target && creep.energy < creep.energyCapacity && creep.getActiveBodyparts(CARRY) == 1)
    {
        creep.moveTo(target);
        creep.pickup(target);
    }
    else if(!target && creep.energy == 0)
    {
        creep.moveTo(Game.flags.BuilderFlag);
    }
    else
    {
        creep.moveTo(Game.spawns.Spawn1);
        creep.transferEnergy(Game.spawns.Spawn1);
    }
}