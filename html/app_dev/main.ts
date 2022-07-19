
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Login", Login);
    game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
	}

	create() {
		
        this.scene.start("Preload");
	}

}