var Player = require("mongoose").model('Player');

var getErrorMessage = function(err) 
{
    if (err.error) {
        for (var errName in err.error)
        {
            if(err.error[errName].message)
            return err.error[errName].message;
            }
        } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res)
{
    var player =  new Player(req.body);
    player.save(function(err) {
        if (err) {
            return res.status(400).send({
                message:getErrorMessage(err)
            });
        } else {
            res.json(player);
        }
    });
};

exports.list = function(req, res) {
    Player.find().sort('-name')
    //.populate('name', 'name')
     .exec(function(err, players){
         console.log(err);
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(players);
        }
    });
};


exports.playerByID = function(req, res, next, id) {
    Player.findById(id)
    .exec(function(err, player) {
        if (err) return next (err);
        if(!player) return next(new Error ('failed to load player' + id));
        req.player = player;
        next();
    });
};

exports.read = function(req, res) 
{
    res.json(req.player);
};

exports.update = function(req, res) 
{
    var player = req.player;
    player.name = req.body.name;
    player.overallRating = req.body.overallRating;
    player.position = req.body.position;
    player.speed = req.body.speed;
    player.awareness = req.body.awareness;
    player.strength = req.body.strength;
    player.agility = req.body.agility;
    
    player.save(function(err)
    {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            return res.json(player);
        }
    });
};

exports.delete = function(req, res) 
{
    var player = req.player;
    
    player.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(player);
        }
    });
};