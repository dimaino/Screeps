module.exports = function(creep, spawn)
{
    var target = creep.pos.findClosest(FIND_MY_CREEPS,
    {
        filter:function(myCreep)
        {
            return myCreep.hits < myCreep.hitsMax;
        }
    });
    
    if(target)
    {
        creep.moveTo(target);
        
        if(creep.pos.isNearTo(target))
        {
            creep.heal(target);
        }
        else
        {
            creep.rangedHeal(target);
        }
    }
    else
	{
	    creep.moveTo(Game.flags.HealerFlag);
	}
}