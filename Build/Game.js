"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function Alley() {
        console.log("FudgeStory Endabgabe Scene starting");
        //alert("Vollbild Modus (F11) zu empfehlen.");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S1000_01: "Hmmm, der Bus kommt mal wieder zu spät. Als wäre es nicht schon spät genug und dann jeden Tag sowas. Und dann war es heute noch so ein harter Tag, wenigstens heute hätte der Bus pünktlich kommen können...",
                S1000_02: "Wo kam der Schrei her? Ich sollte mal nachsehen...",
                S1000_03: "Ich glaube der Schrei kam aus dieser Gasse...",
                S1000_04: "Was soll ich tun?",
                S1000_05: "Ich sollte sie aufhalten, aber wie?",
                S1121_01: "Hey Jungs, lasst sie in Ruhe! Ihr könnt doch sowas nicht machen, beruhigt euch doch!",
                S1121_05: "Ahhh!",
                S1122_01: "Hey! Haut mal schnell ab von hier, ich habe die Polizei gerufen.",
                S1122_04: "Wir wollen hier doch nichts überstürz…",
                S1122_09: "Doch, ich habe sie nicht gerufen…",
                S1123_01: "Verzieht euch lieber schnell von hier oder das wird ziemlich unschön.",
                S1123_03: "Sicher, dass du weiterreden möchtest?"
            },
            Sumi: {
                S1121_08: "Schnell weg hier, die Polizei ist gleich hier. Ich wohne hier in der Nähe, dort kann ich dich verarzten.",
                S1122_08: "Du hast gar nicht gelogen?",
                S1122_10: "Naja, egal du siehst schlimm aus. Ich wohn hier in der Nähe, lass uns schnell von hier verschwinden.",
                S1123_07: "He du! Bleib bei mir, ich hole einen Krankenwagen! HILFE!"
            },
            Nobu: {
                S1121_02: "Hey Kleiner, verzieh dich. Geh einfach weiter und tu so als hättest du nichts gesehen.",
                S1121_03: "Junge, ich habe dich gewarnt, letzte Chance. Oder willst du den nächsten Tag nicht mehr erleben?",
                S1121_04: "Wenn du nicht hören willst, musst du eben fühlen du kleine Ratte.",
                S1121_06: "Du hättest auf mich hören sollen, jetzt ist es vorbei mit dir…",
                S1122_02: "Heee?! Du kleine Ratte bluffst doch. Du willst wohl drauf gehen?",
                S1122_03: "Du willst dich wohl mit uns anlegen? Wärst du bloß lieber einfach weitergelaufen, dann wäre dir nichts passiert.",
                S1122_05: "Wolltest du den Helden spielen? Das hat man davon du….",
                S1122_07: "Hast nochmal Glück gehabt du Wicht.",
                S1123_02: "Großes Maul für so ein halbes Hemd. Ha! Sicher, dass du dich mit uns anlegen möchtest?",
                S1123_04: "Hahaha! Nach der Ansage bin ich ja ziemlich enttäuscht von dir, du Ratte! Jetzt liegst du auf dem Boden, wo du auch hingehörst. Sicher, dass du weitermachen willst?",
                S1123_05: "Na warte, jetzt ist der Faden aber gerissen.",
                S1123_06: "Haha! Einstecken kannst du ja, aber wie lange hältst du durch?"
            },
            Schlaeger: {
                S1121_07: "Was, die Cops? Schnell weg hier!!!",
                S1122_06: "Er hat nicht gelogen? Schnell weg hier!"
            }
        };
        // Decisions
        let interfereOrNot;
        let howToInterfere;
        let nobuTalk;
        let provokeOrKeepUp;
        let interfereOrNotAnswer = {
            ignore: "Ignorieren",
            interefere: "Einmischen"
        };
        let howToInterfereAnswer = {
            talk: "Mit den Jungs reden",
            threatenWithCops: "Mit der Polizei drohen",
            threatenWithViolence: "Mit Gewalt drohen",
            getHelp: "Hilfe holen"
        };
        let nobuTalk1Answer = {
            iWillNot: "Das werde ich nicht.",
            goHome: "Geht doch einfach nach Hause.",
            unfair: "Fünf gegen Eine ist ziemlich unfair."
        };
        let nobuTalk2Answer = {
            justTalk: "Ich will nur reden",
            threaten: "Drohst du mir?"
        };
        let nobuTalk3Answer = {
            iLied: "War gelogen.",
            policeComing: "Sie sind unterwegs."
        };
        let nobuTalk4Answer = {
            doNotFight: "Kampf vermeiden",
            fight: "Sich wehren"
        };
        let provokeOrKeepUpAnswer = {
            provoke: "Mehr hast du nicht drauf?",
            keepUp: "Das kann den ganzen Tag so weitergehen!"
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_02);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.alley);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_03);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.harassment);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_04);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.ignore:
                // Zeitungsartikel fehlt
                return await badEnding1();
            case interfereOrNotAnswer.interefere:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_05);
                howToInterfere = await Endabgabe.ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");
                break;
        }
        switch (howToInterfere) {
            case howToInterfereAnswer.talk:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1121_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.alley);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_02);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk1Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_03);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk2Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_04);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1121_05);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.alley);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_06);
                // Polizei Sirenen oder so
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.schlaeger, text.Schlaeger.S1121_07);
                Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1121_08);
                return "SumisHome";
            case howToInterfereAnswer.threatenWithCops:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.alley);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_02);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk3Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_03);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(2);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk4Answer, "decisionClass");
                switch (nobuTalk) {
                    case nobuTalk4Answer.doNotFight:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_04);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_05);
                        await Endabgabe.ƒS.Location.show(Endabgabe.locations.alley);
                        await Endabgabe.ƒS.update(1);
                        // Polizei Sirenen oder so
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.schlaeger, text.Schlaeger.S1122_06);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_07);
                        Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_08);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_09);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_10);
                        return "SumisHome";
                    case nobuTalk4Answer.fight:
                }
            case howToInterfereAnswer.threatenWithViolence:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1123_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1123_03);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_04);
                // Zwischensequenz?
                provokeOrKeepUp = await Endabgabe.ƒS.Menu.getInput(provokeOrKeepUpAnswer, "decisionClass");
                switch (provokeOrKeepUp) {
                    case provokeOrKeepUpAnswer.provoke:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_05);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKnife);
                        await Endabgabe.ƒS.update(2);
                        return badEnding2;
                    case provokeOrKeepUpAnswer.keepUp:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_06);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1123_07);
                }
                //WIP for Hospital Scene
                return "protagonistHospital";
            case howToInterfereAnswer.getHelp:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHurt);
                await Endabgabe.ƒS.update(2);
                //WIP for Hospital Scene
                return "sumiHospital";
        }
    }
    Endabgabe.Alley = Alley;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.ƒS = FudgeStory;
    console.log("Endabgabe starting");
    Endabgabe.dataForSave = {
        nameProtagonist: "",
        score: 0
    };
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
            background: "./assets/images/backgrounds/street.jpg"
        },
        alley: {
            name: "Alley",
            background: "./assets/images/backgrounds/alley.jpg"
        }
    };
    Endabgabe.sequences = {
        black: {
            name: "Black",
            background: "./assets/images/sequences/black.png"
        },
        harassment: {
            name: "Harassment",
            background: "./assets/images/sequences/harassment.png"
        },
        coming: {
            name: "TheyComing",
            background: "./assets/images/sequences/coming.png"
        },
        gimmeYourHand: {
            name: "gimmeYourHand",
            background: "./assets/images/sequences/givemehand.png"
        },
        nobuHitMad: {
            name: "nobuHitMad",
            background: "./assets/images/sequences/nobuhitmad.png"
        },
        nobuKnife: {
            name: "nobuKnife",
            background: "./assets/images/sequences/nobuknife.png"
        },
        sumiHurt: {
            name: "sumiHurt",
            background: "./assets/images/sequences/sumihurt.png"
        }
    };
    Endabgabe.characters = {
        protagonist: {
            name: "Ich"
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
        },
        schlaeger: {
            name: "Schläger",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        },
        doktor: {
            name: "Doktor",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""
            }
        }
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
    Endabgabe.menuItems = {
        inventory: "≡",
        save: "▼",
        load: "▲",
        volumeDown: "♪",
        volumeUp: "♫",
    };
    Endabgabe.items = {
        item1: {
            name: "Poke Ball",
            description: "It has a simple red and white design, and it's the most known kind of Poké Ball",
            image: "./assets/images/items/pokeball.png",
            static: false
        },
        item2: {
            name: "Great Ball",
            description: "It is slightly better than the regular Poké Ball.",
            image: "./assets/images/items/superball.png",
            static: false
        },
        item3: {
            name: "Ultra Ball",
            description: "It is twice as good as a regular Poké Ball.",
            image: "./assets/images/items/hyperball.png",
            static: false
        },
        item4: {
            name: "Quick Ball",
            description: "A kind of Poké Ball that works better the sooner it is used in battle.",
            image: "./assets/images/items/flottball.png",
            static: false
        },
        item5: {
            name: "Premier Ball",
            description: "They act the same way as a regular Poké Ball but has a completely white design and is given as a gift when ten or more Poké Balls are bought at once.",
            image: "./assets/images/items/premierball.png",
            static: false
        },
        item6: {
            name: "Master Ball",
            description: "A very rare Poké Ball that never fails in an attempt to catch a Pokémon.",
            image: "./assets/images/items/masterball.png",
            static: false
        }
    };
    async function menuButtons(_option) {
        console.log(_option);
        if (_option == Endabgabe.menuItems.inventory) {
            Endabgabe.ƒS.Inventory.open();
        }
        if (_option == Endabgabe.menuItems.save) {
            await Endabgabe.ƒS.Progress.save();
        }
        else if (_option == Endabgabe.menuItems.load) {
            await Endabgabe.ƒS.Progress.load();
        }
        else if (_option == Endabgabe.menuItems.volumeUp) {
            volumeUp();
        }
        else if (_option == Endabgabe.menuItems.volumeDown) {
            volumeDown();
        }
    }
    Endabgabe.menuButtons = menuButtons;
    window.addEventListener("load", start);
    function start(_event) {
        for (let i = 0; i < 86; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item1);
        }
        for (let i = 0; i < 22; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item2);
        }
        for (let i = 0; i < 14; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item3);
        }
        for (let i = 0; i < 64; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item4);
        }
        for (let i = 0; i < 3; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item5);
        }
        for (let i = 0; i < 1; i++) {
            Endabgabe.ƒS.Inventory.add(Endabgabe.items.item6);
        }
        let scenes = [
            { scene: Endabgabe.Alley, name: "Alley", id: "alley" }
        ];
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function SumisHome() {
        console.log("FudgeStory SumisHome Scene starting");
        // Speeches
        let text = {
            Protagonist: {
                S2100_02: "Ach so bedankt man sich also? Was wäre denn mit dir passiert, wenn ich nicht eingegriffen hätte?",
                S2100_04: "Wow, da hat jemand aber eine gesunde Einstellung seine Probleme anzugehen.",
                S2100_06: "Stellt man sich eigentlich nicht zuerst vor? Egal, ich heiße: ",
                S2100_08: "Sumi, ein schöner Name. Was waren das eigentlich für Typen, die dich so bedrängt haben?",
                S2100_22: "Ach du kennst ihn? Ich dachte das wären einfach Schlägertypen, die dich abgefangen haben.",
                S2100_24: "Was ist passiert?",
                S2100_26: "Das ist dein Bruder? Das nicht mitzukriegen ist schon beinahe unmöglich…. Aber das tut mir sehr leid für dich.",
                S2100_28: "Aber was ist passiert?",
                S2110_02: "Das sollte ich zu dir sagen. Aber ja, adé.",
                S2120_02: "Ich weiß jetzt nicht, ob ich mich bedanken soll.",
                S2120_04: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2120_06: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
                S2121_01: "Das ist viel zu gefährlich, du solltest das lieber alles sein lassen. Du hast keine richtigen Anhaltspunkte, das ist viel zu riskant. Wenn er wirklich was mit der Entführung deines Bruders zu tun hat, dann ist er gefährlich und du könntest die Nächste sein.",
                S2122_02: "Und jetzt ist auch dein Bruder weg, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
                S2123_01: "Ich schätze deinen Optimismus, aber ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2123_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2123_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2123_07: "Es ist schon spät, ich sollte nach Hause… Wir treffen uns einfach morgen nach der Schule und setzen unsere Planung fort.",
                S2123_09: "Wirklich? Nur wenn es dir nichts ausmacht, denn ich möchte wirklich nicht komplett durchnässt zu Hause ankommen.",
                S2123_11: "Das klingt super. Vielen Dank!",
                S2123_12: "AH! WARUM BIST DU NACKT?",
                S2123_14: "Tut mir leid, das war nicht mit Absicht…",
                S2123_16: "...",
            },
            Sumi: {
                S2100_01: "Ich bin dir zwar dankbar, dass du mich gerettet hast…. Aber bist du irgendwie lebensmüde? Er hätte dich umbringen können.",
                S2100_03: "Das hätte dir ja egal sein können, ist ja meine Sache.",
                S2100_05: "Sag mir mal lieber, wie du heißt. Wenn du schon bei mir zuhause bist und ich dich verarzte, kann ich ja zumindest den Namen meines vermeintlichen „Retters“ erfahren.",
                S2100_07: "Alles klar, PROTAGONIST, danke nochmal für deine Hilfe. Ich heiße Sumi.",
                S2100_09: "Ehhhh, das ist kompliziert… und geht dich eigentlich auch nichts an…",
                S2100_11: "Das ist mir so egal, du hast über meinen Bruder hergezogen und ihn beleidigt.",
                S2100_13: "Verdiente Strafe? Ich weiß, dass zwischen ihm und dir was vorgefallen ist. Aber egal was es war, du hast keinen Recht so über ihn zu reden, nachdem er immer für dich da war.",
                S2100_15: "DU hast dich verändert, nicht er!",
                S2100_17: "JETZT VERZIEH DICH!",
                S2100_19: "Tut mir leid, dass du das Mitanhören musstest… komm ich verarzte dich fertig, dann kannst du nach Hause. Willst du so lange etwas zum Trinken haben?",
                S2100_20: "Alles klar.",
                S2100_21: "Das war eben der Typ, der dich so übel zugerichtet hat.",
                S2100_23: "Nein, Nobu kenn ich schon sehr lange… Er war der beste Freund meines Bruders. Jedoch ist er nicht mehr derselbe Mensch.",
                S2100_25: "Ja, vielleicht hast du es schon gesehen… überall in den Nachrichten wird von ihm berichtet und in der Stadt hängen überall Plakate.",
                S2100_27: "Schon in Ordnung.",
                S2100_29: "Hör zu, ich weiß nicht, ob ich einer fremden Person hier private Geschichten erzählen sollte. Ich bin gleich fertig, dann können sich unsere Wege wieder trennen.",
                S2110_01: "Ich bin fertig, danke nochmal. Pass auf dich auf und renn nicht wieder in solche Situationen rein, wenn du nicht draufgehen willst. Tschüss.",
                S2120_01: "Wow, so wie du aussiehst hätte ich solchen weise Worte nicht erwartet.",
                S2120_03: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der eben hier war, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2120_05: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl...",
                S2120_07: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",
                S2121_02: "Wer bist du? Ich treffe meine eigenen Entscheidungen… warum erzähl ich das eigentlich einer fremden Person? Du solltest gehen und mich in Ruhe mein Ding machen lassen.",
                S2122_01: "Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten. Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als unsere Mutter schwerkrank wurde und ins Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2122_03: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
                S2123_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2123_04: "Trotzdem…",
                S2123_06: "Na gut…",
                S2123_08: "Es ist zu spät und es regnet stark. Ich bin sowieso allein und erwarte niemanden. Du kannst hier übernachten.",
                S2123_10: "Ja das passt schon. Ich lass dir ein Bad ein und bringe dir Klamotten zum Wechseln, du wirst ja wahrscheinlich keine dabeihaben.",
                S2123_13: "ICH HABE VERGESSEN ABZUSCHLIESSEN, DA ICH SONST IMMER ALLEIN BIN, SCHLIESSE ICH NIE AB…. SCHLIESS WENIGSTENS DEINE AUGEN!",
                S2123_15: "Nicht so schlimm, war ja nicht deine Schuld…",
                S2123_17: "Ich bin fertig, du kannst sie wieder aufmachen...",
                S2123_18: "Ich weiß nicht, ob das der richtige Zeitpunkt ist sowas zu sagen, nachdem du mich halbnackt gesehen hast… aber danke…",
            },
            Nobu: {
                S2100_10: "Du glaubst wohl nicht, dass du einfach so verschwinden kannst? Nachdem du mich so vor meinen Jungs blamiert hast, musste ich ein Zeichen setzen, dass niemand mit ihrem Anführer so umgeht, auch du nicht.",
                S2100_12: "Es tut mir leid, dass Shou immer noch vermisst wird, Sumi… Aber seien wir ganz ehrlich. Dein Bruder hat schon immer seine Nase reingesteckt, wohin er nicht sollte, wahrscheinlich hat er sich mit den falschen Leuten angelegt und hat seine verdiente Strafe bezahlt.",
                S2100_14: "Kann ja sein, dass wir mal beste Freunde waren, jedoch hat er sich geändert.",
                S2100_16: "Immer heulst du wegen deinem Bruder rum, hast du auch ein anderes Band zum Abspielen?",
                S2100_18: "Na gut, heute ist viel passiert. Aber glaub nicht, dass du das nächste Mal so leicht davonkommst."
            }
        };
        // Decisions
        let juiceOrNot;
        let nobuOrShou;
        let goOrTalk;
        let talkOutOrHelp;
        let flirtOrSleep;
        let juiceOrNotAnswer = {
            juice: "Ich hätte gern Saft!",
            nothing: "Ich brauche nichts, danke."
        };
        let nobuOrShouAnswer = {
            nobu: "Wer war das?",
            shou: "Dein Bruder wird vermisst?"
        };
        let goOrTalkAnswer = {
            go: "Tut mir leid, du hast natürlich Recht. Danke fürs Verarzten, ich werde gleich gehen.",
            talk: "Gerade weil ich ein Fremder bin und nichts mit der Sache zu tun habe ist es manchmal leichter darüber zu reden."
        };
        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?",
            help: "Hilfe anbieten"
        };
        let flirtOrSleepAnswer = {
            flirt: "Du bist sehr schön...",
            sleep: "Wir sollten schlafen gehen..."
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumiHome);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_06);
        //Name Input
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
        Endabgabe.characters.protagonist.name = name;
    }
    Endabgabe.SumisHome = SumisHome;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Game.js.map