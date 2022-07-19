
// You can write more code here

/* START OF COMPILED CODE */


class Login extends Phaser.Scene {

	constructor() {
		super("Login");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

	}

	/* START-USER-CODE */

	// Write your code here.

	create() {
		this.load.html('login', 'assets/loginform.html');
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
