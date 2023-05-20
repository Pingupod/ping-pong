namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    Ball.follow(mySprite, 0)
    Ball.setVelocity(randint(0, 400), randint(0, 400))
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile`, function (sprite, location) {
    info.player2.changeScoreBy(1)
    Ball.x = 10
})
info.player2.onScore(11, function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player2, function (sprite, otherSprite) {
    Ball.setVelocity(randint(0, -400), randint(0, 50))
})
scene.onOverlapTile(SpriteKind.Ball, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
info.player1.onScore(11, function () {
    game.over(true)
})
let Ball: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level0`)
mySprite = sprites.create(img`
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player2)
mySprite.setPosition(18, 56)
mySprite2.setPosition(142, 56)
controller.moveSprite(mySprite, 0, 100)
controller.player2.moveSprite(mySprite2, 0, 100)
