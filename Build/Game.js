"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.ƒS = FudgeStory;
    console.log("FILLER starting");
    Endabgabe.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Images/jigsaw_06.jpg",
            edge: 1
        }
    };
    Endabgabe.sound = {
        // themes
        nightclub: "Pfad für Musik",
        // sfx
        click: "Pfad für Soundeffekt"
    };
    Endabgabe.locations = {
        street: {
            name: "Street",
            background: "./assets/images/backgrounds/test.jpg"
        },
        city: {
            name: "City",
            background: "./Images/city_01.png"
        }
    };
    Endabgabe.characters = {
        protagonist: {
            name: ""
        },
        sumi: {
            name: "Sumi",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/sumi/sumi_normal.png"
            }
        },
        nobu: {
            name: "Nobu",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/nobu/nobu_normal.png",
                happy: "./assets/images/characters/nobu/nobu_happy.png"
            }
        },
        yuko: {
            name: "Yuko",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Pfad für Bild"
            }
        },
        shou: {
            name: "Shou",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/shou/shou_normal.png",
                happy: "./assets/images/characters/shou/shou_happy.png"
            }
        }
    };
    Endabgabe.dataForSave = {
        nameProtagonist: "",
        score: 0
    };
    let volume = 1.0;
    function volumeUp() {
        if (volume < 100) {
            volume += 0.1;
            Endabgabe.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Endabgabe.volumeUp = volumeUp;
    function volumeDown() {
        if (volume > 0) {
            volume -= 0.1;
            Endabgabe.ƒS.Sound.setMasterVolume(volume);
        }
    }
    Endabgabe.volumeDown = volumeDown;
    let menuItems = {
        //inventory: "I",
        save: "q",
        load: "p",
        volumeUp: "y",
        volumeDown: "x"
    };
    async function menuButtons(_option) {
        console.log(_option);
        // if (_option == inGameMenu.inventory) {
        // }
        if (_option == menuItems.save) {
            await Endabgabe.ƒS.Progress.save();
        }
        else if (_option == menuItems.load) {
            await Endabgabe.ƒS.Progress.load();
        }
        else if (_option == menuItems.volumeUp) {
            volumeUp();
        }
        else if (_option == menuItems.volumeDown) {
            volumeDown();
        }
    }
    window.addEventListener("load", start);
    let menu;
    function start(_event) {
        menu = Endabgabe.ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();
        let scenes = [
            { scene: Endabgabe.Street, name: "Street", id: "street" }
        ];
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Street() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0001: "hi",
                T0002: "noob"
            },
            Aisaka: {
                T0001: "he",
                T0002: "du assi"
            }
        };
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Narrator.T0001);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "ich tret dir in die eier du schmock");
    }
    Endabgabe.Street = Street;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Game.js.map