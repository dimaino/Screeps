module.exports = function()
{
    //var thisRoom = Game.rooms.roomName;
    if(!Game.flags["HealerFlag"])
    {
        //thisRoom.createFlag(15, 27, 'HealerFlag');
        Game.rooms.W12S10.createFlag(15, 27, 'HealerFlag');
        console.log('HealerFlag Created');
    }
    if(!Game.flags["WarriorFlag"])
    {
        Game.rooms.W12S10.createFlag(15, 20, 'WarriorFlag');
        console.log('WarriorFlag Created');
    }
    if(!Game.flags["BuilderFlag"])
    {
        Game.rooms.W12S10.createFlag(22, 27, 'BuilderFlag');
        console.log('BuilderFlag Created');
    }
    if(!Game.flags["RangerFlag"])
    {
        Game.rooms.W12S10.createFlag(22, 20, 'RangerFlag');
        console.log('RangerFlag Created');
    }
}