module.exports = function(creep, spawn)
{
    var targets = creep.pos.findClosest(FIND_HOSTILE_CREEPS,
    {
	    filter:function(c)
	    {
	        return c.owner.username !== 'Source Keeper';
	    }
	});

	if(targets)// && creep.getActiveBodyparts(ATTACK) == 1)
	{
	    creep.moveTo(targets);
	    creep.attack(targets);
	}
    else
	{
	    creep.moveTo(Game.flags.WarriorFlag);
	}
}