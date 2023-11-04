namespace SpriteKind {
    export const Pet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("A wild ducky appered! Press A to try to catch it Press B to flee")
    if (controller.A.isPressed()) {
        game.splash("Great job you won!")
        game.setGameOverMessage(true, "You won!")
    }
    if (controller.B.isPressed()) {
        game.splash("You lose 🥺")
        game.setGameOverMessage(false, "GAME OVER!")
    }
})
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . 1 . b 5 5 1 f f 5 d 4 c . . 
    9 1 9 9 b 5 5 d f b d d 4 4 . . 
    b 5 5 5 b b d 5 5 5 4 4 4 4 4 b 
    b b 5 5 5 5 b 5 5 4 4 4 4 4 b . 
    b 5 c 5 5 5 5 d 5 5 5 5 5 b . . 
    c 5 5 c d 5 5 b 5 5 5 5 5 5 b . 
    c b 5 5 c c b 5 5 5 5 5 5 5 b . 
    . c 5 5 5 5 5 5 5 5 5 5 5 d b . 
    . . c b 5 5 5 5 5 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(131, 93)
