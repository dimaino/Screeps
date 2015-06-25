module.exports = function(creeps, role)
{
    var count = 0;
    
    for(var name in creeps)
	{
        var creep = creeps[name];
        
        if (creep.role == role)
		{
            count++;
        }
    }
    return count;
}