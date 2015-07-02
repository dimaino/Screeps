module.exports = function(creep, spawn)
{
    var sources = creep.room.find(FIND_SOURCES);
    
    var extension = creep.pos.findClosest(FIND_MY_STRUCTURES,
    {
        filter:function(c)
        {
            if(c.structureType == STRUCTURE_EXTENSION && c.energy < c.energyCapacity)
            {
                return true;
            }
        }
    });
    
    var enemyCreeps = creep.pos.findClosest(FIND_HOSTILE_CREEPS,
    {
	    filter:function(c)
	    {
	        return c.owner.username === 'Source Keeper';
	    }
	});
    

if(enemyCreeps != null)
    {
	if(creep.energy < creep.energyCapacity && !creep.pos.inRangeTo(enemyCreeps, 4)) 
	{
		creep.moveTo(sources[2]);
		creep.harvest(sources[2]);
	}
	else 
	{
	    if(Game.spawns.Spawn1.energy < 300)
	    {
		    creep.moveTo(Game.spawns.Spawn1);
		    creep.transferEnergy(Game.spawns.Spawn1);
	    }
	    else
	    {
            creep.moveTo(extension);
            creep.transferEnergy(extension);
	    }
	}
    }
    else
    {
        if(creep.energy < creep.energyCapacity)// && !creep.pos.inRangeTo(enemyCreeps, 4)) 
	{
		creep.moveTo(sources[2]);
		creep.harvest(sources[2]);
	}
	else 
	{
	    if(Game.spawns.Spawn1.energy < 300)
	    {
		    creep.moveTo(Game.spawns.Spawn1);
		    creep.transferEnergy(Game.spawns.Spawn1);
	    }
	    else
	    {
            creep.moveTo(extension);
            creep.transferEnergy(extension);
	    }
	}
    }
    if(creep.getActiveBodyparts(WORK) <= 0)
    {
        creep.suicide();
    }
}