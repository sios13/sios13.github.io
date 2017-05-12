(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Tile = require("./Tile.js");
const Conversation = require("./Conversation.js");

function Battle(service, settings) {
    this.service = service;
    // this.tick = -1;
<<<<<<< HEAD
=======

    this.state = "intro1";
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    this.state = "intro1";

<<<<<<< HEAD
    this.opponent = settings.opponent;

    // this.screenWidth = 1024;
    // this.screenHeight = 768;

    // this.audio = new Audio("audio/pkmn-fajt.mp3");
    // this.audio.loop = true;
    // this.audio.play();
=======
    this.audio = new Audio("audio/pkmn-fajt.mp3");
    this.audio.loop = true;
    this.audio.play();

    this.conversation = new Conversation({
        backgroundSrc: "img/conversation/background_battle.png",
        hidden: true,
        nextable: false
    });
    
    this.flash = new Tile({
        renderWidth: 1024,
        renderHeight: 768,
        tileWidth: 1024,
        tileHeight: 768,
        alpha: 0,
        src: "img/battle/flash.png"
    });
    this.flash.alpha = 0;

    this.background = new Tile({
        renderX: -10000,
        renderY: 0,
        renderWidth: this.screenWidth,
        renderHeight: this.screenHeight,
        tileWidth: 512,
        tileHeight: 288,
        src: "img/battle/battlebgForestEve.png"
    });

    this.player = {
        name: "player",
        audio: new Audio("audio/monster/130Cry.wav"),
        player_tile: new Tile({
            renderX: 1024 + 170,
            renderY: 768 - 192 - 230,
            renderWidth: 230,
            renderHeight: 230,
            spriteCol: 0,
            spriteRow: 0,
            tileWidth: 128,
            tileHeight: 128,
            offset: 128,
            numberOfFrames: 5,
            updateFrequency: 5,
            src: "img/battle/player_back.png",
            loop: false,
            pause: true
        }),
        monster_tile: new Tile({
            renderX: 512/2 - 350/2,
            renderY: 310,
            renderWidth: 350,
            renderHeight: 350,
            spriteCol: 0,
            spriteRow: 0,
            tileWidth: 108,
            tileHeight: 108,
            offset: 108,
            numberOfFrames: 87,
            updateFrequency: 1,
            src: "img/battle/player_monster_shiny.png",
            loop: false,
            pause: true
        }),
        base_tile: new Tile({
            renderX: 1024,
            renderY: this.screenHeight - 192 - 64,
            renderWidth: 512,
            renderHeight: 64,
            tileWidth: 408,
            tileHeight: 64,
            src: "img/battle/playerbaseFieldGrassEve.png"
        })
    };
    this.player.monster_tile.alpha = 0;

    this.enemy = {
        name: "HEJ",
        audio: new Audio("audio/monster/093Cry.wav"),
        monster_tile: new Tile({
            renderX: 0 - 512/2 - 350/2,
            renderY: 75,
            renderWidth: 350,
            renderHeight: 350,
            spriteCol: 0,
            spriteRow: 0,
            tileWidth: 85,
            tileHeight: 85,
            offset: 85,
            numberOfFrames: 25,
            updateFrequency: 1,
            src: "img/battle/enemy_monster.png",
            loop: false,
            pause: true
        }),
        base_tile: new Tile({
            renderX: 0 - 512,
            renderY: 200,
            renderWidth: 512,
            renderHeight: 256,
            tileWidth: 256,
            tileHeight: 128,
            src: "img/battle/enemybaseFieldGrassEve.png"
        })
    };
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    // this.conversation = new Conversation({
    //     backgroundSrc: "img/conversation/background_battle.png",
    //     hidden: true,
    //     nextable: false
    // });

<<<<<<< HEAD
    this.flashTile = this.service.resources.getTile("flash", 0, 0, 1024, 768);
    this.flashTile.alpha = 0;

    this.backgroundTile = this.service.resources.getTile("battleBgForestEve", 0, 0, 1024, 768);

    this.playerTile = this.service.resources.getTile("battlePlayer", 1024 + 170, 768 - 192 - 230, 230, 230);

    this.playerbaseTile = this.service.resources.getTile("battlePlayerbase", 1024, 768 - 192 - 64, 512, 64);

    this.opponentbaseTile = this.service.resources.getTile("battleOpponentbase", -512, 200, 512, 256);

    this.ballTile = this.service.resources.getTile("battleBall", 0, 410, 48, 48);

    this.bottombarTile = this.service.resources.getTile("battleBottombar", 0, 768 - 192, 1028, 192);

    this.fightbtnTile = this.service.resources.getTile("battleFightbtn", 514, 768 - 192 + 10, 256, 92);
    
    this.bagbtnTile = this.service.resources.getTile("battleBagbtn", 770, 768 - 192 + 10, 256, 92);

    this.pokemonbtnTile = this.service.resources.getTile("battlePokemonbtn", 514, 768 - 192 + 92, 256, 92);
    
    this.runbtnTile = this.service.resources.getTile("battleRunbtn", 770, 768 - 192 + 92, 256, 92);

    console.log(this.runbtnTile);
=======
    this.bottombar = new Tile({renderX: -10000, renderY: this.screenHeight - 192, renderWidth: 1028, renderHeight: 192, tileWidth: 512, tileHeight: 96, src: "img/battle/bottombar.png"});

    // this.textbox = new Tile({renderX: -10000, renderY: this.screenHeight - 192 + 10, renderWidth: 481, renderHeight: 176, tileWidth: 244, tileHeight: 88, src: "img/battle/textbox.png"});

    this.fightbtn = new Tile({
        renderX: 514,
        renderY: this.screenHeight - 192 + 10,
        renderWidth: 256,
        renderHeight: 92,
        tileWidth: 130,
        tileHeight: 46,
        offset: 130,
        numberOfFrames: 2,
        src: "img/battle/fightbtn.png",
        loop: false,
        pause: true
    });

    this.bagbtn = new Tile({
        renderX: 770,
        renderY: this.screenHeight - 192 + 10,
        renderWidth: 256,
        renderHeight: 92,
        tileWidth: 130,
        tileHeight: 46,
        offset: 130,
        numberOfFrames: 2,
        src: "img/battle/bagbtn.png",
        loop: false,
        pause: true
    });

    this.pokemonbtn = new Tile({
        renderX: 514,
        renderY: this.screenHeight - 192 + 10 + 92 - 8,
        renderWidth: 256,
        renderHeight: 92,
        tileWidth: 130,
        tileHeight: 46,
        offset: 130,
        numberOfFrames: 2,
        src: "img/battle/pokemonbtn.png",
        loop: false,
        pause: true
    });

    this.runbtn = new Tile({
        renderX: 770,
        renderY: this.screenHeight - 192 + 10 + 92 - 8,
        renderWidth: 256,
        renderHeight: 92,
        tileWidth: 130,
        tileHeight: 46,
        offset: 130,
        numberOfFrames: 2,
        src: "img/battle/runbtn.png",
        loop: false,
        pause: true
    });
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
}

Battle.prototype._playIntro1 = function() {
    if (this.tick >= 0 && this.tick < 5) {
        this.flash.alpha += 0.20;
    }
    if (this.tick >= 5 && this.tick < 10) {
        this.flash.alpha -= 0.20;
    }

    if (this.tick >= 10 && this.tick < 15) {
        this.flash.alpha += 0.20;
    }
    if (this.tick >= 15 && this.tick < 20) {
        this.flash.alpha -= 0.20;
<<<<<<< HEAD
=======
    }

    if (this.tick >= 20 && this.tick < 25) {
        this.flash.alpha += 0.20;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    }
    if (this.tick >= 25 && this.tick < 30) {
        this.flash.alpha -= 0.20;
    }

    if (this.tick >= 30 && this.tick < 35) {
        this.flash.alpha += 0.20;
    }
    if (this.tick >= 35 && this.tick < 40) {
        this.flash.alpha -= 0.20;
    }

    if (this.tick >= 60 && this.tick < 70) {
        this.flash.alpha += 0.10;
    }

    // Transition is over -> set starting positions
    if (this.tick === 105) {
        this.background.renderX = 0;

        this.bottombar.renderX = 0;

<<<<<<< HEAD
    if (this.tick >= 20 && this.tick < 25) {
        this.flash.alpha += 0.20;
    }
    if (this.tick >= 25 && this.tick < 30) {
        this.flash.alpha -= 0.20;
    }

    if (this.tick >= 30 && this.tick < 35) {
        this.flash.alpha += 0.20;
    }
    if (this.tick >= 35 && this.tick < 40) {
        this.flash.alpha -= 0.20;
    }

    if (this.tick >= 60 && this.tick < 70) {
        this.flash.alpha += 0.10;
    }

    // Transition is over -> set starting positions
    if (this.tick === 105) {
        this.background.renderX = 0;

        this.bottombar.renderX = 0;

=======
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        this.conversation.hidden = false;

        // this.textbox.renderX = 10;

        this.fightbtn.renderX = this.screenWidth/2 - 10;
        this.bagbtn.renderX = this.screenWidth/2 - 10 + 256;
        this.pokemonbtn.renderX = this.screenWidth/2 - 10;
        this.runbtn.renderX = this.screenWidth/2 - 10 + 256;
    }

    if (this.tick > 105 && this.tick < 175) {
        this.player.player_tile.renderX -= 15;
        this.player.base_tile.renderX -= 15;

        this.enemy.monster_tile.renderX += 15;
        this.enemy.base_tile.renderX += 15;
    }

    if (this.tick === 180) {
        this.enemy.monster_tile.pause = false;
        this.enemy.audio.play();

        this.conversation.addText("A wild monster appeared!+");
        this.conversation.nextable = true;
        this.conversation.next();
        this.conversation.addCallable(function() {
            this.tick = -1;
            this.state = "intro2";
            this.conversation.addText("Go hehehehehe!+");
            this.conversation.nextable = false;
        }.bind(this));
    }
}

Battle.prototype._playIntro2 = function() {
    if (this.tick === 0) {
        this.player.player_tile.pause = false;
    }

    if (this.tick > 0 && this.tick < 40) {
        this.player.player_tile.renderX -= 15;
    }

    if (this.tick === 10) {
        this.ball.renderX = 150;
    }

    if (this.tick > 10 && this.tick < 40) {
        this.ball.renderX += 5;
        this.ball.renderY += 2;
    }

    if (this.tick === 40) {
        this.player.monster_tile.pause = false;
        this.player.monster_tile.alpha = 1;
        this.player.audio.play();

        this.ball.renderX = -500;
    }

    if (this.tick === 60) {
        this.conversation.nextable = true;
        this.conversation.addText("What will+hehehe do?");
        this.conversation.addCallable(function() {
            this.conversation.nextable = false;
            this.state = "choose";
        }.bind(this));
    }
}

Battle.prototype._chooseMouseEvents = function() {
    let isInsideBox = function(x1, y1, x2, y2) {
        let x = this.service.listeners.mousePositionX;
        let y = this.service.listeners.mousePositionY;

        if (x > x1 && y > y1 && x < x2 && y < y2) {
            return true;
        }

        return false;
    }

    this.fightbtn.setFrame(0);
    this.bagbtn.setFrame(0);
    this.pokemonbtn.setFrame(0);
    this.runbtn.setFrame(0);

    if (isInsideBox(this.fightbtn.renderX, this.fightbtn.renderY, this.fightbtn.renderX + this.fightbtn.renderWidth, this.fightbtn.renderY + this.fightbtn.renderHeight)) {
        this.fightbtn.setFrame(1);

        if (this.service.listeners.click === true) {
            this.state = "choosefight";

            this.conversation.addText("+");
            this.conversation.nextable = true;
            this.conversation.next();
            this.conversation.nextable = false;
        }
    }

    if (isInsideBox(this.bagbtn.renderX, this.bagbtn.renderY, this.bagbtn.renderX + this.bagbtn.renderWidth, this.bagbtn.renderY + this.bagbtn.renderHeight)) {
        this.bagbtn.setFrame(1);

        if (this.service.listeners.click === true) {
            console.log("bag");
        }
    }

    if (isInsideBox(this.pokemonbtn.renderX, this.pokemonbtn.renderY, this.pokemonbtn.renderX + this.pokemonbtn.renderWidth, this.pokemonbtn.renderY + this.pokemonbtn.renderHeight)) {
        this.pokemonbtn.setFrame(1);

        if (this.service.listeners.click === true) {
            console.log("pokemon");
        }
    }

    if (isInsideBox(this.runbtn.renderX, this.runbtn.renderY, this.runbtn.renderX + this.runbtn.renderWidth, this.runbtn.renderY + this.runbtn.renderHeight)) {
        this.runbtn.setFrame(1);

        if (this.service.listeners.click === true) {
            this.state = "chooserun";
        }
    }
}

Battle.prototype._chooseFightMouseEvents = function() {
    let isInsideBox = function(x1, y1, x2, y2) {
        let x = this.service.listeners.mousePositionX;
        let y = this.service.listeners.mousePositionY;

        if (x > x1 && y > y1 && x < x2 && y < y2) {
            return true;
        }

        return false;
    }

    let x = this.service.listeners.mousePositionX;
    let y = this.service.listeners.mousePositionY;
}

Battle.prototype.update = function(ame) {
    this.tick += 1;

<<<<<<< HEAD
    // if (this.state === "intro1") {
    //     this._playIntro1();
    // }

    // if (this.state === "intro2") {
    //     this._playIntro2();

    //     this.ball.update();
    // }

    // if (this.state === "choose") {
    //     this._chooseMouseEvents();
    // }

    // if (this.state === "choosefight") {
    //     this._chooseFightMouseEvents();
    // }

    // if (this.state === "chooserun") {
        
    // }

    // this.player.monster_tile.update();
    // this.player.player_tile.update();
=======
    if (this.state === "intro1") {
        this._playIntro1();
    }

    if (this.state === "intro2") {
        this._playIntro2();

        this.ball.update();
    }

    if (this.state === "choose") {
        this._chooseMouseEvents();
    }

    if (this.state === "choosefight") {
        this._chooseFightMouseEvents();
    }

    if (this.state === "chooserun") {
        
    }

    this.player.monster_tile.update();
    this.player.player_tile.update();

    this.enemy.monster_tile.update();

    this.conversation.update();
}

Battle.prototype.render = function(context) {
    this.flash.render(context);

    this.background.render(context);
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    // this.enemy.monster_tile.update();

    // this.conversation.update();
}

Battle.prototype.render = function() {
    let context = this.service.battleContext;

    this.runbtnTile.render(context);
    // this.flash.render(context);

<<<<<<< HEAD
    // this.background.render(context);

    // // Enemy
    // this.enemy.base_tile.render(context);
    // this.enemy.monster_tile.render(context);
=======
    // this.textbox.render(context);

    this.conversation.render(context);

    if (this.state === "choose") {
        this.fightbtn.render(context);
        this.bagbtn.render(context);
        this.pokemonbtn.render(context);
        this.runbtn.render(context);
    }
}
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    // // Ball
    // this.ball.render(context);

<<<<<<< HEAD
    // // Player
    // this.player.base_tile.render(context);
    // this.player.player_tile.render(context);
    // this.player.monster_tile.render(context);

    // // Bottom bar
    // this.bottombar.render(context);

    // // this.textbox.render(context);

    // this.conversation.render(context);

    // if (this.state === "choose") {
    //     this.fightbtn.render(context);
    //     this.bagbtn.render(context);
    //     this.pokemonbtn.render(context);
    //     this.runbtn.render(context);
    // }
}

module.exports = Battle;

},{"./Conversation.js":2,"./Tile.js":9}],2:[function(require,module,exports){
const Tile = require("./Tile.js");

function Conversation(settings) {
    this.tile = new Tile({
        renderX: 0,
        renderY: 583,
        renderWidth: 1028,
        renderHeight: 179,
        tileWidth: 1028,
        tileHeight: 179,
        src: settings.backgroundSrc,
    });

    this.texts = ["+"];

    this.line1 = "";
    this.line2 = "";

    this.textsIndex = 0;

    this.callable = null;

    this.nextBtn = new Tile({
        renderX: 840,
        renderY: 610,
        renderWidth: 120,
        renderHeight: 120,
        tileWidth: 120,
        tileHeight: 120,
        offset: 120,
        numberOfFrames: 2,
        src: "img/conversation/nextBtn.png",
        loop: false,
        pause: true
    });

    // Hides the covnversation, do not render the converation if true
    this.hidden = settings.hidden;

    this.typing = false;

    this.nextable = settings.nextable;
}

// Shows the next text
Conversation.prototype.next = function() {
    // Do not go to next text if current text is still typing
    if (this.typing === true || this.nextable === false) {
        return;
    }

    if (this.callable) {
        this.callable();
        this.callable = null;
    }
=======
},{"./Conversation.js":2,"./Tile.js":9}],2:[function(require,module,exports){
const Tile = require("./Tile.js");

function Conversation(settings) {
    this.tile = new Tile({
        renderX: 0,
        renderY: 583,
        renderWidth: 1028,
        renderHeight: 179,
        tileWidth: 1028,
        tileHeight: 179,
        src: settings.backgroundSrc,
    });

    this.texts = ["+"];

    this.line1 = "";
    this.line2 = "";

    this.textsIndex = 0;

    this.callable = null;

    this.nextBtn = new Tile({
        renderX: 840,
        renderY: 610,
        renderWidth: 120,
        renderHeight: 120,
        tileWidth: 120,
        tileHeight: 120,
        offset: 120,
        numberOfFrames: 2,
        src: "img/conversation/nextBtn.png",
        loop: false,
        pause: true
    });

    // Hides the covnversation, do not render the converation if true
    this.hidden = settings.hidden;

    this.typing = false;

    this.nextable = settings.nextable;
}

// Shows the next text
Conversation.prototype.next = function() {
    // Do not go to next text if current text is still typing
    if (this.typing === true || this.nextable === false) {
        return;
    }

    if (this.callable) {
        this.callable();
        this.callable = null;
    }

    // Do not allow to go to next if next text is undefined!
    if (this.texts[this.textsIndex + 1] !== undefined) {
        this.textsIndex += 1;
    }

    this.line1 = "";
    this.line2 = "";
}

Conversation.prototype.addText = function(text) {
    this.texts.push(text);
}

/**
 * Adds a callable to be called when next is called
 */
Conversation.prototype.addCallable = function(callable) {
    this.callable = callable;
}

/**
 * Updates text 'animation' and determines if is typing
 */
Conversation.prototype._updateText = function() {
    if (this.line1 + "+" + this.line2 !== this.texts[this.textsIndex]) {
        this.typing = true;

        let index = this.texts[this.textsIndex].indexOf("+");

        if (this.texts[this.textsIndex].substring(0, index) !== this.line1) {
            this.line1 += this.texts[this.textsIndex][this.line1.length];
        } else {
            this.line2 += this.texts[this.textsIndex][this.line1.length + this.line2.length + 1];
        }

        if (this.line1 + "+" + this.line2 === this.texts[this.textsIndex]) {
            this.typing = false;
        }
    }
}

Conversation.prototype.update = function() {
    this._updateText();

    if (this.typing === true || this.nextable === false) {
        this.nextBtn.setFrame(0);
    } else {
        this.nextBtn.setFrame(1);
    }

    let x = this.service.listeners.mousePositionX;
    let y = this.service.listeners.mousePositionY;

    // If clicked at conversation bar
    if (this.service.listeners.click === true && x > 0 && x < 1028 && y > 576 && y < 768) {
        this.next();
    }
}

Conversation.prototype.render = function(context) {
    // Do not render if conversation should be hidden
    if (this.hidden === true) {
        return;
    }

    this.tile.render(context);

    this.nextBtn.render(context);

    context.font = "30px 'Press Start 2P'";
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillText(this.line1, 75, 660);

    context.font = "30px 'Press Start 2P'";
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillText(this.line2, 75, 720);
}

module.exports = Conversation;

},{"./Tile.js":9}],3:[function(require,module,exports){
function Entity(service, settings) {
    this.service = service;

    this.x = 14*32;
    this.y = 35*32;

    this.collisionSquare = 20;

    this.speed = 4;

    this.direction = 3;

    this.state = "walking";

    this.col = Math.floor(this.x / 32);
    this.row = Math.floor(this.y / 32);

    this.speedX = 0;
    this.speedY = 0;

    this.stop = false;

    // left, up, right, down
    this.walkTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,0)")
    ];
    this.grassTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,0)")
    ];
    this.waterTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,0)")
    ];

    this.activeTiles = this.walkTiles;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    // Do not allow to go to next if next text is undefined!
    if (this.texts[this.textsIndex + 1] !== undefined) {
        this.textsIndex += 1;
    }

