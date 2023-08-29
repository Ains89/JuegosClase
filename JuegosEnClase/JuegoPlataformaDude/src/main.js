// // Configuración del juego
// let config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 300 },
//             debug: false
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// // letiables globales
// let score = 0;
// let scoreText;
// let gameOver = false;
// let gameOverText;
// let game = new Phaser.Game(config);
// let pauseButton;
// let isPaused = false;

// // Función para cargar los recursos del juego
// function preload() {
//     this.load.image('sky', 'assets/sky.png');
//     this.load.image('ground', 'assets/platform.png');
//     this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
//     this.load.image('star', 'assets/star.png');
//     this.load.image('bomb', 'assets/bomb.png');
//     this.load.audio('recoleccion', 'assets/recoleccion.ogg');
//     this.load.audio('gameover', 'assets/gameover.ogg');
//     this.load.image('pauseButton', 'assets/pausa.png');
// }

// // Función para crear los elementos del juego
// function create() {
//     this.add.image(400, 300, 'sky');
//     platforms = this.physics.add.staticGroup();
//     platforms.create(400, 568, 'ground').setScale(2).refreshBody();
//     platforms.create(600, 400, 'ground');
//     platforms.create(50, 250, 'ground');
//     platforms.create(750, 220, 'ground');
//     player = this.physics.add.sprite(100, 450, 'dude');
//     player.setCollideWorldBounds(true);
//     player.setBounce(0.2);
//     this.anims.create({
//         key: 'left',
//         frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
//         frameRate: 10,
//         repeat: -1
//     });
//     this.anims.create({
//         key: 'turn',
//         frames: [{ key: 'dude', frame: 4 }],
//         frameRate: 20,
//     });
//     this.anims.create({
//         key: 'right',
//         frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
//         frameRate: 10,
//         repeat: -1
//     });
//     this.physics.add.collider(player, platforms);
//     cursors = this.input.keyboard.createCursorKeys();
//     stars = this.physics.add.group({
//         key: 'star',
//         repeat: 11,
//         setXY: { x: 12, y: 0, stepX: 70 }
//     });
//     stars.children.iterate(function (child) {
//         child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//     });
//     this.physics.add.collider(stars, platforms);
//     this.physics.add.overlap(player, stars, collectStar, null, this);
//     scoreText = this.add.text(16, 16, 'Puntaje: 0', { fontSize: '32px', fill: '#000' });
//     recoleccionSound = this.sound.add('recoleccion');
//     gameoverSound = this.sound.add('gameover');
//     restartButton = this.add.text(400, 300, 'Reiniciar', { fontSize: '32px', fill: '#fff' }).setInteractive();
//     restartButton.visible = false;
//     restartButton.on('pointerdown', restartGame, this);

//     pauseButton = this.add.image(750, 50, 'pauseButton').setInteractive();
//     pauseButton.on('pointerdown', function () {
//         if (isPaused) {
//             this.physics.resume(); // Reanudar la física del juego
//             isPaused = false;
            
//         } else {
//             this.physics.pause(); // Pausar la física del juego
//             isPaused = true;
            
//         }
//     }, this);


// }

// // Función para actualizar el juego en cada frame
// function update() {
//     if (gameOver) {
//         return;
//     }
//     if (cursors.left.isDown) {
//         player.setVelocityX(-160);
//         player.anims.play('left', true);
//     } else if (cursors.right.isDown) {
//         player.setVelocityX(160);
//         player.anims.play('right', true);
//     } else {
//         player.setVelocityX(0);
//         player.anims.play('turn');
//     }
//     if (cursors.up.isDown && player.body.touching.down) {
//         player.setVelocityY(-350);
//     }
// }

// // Función para recolectar estrellas
// function collectStar(player, star) {
//     star.disableBody(true, true);
//     score += 10;
//     scoreText.setText('Puntaje: ' + score);
//     recoleccionSound.play();
//     if (stars.countActive(true) === 0) {
//         stars.children.iterate(function (child) {
//             child.enableBody(true, child.x, 0, true, true);
//         });
//         let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
//         let bomb = this.physics.add.sprite(x, 16, 'bomb');
//         bomb.setBounce(1);
//         bomb.setCollideWorldBounds(true);
//         bomb.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(200, 400));
//         this.physics.add.collider(bomb, platforms);
//         this.physics.add.collider(player, bomb, hitBomb, null, this);
//     }
// }

