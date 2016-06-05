import {Phaser} from 'phaser';

import Battlefield from 'game/map/map';

export default class LoadState extends Phaser.State {
    create() {
        this.map = new Battlefield(this.game, 'map1');
        
        this.currentZoom = 2;
        this.camera.scale.setTo(this.currentZoom);
        
        let zoomKey = this.input.keyboard.addKey(Phaser.Keyboard.Z);
        zoomKey.onDown.add(key => {
            this.currentZoom += 1;
            if (this.currentZoom > 4) {
                this.currentZoom = 1;
            }
            
            this.camera.scale.setTo(this.currentZoom);
        });
    }
    
}