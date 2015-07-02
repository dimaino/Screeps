module.exports = function(creep, spawn)
{
    var sources = creep.room.find(FIND_SOURCES);
    
    var extension = creep.pos.findClosest(FIND_MY_STRUCTURES,
    {
        filter:function(c)
        {
            //return c.structureType == "road";
            if(c.structureType == STRUCTURE_EXTENSION && c.energy < c.energyCapacity)
            {
                return true;
            }
        }
    });
    
   // if(creep.pos.inRangeTo(extension, 2) && creep.energy == 0)//creep.energy == creep.energyCapacity)// && )
//    {
 //       creep.moveTo(extension);
 //       creep.transferEnergy(extension);
  //  }
	if(creep.energy < creep.energyCapacity)// && !creep.pos.inRangeTo(extension, 5)) 
	{
		creep.moveTo(sources[0]);
		//creep.moveTo(Game.spawns.Spawn1);
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
            creep.moveTo(extension);
            creep.transferEnergy(extension);
	    }
	}
}