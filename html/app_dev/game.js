"use strict";
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
class UserComponent {
    /**
     * @param gameObject The entity.
     */
    constructor(gameObject) {
        this.scene = gameObject.scene;
        const listenAwake = this.awake !== UserComponent.prototype.awake;
        const listenStart = this.start !== UserComponent.prototype.start;
        const listenUpdate = this.update !== UserComponent.prototype.update;
        const listenDestroy = this.destroy !== UserComponent.prototype.destroy;
        if (listenAwake) {
            this.scene.events.once("scene-awake", this.awake, this);
        }
        if (listenStart) {
            this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        }
        if (listenUpdate) {
            this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        }
        if (listenStart || listenUpdate || listenDestroy) {
            gameObject.on(Phaser.GameObjects.Events.DESTROY, () => {
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
                if (listenDestroy) {
                    this.destroy();
                }
            });
        }
    }
    scene;
    awake() {
        // override this
    }
    start() {
        // override this
    }
    update() {
        // override this
    }
    destroy() {
        // override this
    }
}
/// <reference path="./UserComponent.ts"/>
/* START OF COMPILED CODE */
class PreloadText extends UserComponent {
    constructor(gameObject) {
        super(gameObject);
        this.gameObject = gameObject;
        gameObject["__PreloadText"] = this;
        /* START-USER-CTR-CODE */
        this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p) => {
            this.gameObject.text = Math.floor(p * 100) + "%";
        });
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__PreloadText"];
    }
    gameObject;
}
/* END OF COMPILED CODE */
// You can write more code here
// You can write more code here
/* START OF COMPILED CODE */
class Login extends Phaser.Scene {
    constructor() {
        super("Login");
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    editorCreate() {
    }
    /* START-USER-CODE */
    // Write your code here.
    create() {
        this.load.html('login', 'assets/loginform.html');
        this.editorCreate();
    }
}
/* END OF COMPILED CODE */
// You can write more code here
// You can write more code here
/* START OF COMPILED CODE */
window.addEventListener('load', function () {
    var game = new Phaser.Game({
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        backgroundColor: "#fff",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        }
    });
    game.scene.add("Preload", Preload);
});
class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    editorPreload() {
        this.load.pack("asset-pack", "assets/asset-pack.json");
    }
    editorCreate() {
        // progress
        const progress = this.add.text(381.5, 260, "", {});
        progress.text = "0%";
        progress.setStyle({ "fontSize": "20px" });
        // progress (components)
        new PreloadText(progress);
        this.events.emit("scene-awake");
    }
    /* START-USER-CODE */
    // Write your code here
    preload() {
        this.editorCreate();
        this.editorPreload();
        this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Login"));
    }
}
/* END OF COMPILED CODE */
// You can write more code here
