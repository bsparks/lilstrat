import {Phaser} from 'phaser';

export default class Battlefield {
    constructor(game, mapName) {
        this.mapName = mapName;
        this.game = game;

        this.initMap();
    }

    initMap() {
        this.map = this.game.add.tilemap(this.mapName);

        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        this.map.addTilesetImage('tileset', 'tileset');

        // dunno why tilemap doesn't track actual TileLayer objects?
        this.map.tileLayers = {};

        this.map.tileLayers.ocean = this.map.createLayer('ocean');
        this.map.tileLayers.ground = this.map.createLayer('ground');
        this.map.tileLayers.ocean = this.map.createLayer('ground_details');
        this.map.tileLayers.ocean = this.map.createLayer('buildings');

        //resizes the game world to match the layer dimensions
        this.map.tileLayers.ground.resizeWorld();
    }
}