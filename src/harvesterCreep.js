module.exports = function(creep, spawn)
{
    var sources = creep.room.find(FIND_SOURCES);
    
    var structure = creep.pos.findClosest(FIND_MY_STRUCTURES,
    {
        filter:function(c)
	    {
	        if(c.structureType == STRUCTURE_EXTENSION && c.energy < c.energyCapacity)
            {
                return true;
            }
	    }
    });
    
    if(creep.energy != 0 && creep.pos.inRangeTo(structure, 15))
    {
        creep.moveTo(structure);
        creep.transferEnergy(structure);
    }
	if(creep.energy < creep.energyCapacity) 
	{
		creep.moveTo(sources[0]);
		creep.harvest(sources[0]);
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
	        creep.moveTo(structure);
	        creep.transferEnergy(structure);
	    }
	}
}