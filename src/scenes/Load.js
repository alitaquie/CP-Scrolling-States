class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.spritesheet('hero', 'hero-sheet.png', {
            frameWidth: 32,
            frameHeight: 32,
        })
        this.load.image('map', 'map-scroll.jpg')
    }

    create() {
        // walking animations
        this.anims.create({
            key: 'walk-down',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
        })
        this.anims.create({
            key: 'walk-right',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
        })
        this.anims.create({
            key: 'walk-up',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
        })
        this.anims.create({
            key: 'walk-left',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('hero', { start: 12, end: 15 }),
        })

        // hero animations attacking
        this.anims.create({
            key: 'swing-down',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 16, end: 19 }),
        })
        this.anims.create({
            key: 'swing-up',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 20, end: 23 }),
        })
        this.anims.create({
            key: 'swing-right',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 24, end: 27 }),
        })
        this.anims.create({
            key: 'swing-left',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', { start: 28, end: 31 }),
        })

        //add spin move
        this.anims.create({
            key: 'circle-attack',
            frameRate: 24,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('hero', {
                frames: [16, 16, 16, 17, 18, 24, 25, 26, 21, 22, 30, 29, 28, 18, 19, 19, 19]
            })
        })
        //starts scene after everythign is loaded
        this.scene.start('playScene')
    }
}