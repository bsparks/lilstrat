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

        this.music = this.game.add.audio('music1', 0.8, true);
        this.music.play();
    }

    update() {
        super.update();

        this.handleScrollCamera();
    }

    handleScrollCamera() {
        if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this.camera.x -= 1;
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this.camera.x += 1;
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
            this.camera.y -= 1;
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
            this.camera.y += 1;
        }
    }

}