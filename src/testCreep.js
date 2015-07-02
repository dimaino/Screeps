module.exports = function(creep, spawn)
{
    var enemyStructure = creep.pos.findClosest(FIND_HOSTILE_STRUCTURES,
    {
        filter:function(c)
        {
            return c.structureType == STRUCTURE_KEEPER_LAIR;
        }
    });
    
    var enemyCreeps = creep.pos.findClosest(FIND_HOSTILE_CREEPS,
    {
	    filter:function(c)
	    {
	        return c.owner.username === 'Source Keeper';
	    }
	});
	
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
	
	var sources = creep.room.find(FIND_SOURCES);
	var direction1 = creep.pos.getDirectionTo(sources[4]);
	var path = creep.pos.findPathTo(sources[4]);//, {avoid: creep.pos.inRangeTo(enemyCreeps, 4)}); //?creep.pos
	//var path = spawn.room.findPath(spawn, sources[4]);//, {: enemyCreeps});

    if(enemyCreeps != null)
    {
	if(creep.pos.inRangeTo(enemyCreeps, 4))
	{
        creep.moveTo(Game.spawns.Spawn1);
	    console.log('HERE');
	}
	else if(creep.energy >= creep.energyCapacity)
	{
	    creep.moveTo(Game.spawns.Spawn1);
	    creep.transferEnergy(Game.spawns.Spawn1);
	}
	else
	{
	    creep.moveByPath(path);
	    //reep.move(path[0].direction);
	    //creep.moveTo(sources[3]);
		creep.harvest(sources[4]);
		//console.log('GRRR' + thePath);
		//console.log('GRRR' + path);
	}
    }
    else
    {
        if(creep.energy < creep.energyCapacity)// && !creep.pos.inRangeTo(enemyCreeps, 4)) 
	{
		creep.moveTo(sources[4]);
		creep.harvest(sources[4]);
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