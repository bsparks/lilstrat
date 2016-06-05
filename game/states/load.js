import {Phaser} from 'phaser';

export default class LoadState extends Phaser.State {
    preload() {
        this.game.add.text(this.game.world.bounds.centerX, this.game.world.bounds.centerY, 'loading...', {fill: '#fff'});
        
        this.game.load.image('tileset', 'assets/tileset.png');
        
        this.game.load.tilemap('map1', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
    }

    create() {
        this.game.state.start('play');
    }
}