<<<<<<< HEAD
    this.line1 = "";
    this.line2 = "";
}

Conversation.prototype.addText = function(text) {
    this.texts.push(text);
}

/**
 * Adds a callable to be called when next is called
 */
Conversation.prototype.addCallable = function(callable) {
    this.callable = callable;
}

/**
 * Updates text 'animation' and determines if is typing
 */
Conversation.prototype._updateText = function() {
    if (this.line1 + "+" + this.line2 !== this.texts[this.textsIndex]) {
        this.typing = true;

        let index = this.texts[this.textsIndex].indexOf("+");

        if (this.texts[this.textsIndex].substring(0, index) !== this.line1) {
            this.line1 += this.texts[this.textsIndex][this.line1.length];
        } else {
            this.line2 += this.texts[this.textsIndex][this.line1.length + this.line2.length + 1];
        }

        if (this.line1 + "+" + this.line2 === this.texts[this.textsIndex]) {
            this.typing = false;
        }
    }
}

Conversation.prototype.update = function() {
    this._updateText();

    if (this.typing === true || this.nextable === false) {
        this.nextBtn.setFrame(0);
    } else {
        this.nextBtn.setFrame(1);
    }

    let x = this.service.listeners.mousePositionX;
    let y = this.service.listeners.mousePositionY;

    // If clicked at conversation bar
    if (this.service.listeners.click === true && x > 0 && x < 1028 && y > 576 && y < 768) {
        this.next();
    }
}

