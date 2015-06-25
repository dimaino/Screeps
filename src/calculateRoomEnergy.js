module.exports = function(room)
{
    var totalEnergy = 0;
    room.find(FIND_MY_STRUCTURES, 
    {
        filter:function(object)
        {
            if(object.structureType == "extension")
            {
                totalEnergy += object.energy;
            }
        }
    });
    
    var spawns = room.find(FIND_MY_SPAWNS);
    for(var spawn in spawns)
    {
        spawn = spawns[spawn];
        totalEnergy += spawn.energy;
    }
    return totalEnergy;
}