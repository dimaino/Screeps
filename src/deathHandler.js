module.exports = function(creeps, spawn)
{
    for(var i in Memory.creeps)
	{
        if(!Game.creeps[i] && !creep.spawning) 
		{
            delete Memory.creeps[i];
        }
    }
}