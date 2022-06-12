namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
  
    console.log("Endabgabe starting");

    export let dataForSave = {
        nameProtagonist: "",
        romancePoints: 0,
        protagonistHurt: false,
        nobuKnowsBrother: false,
        nobuKnowsMother: false

    };
  
    export let transitions = {
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
  
    export let sound = {
        // themes
        filler_track: "./assets/sounds/music/Filler_Track.mp3",
        first_encounter: "./assets/sounds/music/First_Encounter.mp3",

        searching_track: "./assets/sounds/music/Searching_Track.mp3",
        final_fight: "./assets/sounds/music/Final_Fight.mp3",

        sad_ending: "./assets/sounds/music/Sad_Ending.mp3",
  
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
  
    export let locations = {
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
        },

        hospitalRoom_day: {
            name: "HospitalRoom_Day",
            background: "./assets/images/backgrounds/hospitalroom_day.png"
        },
        hospitalRoom_evening: {
            name: "HospitalRoom_Evening",
            background: "./assets/images/backgrounds/hospitalroom_evening.png"
        },
        hospitalRoom_night: {
            name: "HospitalRoom_Night",
            background: "./assets/images/backgrounds/hospitalroom_night.png"
        },

        hospitalHallway: {
            name: "HospitalHallway",
            background: "./assets/images/backgrounds/hospitalhallway.png"
        },
        hospitalHallway2: {
            name: "HospitalHallway2",
            background: "./assets/images/backgrounds/hospitalhallway2.png"
        },

        yukosRoom: {
            name: "YukosRoom",
            background: "./assets/images/backgrounds/yukosroom.png"
        }
    };

    export let sequences = {
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

    export let endings = {
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
  
    export let characters = {
        protagonist: {
            name: "Ich"
        },
        sumi: {
            name: "Sumi",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/sumi/sumi_normal.png",
                embarrassed: "./assets/images/characters/sumi/sumi_embarrassed.png"
            }
        },
        nobu: {
            name: "Nobu",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/nobu/nobu_normal.png",
                happy: "./assets/images/characters/nobu/nobu_happy.png"
            }
        },
        yuko: {
            name: "Yuko",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Pfad für Bild"
            }
        },
        shou: {
            name: "Shou",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/shou/shou_normal.png",
                happy: "./assets/images/characters/shou/shou_happy.png"

            }
        },
        credits: {
            name: "Credits",
            origin: ƒS.ORIGIN.CENTER,
            pose: {
                story: "./assets/credits/story.png",
                characters: "./assets/credits/characters.png",
                sequences: "./assets/credits/sequences.png",
                music: "./assets/credits/music.png",
                sfx: "./assets/credits/sfx.png",
                backgrounds: "./assets/credits/backgrounds.png",

                tfp: "./assets/credits/thanksforplaying.png"
            }
        }
    };

    export let animations = {
        midToRightOut: "midToRightOut",
        midToLeftOut: "midToLeftOut",
        midToRight: "midToRight",
        midToLeft: "midToLeft",

        rightOutToMid: "rightOutToMid",
        leftOutToMid: "leftOutToMid",
        rightToMid: "rightToMid",
        leftToMid: "leftToMid",

        rightToRightOut: "rightToRightOut",
        leftToLeftOut: "leftToLeftOut",

        credits: "credits",
        creditsLast: "creditsLast"
    };

    export function animate(_animation: string): ƒS.AnimationDefinition {
        switch (_animation) {
            case animations.midToRightOut:
                return {
                    start: { translation: ƒS.positions.bottomcenter },
                    end: { translation: new ƒS.Position(1500, ƒS.positions.bottomcenter.y) },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case animations.midToLeftOut:
                return {
                    start: { translation: ƒS.positions.bottomcenter },
                    end: { translation: new ƒS.Position(-1500, ƒS.positions.bottomcenter.y) },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case animations.midToRight:
                return {
                    start: { translation: ƒS.positions.bottomcenter },
                    end: { translation: new ƒS.Position(480, ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };    
            case animations.midToLeft:
                return {
                    start: { translation: ƒS.positions.bottomcenter },
                    end: { translation: new ƒS.Position(-480, ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };   
            case animations.rightOutToMid:
                return {
                    start: { translation: new ƒS.Position(1500, ƒS.positions.bottomcenter.y) },
                    end: { translation: ƒS.positions.bottomcenter },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case animations.leftOutToMid:
                return {
                    start: { translation: new ƒS.Position(-1500, ƒS.positions.bottomcenter.y) },
                    end: { translation: ƒS.positions.bottomcenter },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case animations.rightToMid:
                return {
                    start: { translation: new ƒS.Position(480, ƒS.positions.bottomcenter.y) },
                    end: { translation: ƒS.positions.bottomcenter },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };    
            case animations.leftToMid:
                return {
                    start: { translation: new ƒS.Position(-480, ƒS.positions.bottomcenter.y) },
                    end: { translation: ƒS.positions.bottomcenter },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };     
                
            case animations.leftToLeftOut:
                return {
                    start: { translation: new ƒS.Position(-480, ƒS.positions.bottomcenter.y) },
                    end: { translation: new ƒS.Position(-1500, ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };               
            case animations.rightToRightOut:
                return {
                    start: { translation: new ƒS.Position(480, ƒS.positions.bottomcenter.y) },
                    end: { translation: new ƒS.Position(1500, ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };   

            case animations.credits:
                return {
                    start: { translation: new ƒS.Position(ƒS.positions.bottomcenter.x, -650) },
                    end: { translation: new ƒS.Position(ƒS.positions.bottomcenter.x, 650) },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };  
            case animations.creditsLast:
                return {
                    start: { translation: new ƒS.Position(ƒS.positions.bottomcenter.x, -650) },
                    end: { translation: new ƒS.Position(ƒS.positions.bottomcenter.x, 0) },
                    duration: 4,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };  

            default:
                return {
                    start: { translation: ƒS.positions.bottomcenter },
                    end: { translation: ƒS.positions.bottomcenter },
                    duration: 5,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                  };
        }
    }
  
    let volume: number = 1.0;
  
    export function volumeUp(): void {
        if (volume < 100) {
            volume += 0.1;
            ƒS.Sound.setMasterVolume(volume);
        }
    }
  
    export function volumeDown(): void {
        if (volume > 0) {
            volume -= 0.1;
            ƒS.Sound.setMasterVolume(volume);
        }
    }
  
    export let menuItems = {
        inventory: "≡",
        save: "▼",
        load: "▲",
        volumeDown: "♪",
        volumeUp: "♫"
    };

    export let items = {
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
    
  
    export async function menuButtons(_option: string): Promise<void> {
        console.log(_option);
        if (_option == menuItems.inventory) {
            ƒS.Inventory.open();
        }
        if (_option == menuItems.save) {
            await ƒS.Progress.save();
        }
        else if (_option == menuItems.load) {
            await ƒS.Progress.load();
        }
        else if (_option == menuItems.volumeUp) {
            volumeUp();
        }
        else if (_option == menuItems.volumeDown) {
            volumeDown();
        }
    }
  
    window.addEventListener("load", start);
  
    function start(_event: Event): void {

        for (let i: number = 0; i < 86; i++) {
            ƒS.Inventory.add(items.item1);
        }
        for (let i: number = 0; i < 22; i++) {
            ƒS.Inventory.add(items.item2);
        }
        for (let i: number = 0; i < 14; i++) {
            ƒS.Inventory.add(items.item3);
        }
        for (let i: number = 0; i < 64; i++) {
            ƒS.Inventory.add(items.item4);
        }
        for (let i: number = 0; i < 3; i++) {
            ƒS.Inventory.add(items.item5);
        }
        for (let i: number = 0; i < 1; i++) {
            ƒS.Inventory.add(items.item6);
        }


        let scenes: ƒS.Scenes = [
            // Intro
            { scene: Street, name: "street", id: "street"},

            // Branch 1
            { scene: SumisHome, name: "sumisHome", id: "sumisHome"},
            { scene: SumisHouse, name: "sumisHouse", id: "sumisHouse"},

            // Branch 2
            { scene: ProtagonistHospital, name: "protagonistHospital", id: "protagonistHospital"},
            { scene: ProtagonistHospitalHallway, name: "protagonistHospitalHallway", id: "protagonistHospitalHallway"},

            // Branch 3
            { scene: SumiHospital, name: "sumiHospital", id: "sumiHospital"},
            { scene: SumiHospitalHallway, name: "sumiHospitalHallway", id: "sumiHospitalHallway"},

            // Final Fight Endings
            { scene: ThePlanFailed, name: "thePlanFailed", id: "thePlanFailed"},
            { scene: WrongPlace, name: "wrongPlace", id: "wrongPlace"},

            // Final Fight
            { scene: ThePlan, name: "thePlan", id: "thePlan"},
            { scene: RightPlace, name: "rightPlace", id: "rightPlace"},

            // End of novel
            { scene: EndOfNovel, name: "endOfNovel", id: "endOfNovel" }
        ];

        ƒS.Progress.setData(dataForSave);
  
        // start the sequence
        ƒS.Progress.go(scenes);
    }
  
  }