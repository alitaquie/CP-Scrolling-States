class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        //add world background
        this.map = this.add.image(0, 0, 'map').setOrigin(0)

        // add new Hero to scene (scene, x, y, key, frame, direction)
        this.hero = new Hero(this, 200, 150, 'hero', 0, 'down')

        //keyboard input
        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.HKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H)
        this.keys.FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)

        //debug key assigned to D key
        this.input.keyboard.on('keydown-D', function() {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        //camera shit
        this.cameras.main.setBounds(0, 0, this.map.width, this.map.height)
        this.cameras.main.startFollow(this.hero, false, 0.5, 0.5)
        this.physics.world.setBounds(0, 0, this.map.width, this.map.height)

        // update instruction text
        document.getElementById('info').innerHTML = '<strong>CharacterFSM.js:</strong> Arrows: move | SPACE: attack | SHIFT: dash attack | F: spin attack | H: hurt (knockback) | D: debug (toggle)'

        //this.hero.anims.play('circle-attack')
    }

    update() {
        //responsible for movement
        this.heroFSM.step()
    }
}