Conversation.prototype.render = function(context) {
    // Do not render if conversation should be hidden
    if (this.hidden === true) {
        return;
    }

    this.tile.render(context);

    this.nextBtn.render(context);

    context.font = "30px 'Press Start 2P'";
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillText(this.line1, 75, 660);

    context.font = "30px 'Press Start 2P'";
    context.fillStyle = "rgba(0,0,0,0.8)";
    context.fillText(this.line2, 75, 720);
}

module.exports = Conversation;

},{"./Tile.js":9}],3:[function(require,module,exports){
function Entity(service, settings) {
    this.service = service;

    this.x = 14*32;
    this.y = 35*32;

    this.collisionSquare = 20;

    this.speed = 4;

    this.direction = 3;

    this.state = "walking";

    this.col = Math.floor(this.x / 32);
    this.row = Math.floor(this.y / 32);

    this.speedX = 0;
    this.speedY = 0;

    this.stop = false;

    // left, up, right, down
    this.walkTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWalk(0,0)")
    ];
    this.grassTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerGrass(0,0)")
    ];
    this.waterTiles = [
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,1)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,3)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,2)"),
        this.service.resources.tiles.find(tile => tile.name === "playerWater(0,0)")
    ];

    this.activeTiles = this.walkTiles;

    this.activeTile = this.walkTiles[3];

    // Make sure collision square always is in center of entity!
    // Render width and render height should always be > collision square !!
    this.renderX = this.service.worldCanvas.width/2 - (this.activeTile.renderWidth - this.collisionSquare) / 2;
    this.renderY = this.service.worldCanvas.height/2 - (this.activeTile.renderHeight - this.collisionSquare);
    
    this.canvasX = 512; // x position on canvas
    this.canvasY = 384; // y position on canvas
}

=======
    // Make sure collision square always is in center of entity!
    // Render width and render height should always be > collision square !!
    this.renderX = this.service.worldCanvas.width/2 - (this.activeTile.renderWidth - this.collisionSquare) / 2;
    this.renderY = this.service.worldCanvas.height/2 - (this.activeTile.renderHeight - this.collisionSquare);
    
    this.canvasX = 512; // x position on canvas
    this.canvasY = 384; // y position on canvas
}

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
Entity.prototype._setSpeed = function() {
    let deltaX = this.service.listeners.mousePositionX - (this.canvasX + this.collisionSquare / 2);
    let deltaY = this.service.listeners.mousePositionY - (this.canvasY + this.collisionSquare / 2);

    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);

    this.speedX = deltaX/distance*this.speed;
    this.speedY = deltaY/distance*this.speed;
}

/**
 * Sets the direction
 * 0 = left, 1 = up, 2 = right, 3 = down
 */
Entity.prototype._setDirection = function() {
    let radians = Math.atan2(this.speedY, this.speedX);

    let degrees = radians * (180 / Math.PI);

    if (degrees < -135 || degrees > 135) {
        this.direction = 0;
        // this.direction = "left";
    } else if (degrees < -45) {
        this.direction = 1;
        // this.direction = "up";
    } else if (degrees < 45) {
        this.direction = 2;
        // this.direction = "right";
    } else if (degrees < 135) {
        this.direction = 3;
        // this.direction = "down";
    }
}

Entity.prototype._detectCollision = function() {
    let x = this.x;
    let y = this.y;

    let squareSize = this.collisionSquare;

    let collisionPoints = [
        [x, y],                         // Top left
        [x+squareSize, y],              // Top right
        [x, y+squareSize],              // Bottom left
        [x+squareSize, y+squareSize],   // Bottom right
        [x+squareSize/2, y],            // Top
        [x+squareSize, y+squareSize/2], // Right
        [x+squareSize/2, y+squareSize], // Bottom
        [x, y+squareSize/2]             // Left
    ];

    // Iterate the collision points
    for (let i = 0; i < collisionPoints.length; i++) {
        let pointX = collisionPoints[i][0];
        let pointY = collisionPoints[i][1];

        let oldColumn = Math.floor(pointX / this.service.map.gridSize);
        let oldRow = Math.floor(pointY / this.service.map.gridSize);

        let newColumn = Math.floor((pointX+this.speedX) / this.service.map.gridSize);
        let newRow = Math.floor((pointY+this.speedY) / this.service.map.gridSize);

        // If collision point is trying to enter a disallowed grid
        if (this.service.map.collisionMap[newRow][newColumn] === 1) {
            // If trying to enter new column and row at the same time
            if (newColumn !== oldColumn && newRow !== oldRow) {
                // Trust that another collision point will find the collision
                continue;
            }

            // If trying to enter a new column
            if (newColumn !== oldColumn) {
                this.speedX = 0;
            }

            // If trying to enter a new row
            if (newRow !== oldRow) {
                this.speedY = 0;
            }
        }
    }
}

