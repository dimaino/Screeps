module.exports = function(creeps, spawn)
{
    for(var i in Memory.creeps)
	{
        if(!creeps[i]) 
		{
            delete Memory.creeps[i];
        }
    }
}