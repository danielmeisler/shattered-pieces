"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function EndOfNovel() { }
    Endabgabe.EndOfNovel = EndOfNovel;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.ƒS = FudgeStory;
    console.log("Endabgabe starting");
    Endabgabe.dataForSave = {
        nameProtagonist: "",
        romancePoints: 0,
        nobuKnows: false,
        protagonistHurt: false
    };
    Endabgabe.transitions = {
        blink: {
            duration: 3,
            alpha: "./assets/transitions/blink.jpg",
            edge: 1
        },
        fade: {
            duration: 3,
            alpha: "./assets/transitions/fade.jpg",
            edge: 1
        }
    };
    Endabgabe.sound = {
        // themes
        first_encounter: "./assets/sounds/music/First_Encounter.mp3",
        final_fight: "./assets/sounds/music/Final_Fight.mp3",
        // sfx
        woman_groan_1: "./assets/sounds/sfx/womangroan1.mp3",
        woman_groan_2: "./assets/sounds/sfx/womangroan2.mp3",
        woman_groan_3: "./assets/sounds/sfx/womangroan3.mp3",
        woman_groan_4: "./assets/sounds/sfx/womangroan4.mp3",
        punch_1: "./assets/sounds/sfx/punch1.mp3",
        punch_2: "./assets/sounds/sfx/punch2.mp3",
        punch_3: "./assets/sounds/sfx/punch3.mp3",
        punch_4: "./assets/sounds/sfx/punch4.mp3",
        punch_5: "./assets/sounds/sfx/punch5.mp3",
        punch_6: "./assets/sounds/sfx/punch6.mp3",
        fall_on_ground: "./assets/sounds/sfx/fallonground.mp3",
        knife_stabbing: "./assets/sounds/sfx/knifestabbing.mp3",
        smoking_cigarette: "./assets/sounds/sfx/smokingcigarette.mp3",
        man_laughter_short: "./assets/sounds/sfx/manlaughtershort.mp3",
        man_laughter_long: "./assets/sounds/sfx/manlaughterlong.mp3",
        heartbeat: "./assets/sounds/sfx/heartbeat.mp3",
        police_sirens: "./assets/sounds/sfx/policesirens.mp3",
        group_scream: "./assets/sounds/sfx/groupscream.mp3",
        woman_heavy_breathing: "./assets/sounds/sfx/womanheavybreathing.mp3"
    };
    Endabgabe.locations = {
        street_evening: {
            name: "Street_Evening",
            background: "./assets/images/backgrounds/street_evening.png"
        },
        school: {
            name: "School",
            background: "./assets/images/backgrounds/school.png"
        },
        school2: {
            name: "School",
            background: "./assets/images/backgrounds/school_harassment.png"
        },
        sumisHome_livingRoom_evening: {
            name: "SumisHome_LivingRoom_Evening",
            background: "./assets/images/backgrounds/sumishome_livingroom_evening.png"
        },
        sumisHome_livingRoom_night: {
            name: "SumisHome_LivingRoom_Night",
            background: "./assets/images/backgrounds/sumishome_livingroom_night.png"
        },
        sumisHome_bathRoom_normal: {
            name: "SumisHome_BathRoom_Normal",
            background: "./assets/images/backgrounds/sumishome_bathroom_normal.png"
        },
        sumisHome_bathRoom_foggy: {
            name: "SumisHome_BathRoom_Foggy",
            background: "./assets/images/backgrounds/sumishome_bathroom_foggy.png"
        },
        sumisHome_hallway: {
            name: "SumisHome_Hallway",
            background: "./assets/images/backgrounds/sumishome_hallway.png"
        },
        sumisHome_futonroom: {
            name: "SumisHome_FutonRoom",
            background: "./assets/images/backgrounds/sumishome_futonroom.png"
        },
        street_day: {
            name: "Street_Day",
            background: "./assets/images/backgrounds/street_day.png"
        },
        sumisHouse_outside: {
            name: "SumisHouse_Outside",
            background: "./assets/images/backgrounds/sumishouse_outside.png"
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
        },
        police: {
            name: "police",
            background: "./assets/images/sequences/police.png"
        },
        unconsciousSumi: {
            name: "unconsciousSumi",
            background: "./assets/images/sequences/unconscious.png"
        },
        unconsciousNobuGang: {
            name: "unconsciousNobuGang",
            background: "./assets/images/sequences/unconscious2.png"
        },
        peopleStanding: {
            name: "peopleStanding",
            background: "./assets/images/sequences/peoplestanding.png"
        },
        gangRunningAway: {
            name: "gangRunningAway",
            background: "./assets/images/sequences/gangrunningaway.png"
        },
        sumiFirstAid: {
            name: "sumiFirstAid",
            background: "./assets/images/sequences/sumifirstaid.png"
        },
        youLeave: {
            name: "youLeave",
            background: "./assets/images/sequences/youleave.png"
        },
        sumiHappyCry: {
            name: "sumiHappyCry",
            background: "./assets/images/sequences/sumicrying.png"
        },
        sumiMadCry: {
            name: "sumiMadCry",
            background: "./assets/images/sequences/sumimad.png"
        },
        sumiKicksYouOut: {
            name: "sumiKicksYouOut",
            background: "./assets/images/sequences/sumikicksyouout.png"
        },
        sumiUndress: {
            name: "sumiUndress",
            background: "./assets/images/sequences/sumiundress.png"
        },
        sumiUndress2: {
            name: "sumiUndress2",
            background: "./assets/images/sequences/sumiundress2.png"
        },
        sumiUndressHarmless: {
            name: "sumiUndressHarmless",
            background: "./assets/images/sequences/sumiundressharmless.png"
        },
        theNextDay: {
            name: "theNextDay",
            background: "./assets/images/sequences/thenextday.png"
        },
        sumiNobuArgument: {
            name: "sumiNobuArgument",
            background: "./assets/images/sequences/suminobuargument.png"
        },
        nobuWaiting: {
            name: "nobuWaiting",
            background: "./assets/images/sequences/nobuwaiting.png"
        },
        nobuWaitingAndKnife: {
            name: "nobuWaitingAndKnife",
            background: "./assets/images/sequences/nobuwaitingandknife.png"
        },
        sumiSmilingEyesOpen: {
            name: "sumiSmilingEyesOpen",
            background: "./assets/images/sequences/sumismilingeyesopen.png"
        },
        sumiSmilingEyesClosed: {
            name: "sumiSmilingEyesClosed",
            background: "./assets/images/sequences/sumismilingeyesclosed.png"
        }
    };
    Endabgabe.endings = {
        newspaper: {
            name: "newspaper",
            background: "./assets/images/sequences/endings/newspaper.png"
        },
        protagonistDead: {
            name: "protagonistDead",
            background: "./assets/images/sequences/endings/protagonistdead.png"
        },
        partingWays: {
            name: "partingWays",
            background: "./assets/images/sequences/endings/partingways.png"
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
                normal: "./assets/images/characters/sumi/sumi_normal.png",
                embarrassed: "./assets/images/characters/sumi/sumi_embarrassed.png"
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
        }
    };
    Endabgabe.animations = {
        midToRightOut: "midToRightOut",
        midToLeftOut: "midToLeftOut",
        midToRight: "midToRight",
        midToLeft: "midToLeft",
        rightOutToMid: "rightOutToMid",
        leftOutToMid: "leftOutToMid",
        rightToMid: "rightToMid",
        leftToMid: "leftToMid",
        rightToRightOut: "rightToRightOut",
        leftToLeftOut: "leftToLeftOut"
    };
    function animate(_animation) {
        switch (_animation) {
            case Endabgabe.animations.midToRightOut:
                return {
                    start: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    end: { translation: new Endabgabe.ƒS.Position(1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 4,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.midToLeftOut:
                return {
                    start: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    end: { translation: new Endabgabe.ƒS.Position(-1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 4,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.midToRight:
                return {
                    start: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    end: { translation: new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.midToLeft:
                return {
                    start: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    end: { translation: new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.rightOutToMid:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    duration: 4,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.leftOutToMid:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(-1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    duration: 4,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.rightToMid:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.leftToMid:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.leftToLeftOut:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: new Endabgabe.ƒS.Position(-1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.rightToRightOut:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: new Endabgabe.ƒS.Position(1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            default:
                return {
                    start: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    end: { translation: Endabgabe.ƒS.positions.bottomcenter },
                    duration: 5,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
        }
    }
    Endabgabe.animate = animate;
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
        volumeUp: "♫"
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
            { scene: Endabgabe.Street, name: "street", id: "street" },
            { scene: Endabgabe.SumisHome, name: "sumisHome", id: "sumisHome" },
            { scene: Endabgabe.SumisHouse, name: "sumisHouse", id: "sumisHouse" },
            { scene: Endabgabe.ThePlan, name: "thePlan", id: "thePlan" },
            { scene: Endabgabe.WrongPlace, name: "wrongPlace", id: "wrongPlace" },
            { scene: Endabgabe.RightPlace, name: "rightPlace", id: "rightPlace" },
            { scene: Endabgabe.EndOfNovel, name: "endOfNovel", id: "endOfNovel" }
        ];
        Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave);
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function RightPlace() {
        console.log("FudgeStory RightPlace Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S4120_03: "Sumi, geht es dir gut? Bist du verletzt?",
                S4120_05: "Es war also eine Falle?",
                S4120_07: "Sumi, dein Bruder ist da drin… wir haben ihn gefunden.",
                S4120_09: "Warum hast du ihren Bruder entführt Nobu?",
                S4120_11: "Und da dachtest du einfach ihn zu entführen, anstatt mit ihm zu reden?",
                S4120_13: "Aber, dass er eine Schwester hat, hat er dir einfach so erzählt?",
                S4120_15: "Also war das am Ende ein Racheakt, weil er dich nicht seine Schwester lieben ließ? Du bist krank!",
                S4120_17: "Also was, ihr habt einen Putsch geplant um ihn als euren Anführer abzulösen?",
                S4120_19: "Du warst sein bester Freund, natürlich erwartet er nicht das Schlimmste.",
                S4120_22: "Sumi, geh deinen Bruder befreien! Der Code lautet: ",
                S4120_25: "Keine Sorge, ich halte ihn auf. Er ist diesmal allein, es ist fairer als sonst mit seinem Schlägertrupp, ich schaff das, vertrau mir! Lauf los!",
                S4120_27: "Wir beenden es so wie es begonnen hat!",
                S4120_29: "Wir werden sehen, wie stark du ohne deine Männer wirklich bist.",
                S41211_02: "Nein… es ist noch nicht vorbei!",
                S41211_08: "Geht es dir gut?",
                S41211_10: "Es tut mir leid, Shou ist meinetwegen tot.",
                S41211_15: "Vielleicht.",
                S41211_18: "Es ist nicht fair, dass dein ganzes Leben voller Unglück gejagt wird. Mach es dir nicht kaputt, indem du weggesperrt wirst. Starte ein neues Leben… einen Neuanfang. Vielleicht nicht allein?",
                S41212_02: "Nein… es ist noch nicht vorbei!",
                S41212_12: "Wir sollten die Polizei rufen, immerhin wirst du vermisst.",
                S41212_21: "Haha... Aber ihr seid ja rechtzeitig gekommen…",
                S41212_23: "Lebe ein glückliches Leben, mehr will ich nicht.",
                S41221_01: "Das Spiel ist aus, Nobu. Du hast verloren!",
                S41221_03: "Vielleicht bist du ohne deine Handlanger doch nicht so ein großer Kämpfer.",
                S41221_05: "Was?",
                S41221_08: "Er ist es nicht wert, Sumi. Werde nicht auch zum Mörder wie er.",
                S41221_10: "Ich rufe die Polizei und lass sie den Fall aufklären.",
                S41221_11: "Geht es dir gut?",
                S41221_13: "Es tut mir leid, Shou ist meinetwegen tot.",
                S41221_15: "Was machst du jetzt?",
                S41221_17: "Ist in deinem Leben auch Platz für mich?",
                S41221_19: "Beantwortet das deine Frage?",
                S41221_20: "Wenn du dich je einsam fühlst, du kannst gerne immer zu mir kommen.",
                S41222_01: "Das Spiel ist aus, Nobu. Du hast verloren!",
                S41222_03: "Vielleicht bist du ohne deine Handlanger doch nicht so ein großer Kämpfer.",
                S41222_23: "Aua, das fehlende Vertrauen tut ja mehr weh als Nobus Schläge.",
                S41222_25: "Ist ja aber noch alles gut gelaufen… deinen Bruder haben wir gefunden.",
                S41222_27: "Lebe ein glückliches Leben, mehr will ich nicht."
            },
            Sumi: {
                S4120_02: "Mhhh!",
                S4120_04: "MHHHHHHHH!",
                S4120_08: "Mhh?!",
                S4120_23: "Aber was ist mit dir?",
                S41211_04: "DU HAST MEINEN BRUDER ERMORDET?",
                S41211_06: "Wie konntest du nur... Shou...",
                S41211_09: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41211_11: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41211_12: "Was mache ich jetzt? Ich habe Nobu getötet… ich bin kein Stück besser als er…",
                S41211_13: "Wie dem auch sei, ich sollte mich stellen.",
                S41211_14: "Ich danke dir für alles… vielleicht kann ich jetzt damit abschließen…",
                S41211_16: "Hier draußen haben wir Netz, ich rufe die Polizei… verschwinde von hier, du hast damit nichts zu tun… geh dein Leben weiterleben… vielleicht sieht man sich wieder…",
                S41211_17: "Aber... wieso nicht?",
                S41211_19: "Das klingt schön… vielleicht sollte ich das wirklich tun…",
                S41212_14: "Das ist " + Endabgabe.dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + Endabgabe.dataForSave.nameProtagonist + "plötzlich auf und rettete mich. Der gesamte Plan stammte von " + Endabgabe.dataForSave.nameProtagonist,
                S41212_16: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41212_18: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41212_20: "Von Nobu zusammengeschlagen zu werden scheint wohl dein Ding zu sein… aber ich hab dir vertraut und du dein Wort gehalten.",
                S41212_22: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…",
                S41221_04: "Er hat ihn umgebracht… Shou ist tot…",
                S41221_07: "DU MONSTER!",
                S41221_09: "Du hast recht… das wäre ein zu einfacher Ausweg für ihn… er soll im Gefängnis verrotten…",
                S41221_12: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41221_14: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41221_16: "Ich kann endlich mit der Sache abschließen und mein Leben weiterleben schätze ich.",
                S41221_18: "Die Frage ist eher, ob du so einen kaputten Menschen wie mich überhaupt noch sehen willst… ich habe dir nur Probleme bereitet.",
                S41221_21: "Danke, wirklich… danke für Alles.",
                S41222_14: "Wir sollten die Polizei holen, immerhin wirst du vermisst Shou.",
                S41222_16: "Das ist " + Endabgabe.dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + Endabgabe.dataForSave.nameProtagonist + "plötzlich auf und rettete mich. Der gesamte Plan stammte von " + Endabgabe.dataForSave.nameProtagonist,
                S41222_18: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41222_20: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41222_22: "Hätte nicht gedacht, dass du Nobu schlagen könntest.",
                S41222_24: "Haha, tut mir leid.",
                S41222_26: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals in der Gasse nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…"
            },
            Nobu: {
                S4120_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor. Oder findest du nicht, Sumi?",
                S4120_06: "Und ihr seid voll reingetappt… schon schade… ",
                S4120_10: "Du willst es wirklich vor deinem Tod noch wissen? Na schön, ich erzähl es dir, weil du ihn gefunden hast… als letzte Belohnung. Shou wollte mit der Gang immer nur das Mindeste, keine Ambitionen. Wir hatten Potenzial einer der gefürchtetsten Banden zu werden und als wir einen richtig dicken Fisch an der Angel hatten hat Shou alles abgebrochen, da seine Prinzipien ihm im Weg standen. Er ist weich und schwach!",
                S4120_12: "Wenn du nur wüsstest, wie oft ich das versucht habe. Doch das ist noch nicht alles. Shou hat immer sein Leben vor allen geheim gehalten. Wir wussten gar nichts über ihn, denn er war der Meinung, dass es nicht nötig ist. Aber wie willst du jemandem Folgen und dein Leben riskieren, wenn du nicht weißt, was er verbirgt? Wir waren so lange Freunde und ich wusste nichts über ihn, außer dass er eine Schwester hat.",
                S4120_14: "Natürlich nicht, ich habe das lange vor all den Problemen von allein rausgefunden. Zuerst war er auch sehr sauer, aber da wir schon fast wie Brüder waren, nahm er es mir am Ende doch nicht übel, solange ich es geheim halten würde. Aber als ich Sumi zum ersten Mal gesehen habe, habe ich mich sofort Kopf über in sie verliebt. Doch Shou wollte sie beschützen und aus all dem hier raushalten… und lies mich nicht an sie ran.",
                S4120_16: "Es war eine Mischung aus allen, irgendwann platzte mir der Kragen. Seine Regeln nahmen mir alles und ich konfrontierte ihn mit damit… doch es endete in einem riesigen Streit, da er nichts ändern wollte. Ich wollte ihn loswerden, da somit auch all meine Probleme verschwinden würden… also überlegt ich mir etwas. Ich verbündete mich mit den Gang-Mitgliedern, die derselben Meinung waren, dass die Gang ihr Potenzial nicht ausschöpfen würde.",
                S4120_18: "Er hätte niemals die Führung freiwillig abgegeben… also lockte ich ihn mit dem Vorwand mich entschuldigen zu wollen zu einem Treffen. Normal ist er sehr vorsichtig und wachsam, doch er ist zu weich, weswegen er nicht erwartet hatte, aus seinen eigenen Reihen verraten zu werden. Schon fast traurig…und schwach.",
                S4120_20: "Beweist nur, dass ich Recht habe…",
                S4120_21: "Ohhh, aus Angst, dass ihr den richtigen Ort findet, habe ich vergessen euch zu durchsuchen… was ein dummer Anfängerfehler.",
                S4120_24: "Glaubst du wirklich ich lass dich gehen?",
                S4120_26: "Du willst ein Eins gegen Eins? Gegen mich? Hahahaha, na los!",
                S4120_28: "Das Einzige was ich beende ist dein Leben, du Wicht! Ha!",
                S4120_30: "Nicht reden, zeig mir was du draufhast! Hahaha!",
                S41211_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder? Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
                S41211_03: "... was? ... Sumi ... ?",
                S41211_05: "Ich musste… beim letzten Gespräch hat die kleine Ratte zu viele Fragen gestellt… ich wurde nervös, also musste ich Shou töten, bevor ihr ihn findet… nur habe ich es nicht rechtzeitig geschafft seine Leiche wegzuschaffen… ich habe nicht erwartet, dass ihr so schnell seid… ahhh",
                S41211_07: "Es war auch für mich nicht leicht, ich musste es tun…",
                S41212_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder? Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
                S41212_04: "Shou?!",
                S41212_06: "Was soll ich mit einem Bruder, der mir Steine in den Weg legt?",
                S41212_08: "Ich habe versucht mit dir zu reden, aber du warst ignorant.",
                S41212_10: "Reden bringt auch nichts mehr, bringen wir es hinter uns… ein für Alle mal.",
                S41221_02: "Das kann nicht sein, so eine kleine Ratte wie du kann mich nicht besiegen.",
                S41221_06: "Ich musste es tun… ihr wart mir auf die Schliche gekommen… beim letzten Gespräch hat die kleine Ratte zu viele Fragen gestellt… ich wurde nervös, also musste ich Shou töten, bevor ihr ihn findet… nur habe ich es nicht rechtzeitig geschafft seine Leiche wegzuschaffen… ich habe nicht erwartet, dass ihr so schnell seid… ahhh",
                S41222_02: "Das kann nicht sein, so eine kleine Ratte wie du kann mich nicht besiegen.",
                S41222_05: "Shou?!",
                S41222_07: "Was soll ich mit einem Bruder, der mir Steine in den Weg legt?",
                S41222_09: "Ich habe versucht mit dir zu reden, aber du warst ignorant.",
                S41222_11: "Reden bringt auch nichts mehr, meine kurze Ära ist wohl vorbei.",
                S41222_13: "..."
            },
            Shou: {
                S41212_03: "Nobu, Nobu, Nobu…",
                S41212_05: "Ich habe dir vertraut… du warst wie ein Bruder für mich…",
                S41212_07: "Weil ich dich davon abhalte Fehler zu begehen und meine Schwester von all diesen illegalen Machenschaften raushalten möchte, lege ich dir Steine in den Weg?",
                S41212_09: "Und deswegen hintergehst du mich und entführst mich wochenlang?",
                S41212_11: "Und wieder mal siehst du nichts als Gewalt als Lösung…",
                S41212_13: "Das klingt nach einem Plan… Wir hatten das Vergnügen noch nicht… ich nehme an du weißt wer ich bin, aber ich weiß nicht wer du bist.",
                S41212_15: "Du bist also mein Retter? Danke dafür… ich habe eigentlich nur noch auf meinen Tod gewartet…",
                S41212_17: "Wie geht es unserer Mutter?",
                S41212_19: "Hauptsache sie ist noch am Leben… Aber das bereden wir, sobald wir zuhause sind. Ich trag Nobu schon einmal raus und warte auf die Polizei… Du solltest vielleicht " + Endabgabe.dataForSave.nameProtagonist + " verarzten… hat gut was abbekommen…",
                S41222_04: "Wow, du hast Nobu besiegt? So jemanden wie dich könnte ich in meiner Gang gebrauchen! Haha!",
                S41222_06: "Nobu, ich habe dir vertraut… du warst wie ein Bruder für mich…",
                S41222_08: "Weil ich dich davon abhalte Fehler zu begehen und meine Schwester von all diesen illegalen Machenschaften raushalten möchte, lege ich dir Steine in den Weg?",
                S41222_10: "Und deswegen hintergehst du mich und entführst mich wochenlang?",
                S41222_12: "...",
                S41222_15: "Das klingt nach einem Plan… Wir hatten das Vergnügen noch nicht… ich nehme an du weißt wer ich bin, aber ich weiß nicht wer du bist.",
                S41222_17: "Du bist also mein Retter? Danke dafür… ich habe eigentlich nur noch auf meinen Tod gewartet…",
                S41222_19: "Wie geht es unserer Mutter?",
                S41222_21: "Hauptsache sie ist noch am Leben… Aber das bereden wir, sobald wir zuhause sind. Ich trag Nobu schon einmal raus und warte auf die Polizei… Du solltest vielleicht " + Endabgabe.dataForSave.nameProtagonist + " verarzten… hat gut was abbekommen…"
            }
        };
        // Decisions
        //let isSumiBetter;
        let sumiTurnIn;
        let isSumiBetterAnswer = {
            yes: "Doch bist du.",
            selfDefense: "Es war Notwehr.",
            youSavedMe: "Du hast mich gerettet.",
            heDeservedIt: "Er hat es verdient."
        };
        let sumiTurnInAnswer = {
            yes: "Ja, das wäre wohl besser...",
            no: "Nein, lieber nicht..."
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        // Sequenzen fürs Durchsuchen?
        // Schlag auf Hinterkopf
        // Augenöffnungsanimation oder Sequenz
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_01);
        // Sumi wird gefesselt reingeschleppt
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_12);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_13);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_14);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_15);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_18);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_19);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_20);
        // Sequences wie Sumi sich befreit und die Schläger k.o macht
        // Sequence wie sie Nobu das Messer entzieht und an seine Kehle hält
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_21);
        // Inventar nutzen?
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_22);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_23);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_24);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_25);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_26);
        // Sumi haut ab und der Kampf wird vorbereitet
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_27);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_28);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_29);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_30);
        // Minispiel oder so oder einfach Kampf Sequenzen
        if (Endabgabe.dataForSave.protagonistHurt == false) {
            if (Endabgabe.dataForSave.nobuKnows == false) {
                //Sequenz wie Protagonist auf dem Boden liegt
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_02);
                //Sumi ist mit ihrem Bruder zurück, Shou packt Nobu weg vom Protagonisten.
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_11);
                // Ez Kampf für Shou
                // Anschließend umarmen sich Shou und Sumi vielleicht?
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_14);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_16);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_18);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_19);
                // Sumi verarztet den Protagonisten
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_20);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_21);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_23);
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    // Sumi schaut den Protaginisten mit Tränen in den Augen glücklich an
                    // Sequenz Sumi und Protagonist küssen sich und gehen Hand in Hand zum Bruder
                    return await ending(3);
                }
                else {
                    // Sumi schaut den Protaginisten mit Tränen in den Augen glücklich an und sie gehen zum Bruder
                    return await ending(3);
                }
            }
            else {
                //Sequenz wie Protagonist auf dem Boden liegt
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_02);
                //Sequenz wie Sumi von hinten das Messer aufhebt und an Somu schleicht und voller Tränen und Rachegelüste zusticht.
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_07);
                //Sequenz wie nobu stirbt und sumi in tränen am boden sitzt
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_11);
                // Sumi lächelt mit Tränen im Gesicht
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_12);
                await Endabgabe.ƒS.Menu.getInput(isSumiBetterAnswer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_13);
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    sumiTurnIn = await Endabgabe.ƒS.Menu.getInput(sumiTurnInAnswer, "decisionClass");
                    switch (sumiTurnIn) {
                        case sumiTurnInAnswer.no:
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_17);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_18);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_19);
                            // Ending wie sie sich küssen und ein neues Leben starten.
                            return await ending(1);
                        case sumiTurnInAnswer.yes:
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ja, das wäre wohl besser...");
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_14);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_16);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                            // Ending wie sie gestellt wird, in medien aufgeklärt wird blabla
                            return await ending(2);
                    }
                }
                else {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ja, das wäre wohl besser...");
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_14);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_16);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                    // Ending wie sie gestellt wird, in medien aufgeklärt wird blabla
                    return await ending(2);
                }
            }
        }
        else {
            if (Endabgabe.dataForSave.nobuKnows == false) {
                // Nobu liegt am Boden Sequenz
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_03);
                // Sumi kommt mit Shou zurück
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_11);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_14);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_16);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_18);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_19);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_20);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_21);
                // Shou trägt Nobu raus, Sumi verarztet den Protagonisten
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_23);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_24);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_25);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_26);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_27);
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    // Sumi schaut den Protaginisten mit Tränen in den Augen glücklich an
                    // Sequenz Sumi und Protagonist küssen sich und gehen Hand in Hand zum Bruder
                    return await ending(3);
                }
                else {
                    // Sumi schaut den Protaginisten mit Tränen in den Augen glücklich an und sie gehen zum Bruder
                    return await ending(3);
                }
            }
            else {
                // Nobu liegt am Boden Sequenz
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41221_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_03);
                // Sumi kommt mit Tränen zurück
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41221_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_07);
                // Sumi packt das Messer, der Protagonist hindert sie dran
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_10);
                // Polizei kommt
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_11);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_14);
                // Sumi lächelt Protagonisten an
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_16);
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_17);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_18);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_19);
                    // Beide küssen sich
                    return await ending(3);
                }
                else {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_20);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_21);
                    // Sie gehen
                    return await ending(3);
                }
            }
        }
    }
    Endabgabe.RightPlace = RightPlace;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                // Sumi und Protagonist schönes Leben
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                // Sumi wird gestellt
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
            case 3:
                await Endabgabe.ƒS.Speech.hide();
                // Sumi und ihr Bruder haben ein Happy Ending
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Street() {
        console.log("FudgeStory Endabgabe Scene starting");
        //alert("Vollbild Modus (F11) zu empfehlen.");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S1000_01: "Hmmm, der Bus kommt mal wieder zu spät. Als wäre es nicht schon spät genug und dann jeden Tag sowas. Noch dazu war es heute so ein harter Tag, wenigstens heute hätte der Bus pünktlich kommen können...",
                S1000_02: "Wo kam das her? Ich sollte mal nachsehen...",
                S1000_03: "Ich glaube das kam von hier...",
                S1000_04: "Was soll ich tun?",
                S1000_05: "Ich sollte sie aufhalten, aber wie?",
                S1121_01: "Hey Jungs, lasst sie in Ruhe! Ihr könnt doch sowas nicht machen, beruhigt euch doch!",
                S1121_05: "Ahhh!",
                S1122_01: "Hey! Haut mal schnell ab von hier, ich habe die Polizei gerufen.",
                S1122_04: "Wir wollen hier doch nichts überstürz…",
                S1122_09: "Doch, ich habe sie nicht gerufen…",
                S1123_01: "Verzieht euch lieber schnell von hier oder das wird ziemlich unschön.",
                S1123_03: "Sicher, dass du weiterreden möchtest?",
                S1124_01: "HILFE! ICH BRAUCHE HILFE, RUFT DIE POLIZEI!",
                S1124_02: "HEY IHR DA! KOMMT MIT, DA VORNE WIRD GERADE EIN MÄDCHEN VON EINER GANG BELÄSTIGT!",
                S1124_03: "DIE HAUEN AB!",
                S1124_04: "SIE BLUTET, SCHNELL RUFT EINEN KRANKENWAGEN!"
            },
            Sumi: {
                S1121_08: "Schnell weg hier, die Polizei ist gleich hier. Ich wohne hier in der Nähe, dort kann ich dich verarzten.",
                S1122_08: "Du hast gar nicht gelogen?",
                S1122_10: "Naja, egal du siehst schlimm aus. Ich wohn hier in der Nähe, lass uns schnell von hier verschwinden.",
                S1123_07: "He du! Bleib bei mir, ich hole einen Krankenwagen! HILFE!"
            },
            Nobu: {
                S1121_02: "Hey du, verzieh dich. Geh einfach weiter und tu so als hättest du nichts gesehen.",
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
        Endabgabe.characters.nobu.name = "Blonder Junge";
        Endabgabe.characters.sumi.name = "Pinkes Mädchen";
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.blink.duration, Endabgabe.transitions.blink.alpha, Endabgabe.transitions.blink.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_01);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_1, 0.3, 1, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_2, 0.5, 1, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_02);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_3, 0.8, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.school2);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_03);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_4, 0, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.harassment);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0.05, 19, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_04);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.ignore:
                return await ending(1);
            case interfereOrNotAnswer.interefere:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_05);
                howToInterfere = await Endabgabe.ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");
                break;
        }
        switch (howToInterfere) {
            case howToInterfereAnswer.talk:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1121_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.school2);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.smoking_cigarette, 0, 1, false);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_02);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk1Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_03);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk2Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_04);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fall_on_ground, 0, 1, false);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 3, false);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1121_05);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_06);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.police);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.schlaeger, text.Schlaeger.S1121_07);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1121_08);
                await Endabgabe.ƒS.Character.hideAll();
                return "sumisHome";
            case howToInterfereAnswer.threatenWithCops:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.school2);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.smoking_cigarette, 0, 1, false);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_02);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk3Answer, "decisionClass");
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_03);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(1);
                nobuTalk = await Endabgabe.ƒS.Menu.getInput(nobuTalk4Answer, "decisionClass");
                switch (nobuTalk) {
                    case nobuTalk4Answer.doNotFight:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_04);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fall_on_ground, 0, 1, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 3, false);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_05);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        Endabgabe.ƒS.Speech.hide();
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.police);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.schlaeger, text.Schlaeger.S1122_06);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_07);
                        Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_08);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_09);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_10);
                        await Endabgabe.ƒS.Character.hideAll();
                        return "sumisHome";
                    case nobuTalk4Answer.fight:
                }
            case howToInterfereAnswer.threatenWithViolence:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.coming);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1123_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1123_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuHitMad);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fall_on_ground, 0, 1, false);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 3, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_04);
                provokeOrKeepUp = await Endabgabe.ƒS.Menu.getInput(provokeOrKeepUpAnswer, "decisionClass");
                switch (provokeOrKeepUp) {
                    case provokeOrKeepUpAnswer.provoke:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_05);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKnife);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.knife_stabbing, 0, 1, false);
                        return await ending(2);
                    case provokeOrKeepUpAnswer.keepUp:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_06);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_2, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_3, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_4, 0, 1, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_5, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_6, 0, 1, false);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.schlaeger, text.Schlaeger.S1121_07);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousSumi);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1123_07);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(2);
                        //WIP for Hospital Scene
                        return "protagonistHospital";
                }
            case howToInterfereAnswer.getHelp:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.street_evening);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.peopleStanding);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_02);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, true);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.3, 5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.police);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.1, 5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gangRunningAway);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHurt);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_heavy_breathing, 0.5, 6, false);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_04);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                //WIP for Hospital Scene
                return "sumiHospital";
        }
    }
    Endabgabe.Street = Street;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.newspaper);
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function SumisHome() {
        console.log("FudgeStory SumisHome Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
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
                S2110_01: "Tut mir leid, du hast natürlich Recht. Danke fürs Verarzten, dann gehe ich jetzt.",
                S2110_02: "Das sollte ich zu dir sagen. Aber ja, adé.",
                S2120_01: "Gerade weil ich ein Fremder bin und nichts mit der Sache zu tun habe ist es manchmal leichter darüber zu reden.",
                S2120_02: "Ich weiß jetzt nicht, ob ich mich bedanken soll.",
                S2120_04: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2120_06: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
                S2121_01: "Das ist viel zu gefährlich, du solltest das lieber alles sein lassen. Du hast keine richtigen Anhaltspunkte, das ist viel zu riskant. Wenn er wirklich was mit der Entführung deines Bruders zu tun hat, dann ist er gefährlich und du könntest die Nächste sein.",
                S2122_02: "Und jetzt ist auch dein Bruder weg, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
                S2123_01: "Ich schätze deinen Optimismus, aber ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2123_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2123_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2123_07: "Es ist schon richtig spät, ich sollte nach Hause… Wir treffen uns einfach morgen nach der Schule und setzen unsere Planung fort.",
                S2123_09: "Wirklich? Nur wenn es dir nichts ausmacht, denn ich möchte wirklich nicht komplett durchnässt zu Hause ankommen.",
                S2123_11: "Das klingt super. Vielen Dank!",
                S2123_12: "Sumi? Wo bist du? Ah hier brennt Licht...",
                S2123_13: "AHH! TUT MIR LEID, TUT MIR LEID!",
                S2123_15: "Tut mir leid, das war nicht mit Absicht…",
                S2123_17: "..."
            },
            Sumi: {
                S2100_01: "Ich bin dir zwar dankbar, dass du mich gerettet hast…. Aber bist du irgendwie lebensmüde? Er hätte dich umbringen können.",
                S2100_03: "Das hätte dir ja egal sein können, ist ja meine Sache.",
                S2100_05: "Sag mir mal lieber, wie du heißt. Wenn du schon bei mir zuhause bist und ich dich verarzte, kann ich ja zumindest den Namen meines vermeintlichen „Retters“ erfahren.",
                //S2100_07: "Alles klar, " + characters.protagonist.name + ", danke nochmal für deine Hilfe. Ich heiße Sumi.",
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
                S2122_01: "Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2122_01b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als unsere Mutter schwerkrank wurde und ins Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2122_03: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
                S2123_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2123_04: "Trotzdem…",
                S2123_06: "Na gut…",
                S2123_08: "Es ist zu spät und es regnet stark. Ich bin sowieso allein und erwarte niemanden. Du kannst hier übernachten.",
                S2123_10: "Ja das passt schon. Ich lass dir ein Bad ein und bringe dir Klamotten zum Wechseln, du wirst ja wahrscheinlich keine dabeihaben.",
                S2123_14: "ICH HABE VERGESSEN ABZUSCHLIESSEN, DA ICH SONST IMMER ALLEIN BIN, SCHLIESSE ICH NIE AB…. SCHLIESS WENIGSTENS DEINE AUGEN!",
                S2123_16: "Nicht so schlimm, war ja nicht deine Schuld…",
                S2123_18: "Ich bin fertig, du kannst sie wieder aufmachen...",
                S2123_19: "Ich weiß nicht, ob das der richtige Zeitpunkt ist sowas zu sagen, nachdem du mich halbnackt gesehen hast… aber danke…"
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
        //let juiceOrNot;
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
            go: "Tut mir leid, ich werde gehen.",
            talk: "Lass es raus, du kannst mir vertrauen."
        };
        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?",
            help: "Hilfe anbieten"
        };
        let flirtOrSleepAnswer = {
            flirt: "Du siehst sehr schön aus...",
            sleep: "Wir sollten schlafen gehen..."
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
        Endabgabe.characters.nobu.name = "???";
        Endabgabe.characters.sumi.name = "Sumi";
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
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
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Alles klar, " + Endabgabe.characters.protagonist.name + ", danke nochmal für deine Hilfe. Ich heiße Sumi.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_09);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeftOut));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S2100_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S2100_12);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_13);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S2100_14);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_15);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S2100_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S2100_18);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.leftOutToMid));
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_19);
        await Endabgabe.ƒS.Menu.getInput(juiceOrNotAnswer, "decisionClass");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_20);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiFirstAid);
        await Endabgabe.ƒS.update(1);
        nobuOrShou = await Endabgabe.ƒS.Menu.getInput(nobuOrShouAnswer, "decisionClass");
        switch (nobuOrShou) {
            case nobuOrShouAnswer.nobu:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_21);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_23);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_24);
                break;
            case nobuOrShouAnswer.shou:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_25);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_26);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_27);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_28);
                break;
        }
        Endabgabe.characters.nobu.name = "Nobu";
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_29);
        goOrTalk = await Endabgabe.ƒS.Menu.getInput(goOrTalkAnswer, "decisionClass");
        switch (goOrTalk) {
            case goOrTalkAnswer.go:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2110_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2110_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2110_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.youLeave);
                await Endabgabe.ƒS.update(3);
                return await ending(1);
            case goOrTalkAnswer.talk:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2120_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2120_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2120_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2120_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2120_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2120_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2120_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2120_07);
                talkOutOrHelp = await Endabgabe.ƒS.Menu.getInput(talkOutOrHelpAnswer, "decisionClass");
        }
        switch (talkOutOrHelp) {
            case talkOutOrHelpAnswer.talkOut:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2121_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiMadCry);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2121_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKicksYouOut);
                await Endabgabe.ƒS.update(3);
                return await ending(2);
            case talkOutOrHelpAnswer.morePeople:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_01b);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2122_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCry);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_03);
            case talkOutOrHelpAnswer.help:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCry);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_06);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_07);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_night);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_11);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_bathRoom_normal);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_bathRoom_foggy);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_hallway);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_12);
                if (Endabgabe.dataForSave.nameProtagonist == "ecchi") {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiUndress);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiUndress2);
                    await Endabgabe.ƒS.update(1);
                }
                else {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiUndressHarmless);
                    await Endabgabe.ƒS.update(1);
                }
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_14);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_16);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_18);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_futonroom);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.embarrassed, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                flirtOrSleep = await Endabgabe.ƒS.Menu.getInput(flirtOrSleepAnswer, "decisionClass");
                switch (flirtOrSleep) {
                    case flirtOrSleepAnswer.sleep:
                        break;
                    case flirtOrSleepAnswer.flirt:
                        Endabgabe.dataForSave.romancePoints++;
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_19);
                        break;
                }
                Endabgabe.ƒS.Speech.hide();
                Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
                await Endabgabe.ƒS.update(3);
                return "sumisHouse";
        }
    }
    Endabgabe.SumisHome = SumisHome;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.partingWays);
                await Endabgabe.ƒS.update(3);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.partingWays);
                await Endabgabe.ƒS.update(3);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function SumisHouse() {
        console.log("FudgeStory SumisHouse Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S3100_01: "Das klingt doch wie Sumi? Was ist da los?",
                S3100_07: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",
                S3130_02: "Sicher, dass du nichts weißt?",
                S3130_04: "Keine Sorge, die finden wir noch...",
                S3121_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3121_03: "Halte noch ein wenig durch.",
                S3121_05: "Klingt gut, geht mir genauso...",
                S3121_07: "Keine Sorge, wir finden deinen Bruder.",
                S3121_09: "Ganz bestimmt...",
                S3121_12: "Du hast Recht, machen wir weiter."
            },
            Sumi: {
                S3100_01: "Jetzt verschwinde endlich, ich bin immer noch sauer auf dich!",
                S3100_03: "Achja? Was passiert dann?!",
                S3100_05: "Hör zu, ich habe noch viel zu tun… warum komm ich nicht einfach zum nächsten Gang-Treffen und wir bereden es?",
                S3100_08: Endabgabe.dataForSave.nameProtagonist + ", warum?!...",
                S3100_10: "Nein… ehm…",
                S3120_02: "Ja, das wäre richtig dumm...",
                S3120_04: "Nichts…. Jetzt geh und lass uns unser Projekt machen.",
                S3121_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3121_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3121_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3121_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3121_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3121_11: "Wir sollten den Plan fertig stellen..."
            },
            Nobu: {
                S3100_02: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden!",
                S3100_04: "Du unterschätzt mich…",
                S3100_06: "Wehe du tauchst nicht auf.",
                S3100_09: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und mich nicht reinlassen willst?",
                S3110_01: "Du kleine Ratte… hast du Glück, dass hier schon die Nachbarn schauen. Aber das wirst du noch bereuen…",
                S3120_01: "Achsoooo, ihr kennt euch aus der Schule? Das erklärt dann auch, warum du sie gestern beschützen wolltest… wer wäre so dumm und würde sonst sein Leben für eine Fremde aufs Spiel setzen und sich einmischen.",
                S3120_03: "Was?",
                S3120_05: "Na gut… aber ich komme wieder Sumi, denk nicht, dass du mich einfach so jedes Mal abschütteln kannst.",
                S3130_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3130_03: "Hast du Beweise für deine Anschuldigungen?",
                S3130_05: "Pass lieber auf wo du deine Nase reinsteckst."
            }
        };
        // Decisions
        let interfereOrNot;
        let howToInterfere;
        let romanceChoices;
        let interfereOrNotAnswer = {
            not: "Ich sollte mich raushalten, um den Plan nicht zu gefährden.",
            interefere: "Ich sollte was tun, es sieht brenzlig aus."
        };
        let howToInterfereAnswer = {
            couple: "Ja bin ich, wir sind jetzt ein Paar und ich habe letzte Nacht bei ihr übernachtet.",
            classmates: "Entspann dich, wir sind im gleichen Kurs und haben ein Projekt zusammen.",
            brother: "Vielleicht ist der Grund eher, dass du etwas mit der Entführung ihres Bruders zu tun hast?"
        };
        let romanceChoicesAnswer = {
            beautiful: "Ich bewundere wunderschöne Menschen.",
            intelligent: "Du bist auch sehr intelligent, deine Ideen waren sogar noch besser.",
            thanks: "Danke"
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street_day);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3100_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiNobuArgument);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3100_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3100_04);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3100_06);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHouse_outside);
                Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.midToRight));
                Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeft));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3100_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3100_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_10);
                howToInterfere = await Endabgabe.ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");
                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3110_01);
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaiting);
                        await Endabgabe.ƒS.update(5);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaitingAndKnife);
                        await Endabgabe.ƒS.update(3);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.knife_stabbing, 0, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.classmates:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3120_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3120_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3120_03);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3120_04);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3120_05);
                        break;
                    case howToInterfereAnswer.brother:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3130_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3130_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3130_03);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3130_04);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3130_05);
                        Endabgabe.dataForSave.nobuKnows = true;
                        break;
                }
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.rightToRightOut));
                await Endabgabe.ƒS.Speech.hide();
                break;
        }
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_03);
        // Plan sequenz?
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_10);
        romanceChoices = await Endabgabe.ƒS.Menu.getInput(romanceChoicesAnswer, "decisionClass");
        switch (romanceChoices) {
            case romanceChoicesAnswer.beautiful:
                Endabgabe.dataForSave.romancePoints++;
                break;
            case romanceChoicesAnswer.intelligent:
                Endabgabe.dataForSave.romancePoints++;
                Endabgabe.dataForSave.romancePoints++;
                break;
            case romanceChoicesAnswer.thanks:
                break;
        }
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesOpen);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_11);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesClosed);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_12);
        // Nächster Tag und Beginn des Planes sequenz
        return "thePlan";
    }
    Endabgabe.SumisHouse = SumisHouse;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ThePlan() {
        console.log("FudgeStory ThePlan Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S4100_01: "Und? Hast du alles besorgt?",
                S4100_03: "Wie kamst du rein?",
                S4100_05: "Hast du was gefunden?",
                S4100_07: "Mhhhh… ich gib mein Bestes. Aber dir erstmal viel Glück."
            },
            Sumi: {
                S4100_02: "Ich war heute Morgen bei Nobu zuhause, während er unterwegs war.",
                S4100_04: "Er lässt immer sein Fenster offen, das habe ich schon gewusst, da ich ihn ja eine Zeit lang beschattet habe, um zu schauen, ob er vielleicht was im Schilde führt.",
                S4100_06: "Ja, wie erwartet eine Liste mit all den neuen Verstecken, die die Gang für ihre illegalen Machenschaften und Geschäfte nutzt. Ich weiß nicht, ob du genug Zeit hast, um alle zu durchsuchen. Ich muss jetzt zum Gang-Treffen… aber ich versuche dir so viel Zeit wie möglich rauszuschlagen. Leider sind die Orte sehr verstreut und weit voneinander entfernt… ich hoffe du hast direkt beim ersten Glück.",
                S4100_08: "Pass auf dich auf… falls die Orte bewacht sind, mach nichts Riskantes!"
            }
        };
        // Decisions
        // Start
        Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_01);
        // Inventar hinzufügen
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_08);
    }
    Endabgabe.ThePlan = ThePlan;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function WrongPlace() {
        console.log("FudgeStory WrongPlace Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S4110_03: "Sumi, geht es dir gut? Bist du verletzt?",
                S4110_05: "Es war also eine Falle?",
                S4110_07: "Und was geschieht jetzt?",
                S4110_11a: "Es tut mir leid Sumi! Ich wollte nicht, dass das alles so endet!",
                S4110_11b: "Es ist alles meine Schuld... nur weil ich mit diesem dummen Plan ankam...",
                S4110_11c: "Bitte... tu uns nichts... oder lass zumindest Sumi am Leben!",
                S4110_11d: "Sumi... ich liebe dich!"
            },
            Sumi: {
                S4110_02: "Mhhh!",
                S4110_04: "MHHHHHHHH!",
                S4110_10: "Mhh?!",
                S4110_12a: "Mh mhh mhhhhh mhhnh Mhhhhh!",
                S4110_12b: "Nhhn, mhhnh!",
                S4110_12c: "Nhhn...",
                S4110_12d: "Mhh mhhhh mhhh mhhh!"
            },
            Nobu: {
                S4110_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor. Oder findest du nicht, Sumi?",
                S4110_06: "Und ihr seid voll reingetappt… schon schade… Euer Plan hat leider nicht funktioniert, ich hab ihr alles abgenommen.",
                S4110_08: "Was denkst du? Ich weiß nicht wie viel ihr wisst und wie viel ihr mir hinterher geschnüffelt habt… Aber ich kann euch nicht mehr am Leben lassen.",
                S4110_09: "Sumi, es tut mir wirklich leid, dass es so enden muss. Ich habe dich geliebt...",
                S4110_13: "Hättest du dich damals nur nicht eingemischt, wäre das alles nicht passiert…"
            }
        };
        // Decisions
        let lastWords;
        let lastWordsPoints;
        let lastWordsAnswer = {
            iAmSorry: "Es tut mir leid...",
            itIsAllMyFault: "Es ist alles meine Schuld...",
            please: "Bitte... tu uns nichts..."
        };
        let lastWordsPointsAnswer = {
            iAmSorry: "Es tut mir leid...",
            itIsAllMyFault: "Es ist alles meine Schuld...",
            please: "Bitte... tu uns nichts...",
            iLoveYou: "Ich liebe dich..."
        };
        // Start
        Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        // Sequenzen fürs Durchsuchen?
        // Schlag auf Hinterkopf
        // Augenöffnungsanimation oder Sequenz
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_01);
        // Sumi wird gefesselt reingeschleppt
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_08);
        // Sequenz wie Nobu auf Sumi mit einem Messer zu kommt.
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_10);
        // Decision
        if (Endabgabe.dataForSave.romancePoints >= 2) {
            lastWordsPoints = await Endabgabe.ƒS.Menu.getInput(lastWordsPointsAnswer, "decisionClass");
            switch (lastWordsPoints) {
                case lastWordsPointsAnswer.iAmSorry:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11a);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12a);
                    break;
                case lastWordsPointsAnswer.itIsAllMyFault:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11b);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12b);
                    break;
                case lastWordsPointsAnswer.please:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11c);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12c);
                    break;
                case lastWordsPointsAnswer.iLoveYou:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11d);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12d);
                    break;
            }
        }
        else {
            lastWords = await Endabgabe.ƒS.Menu.getInput(lastWordsAnswer, "decisionClass");
            switch (lastWords) {
                case lastWordsAnswer.iAmSorry:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11a);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12a);
                    break;
                case lastWordsAnswer.itIsAllMyFault:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11b);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12b);
                    break;
                case lastWordsAnswer.please:
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_11c);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_12c);
                    break;
            }
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_13);
        // Sounds
        return await ending(1);
    }
    Endabgabe.WrongPlace = WrongPlace;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Game.js.map