Entity.prototype.setState = function(state) {
    if (state === "walking") {
        this.activeTiles = this.walkTiles;
    }

    if (state === "grass") {
        this.activeTiles = this.grassTiles;
    }

    if (state === "water") {
        this.activeTiles = this.waterTiles;
    }

    this.state = state;
<<<<<<< HEAD

    this.renderX = this.service.worldCanvas.width/2 - (this.activeTiles[0].renderWidth - this.collisionSquare) / 2;
    this.renderY = this.service.worldCanvas.height/2 - (this.activeTiles[0].renderHeight - this.collisionSquare);

=======

    this.renderX = this.service.worldCanvas.width/2 - (this.activeTiles[0].renderWidth - this.collisionSquare) / 2;
    this.renderY = this.service.worldCanvas.height/2 - (this.activeTiles[0].renderHeight - this.collisionSquare);

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    console.log(this.state);
}

Entity.prototype.update = function() {

    this.activeTile = this.activeTiles[this.direction];

    if (this.service.listeners.mousedown)
    {
        // Use the mouse position to determine the entity speed (speedX speedY)
        this._setSpeed();

        // Use the speed to determine the direction
        this._setDirection();

        // Detect collision.
        // If collision is detected -> set the speed to 0
        this._detectCollision();

        if (this.stop === true) {
            this.speedX = 0;
            this.speedY = 0;
        }

        // Finally, add the speed to the position
        this.x += this.speedX;
        this.y += this.speedY;

        // Update grid position
        let oldCol = this.col;
        let oldRow = this.row;

        this.col = Math.floor((this.x + this.collisionSquare / 2 + this.speedX) / this.service.map.gridSize);
        this.row = Math.floor((this.y + this.collisionSquare / 2 + this.speedY) / this.service.map.gridSize);

        // If entering a new grid -> push the new grid event to service.events
        if (this.col !== oldCol || this.row !== oldRow) {
            let event = this.service.map.getEvent(this.col, this.row);

            this.service.events.push(event);
        }

        // Update tile animation (walking animation etc...)
        this.activeTile.update();

        return;
    }

    // Reset the animation of the tile
    this.activeTile.setFrame(0);
}

Entity.prototype.render = function() {
    this.activeTile.render(this.service.worldContext, this.renderX, this.renderY);

    // this.service.worldContext.beginPath();
    // this.service.worldContext.rect(this.canvasX, this.canvasY, this.collisionSquare, this.collisionSquare);
    // this.service.worldContext.stroke();
}

module.exports = Entity;

},{}],4:[function(require,module,exports){
const Entity = require("./Entity.js");
const MapManager = require("./MapManager.js");
const Battle = require("./Battle.js");
const Loader = require("./Loader.js");

Function.prototype.bindArgs = function(...boundArgs)
{
    let context = this;
    return function(...args) { return context.call(this, ...boundArgs, ...args); };
};

function Game() {
    this.now = null;
    this.deltaTime = 0;
    this.last = Date.now();
    this.step = 1/30;

    /**
     * Initialize service
     */
    this.service = {};

    this.service.util = require("./NiceFunctions.js");

    this.service.tick = 0;

    this.service.state = "";

    this.service.events = [];

    // Load resources to service.resouces
    this.loader = new Loader(this.service, {});
    // Initialize world state
    this.service.events.push(function() {
        this.loader.load(
            undefined,
            function() {
                this.service.coolguy = new Entity(this.service, {});

                this.service.mapManager = new MapManager(this.service, {});

                this.service.map = this.service.mapManager.getMap("startMap");
<<<<<<< HEAD

                this.service.state = "world";
            },
            function() {
                this.service.map.audio.volume = 0;
                this.service.util.playAudio(this.service.map.audio);
            }
        );
    });

    // Loading properties
    this.service.loadCanvas = document.querySelector(".loadCanvas");
    this.service.loadContext = this.service.loadCanvas.getContext("2d");

    // Battle properties
    this.service.battleCanvas = document.querySelector(".battleCanvas");
    this.service.battleContext = this.service.battleCanvas.getContext("2d");

    // World properties
    this.service.worldCanvas = document.querySelector(".worldCanvas");
    this.service.worldContext = this.service.worldCanvas.getContext("2d");

=======

                this.service.state = "world";
            },
            function() {
                this.service.map.audio.volume = 0;
                this.service.util.playAudio(this.service.map.audio);
            }
        );
    });

    // Loading properties
    this.service.loadCanvas = document.querySelector(".loadCanvas");
    this.service.loadContext = this.service.loadCanvas.getContext("2d");

    // Battle properties
    this.service.battleCanvas = document.querySelector(".battleCanvas");
    this.service.battleContext = this.service.battleCanvas.getContext("2d");

    // World properties
    this.service.worldCanvas = document.querySelector(".worldCanvas");
    this.service.worldContext = this.service.worldCanvas.getContext("2d");

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    require("./listeners.js").addListeners(this.service);

    this.startGame();
}

Game.prototype.startGame = function() {
    function frame() {
        this.now = Date.now();

        this.deltaTime = this.deltaTime + Math.min(1, (this.now - this.last) / 1000);

        while(this.deltaTime > this.step) {
            this.deltaTime = this.deltaTime - this.step;
            this.update();
            this.render();
        }

        this.last = this.now;

        requestAnimationFrame(frame.bind(this));
    }

    // Start game!
    requestAnimationFrame(frame.bind(this));
};

Game.prototype.update = function() {
    this.service.tick += 1;

    // Check for events in service.events
    this.checkEvents();
<<<<<<< HEAD

    // Update loader
    this.loader.update();

=======

    // Update loader
    this.loader.update();

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    if (this.service.state === "loading") {
    }

    if (this.service.state === "battle") {
        // Update battle
<<<<<<< HEAD
        this.service.battle.update();
=======
        this.battle.update();
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    }

    if (this.service.state === "world") {
        // Update coolguy
        this.service.coolguy.update();

        // Update map
        this.service.map.update();
    }

    this.service.listeners.click = false;
    this.service.listeners.mouseup = false;
}

Game.prototype.render = function() {
    this.loader.render();

<<<<<<< HEAD
    if (this.service.state === "battle") {
        let context = this.service.battleContext;

        context.clearRect(0, 0, this.service.battleCanvas.width, this.service.battleCanvas.height);

        this.service.battle.render();
=======
    if (this.state === "battle") {
        let context = this.battleContext;

        context.clearRect(0, 0, this.battleCanvas.width, this.battleCanvas.height);

        this.battle.render();
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    }

    if (this.service.state === "world") {
        let context = this.service.worldContext;

        context.clearRect(0, 0, this.service.worldCanvas.width, this.service.worldCanvas.height);

        this.service.map.renderLayer1();

        this.service.coolguy.render();

        this.service.map.renderLayer2();
    }
}

/**
 * Iterates and executes all events in service.events
 */
Game.prototype.checkEvents = function() {
    // Do not check for events if there are no events!
    if (this.service.events.length === 0) {
        return;
<<<<<<< HEAD
    }
    
    for (let i = 0; i < this.service.events.length; i++) {
        let event = this.service.events[i];

        event.call(this);
    }
=======
    }
    
    for (let i = 0; i < this.service.events.length; i++) {
        let event = this.service.events[i];

        event.call(this);
    }
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    // All events have been checked -> make the events array empty
    this.service.events = [];
}