// // Función para cuando el jugador toca una bomba
// function hitBomb(player, bomb) {
//     this.physics.pause();
//     player.setTint(0xff0000);
//     player.anims.play('turn');
//     gameOver = true;
//     gameoverSound.play();
//     restartButton.visible = true;
//     restartButton.setStyle({ fontSize: '32px', fill: '#fff', backgroundColor: '#00ff00', padding: { x: 10, y: 5 } });
//     gameOverText = this.add.text(300, 250, '¡Has perdido!', { fontSize: '48px', fill: '#fff' });
// }

// // Función para reiniciar el juego
// function restartGame() {
//     score = 0;
//     scoreText.setText('Puntaje: ' + score);
//     gameOver = false;
//     restartButton.visible = false;
//     setTimeout(hideGameOverText, 1000); // Ocultar el texto después de 1 segundo (1000 milisegundos)
//     player.clearTint();
//     player.setX(100);
//     player.setY(450);
//     this.physics.resume();
//     stars.children.iterate(function (child) {
//         child.enableBody(true, child.x, 0, true, true);
//         bombs.clear(true, true); // Eliminar todas las bombas existentes
//     });

// }

// function restartGame() {
//     score = 0;
//     scoreText.setText('Puntaje: ' + score);
//     gameOver = false;
//     restartButton.visible = false;
//     setTimeout(hideGameOverText, 1000); // Ocultar el texto después de 1 segundo (1000 milisegundos)
//     player.clearTint();
//     player.setX(100);
//     player.setY(450);
//     this.physics.resume();
    
//     // Eliminar todas las estrellas existentes
//     stars.clear(true, true);
    
//     // Eliminar todas las bombas existentes
//     bombs.clear(true, true);
    
//     // Volver a crear las estrellas
//     stars = this.physics.add.group({
//         key: 'star',
//         repeat: 11,
//         setXY: { x: 12, y: 0, stepX: 70 }
//     });
//     stars.children.iterate(function (child) {
//         child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//     });
//     this.physics.add.collider(stars, platforms);
    
//     // Eliminar la colisión entre el jugador y las bombas
//     this.physics.world.colliders.getActive().forEach(function (collider) {
//         if (collider.name === 'playerBombCollider') {
//             collider.destroy();
//         }
//     });
// }
// function hideGameOverText() {
//     gameOverText.setVisible(false);
// }







// OPCION SIN BOTON REINICIO
// Configuración del juego
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Variables globales
let score = 0;
let scoreText;
let gameOver = false;
let gameOverText;
let game = new Phaser.Game(config);
let isPaused = false;

// Función para cargar los recursos del juego
function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.audio('recoleccion', 'assets/recoleccion.ogg');
    this.load.audio('gameover', 'assets/gameover.ogg');
    this.load.image('pauseButton', 'assets/pausa.png');
}

// Función para crear los elementos del juego
function create() {
    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setCollideWorldBounds(true);
    player.setBounce(0.2);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20,
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.physics.add.collider(player, platforms);
    cursors = this.input.keyboard.createCursorKeys();
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    scoreText = this.add.text(16, 16, 'Puntaje: 0', { fontSize: '32px', fill: '#000' });
    recoleccionSound = this.sound.add('recoleccion');
    gameoverSound = this.sound.add('gameover');
    pauseButton = this.add.image(750, 50, 'pauseButton').setInteractive();
    pauseButton.on('pointerdown', function () {
        if (isPaused) {
            this.physics.resume(); // Reanudar la física del juego
            isPaused = false;
        } else {
            this.physics.pause(); // Pausar la física del juego
            isPaused = true;
        }
    }, this);
}

// Función para actualizar el juego en cada frame
function update() {
    if (gameOver) {
        return;
    }
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-350);
    }
}

// Función para recolectar estrellas
function collectStar(player, star) {
    star.disableBody(true, true);
    score += 10;
    scoreText.setText('Puntaje: ' + score);
    recoleccionSound.play();
    if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
        let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        let bomb = this.physics.add.sprite(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(200, 400));
        this.physics.add.collider(bomb, platforms);
        this.physics.add.collider(player, bomb, hitBomb, null, this);
    }
}

// Función para cuando el jugador toca una bomba
function hitBomb(player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
    gameoverSound.play();
    gameOverText = this.add.text(300, 250, '¡Has perdido!', { fontSize: '48px', fill: '#fff', textAling:'150px' });
}

// Función para ocultar el texto de Game Over
function hideGameOverText() {
    gameOverText.setVisible(false);
}







