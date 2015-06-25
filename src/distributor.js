module.exports = function(creeps, spawn)
{
    var harvester = require('harvesterCreep');
    var builder = require('builderCreep');
    var guard = require('guardCreep');
    var finder = require('finderCreep');
    var healer = require('healerCreep');
    var repairer = require('repairerCreep');
    
    var lodash = require('lodash');

    //var removes = lodash.filter(Game.creeps, function(creep){ return creep.ticksToLive < 20;}).length;
    
    //for(var removes in Memory.creeps)
	//{
    //    delete Memory.creeps[removes];
//    }
//    console.log(removes);
    
    var calculateRoomEnergy = require('calculateRoomEnergy');
    
    var harvesters = [];
    var builders = [];
    var guards = [];
    var finders = [];
    var healers = [];
    var repairers = [];
    



for(var room in Memory.rooms)
{
    room = Game.rooms[room];
    var totalEnergy = calculateRoomEnergy(room);
    room.memory.totalEnergy = totalEnergy;
}
    
    for(var i in creeps)
    {
        if(creeps[i].memory.role == 'harvester')
        {
            harvesters.push(creeps[i]);
        }
        if(creeps[i].memory.role == 'builder')
        {
            builders.push(creeps[i]);
        }
        if(creeps[i].memory.role == 'guard')
        {
            guards.push(creeps[i]);
        }
        if(creeps[i].memory.role == 'finder')
        {
            finders.push(creeps[i]);
        }
        if(creeps[i].memory.role == 'healer')
        {
            healers.push(creeps[i]);
        }
        if(creeps[i].memory.role == 'repairer')
        {
            repairers.push(creeps[i]);
        }
    }
    
    if(harvesters.length < 4)
    {
        spawn.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], null, {role: 'harvester'});
    }
    else if(builders.length < 2)
    {
        spawn.createCreep([WORK, CARRY, MOVE, MOVE, MOVE], null, {role: 'builder'});
    }
    else if(harvesters.length < 6 && totalEnergy >= 550)
    {
        spawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], null, {role: 'harvester'});
    }
    else if(builders.length < 4 && totalEnergy >= 550)
    {
        spawn.createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], null, {role: 'builder'});
    }
//    if(guards.length < 2)
//    {
//        spawn.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, MOVE, MOVE], null, {role: 'guard'});
//    }
    else if(finders.length < 1)
    {
        spawn.createCreep([CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], null, {role: 'finder'});
    }
//    if(healers.length < 1)
//    {
//        spawn.createCreep([HEAL, MOVE, MOVE], null, {role: 'healer'});
//    }
    else if(repairers.length < 1)
    {
        spawn.createCreep([WORK, CARRY, MOVE, MOVE, MOVE], null, {role: 'repairer'});
    }
    else if(repairers.length < 2 && totalEnergy >= 550)
    {
        spawn.createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE], null, {role: 'repairer'});
    }
    
    for (var name in creeps)
	{
        var creep = creeps[name];
        var role = creep.memory.role;
        
        switch(role)
		{
            case "harvester":
                harvester(creep, spawn);
                break;
            case "builder":
                builder(creep, spawn);
                break;
            case "guard":
                guard(creep, spawn);
                break;
            case "finder":
                finder(creep, spawn);
                break;
            case "healer":
                healer(creep, spawn);
                break;
            case "repairer":
                repairer(creep, spawn);
                break;
        }
    }
}