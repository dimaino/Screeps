module.exports = function(creep, spawn)
{
    var enemyCreeps = creep.pos.findClosest(FIND_HOSTILE_CREEPS,
    {
	    filter:function(c)
	    {
	        return c.owner.username !== 'Source Keeper';
	    }
	});
	
	var enemyStructure = creep.pos.findClosest(FIND_HOSTILE_SPAWNS);
	
	var exits = creep.room.find(FIND_EXIT_LEFT);
	var exitss = creep.room.find(FIND_EXIT_TOP);
	var exitss = creep.room.find(FIND_EXIT_RIGHT);
	var exitDir = creep.room.findExitTo(Game.rooms.W12S10);
	var findExits = creep.pos.findClosest(exitDir);
	//console.log('Exit: ' + findsExits);
	//var targetRoom = this.remember('targetRoom');

	if(enemyCreeps && creep.getActiveBodyparts(ATTACK) >= 1)
	{
        creep.moveTo(enemyCreeps);
	    creep.attack(enemyCreeps);
	}
	else if(enemyStructure)
	{
	    creep.moveTo(enemyStructure);
	    creep.attack(enemyStructure);
	}
	else if(exits.length)
	{
	    creep.moveTo(exits[0]);
	    console.log('hey 21');
	}
	else if(exitss.length)
	{
	    creep.moveTo(exitss[0]);
	    console.log('hey top');
	}
	else if(exitsss.length)
	{
	    creep.moveTo(exitsss[0]);
	    console.log('hey right');
	}
    else
	{
	    console.log('HEY 1');
	    creep.moveTo(Game.flags.WarriorFlag);
	}
}