module.exports = Game;
<<<<<<< HEAD

},{"./Battle.js":1,"./Entity.js":3,"./Loader.js":5,"./MapManager.js":7,"./NiceFunctions.js":8,"./listeners.js":11}],5:[function(require,module,exports){
const Tile = require("./Tile.js");

function Loader(service, settings)
{
    this.service = service;

    this.service.resources = {};
    this.service.resources.tiles = [];
    this.service.resources.monsters = [];

    this.service.resources.getTile = function(tilename, renderX, renderY, renderWidth, renderHeight) {
        let tile = this.service.resources.tiles.find(tile => tile.name === tilename);

        // Where to render tile
        tile.renderX = renderX;
        tile.renderY = renderY;

        // Render size
        tile.renderWidth = renderWidth;
        tile.renderHeight = renderHeight;

=======

},{"./Battle.js":1,"./Entity.js":3,"./Loader.js":5,"./MapManager.js":7,"./NiceFunctions.js":8,"./listeners.js":11}],5:[function(require,module,exports){
const Tile = require("./Tile.js");

function Loader(service, settings)
{
    this.service = service;

    this.service.resources = {};

    this.service.resources.getTile = function(tilename, renderX, renderY) {
        let tile = this.service.resources.tiles.find(tile => tile.name === tilename);
        tile.renderX = renderX;
        tile.renderY = renderY;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        return tile;
    }.bind(this);
    
    this.tick = 0;

    this.endTick = null;

    this.placeholderImage = new Image();
    this.placeholderImage.src = "img/placeholder.png";
<<<<<<< HEAD

    this.loading = false;

    this.loadCallable1 = null;
    this.loadCallable2 = null;
    this.loadCallable3 = null;

    /**
     * Create the tiles
     */
    this._createTiles();

    /**
     * Add the images to the tiles
     */
=======

    this.loading = false;

    this.loadCallable1 = null;
    this.loadCallable2 = null;
    this.loadCallable3 = null;

    this._loadTiles();
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    this._loadImages();

    this._loadAudios();
}

Loader.prototype._loadAudios = function() {
<<<<<<< HEAD
    let audiosSrc = [
=======
    let audioSrcs = [
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        "audio/music1.mp3",
        "audio/music2.mp3"
    ];

    let audios = [];

<<<<<<< HEAD
    for (let i = 0; i < audiosSrc.length; i++) {
        let audio = new Audio(audiosSrc[i]);
=======
    for (let i = 0; i < audioSrcs.length; i++) {
        let audio = new Audio(audioSrcs[i]);
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        audios.push(audio);
    }

    this.service.resources.audios = audios;
}

<<<<<<< HEAD
/**
 * Iterate all tiles and load their image srcs
 */
Loader.prototype._loadImages = function() {
    // Create a unique array of all images used in the game
    let imagesSrc = [];

    for (let i = 0; i < this.service.resources.tiles.length; i++) {
        let tile = this.service.resources.tiles[i];

        imagesSrc.push(tile.src);
    }

    imagesSrc = [...new Set(imagesSrc)];

    // Create an image element for every src
    for (let i = 0; i < imagesSrc.length; i++) {
        let imageSrc = imagesSrc[i];

        let image = new Image();

        // When the image has finished loading...
        image.addEventListener("load", function(event) {
            let img = event.target;

            // ...add the image element to all tiles with the same src
            for (let i = 0; i < this.service.resources.tiles.length; i++) {
                let tile = this.service.resources.tiles[i];

                if (tile.src === img.getAttribute("src")) {
                    tile.image = img;
                }
            }
        }.bind(this));

        image.src = imageSrc;
    }
}

Loader.prototype._createTiles = function() {
    /**
     * Sprites
     * (Sprite has many tiles)
     */
=======
Loader.prototype._loadImages = function() {
    // List of all image srcs to ever be used in the game
    let imageSrcs = [
        "img/Sea.png",
        "img/map1layer1.png",
        "img/map1layer2.png",
        "img/house1layer1.png",
        "img/house1layer2.png",
        "img/character7_walking.png",
        "img/character_water.png",
        "img/character7_grass.png"
    ];

    let images = [];

    // Create image elements for all images
    for (let i = 0; i < imageSrcs.length; i++) {
        let image = new Image();

        image.addEventListener("load", function(event) {
            let image2 = event.target;
            // let image2 = event.path[0];
            // Add this image to all tiles that should have this image
            for (let i = 0; i < this.service.resources.tiles.length; i++) {
                let tile = this.service.resources.tiles[i];
                if (tile.src === image2.getAttribute("src")) {
                    tile.image = image2;
                }
            }
        }.bind(this));

        image.src = imageSrcs[i];

        images.push(image);
    }

    this.service.resources.images = images;
}

Loader.prototype._loadTiles = function() {
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    // Takes a sprite and return tiles
    let spriteToTiles = function(sprite) {
        let tiles = [];

        for (let y = 0; y < sprite.spriteHeight/sprite.tileHeight; y++) {
            for (let x = 0; x < sprite.spriteWidth/sprite.tileWidth; x++) {
                let tile = new Tile(Object.assign({}, sprite, {
<<<<<<< HEAD
                    // placeholderImage: this.placeholderImage,
=======
                    placeholderImage: this.placeholderImage,
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
                    name: sprite.name + "(" + x + "," + y + ")",
                    spriteCol: x,
                    spriteRow: y
                }));
                tiles.push(tile);
            }
        }

        return tiles;
    }.bind(this);

<<<<<<< HEAD
    let sprites = require("./resources/sprites.json");

    for (let i = 0; i < sprites.length; i++) {
        let tiles = spriteToTiles(sprites[i]);

        this.service.resources.tiles.push(...tiles);
    }

    /**
     * Tiles
     */
    let tiles = require("./resources/tiles.json");

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].placeholderImage = this.placeholderImage;

        this.service.resources.tiles.push(new Tile(tiles[i]));
    }

    /**
     * Monster tiles
     */
    let monsters = require("./resources/monsters.json");

    for (let i = 0; i < monsters.length; i++) {
        monsters[i].tileFront = new Tile(monsters[i].tileFront);
    }

    this.service.resources.monsters = monsters;
=======
    /**
     * Sprites
     */
    let playerWalkingSprite = {
        name: "playerWalk",
        src: "img/character7_walking.png",
        tileWidth: 32,
        tileHeight: 48,
        spriteWidth: 32,
        spriteHeight: 192,
        renderWidth: 32,
        renderHeight: 48,
        numberOfFrames: 4,
        updateFrequency: 7
    };

    let playerWaterSprite = {
        name: "playerWater",
        src: "img/character_water.png",
        tileWidth: 64,
        tileHeight: 64,
        spriteWidth: 64,
        spriteHeight: 256,
        renderWidth: 64,
        renderHeight: 64,
        numberOfFrames: 4,
        updateFrequency: 7
    };

    let playerGrassSprite = {
        name: "playerGrass",
        src: "img/character7_grass.png",
        tileWidth: 32,
        tileHeight: 48,
        spriteWidth: 32,
        spriteHeight: 192,
        renderWidth: 32,
        renderHeight: 48,
        numberOfFrames: 4,
        updateFrequency: 7
    };

    let seaSprite = {
        name: "sea",
        src: "img/Sea.png",
        tileWidth: 16,
        tileHeight: 16,
        spriteWidth: 96,
        spriteHeight: 128,
        renderWidth: 32,
        renderHeight: 32,
        numberOfFrames: 8,
        updateFrequency: 7,
    };

    /**
     * Tiles
     */
    let map1layer1Tile = new Tile({name: "map1layer1", src: "img/map1layer1.png", placeholderImage: this.placeholderImage, tileWidth: 3200, tileHeight: 3200});

    let map1layer2Tile = new Tile({name: "map1layer2", src: "img/map1layer2.png", placeholderImage: this.placeholderImage, tileWidth: 3200, tileHeight: 3200});
    
    let house1layer1Tile = new Tile({name: "house1layer1", src: "img/house1layer1.png", placeholderImage: this.placeholderImage, tileWidth: 3200, tileHeight: 3200});
    
    let house1layer2Tile = new Tile({name: "house1layer2", src: "img/house1layer2.png", placeholderImage: this.placeholderImage, tileWidth: 3200, tileHeight: 3200});

    /**
     * Create tiles from sprites
     * Add tiles to resources.tiles
     */
    let tiles = [];

    tiles.push(...spriteToTiles(seaSprite));
    tiles.push(...spriteToTiles(playerWalkingSprite));
    tiles.push(...spriteToTiles(playerWaterSprite));
    tiles.push(...spriteToTiles(playerGrassSprite));
    tiles.push(map1layer1Tile);
    tiles.push(map1layer2Tile);
    tiles.push(house1layer1Tile);
    tiles.push(house1layer2Tile);

    this.service.resources.tiles = tiles;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
}

/**
 * Starts a new loading
 */
Loader.prototype.load = function(callable1, callable2, callable3)
{
    this.service.loadCanvas.style.zIndex = 1;

    this.tick = 0;

    this.endTick = null;

    this.loading = true;

    this.loadCallable1 = callable1;
    this.loadCallable2 = callable2;
    this.loadCallable3 = callable3;

    if (this.loadCallable1) {
        this.service.events.push(this.loadCallable1);
    }
}

Loader.prototype.update = function()
{
    this.tick += 1;

    // Start the actual loading only if 30 ticks have passed
    if (this.tick === 10) {
        if (this.loadCallable2) {
            this.service.events.push(this.loadCallable2);
        }

<<<<<<< HEAD
        // this.endTick = this.tick + 10;
        this.endTick = 10 + 10; // Black screen duration + tone duration
=======
        this.endTick = this.tick + 10;
    }

    if (this.endTick > 0) {
        this.endTick -= 1;
    }

    if (this.endTick === 0) {
        this.endTick = null;

        this.loading = false;

        this.service.loadCanvas.style.zIndex = -1;

        if (this.loadCallable3) {
            this.service.events.push(this.loadCallable3);
        }
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    }
}

Loader.prototype.render = function()
{
    let context = this.service.loadContext;

    context.clearRect(0, 0, this.service.loadCanvas.width, this.service.loadCanvas.height);

    context.beginPath();

    let alpha = 1;
    if (this.endTick) {
        alpha = this.endTick/10;
    }
    else
    {
        alpha = this.tick/10;
    }
    context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
    context.fillRect(0, 0, 2000, 2000);
    context.stroke();

    // context.font = "26px Georgia";
    // context.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
    // context.fillText("Loading!", context.canvas.width/2 - 50, context.canvas.height/2 - 10);
}

module.exports = Loader;

},{"./Tile.js":9}],6:[function(require,module,exports){
function Map(service, settings) {
    this.service = service;

    this.x = settings.x ? settings.x : 0;
    this.y = settings.y ? settings.y : 0;

<<<<<<< HEAD
    if (this.endTick > 0) {
        this.endTick -= 1;
    }

    if (this.endTick === 0) {
        this.endTick = null;

        this.loading = false;

        this.service.loadCanvas.style.zIndex = -1;

        if (this.loadCallable3) {
            this.service.events.push(this.loadCallable3);
        }
    }
}

Loader.prototype.render = function()
{
    let context = this.service.loadContext;

    context.clearRect(0, 0, this.service.loadCanvas.width, this.service.loadCanvas.height);

    context.beginPath();

    let alpha = 1;
    if (this.endTick > 0) {
        alpha = this.endTick/10;
    }
    else if (this.tick > 0)
    {
        alpha = this.tick/10;
    }

    context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
    context.fillRect(0, 0, this.service.loadCanvas.width, this.service.loadCanvas.height);
    context.stroke();

    // context.font = "26px Georgia";
    // context.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
    // context.fillText("Loading!", context.canvas.width/2 - 50, context.canvas.height/2 - 10);
}

module.exports = Loader;

},{"./Tile.js":9,"./resources/monsters.json":12,"./resources/sprites.json":13,"./resources/tiles.json":14}],6:[function(require,module,exports){
function Map(service, settings) {
    this.service = service;

    this.x = settings.x ? settings.x : 0;
    this.y = settings.y ? settings.y : 0;

=======
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    this.collisionMap = settings.collisionMap;

    this.gridSize = settings.gridSize ? settings.gridSize : 32;

    this.layer1Tile = settings.layer1Tile;

    this.layer2Tile = settings.layer2Tile;

    this.audio = settings.audio;
    this.audio.loop = true;
    // this.audio.play();

    this.tiles = settings.tiles;
}

Map.prototype.attachEvent = function(col, row, event) {
    this.collisionMap[row][col] = event;
}

Map.prototype.getEvent = function(col, row) {
    return this.collisionMap[row][col];
}

Map.prototype.update = function() {
    // Update map position
    this.x = this.service.coolguy.canvasX - this.service.coolguy.x;
    this.y = this.service.coolguy.canvasY - this.service.coolguy.y;

    for (let i = 0; i < this.tiles.length; i++) {
        this.tiles[i].update();
    }
}

Map.prototype.renderLayer1 = function() {
    let context = this.service.worldContext;

    this.layer1Tile.render(context, this.x, this.y);

    /**
     * Render tiles!
     */
    for (let i = 0; i < this.tiles.length; i++) {
        this.tiles[i].render(context, this.x, this.y);
    }
}

Map.prototype.renderLayer2 = function() {
    let context = this.service.worldContext;

    this.layer2Tile.render(context, this.x, this.y);

    /**
     * Render squares!
     */
    for (let y = 0; y < this.collisionMap.length; y++) {
        for (let x = 0; x < this.collisionMap[y].length; x++) {
            if (this.collisionMap[y][x] !== 0) {
                // context.beginPath();
                // context.rect(this.x + x*32, this.y + y*32, 32, 32);
                // context.stroke();
            }
        }
    }
}

<<<<<<< HEAD
module.exports = Map;

},{}],7:[function(require,module,exports){
const Map = require("./Map.js");
const Tile = require("./Tile.js");
const Battle = require("./Battle.js");

function MapManager(service, {}) {
    this.service = service;

    // Some nice events
    this.normalEvent = function() {
        this.service.coolguy.setState("walking");
    };
    this.newMapEvent = function(newMapName, newX, newY) {
        this.loader.load(
            function() {
                this.service.util.pauseAudio(this.service.map.audio);

                this.service.coolguy.stop = true;
            },
            function() {
                this.service.map = this.service.mapManager.getMap(newMapName);

                this.service.coolguy.x = newX * 32;
                this.service.coolguy.y = newY * 32;
            },
            function() {
                this.service.util.playAudio(this.service.map.audio);

                this.service.coolguy.stop = false;
            }
        );
    };
    this.grassEvent = function() {
        this.service.coolguy.setState("grass");
=======
Map.prototype.destroy = function() {
    this.audio.pause();
}
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

        // Find the tile coolguy is standing on
        let tile = this.service.map.tiles.find(tile => tile.renderCol === this.service.coolguy.col && tile.renderRow === this.service.coolguy.row);

<<<<<<< HEAD
        // tile.pause = false;

        if (true) {
            this.service.state = "battle";

            let monsters = this.service.resources.monsters;
            this.service.battle = new Battle(this.service, {opponent: monsters[this.service.tick % monsters.length]});

            this.service.worldCanvas.style.zIndex = -1;
            this.service.battleCanvas.style.zIndex = 1;
        }
=======
},{}],7:[function(require,module,exports){
const Map = require("./Map.js");
const Tile = require("./Tile.js");
const Battle = require("./Battle.js");

function MapManager(service) {
    this.service = service;

    // Some nice events
    this.normalEvent = function() {
        this.service.coolguy.setState("walking");
    };
    this.newMapEvent = function(newMapName, newX, newY) {
        this.loader.load(
            function() {
                this.service.util.pauseAudio(this.service.map.audio);

                this.service.coolguy.stop = true;
            },
            function() {
                this.service.map.destroy();

                this.service.map = this.service.mapManager.getMap(newMapName);

                this.service.coolguy.x = newX * 32;
                this.service.coolguy.y = newY * 32;
            },
            function() {
                this.service.util.playAudio(this.service.map.audio);

                this.service.coolguy.stop = false;
            }
        );
    };
    this.grassEvent = function() {
        this.service.coolguy.setState("grass");

        // Find the tile coolguy is standing on
        let tile = this.service.map.tiles.find(tile => tile.renderCol === this.service.coolguy.col && tile.renderRow === this.service.coolguy.row);

        // tile.pause = false;

        this.service.battle = new Battle(this.service, {});
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    };
    this.waterEvent = function() {
        this.service.coolguy.setState("water");
    }
}

MapManager.prototype.getMap = function(mapName) {
    if (mapName === "startMap") {
        return this.createStartMap();
    }

    if (mapName === "house1Map") {
        return this.createHouse1Map();
    }
}

/**
 * Creates and returns a start map
 */
MapManager.prototype.createStartMap = function() {
    let collisionMap = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,1,1,1,1,3,3,3,3,0,0,1,1,1,1,0,0,0,0,1,1],
        [1,1,0,0,1,1,1,1,3,3,3,3,0,0,1,1,1,1,0,0,0,0,1,1],
        [1,1,0,0,1,1,1,1,3,3,3,3,0,0,1,2,1,1,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,4,4,4,4,4,4,0,1,1],
        [1,1,0,0,0,1,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    let layer1Tile = this.service.resources.tiles.find(tile => tile.name === "map1layer1");

    let layer2Tile = this.service.resources.tiles.find(tile => tile.name === "map1layer2");

    let audio = this.service.resources.audios.find(audio => audio.getAttribute("src") === "audio/music1.mp3");

    let tiles = [
<<<<<<< HEAD
        this.service.resources.getTile("sea(0,2)", 15*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(1,2)", 16*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(2,2)", 17*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(3,2)", 18*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(4,2)", 19*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(5,2)", 20*32, 32*32, 32, 32),
        this.service.resources.getTile("sea(0,3)", 15*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(1,3)", 16*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(2,3)", 17*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(3,3)", 18*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(4,3)", 19*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(5,3)", 20*32, 33*32, 32, 32),
        this.service.resources.getTile("sea(0,4)", 15*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(1,4)", 16*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(2,4)", 17*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(3,4)", 18*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(4,4)", 19*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(5,4)", 20*32, 34*32, 32, 32),
        this.service.resources.getTile("sea(0,5)", 15*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(1,5)", 16*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(2,5)", 17*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(3,5)", 18*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(4,5)", 19*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(5,5)", 20*32, 35*32, 32, 32),
        this.service.resources.getTile("sea(0,6)", 15*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(1,6)", 16*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(2,6)", 17*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(3,6)", 18*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(4,6)", 19*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(5,6)", 20*32, 36*32, 32, 32),
        this.service.resources.getTile("sea(0,7)", 15*32, 37*32, 32, 32),
        this.service.resources.getTile("sea(1,7)", 16*32, 37*32, 32, 32),
        this.service.resources.getTile("sea(2,7)", 17*32, 37*32, 32, 32),
        this.service.resources.getTile("sea(3,7)", 18*32, 37*32, 32, 32),
        this.service.resources.getTile("sea(4,7)", 19*32, 37*32, 32, 32),
        this.service.resources.getTile("sea(5,7)", 20*32, 37*32, 32, 32)
=======
        this.service.resources.getTile("sea(0,2)", 15*32, 32*32),
        this.service.resources.getTile("sea(1,2)", 16*32, 32*32),
        this.service.resources.getTile("sea(2,2)", 17*32, 32*32),
        this.service.resources.getTile("sea(3,2)", 18*32, 32*32),
        this.service.resources.getTile("sea(4,2)", 19*32, 32*32),
        this.service.resources.getTile("sea(5,2)", 20*32, 32*32),
        this.service.resources.getTile("sea(0,3)", 15*32, 33*32),
        this.service.resources.getTile("sea(1,3)", 16*32, 33*32),
        this.service.resources.getTile("sea(2,3)", 17*32, 33*32),
        this.service.resources.getTile("sea(3,3)", 18*32, 33*32),
        this.service.resources.getTile("sea(4,3)", 19*32, 33*32),
        this.service.resources.getTile("sea(5,3)", 20*32, 33*32),
        this.service.resources.getTile("sea(0,4)", 15*32, 34*32),
        this.service.resources.getTile("sea(1,4)", 16*32, 34*32),
        this.service.resources.getTile("sea(2,4)", 17*32, 34*32),
        this.service.resources.getTile("sea(3,4)", 18*32, 34*32),
        this.service.resources.getTile("sea(4,4)", 19*32, 34*32),
        this.service.resources.getTile("sea(5,4)", 20*32, 34*32),
        this.service.resources.getTile("sea(0,5)", 15*32, 35*32),
        this.service.resources.getTile("sea(1,5)", 16*32, 35*32),
        this.service.resources.getTile("sea(2,5)", 17*32, 35*32),
        this.service.resources.getTile("sea(3,5)", 18*32, 35*32),
        this.service.resources.getTile("sea(4,5)", 19*32, 35*32),
        this.service.resources.getTile("sea(5,5)", 20*32, 35*32),
        this.service.resources.getTile("sea(0,6)", 15*32, 36*32),
        this.service.resources.getTile("sea(1,6)", 16*32, 36*32),
        this.service.resources.getTile("sea(2,6)", 17*32, 36*32),
        this.service.resources.getTile("sea(3,6)", 18*32, 36*32),
        this.service.resources.getTile("sea(4,6)", 19*32, 36*32),
        this.service.resources.getTile("sea(5,6)", 20*32, 36*32),
        this.service.resources.getTile("sea(0,7)", 15*32, 37*32),
        this.service.resources.getTile("sea(1,7)", 16*32, 37*32),
        this.service.resources.getTile("sea(2,7)", 17*32, 37*32),
        this.service.resources.getTile("sea(3,7)", 18*32, 37*32),
        this.service.resources.getTile("sea(4,7)", 19*32, 37*32),
        this.service.resources.getTile("sea(5,7)", 20*32, 37*32)
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    ];

    let map = new Map(this.service, {
        x: 0,
        y: 0,
        collisionMap: collisionMap,
        layer1Tile: layer1Tile,
        layer2Tile: layer2Tile,
        audio: audio,
        tiles: tiles
    });

    // Attach map events!
    for (let y = 0; y < collisionMap.length; y++) {
        for (let x = 0; x < collisionMap[y].length; x++) {
            // Normal state!
            if (collisionMap[y][x] === 0) {
                map.attachEvent(x, y, this.normalEvent);
            }

            // Teleport!
            if (collisionMap[y][x] === 2) {
                map.attachEvent(x, y, this.newMapEvent.bindArgs("house1Map", 10, 10));
            }

            // Grass!
            if (collisionMap[y][x] === 3) {
                map.attachEvent(x, y, this.grassEvent);
            }

            // Water! Swim!
            if (collisionMap[y][x] === 4) {
                map.attachEvent(x, y, this.waterEvent);
            }
        }
    }

    return map;
}

MapManager.prototype.createHouse1Map = function() {
    let x = 0;
    let y = 0;

    let collisionMap = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    let layer1Tile = this.service.resources.tiles.find(tile => tile.name === "house1layer1");

    let layer2Tile = this.service.resources.tiles.find(tile => tile.name === "house1layer2");

    let audio = this.service.resources.audios.find(audio => audio.getAttribute("src") === "audio/music2.mp3");

    let tiles = [];

    let map = new Map(this.service, {
        x: 0,
        y: 0,
        collisionMap: collisionMap,
        layer1Tile: layer1Tile,
        layer2Tile: layer2Tile,
        audio: audio,
        tiles: tiles
    });

    for (let y = 0; y < collisionMap.length; y++) {
        for (let x = 0; x < collisionMap[y].length; x++) {
            // Normal state!
            if (collisionMap[y][x] === 0) {
                map.attachEvent(x, y, this.normalEvent);
            }

            // Teleport!
            if (collisionMap[y][x] === 2) {
                map.attachEvent(x, y, this.newMapEvent.bindArgs("startMap", 13, 37));
            }

            // Grass!
            if (collisionMap[y][x] === 3) {
                map.attachEvent(x, y, this.grassEvent);
            }

            // Water! Swim!
            if (collisionMap[y][x] === 4) {
                map.attachEvent(x, y, this.waterEvent);
            }
        }
    }

    return map;
}

module.exports = MapManager;

},{"./Battle.js":1,"./Map.js":6,"./Tile.js":9}],8:[function(require,module,exports){
module.exports = {
    pauseAudio: function(audio) {
        let fadeAudio1 = setInterval(function() {
<<<<<<< HEAD
            if (audio.volume <= 0.010) {
=======
            if (audio.volume <= 0.025) {
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
                audio.pause();

                clearInterval(fadeAudio1);

                return;
            }

<<<<<<< HEAD
            audio.volume -= 0.010;
        }, 10);
=======
            audio.volume -= 0.025;
        }, 25);
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    },
    playAudio: function(audio) {
        audio.play();

        let fadeAudio2 = setInterval(function() {
<<<<<<< HEAD
            if (audio.volume >= 0.990) {
=======
            if (audio.volume >= 0.975) {
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
                clearInterval(fadeAudio2);

                return;
            }

<<<<<<< HEAD
            audio.volume += 0.010;
=======
            audio.volume += 0.025;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        }, 25);
    }
};

},{}],9:[function(require,module,exports){
function Tile(settings) {
<<<<<<< HEAD
    this.name = settings.name ? settings.name : "tilename";

    this.src = settings.src;

    // this.placeholderImage = settings.placeholderImage;
=======
    this.name = settings.name ? settings.name : "hehe";

    this.src = settings.src;

    this.placeholderImage = settings.placeholderImage;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    this.tileWidth = settings.tileWidth ? settings.tileWidth : 0;
    this.tileHeight = settings.tileHeight ? settings.tileHeight : 0;

    this.spriteWidth = settings.spriteWidth ? settings.spriteWidth : this.tileWidth;
    this.spriteHeight = settings.spriteHeight ? settings.spriteHeight : this.tileHeight;

    this.renderWidth = settings.renderWidth ? settings.renderWidth : this.tileWidth;
    this.renderHeight = settings.renderHeight ? settings.renderHeight : this.tileHeight;

    this.spriteCol = settings.spriteCol ? settings.spriteCol : 0;
    this.spriteRow = settings.spriteRow ? settings.spriteRow : 0;

    this.numberOfFrames = settings.numberOfFrames ? settings.numberOfFrames : 1;

    this.updateFrequency = settings.updateFrequency ? settings.updateFrequency : null;

    this.loop = settings.loop === undefined ? true : settings.loop;

    this.pause = settings.pause === undefined ? false : settings.pause;

    this.alpha = settings.alpha ? settings.alpha : 1;

<<<<<<< HEAD
=======
    this.renderCol = settings.renderCol ? settings.renderCol : 0;
    this.renderRow = settings.renderRow ? settings.renderRow : 0;

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    this.renderX = settings.renderX ? settings.renderX : 0;
    this.renderY = settings.renderY ? settings.renderY : 0;

    // Animation
    this.animationCounter = 0;

    this.spriteOffset = 0;

    // 
    this.tick = 0;
}

Tile.prototype.setFrame = function(framenumber) {
    this.animationCounter = framenumber;
    this.spriteOffset = framenumber * this.spriteWidth;
}

Tile.prototype.update = function() {
    this.tick += 1;

    // Dont update if animation is paused
    if (this.pause === true) {
        return;
    }

    // No need to update if only one frame!
    if (this.numberOfFrames === 1) {
        return;
    }

    if (this.tick % this.updateFrequency === 0) {
        this.animationCounter += 1;

        this.spriteOffset = this.spriteWidth * (this.animationCounter % this.numberOfFrames);

        // If no looping and at the first frame of the animation -> pause animation
        if (this.loop === false && this.animationCounter % this.numberOfFrames === 0) {
            this.pause = true;
        }
    }
}

<<<<<<< HEAD
Tile.prototype.render = function(context, rX, rY) {
    // Do not render if tile has no image
    if (this.image === undefined) {
        // console.log("no image!");

        return;
    }

    // mapX = mapX ? mapX : this.service.map.x;
    // mapY = mapY ? mapY : this.service.map.y;

    rX = rX ? rX : 0;
    rY = rY ? rY : 0;
=======
Tile.prototype.render = function(context, mapX, mapY) {
    mapX = mapX ? mapX : this.service.map.x;
    mapY = mapY ? mapY : this.service.map.y;
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a

    let xInImage = this.spriteCol * this.tileWidth + this.spriteOffset;
    let yInImage = this.spriteRow * this.tileHeight;

    context.save();

    context.globalAlpha = this.alpha;

    context.save();

    context.globalAlpha = this.alpha;

    context.drawImage(
<<<<<<< HEAD
        // this.image ? this.image : this.placeholderImage,
        this.image,
=======
        this.image ? this.image : this.placeholderImage,
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
        xInImage,
        yInImage,
        this.tileWidth,
        this.tileHeight,
        // mapX + this.renderX,
        // mapY + this.renderY,
        rX + this.renderX,
        rY + this.renderY,
        this.renderWidth,
        this.renderHeight
    );

    context.restore();
}

module.exports = Tile;

},{}],10:[function(require,module,exports){
let Game = require("./Game.js");

// node_modules/.bin/browserify source/js/app.js > debug/js/bundle.js

window.addEventListener("load", function() {
    let game = new Game();
});

},{"./Game.js":4}],11:[function(require,module,exports){
function addListeners(service) {
    service.listeners = {};

    let clickEvent = function(event) {
        service.listeners.click = true;
    }

    service.worldCanvas.addEventListener("click", clickEvent);
    service.battleCanvas.addEventListener("click", clickEvent);

    let mousedownEvent = function(event) {
        service.listeners.mousedown = true;

        let canvasRect = service.worldCanvas.getBoundingClientRect();

        service.listeners.mousePositionX = event.clientX - canvasRect.left;
        service.listeners.mousePositionY = event.clientY - canvasRect.top;
    }

    service.worldCanvas.addEventListener("mousedown", mousedownEvent);
    service.battleCanvas.addEventListener("mousedown", mousedownEvent);

    let mousemoveEvent = function(event) {
        service.listeners.mousemove = true;

        let canvasRect = service.worldCanvas.getBoundingClientRect();

        service.listeners.mousePositionX = event.clientX - canvasRect.left;
        service.listeners.mousePositionY = event.clientY - canvasRect.top;
    }
<<<<<<< HEAD

    service.worldCanvas.addEventListener("mousemove", mousemoveEvent);
    service.battleCanvas.addEventListener("mousemove", mousemoveEvent);

=======

    service.worldCanvas.addEventListener("mousemove", mousemoveEvent);
    service.battleCanvas.addEventListener("mousemove", mousemoveEvent);

>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
    window.addEventListener("mouseup", function(event) {
        service.listeners.mousedown = false;
        service.listeners.mousemove = false;
    });
}

// function isInsideBox(x1, y1, x2, y2) {
//     let x = game.listeners.mousePositionX;
//     let y = game.listeners.mousePositionY;

//     if (x > x1 && y > y1 && x < x2 && y < y2) {
//         return true;
//     }

//     return false;
// }

module.exports = {
    addListeners: addListeners,
    // isInsideBox: isInsideBox
}

<<<<<<< HEAD
},{}],12:[function(require,module,exports){
module.exports=[
    {
        "name": "HAUNTER",
        "tileFront": {
            "src": "img/monsters/haunter_front.png",
            "tileWidth": 85,
            "tileHeight": 85,
            "numberOfFrames": 25,
            "updateFrequency": 1,
            "loop": false,
            "pause": true
        },
        "tileBack": {
            "src": "img/monsters/haunter_back.png"
        },
        "crySrc": "audio/monster/093Cry.wav"
    }
]

},{}],13:[function(require,module,exports){
module.exports=[
    {
        "name": "playerWalk",
        "src": "img/character7_walking.png",
        "tileWidth": 32,
        "tileHeight": 48,
        "spriteWidth": 32,
        "spriteHeight": 192,
        "numberOfFrames": 4,
        "updateFrequency": 7
    },
    {
        "name": "playerWater",
        "src": "img/character_water.png",
        "tileWidth": 64,
        "tileHeight": 64,
        "spriteWidth": 64,
        "spriteHeight": 256,
        "numberOfFrames": 4,
        "updateFrequency": 7
    },
    {
        "name": "playerGrass",
        "src": "img/character7_grass.png",
        "tileWidth": 32,
        "tileHeight": 48,
        "spriteWidth": 32,
        "spriteHeight": 192,
        "numberOfFrames": 4,
        "updateFrequency": 7
    },
    {
        "name": "sea",
        "src": "img/Sea.png",
        "tileWidth": 16,
        "tileHeight": 16,
        "spriteWidth": 96,
        "spriteHeight": 128,
        "numberOfFrames": 8,
        "updateFrequency": 7
    }
]

},{}],14:[function(require,module,exports){
module.exports=[
    {
        "name": "map1layer1",
        "src": "img/map1layer1.png",
        "tileWidth": 3200,
        "tileHeight": 3200
    },
    {
        "name": "map1layer2",
        "src": "img/map1layer2.png",
        "tileWidth": 3200,
        "tileHeight": 3200
    },
    {
        "name": "house1layer1",
        "src": "img/house1layer1.png",
        "tileWidth": 3200,
        "tileHeight": 3200
    },
    {
        "name": "house1layer2",
        "src": "img/house1layer2.png",
        "tileWidth": 3200,
        "tileHeight": 3200
    },
    {
        "name": "battleFightbtn",
        "src": "img/battle/fightbtn.png",
        "tileWidth": 130,
        "tileHeight": 46,
        "numberOfFrames": 2,
        "loop": false,
        "pause": true
    },
    {
        "name": "battleBagbtn",
        "src": "img/battle/bagbtn.png",
        "tileWidth": 130,
        "tileHeight": 46,
        "numberOfFrames": 2,
        "loop": false,
        "pause": true
    },
    {
        "name": "battlePokemonbtn",
        "src": "img/battle/pokemonbtn.png",
        "tileWidth": 130,
        "tileHeight": 46,
        "numberOfFrames": 2,
        "loop": false,
        "pause": true
    },
    {
        "name": "battleRunbtn",
        "src": "img/battle/runbtn.png",
        "tileWidth": 130,
        "tileHeight": 46,
        "numberOfFrames": 2,
        "loop": false,
        "pause": true
    },
    {
        "name": "battleBottombar",
        "src": "img/battle/bottombar.png",
        "tileWidth": 512,
        "tileHeight": 96
    },
    {
        "name": "battleBall",
        "src": "img/battle/ball.png",
        "tileWidth": 32,
        "tileHeight": 32,
        "numberOfFrames": 4,
        "updateFrequency": 3
    },
    {
        "name": "battleOpponentbase",
        "src": "img/battle/enemybaseFieldGrassEve.png",
        "tileWidth": 256,
        "tileHeight": 128
    },
    {
        "name": "battlePlayerbase",
        "src": "img/battle/playerbaseFieldGrassEve.png",
        "tileWidth": 408,
        "tileHeight": 64
    },
    {
        "name": "battlePlayer",
        "src": "img/battle/player_back.png",
        "tileWidth": 128,
        "tileHeight": 128,
        "numberOfFrames": 5,
        "updateFrequency": 5,
        "loop": false,
        "pause": true
    },
    {
        "name": "battleBgForestEve",
        "src": "img/battle/battlebgForestEve.png",
        "tileWidth": 512,
        "tileHeight": 288
    },
    {
        "name": "flash",
        "src": "img/battle/flash.png",
        "tileWidth": 1024,
        "tileHeight": 768
    }
]

=======
>>>>>>> 9eadeff960547ea93f8117bf669c7b871d4e4c8a
},{}]},{},[10]);
