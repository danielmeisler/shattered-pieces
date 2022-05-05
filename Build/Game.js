"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Images/jigsaw_06.jpg",
            edge: 1
        }
    };
    Template.sound = {
        // themes
        nightclub: "Pfad für Musik",
        // sfx
        click: "Pfad für Soundeffekt"
    };
    Template.locations = {
        street: {
            name: "Street",
            background: "./Images/street_01.png"
        },
        city: {
            name: "City",
            background: "./Images/city_01.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad für Bild",
                happy: "./Images/placeholder_girl.png",
                upset: "Pfad für Bild"
            }
        },
        kohana: {
            name: "Kohana",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Pfad für Bild"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: "",
        score: 0
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
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
        Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.street);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.Narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, "kanisterkopf");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Game.js.map