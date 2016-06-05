import {Phaser} from 'phaser';

export default class BootState extends Phaser.State {
    init() {
        this.game.stage.disableVisibilityChange = true;
        this.game.stage.smoothed = false;
        
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.input.gamepad.start();

        this.game.state.start('load');
    }
}
