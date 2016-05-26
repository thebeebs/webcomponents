window.createGame =function(dom){
    var createEngine = require('voxel-engine');
    var game = createEngine({
    texturePath: 'textures/', generate: function(x, y, z) {
        return y === 1 ? 1 : 0
    }

    });
    var container = document.createElement('div');
    container.id = "container";
    dom.appendChild(container);
    game.appendTo(container);

    var createPlayer = require('voxel-player')(game);
    var beeby = createPlayer('beeby.png');
    beeby.yaw.position.set(0, 3, 0);
    beeby.possess();
    window.game = game; 
};