namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
  
    console.log("Endabgabe starting");

    export let dataForSave = {
        nameProtagonist: "",
        romancePoints: 0,
        protagonistHurt: false,
        nobuKnowsBrother: false,
        nobuKnowsMother: false,
        storageHall: ""
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
        },
        swipe: {
            duration: 3,
            alpha: "./assets/transitions/swipe.jpg",
            edge: 1
        },
        eyesOpen: {
            duration: 2,
            alpha: "./assets/transitions/blink.jpg",
            edge: 1
        },
        eyesClosed: {
            duration: 1,
            alpha: "./assets/transitions/blinkReverse.jpg",
            edge: 1
        }
    };
  
    export let sound = {
        // themes
        filler_track: "./assets/sounds/music/Filler_Track.mp3",
        first_encounter: "./assets/sounds/music/First_Encounter.mp3",
        sad_times: "./assets/sounds/music/Sad_Times.mp3",
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

        protagonistHospitalRoom_day: {
            name: "ProtagonistHospitalRoom_day",
            background: "./assets/images/backgrounds/hospitalroom_pov_day.png"
        },
        protagonistHospitalRoom_evening: {
            name: "ProtagonistHospitalRoom_evening",
            background: "./assets/images/backgrounds/hospitalroom_pov_evening.png"
        },
        protagonistHospitalRoom_night: {
            name: "ProtagonistHospitalRoom_night",
            background: "./assets/images/backgrounds/hospitalroom_pov_night.png"
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
        hospitalHallway3: {
            name: "HospitalHallway3",
            background: "./assets/images/backgrounds/hospitalhallway3.png"
        },
        yukosRoom: {
            name: "YukosRoom",
            background: "./assets/images/backgrounds/yukosroom.png"
        },

        storageHall: {
            name: "StorageHall",
            background: "./assets/images/backgrounds/storagehall.png"
        },
        storageHallEntrance: {
            name: "StorageHallEntrance",
            background: "./assets/images/backgrounds/storagehall_entrance.png"
        },
        storageHallHallway: {
            name: "StorageHallHallway",
            background: "./assets/images/backgrounds/storagehall_hallway.png"
        },
        storageHallShou: {
            name: "StorageHallShou",
            background: "./assets/images/backgrounds/storagehall_shou.png"
        },
        storageHallEmpty: {
            name: "StorageHallEmpty",
            background: "./assets/images/backgrounds/storagehall_empty.png"
        },
        storageHallFight: {
            name: "StorageHall",
            background: "./assets/images/backgrounds/storagehall_fight.png"
        },
        storageHallFightFull: {
            name: "StorageHallFull",
            background: "./assets/images/backgrounds/storagehall_fight_full.png"
        }
    };

    export let sequences = {
        black: {
            name: "black",
            background: "./assets/images/sequences/black.png"
        },
        start: {
            name: "intro",
            background: "./assets/images/sequences/start.png"
        },
        harassment: {
            name: "harassment",
            background: "./assets/images/sequences/harassment.png"
        },
        coming: {
            name: "theyComing",
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
            background: "./assets/images/sequences/sumihappycrying.png"
        },
        sumiMadCry: {
            name: "sumiMadCry",
            background: "./assets/images/sequences/sumimad.png"
        },
        sumiKicksYouOut: {
            name: "sumiKicksYouOut",
            background: "./assets/images/sequences/sumikicksyouout.png"
        },
        planningEvening: {
            name: "planningEvening",
            background: "./assets/images/sequences/planning_evening.png"
        },
        planningNight: {
            name: "planningNight",
            background: "./assets/images/sequences/planning_night.png"
        },
        planningNight2: {
            name: "planningNight2",
            background: "./assets/images/sequences/planning_night2.png"
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
        },


        wakeUp: {
            name: "wakeUp",
            background: "./assets/images/sequences/wakeUp.png"
        },
        wakeUp2: {
            name: "wakeUp2",
            background: "./assets/images/sequences/wakeUp2.png"
        },
        newsReporter: {
            name: "newsReporter",
            background: "./assets/images/sequences/newsreporter.png"
        },
        sumiWalksIn: {
            name: "sumiWalksIn",
            background: "./assets/images/sequences/sumiwalksin.png"
        },
        yukoVisitNormal: {
            name: "yukoVisit",
            background: "./assets/images/sequences/yukovisit_normal.png"
        },
        yukoVisitSad: {
            name: "yukoVisitSad",
            background: "./assets/images/sequences/yukovisit_sad.png"
        },
        sumiCrying: {
            name: "sumiCrying",
            background: "./assets/images/sequences/sumicrying_hospital.png"
        },
        sumiMadCryHospital: {
            name: "sumiMadCryHospital",
            background: "./assets/images/sequences/sumimad_hospital.png"
        },
        sumiHappyCryHospital: {
            name: "sumiHappyCryHospital",
            background: "./assets/images/sequences/sumihappycrying_hospital.png"
        },
        planningEveningHospital: {
            name: "planningEveningHospital",
            background: "./assets/images/sequences/planning_hospital_evening.png"
        },
        planningNightHospital: {
            name: "planningNightHospital",
            background: "./assets/images/sequences/planning_hospital_night.png"
        },
        planningNight2Hospital: {
            name: "planningNight2Hospital",
            background: "./assets/images/sequences/planning_hospital_night2.png"
        },
        sumiNobuArgumentHospital: {
            name: "sumiNobuArgumentHospital",
            background: "./assets/images/sequences/suminobuargument_hospital.png"
        },
        nobuWaitingHospital: {
            name: "nobuWaitingHospital",
            background: "./assets/images/sequences/nobuwaiting_hospital.png"
        },
        sumiSmilingEyesOpenHospital: {
            name: "sumiSmilingEyesOpenHospital",
            background: "./assets/images/sequences/sumismilingeyesopen_hospital.png"
        },
        sumiSmilingEyesClosedHospital: {
            name: "sumiSmilingEyesClosedHospital",
            background: "./assets/images/sequences/sumismilingeyesclosed_hospital.png"
        },

        sumiDepressed: {
            name: "sumiDepressed",
            background: "./assets/images/sequences/sumidepressed.png"
        },

        sumiHospitalEyesClosed: {
            name: "sumiHospitalEyesClosed",
            background: "./assets/images/sequences/sumihospital_eyesclosed.png"
        },
        sumiHospitalEyesOpening: {
            name: "sumiHospitalEyesOpening",
            background: "./assets/images/sequences/sumihospital_eyesopening.png"
        },
        sumiHospital: {
            name: "sumiHospital",
            background: "./assets/images/sequences/sumihospital.png"
        },
        sumiHospitalZoom: {
            name: "sumiHospitalZoom",
            background: "./assets/images/sequences/sumihospital_zoom.png"
        },
        sumiHappyCryInHospital: {
            name: "sumiHappyCryInHospital",
            background: "./assets/images/sequences/sumihappycryhospital.png"
        },
        sumiCryInHospital: {
            name: "sumiCryInHospital",
            background: "./assets/images/sequences/sumicryhospital.png"
        },
        planningDaySumiHospital: {
            name: "planningDaySumiHospital",
            background: "./assets/images/sequences/planning_sumi_day.png"
        },
        planningEveningSumiHospital: {
            name: "planningEveningSumiHospital",
            background: "./assets/images/sequences/planning_sumi_evening.png"
        },
        planningEveningSumiHospitalLooking: {
            name: "planningEveningSumiHospitalLooking",
            background: "./assets/images/sequences/planning_sumi_evening_looking.png"
        },
        sumiSmilingEyesOpenInHospital: {
            name: "sumiSmilingEyesOpenInHospital",
            background: "./assets/images/sequences/sumihappyhospital.png"
        },
        sumiSmilingEyesClosedInHospital: {
            name: "sumiSmilingEyesClosedInHospital",
            background: "./assets/images/sequences/sumihappyhospitaleyesclosed.png"
        },
        sumiNobuArgumentHospitalroom: {
            name: "sumiNobuArgumentHospitalroom",
            background: "./assets/images/sequences/suminobuargument_hospitalroom.png"
        },
        nobuWaitingHospitalOutside: {
            name: "nobuWaitingHospitalOutside",
            background: "./assets/images/sequences/nobuwaiting_hospital_outside.png"
        },
        nobuWaitingAndKnifeHospital: {
            name: "nobuWaitingAndKnifeHospital",
            background: "./assets/images/sequences/nobuwaitingandknifehospital.png"
        },

        plan: {
            name: "plan",
            background: "./assets/images/sequences/plan.png"
        },

        storageHallWakeUp: {
            name: "storageHallWakeUp",
            background: "./assets/images/sequences/storagehall_wakeup.png"
        },
        storageHallWakeUp2: {
            name: "storageHallWakeUp2",
            background: "./assets/images/sequences/storagehall_wakeup2.png"
        },

        sumiTiedUpComing: {
            name: "sumiTiedUpComing",
            background: "./assets/images/sequences/sumitiedupcoming.png"
        },
        sumiTiedUp: {
            name: "sumiTiedUp",
            background: "./assets/images/sequences/sumitiedup.png"
        },
        sumiEndCry: {
            name: "sumiEndCry",
            background: "./assets/images/sequences/sumiendcry.png"
        },
        nobuKnifeStorage: {
            name: "nobuKnifeStorage",
            background: "./assets/images/sequences/nobuknife_storage.png"
        },
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
        },
        sumiEnding: {
            name: "sumiEnding",
            background: "./assets/images/sequences/endings/sumiending.png"
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
                normal_flipped: "./assets/images/characters/sumi/sumi_normal_flipped.png",
                embarrassed: "./assets/images/characters/sumi/sumi_embarrassed.png",
                embarrassed_flipped: "./assets/images/characters/sumi/sumi_embarrassed_flipped.png",
                hurt: "./assets/images/characters/sumi/sumi_hurt.png",
                hurt_flipped: "./assets/images/characters/sumi/sumi_hurt_flipped.png"
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
                normal: "./assets/images/characters/yuko/yuko_normal.png",
                happy: "./assets/images/characters/yuko/yuko_happy.png",
                sad: "./assets/images/characters/yuko/yuko_sad.png"
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
        rightOutToRight: "rightOutToRight",
        leftToLeftOut: "leftToLeftOut",
        leftOutToLeft: "leftOutToLeft",

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
                      
            case animations.rightToRightOut:
                return {
                    start: { translation: new ƒS.Position(480, ƒS.positions.bottomcenter.y) },
                    end: { translation: new ƒS.Position(1500, ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };  
            case animations.rightToRightOut:
                return {
                    start: { translation: new ƒS.Position(1500, ƒS.positions.bottomcenter.y) },
                    end: { translation: new ƒS.Position(480, ƒS.positions.bottomcenter.y) },
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
            case animations.leftOutToLeft:
                return {
                    start: { translation: new ƒS.Position(-1500, ƒS.positions.bottomcenter.y) },
                    end: { translation: new ƒS.Position(-480, ƒS.positions.bottomcenter.y) },
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
        glasses: {
            name: "Mysteriöse Brille",
            description: "Willst du sie wirklich aufsetzen?",
            image: "./assets/images/items/glasses.png",
            static: false
            //handler: hndGlasses
        },
        juice: {
            name: "Saft",
            description: "Du wolltest Saft, hier haste ihn.",
            image: "./assets/images/items/juice.png",
            static: false,
            handler: hndJuice
        },
        documentsShou: {
            name: "Shous Dokumente 1",
            description: "Dokumente um einen Plan auszuarbeiten, damit wir Shou finden.",
            image: "./assets/images/items/documents1.png",
            static: true
        },
        documentsShou2: {
            name: "Shous Dokumente 2",
            description: "Mehr Dokumente um den Plan fertigzustellen, damit wir Shou finden.",
            image: "./assets/images/items/documents2.png",
            static: true
        },
        documentsNobu: {
            name: "Nobus Dokumente",
            description: "Diese Dokumente wurden benutzt um den Aufenthaltsort von Shou herauszufinden.",
            image: "./assets/images/items/documents3.png",
            static: true
        },
        knife: {
            name: "Messer",
            description: "Ein Messer um sich zu verteidigen... oder etwas Anderes?",
            image: "./assets/images/items/knife.png",
            static: true
        },
        code: {
            name: "Lagerhallennummer",
            description: "",
            image: "./assets/images/items/code.png",
            static: true
        }

        // Hier kommen noch Waffen hin?
        // Abfragen wann Items benutzt werden, um die horny brille zu benutzen oder sich später zu befreien...zum Beispiel if getAmount == 0? Zumindest im Finale, aber wie mit Brille?
        // Background Overlay Sumi befreien?
      };

    // async function hndGlasses(_event: CustomEvent): Promise<void> {
    //     await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
    //     await ƒS.update(3);
    //     characters.sumi.pose.normal = "./assets/images/characters/sumi/.png";
    //     characters.sumi.pose.normal_flipped = "./assets/images/characters/sumi/.png";
    // }
    
    async function hndJuice(_event: CustomEvent): Promise<void> {
        await ƒS.Speech.tell(characters.protagonist, "Boahhhh geiler Saft");
    }

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