"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function EndOfNovel() {
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.story, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.characters, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.sequences, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.music, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.sfx, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.backgrounds, Endabgabe.animate(Endabgabe.animations.credits));
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.credits);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.credits, Endabgabe.characters.credits.pose.tfp, Endabgabe.animate(Endabgabe.animations.creditsLast));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
    }
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
        protagonistHurt: false,
        nobuKnowsBrother: false,
        nobuKnowsMother: false,
        storageHall: "",
        way: 0,
        final: 0
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
    Endabgabe.sound = {
        // themes
        filler_track: "./assets/sounds/music/Filler_Track.mp3",
        float_track: "./assets/sounds/music/Floating_Track.mp3",
        first_encounter: "./assets/sounds/music/First_Encounter.mp3",
        sad_times: "./assets/sounds/music/Sad_Times.mp3",
        romantic_track: "./assets/sounds/music/Romantic_Track.mp3",
        searching_track: "./assets/sounds/music/Searching_Track.mp3",
        stealth_track: "./assets/sounds/music/Stealth_Track.mp3",
        final_fight: "./assets/sounds/music/Final_Fight.mp3",
        good_ending: "./assets/sounds/music/Good_Ending.mp3",
        neutral_ending: "./assets/sounds/music/Neutral_Ending.mp3",
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
        running: "./assets/sounds/sfx/running.mp3",
        woman_heavy_breathing: "./assets/sounds/sfx/womanheavybreathing.mp3",
        door_bell_buzzer: "./assets/sounds/sfx/doorbellbuzzer.mp3",
        door_knocking: "./assets/sounds/sfx/doorknocking.mp3",
        hard_floor_footsteps: "./assets/sounds/sfx/hardfloorfootsteps.mp3",
        door_opening: "./assets/sounds/sfx/dooropening.mp3",
        door_closing: "./assets/sounds/sfx/doorclosing.mp3",
        raining: "./assets/sounds/sfx/rainloop.mp3",
        bath_filling: "./assets/sounds/sfx/bathfilling.mp3",
        rooster: "./assets/sounds/sfx/rooster.mp3",
        hospital_ambiente: "./assets/sounds/sfx/hospital_ambiente.mp3",
        hallway_floor_footsteps: "./assets/sounds/sfx/hallwayfloorfootsteps.mp3",
        lights: "./assets/sounds/sfx/lights.mp3",
        groan_man_1: "./assets/sounds/sfx/groanman1.mp3",
        groan_man_2: "./assets/sounds/sfx/groanman2.mp3",
        whipped_man: "./assets/sounds/sfx/whippedman.mp3",
        knife: "./assets/sounds/sfx/knife.mp3",
        fight_men: "./assets/sounds/sfx/fightmen.mp3"
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
        storageHallNobu: {
            name: "storageHallNobu",
            background: "./assets/images/backgrounds/storagehall_nobu.png"
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
        },
        storageHallFightFuller: {
            name: "StorageHallFuller",
            background: "./assets/images/backgrounds/storagehall_fight_fuller.png"
        },
        storageHallFightFullest: {
            name: "StorageHallFullest",
            background: "./assets/images/backgrounds/storagehall_fight_fullest.png"
        },
        storagehallOutside: {
            name: "storagehallOutside",
            background: "./assets/images/backgrounds/storagehall_outside.png"
        }
    };
    Endabgabe.sequences = {
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
        sumiThreatsNobu: {
            name: "sumiThreatsNobu",
            background: "./assets/images/sequences/sumithreatsnobu.png"
        },
        grabKnife: {
            name: "grabKnife",
            background: "./assets/images/sequences/grabknife.png"
        },
        letsFight: {
            name: "letsFight",
            background: "./assets/images/sequences/letsfight.png"
        },
        nobuKO: {
            name: "nobuKO",
            background: "./assets/images/sequences/nobuko.png"
        },
        sumiGrabsKnife: {
            name: "sumiGrabsKnife",
            background: "./assets/images/sequences/sumigrabsknife.png"
        },
        sumiRage: {
            name: "sumiRage",
            background: "./assets/images/sequences/sumirage.png"
        },
        sumiKillsNobu: {
            name: "sumiKillsNobu",
            background: "./assets/images/sequences/sumikillsnobu.png"
        },
        fightUnconscious: {
            name: "fightUnconscious",
            background: "./assets/images/sequences/fight_unconscious.png"
        },
        sumiShouComing: {
            name: "sumiShouComing",
            background: "./assets/images/sequences/sumishoucoming.png"
        },
        sumiStabbedNobu: {
            name: "sumiStabbedNobu",
            background: "./assets/images/sequences/sumistabbednobu.png"
        },
        sumiAlmostStabbedNobu: {
            name: "sumiAlmostStabbedNobu",
            background: "./assets/images/sequences/sumialmoststabbednobu.png"
        },
        shouHitsNobu: {
            name: "shouHitsNobu",
            background: "./assets/images/sequences/shouhitsnobu.png"
        },
        firstAidStorageHall: {
            name: "firstAidStorageHall",
            background: "./assets/images/sequences/sumifirstaid_storagehall.png"
        },
        sumiHappyCryStorageHall: {
            name: "sumiHappyCryStorageHall",
            background: "./assets/images/sequences/sumihappycry_storagehall.png"
        },
        sumiHappyCryOutside: {
            name: "sumiHappyCryOutside",
            background: "./assets/images/sequences/sumihappycry_outside.png"
        },
        sumiCryingOutside: {
            name: "sumiCrying",
            background: "./assets/images/sequences/sumicrying_storagehall.png"
        },
        sumiKissOutside: {
            name: "sumiKissOutside",
            background: "./assets/images/sequences/sumikiss_outside.png"
        },
        sumiKissStorageHall: {
            name: "sumiKissStorageHall",
            background: "./assets/images/sequences/sumikiss_storagehall.png"
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
        },
        sumiEnding: {
            name: "sumiEnding",
            background: "./assets/images/sequences/endings/sumiending.png"
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
                normal_flipped: "./assets/images/characters/sumi/sumi_normal_flipped.png",
                embarrassed: "./assets/images/characters/sumi/sumi_embarrassed.png",
                embarrassed_flipped: "./assets/images/characters/sumi/sumi_embarrassed_flipped.png",
                hurt: "./assets/images/characters/sumi/sumi_hurt.png",
                hurt_flipped: "./assets/images/characters/sumi/sumi_hurt_flipped.png",
                shy: "./assets/images/characters/sumi/sumi_shy.png",
                embarrassed2: "./assets/images/characters/sumi/sumi_embarrassed2.png"
            }
        },
        nobu: {
            name: "Nobu",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/nobu/nobu_normal.png",
                happy: "./assets/images/characters/nobu/nobu_happy.png",
                hurt: "./assets/images/characters/nobu/nobu_hurt.png",
                grabbed: "./assets/images/characters/nobu/nobu_grabbed.png"
            }
        },
        yuko: {
            name: "Yuko",
            origin: Endabgabe.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./assets/images/characters/yuko/yuko_normal.png",
                happy: "./assets/images/characters/yuko/yuko_happy.png",
                sad: "./assets/images/characters/yuko/yuko_sad.png"
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
        credits: {
            name: "Credits",
            origin: Endabgabe.ƒS.ORIGIN.CENTER,
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
        rightOutToRight: "rightOutToRight",
        leftToLeftOut: "leftToLeftOut",
        leftOutToLeft: "leftOutToLeft",
        credits: "credits",
        creditsLast: "creditsLast"
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
            case Endabgabe.animations.rightToRightOut:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: new Endabgabe.ƒS.Position(1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.rightToRightOut:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y) },
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
            case Endabgabe.animations.leftOutToLeft:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(-1500, Endabgabe.ƒS.positions.bottomcenter.y) },
                    end: { translation: new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y) },
                    duration: 2,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.credits:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(Endabgabe.ƒS.positions.bottomcenter.x, -650) },
                    end: { translation: new Endabgabe.ƒS.Position(Endabgabe.ƒS.positions.bottomcenter.x, 650) },
                    duration: 4,
                    playmode: Endabgabe.ƒS.ANIMATION_PLAYMODE.PLAYONCE
                };
            case Endabgabe.animations.creditsLast:
                return {
                    start: { translation: new Endabgabe.ƒS.Position(Endabgabe.ƒS.positions.bottomcenter.x, -650) },
                    end: { translation: new Endabgabe.ƒS.Position(Endabgabe.ƒS.positions.bottomcenter.x, 0) },
                    duration: 4,
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
    let volume = 0.5;
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
        glasses: {
            name: "Mysteriöse Brille",
            description: "Willst du sie wirklich aufsetzen?",
            image: "./assets/images/items/glasses.png",
            static: false,
            handler: hndGlasses
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
            static: false
        },
        code: {
            name: "Lagerhallennummer",
            description: "",
            image: "./assets/images/items/code.png",
            static: true
        }
    };
    async function hndGlasses(_event) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    async function hndJuice(_event) {
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Boahhhh geiler Saft!");
    }
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
        let scenes = [
            // Intro
            { scene: Endabgabe.Street, name: "street", id: "street" },
            // Branch 1
            { scene: Endabgabe.SumisHome, name: "sumisHome", id: "sumisHome" },
            { scene: Endabgabe.SumisHouse, name: "sumisHouse", id: "sumisHouse" },
            // Branch 2
            { scene: Endabgabe.ProtagonistHospital, name: "protagonistHospital", id: "protagonistHospital" },
            { scene: Endabgabe.ProtagonistHospitalHallway, name: "protagonistHospitalHallway", id: "protagonistHospitalHallway" },
            // Branch 3
            { scene: Endabgabe.SumiHospital, name: "sumiHospital", id: "sumiHospital" },
            { scene: Endabgabe.SumiHospitalHallway, name: "sumiHospitalHallway", id: "sumiHospitalHallway" },
            // Final Fight Endings
            { scene: Endabgabe.ThePlanFailed, name: "thePlanFailed", id: "thePlanFailed" },
            { scene: Endabgabe.WrongPlace, name: "wrongPlace", id: "wrongPlace" },
            // Final Fight
            { scene: Endabgabe.ThePlan, name: "thePlan", id: "thePlan" },
            { scene: Endabgabe.RightPlace, name: "rightPlace", id: "rightPlace" },
            // End of novel
            { scene: Endabgabe.EndOfNovel, name: "endOfNovel", id: "endOfNovel" }
        ];
        Endabgabe.ƒS.Progress.setData(Endabgabe.dataForSave);
        // start the sequence
        Endabgabe.ƒS.Progress.go(scenes);
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ProtagonistHospital() {
        console.log("FudgeStory ProtagonistHospital Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S2200_02: "Wo bin ich?",
                S2200_04: "Ahh aua, ich fühle den Grund, mist…",
                S2200_06: "Nobu? Du kennst diesen Typen?",
                S2200_08: "Wow, wie nett von ihm…",
                S2200_10: "Ja ehm… kein Problem…",
                S2200_12: "Warte! Du gehst schon? Kann ich wenigstens deinen Namen erfahren?",
                S2200_14: "Ein sehr schöner Name! Ich heiße: ",
                S2200_16: "Okay, danke… wow dann muss ich mich wohl einige Tage hier langweilen…",
                S2200_18: "Warte! Werde ich dich wiedersehen?",
                S2200_20: "Dann besuch mich wenigstens, während ich noch hier im Krankenhaus bin, mir ist sowieso langweilig.",
                S2200_22: "Ja, man sieht sich.",
                S2210_02: "Das ist doch der Junge von den Plakaten… Wow… Immer noch keine Spur? Seine Familie muss sich große Sorgen machen...",
                S2210_04: "Seine Jacke kommt mir bekannt vor… das ist doch die von Nobu und seiner Gang?",
                S2220_01: "War das nicht gerade Sumi? Was macht sie hier…",
                S2220_13: "Ich habe genug zugehört… ich sollte zurück auf mein Zimmer.",
                S2230_02: "Sumi? Dachte nicht, dass du wirklich kommst und mich tatsächlich besuchst…",
                S2230_04: "Freut mich! Mir geht es an sich ganz gut, aber fühle immer noch leichten Schmerz… aber habe etwas dagegen bekommen.",
                S2230_06: "Was meinst du? Wieso?",
                S2231_01: "Du hör zu… ich habe in den Nachrichten einen Jungen gesehen, welcher seit Wochen vermisst wird. Auf dem Foto hatte er dieselbe Jacke an wie Nobu und seine Gang. Kennst du den auch?",
                S2231_03: "Alles okay?",
                S2231_05: "Wow… bei deiner Reaktion kennst du ihn wohl sehr gut… tut mir leid, falls ich etwas Falsches gesagt habe…",
                S2231_07: "Darf ich fragen was passiert ist?",
                S2231_09: "Gerade weil ich eine fremde Person bin und nichts mit der Sache zu tun habe ist es vielleicht manchmal leichter darüber zu reden.",
                S2232_01: "Du hör zu… ich bin vorhin aus Langeweile durch das Krankenhaus spaziert und habe dich in ein Zimmer reinlaufen sehen. Ich bin dir hinterher, weil ich dich nochmal sehen wollte, habe aber dabei aus Versehen ein kleines Stück eines Gespräches mitgekriegt…",
                S2232_03: "Tut mir leid, ich wollte euch nicht belauschen… alles okay?",
                S2232_05: "Nicht viel, nur dass dein Bruder vermisst wird und die Frau schwerkrank ist?",
                S2232_07: "Wow… tut mir leid, falls ich etwas Falsches gesagt habe…",
                S2232_09: "Darf ich fragen was passiert ist?",
                S2232_11: "Gerade weil ich eine fremde Person bin und nichts mit der Sache zu tun habe ist es vielleicht manchmal leichter darüber zu reden.",
                S2240_02: "Ich weiß jetzt nicht, ob ich mich bedanken soll.",
                S2240_04: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2240_06: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
                S2241_01: "Das ist viel zu gefährlich, du solltest das lieber alles sein lassen. Du hast keine richtigen Anhaltspunkte, das ist viel zu riskant. Wenn er wirklich was mit der Entführung deines Bruders zu tun hat, dann ist er gefährlich und du könntest die Nächste sein.",
                S2242_02: "Und jetzt ist auch dein Bruder weg, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
                S2243_01: "Ich schätze deinen Optimismus, aber ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2243_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2243_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2243_08: "Das klingt gut...",
                S2243_10: "...",
                S2243_13: "Bis morgen!"
            },
            Sumi: {
                S2200_01: "Da bist du ja endlich, hat ja lang genug gedauert…",
                S2200_03: "Wonach sieht es denn aus? Du bist im Krankenhaus natürlich.",
                S2200_05: "Ja Nobu hat dich ordentlich zusammengeschlagen, aber du wolltest ja nicht aufhören…",
                S2200_07: "Ja, lange Geschichte… jedenfalls hast du nochmal Glück gehabt… er hätte dich auch umbringen können.",
                S2200_09: "Jedenfalls hast du mich trotzdem irgendwie gerettet und deswegen hab ich gewartet bis du aufwachst…um mich zu bedanken… also danke.",
                S2200_11: "Also dann geh ich wieder… und halt dich in Zukunft lieber raus, wenn du weiterleben willst…",
                S2200_13: "In Ordnung, ich heiße Sumi…",
                //S2200_15: "Alles klar, PROTAGONIST. Ahja und noch eine Sache. Der Arzt war hier und sagte, dass du einige Tage hierbleiben musst. Du hast leichte Verletzungen, nichts Schwerwiegendes, musst dich aber schonen.",
                S2200_17: "Du kannst Fernsehen oder lern deine Zimmernachbarn kennen, mir egal. Ich muss aber jetzt gehen, hab noch etwas zu erledigen.",
                S2200_19: "Hör zu, halt dich lieber fern von mir, alles klar? Sonst kommst du wieder in solche Schwierigkeiten.",
                S2200_21: "Ich verspreche dir nichts... und jetzt ruh dich aus.",
                S2220_03: "Nein, Mom… leider nicht.",
                S2220_05: "Nicht ganz… ich wusste, dass er mit komischen Typen abhing… aber nicht, dass sie eine Gang waren.",
                S2220_07: "Mach dir keine Gedanken… in deinem Zustand solltest du dir keine Sorgen machen, das ist nicht gut für dich.",
                S2220_09: "Ich weiß doch… aber wenn sich dein Zustand noch verschlechtert… und ich dich auch noch verliere… dann bin ich allein.",
                S2220_11: "Ich vermisse ihn…",
                S2230_01: "Na du Superheld, wie geht es dir?",
                S2230_03: "Ach, ich war in der Nähe… dachte ich komm mal vorbei und schaue nach wie es dir geht. Immerhin hast du Schläge für mich kassiert, da kann ich ja auch mal vorbeischauen.",
                S2230_05: "Davon könnte ich auch etwas gebrauchen…",
                S2230_07: "Ach egal…",
                S2231_02: "…",
                S2231_04: "Ja nein, alles in Ordnung… ja ich kenne diesen Jungen aus den Nachrichten…",
                S2231_06: "Nein ist schon in Ordnung…",
                S2231_08: "Ich weiß nicht, ob ich hier einer ziemlich fremden Person private Geschichten erzählen sollte. Außerdem hat das alles sowieso nichts mit dir zu tun…",
                S2232_02: "…",
                S2232_04: "Ja nein, alles in Ordnung… was genau hast du denn mit angehört?",
                S2232_06: "Nicht viel…",
                S2232_08: "Nein ist schon in Ordnung…",
                S2232_10: "Ich weiß nicht, ob ich hier einer ziemlich fremden Person private Geschichten erzählen sollte. Außerdem hat das alles sowieso nichts mit dir zu tun…",
                S2240_01: "Wow, so wie du aussiehst hätte ich solchen weise Worte nicht erwartet.",
                S2240_03: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der dich zusammen-geschlagen hat, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2240_05: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine  Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl…",
                S2240_07: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",
                S2241_02: "Wer bist du? Ich treffe meine eigenen Entscheidungen… warum erzähl ich das eigentlich einer fremden Person? Ich sollte gehen und nicht meine Zeit mit einem Fremden verschwenden…",
                S2242_01: "Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2242_01b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als unsere Mutter schwerkrank wurde und ins Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2242_03: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
                S2243_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2243_04: "Trotzdem…",
                S2243_06: "Na gut…",
                S2243_07: "Es ist schon spät und ich muss noch wohin... ich komme dich morgen besuchen, dann können wir daran weiterarbeiten.",
                S2243_09: "...",
                S2243_11: "Alles okay? Warum siehst du mich so an?",
                S2243_12: "Ehm… danke… ich sollte aber jetzt gehen… bis morgen."
            },
            Yuko: {
                S2220_02: "Ich habe gerade die Nachrichten gesehen… es gibt immer noch keine Neuigkeiten von Shou?",
                S2220_04: "Wusstest du, dass er Mitglied einer Gang war?",
                S2220_06: "Ach Schatz… wann wird mein Sohn endlich zurückkehren?",
                S2220_08: "Wie soll ich mir keine Sorgen machen, wenn dein Bruder seit Wochen vermisst wird? Sumi, er ist mein Sohn… ich würde mir ja auch Sorgen machen, wenn du wochenlang verschwunden wärst.",
                S2220_10: "Schatz, egal was passiert… ich werde immer bei dir sein… und ich bin mir sicher, dass dein Bruder zurückkommt.",
                S2220_12: "Ich vermisse ihn auch…"
            },
            Reporter: {
                S2210_01: "… seit Wochen gibt es immer noch keine Hinweise zum Verschwinden von dem jungen Shou …",
                S2210_03: "… da dieser Junge Mitglied einer Gang ist, geht die Polizei davon aus, dass dieser in illegale Machenschaften reingezogen wurde …",
                S2210_05: "… demnach stellt sich die Frage, lebt dieser Junge überhaupt noch?"
            }
        };
        // Decisions
        let tvOrWalk;
        let talkOutOrHelp;
        let flirtOrNot;
        let tvOrWalkAnswer = {
            tv: "Fernseher schauen",
            walk: "Durch das Krankenhaus spazieren"
        };
        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?"
        };
        let flirtOrNotAnswer = {
            flirt: "Du siehst sehr schön aus...",
            not: "Nichts..."
        };
        // Start
        Endabgabe.dataForSave.way = 2;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.05, true);
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.nobu.name = "Nobu";
        Endabgabe.characters.sumi.name = "Pinkes Mädchen";
        Endabgabe.characters.yuko.name = "Sumis Mom";
        Endabgabe.dataForSave.protagonistHurt = true;
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.wakeUp);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.wakeUp2);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_02);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_day);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0.2, 3, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_12);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_13);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_14);
        Endabgabe.characters.sumi.name = "Sumi";
        //Name Input
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
        Endabgabe.characters.protagonist.name = name;
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Alles klar, " + Endabgabe.characters.protagonist.name + ". Ahja und noch eine Sache. Der Arzt war hier und sagte, dass du einige Tage hierbleiben musst. Du hast leichte Verletzungen, nichts Schwerwiegendes, musst dich aber schonen.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_18);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_19);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_20);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2200_21);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2200_22);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.update(1);
        tvOrWalk = await Endabgabe.ƒS.Menu.getInput(tvOrWalkAnswer, "decisionClass");
        switch (tvOrWalk) {
            case tvOrWalkAnswer.tv:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.newsReporter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2210_02);
                await Endabgabe.ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2210_04);
                await Endabgabe.ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "... irgendwie bin ich noch sehr müde... vielleicht sollte ich ein wenig schlaf...");
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_evening);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2231_01);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiCrying);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2231_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2231_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2231_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2231_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2231_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2231_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2231_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2231_09);
                break;
            case tvOrWalkAnswer.walk:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hospital_ambiente, 0.5, true);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0.5, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway2);
                await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway3);
                await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiWalksIn);
                await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2220_01);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.yukoVisitNormal);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2220_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2220_05);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.yukoVisitSad);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2220_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2220_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2220_11);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2220_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2220_13);
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0.5, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hospital_ambiente, 0, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_evening);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2230_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2230_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_01);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiCrying);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2232_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2232_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2232_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2232_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2232_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2232_11);
                break;
        }
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 0, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 0, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2240_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2240_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2240_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2240_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2240_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2240_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2240_07);
        talkOutOrHelp = await Endabgabe.ƒS.Menu.getInput(talkOutOrHelpAnswer, "decisionClass");
        switch (talkOutOrHelp) {
            case talkOutOrHelpAnswer.talkOut:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2241_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiMadCryHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2241_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 2, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 0, false);
                return await ending(1);
            case talkOutOrHelpAnswer.morePeople:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2242_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2242_01b);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2242_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2242_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_06);
                await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou);
                await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 10, false);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNightHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNight2Hospital);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_11);
                flirtOrNot = await Endabgabe.ƒS.Menu.getInput(flirtOrNotAnswer, "decisionClass");
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_night);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.shy, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                switch (flirtOrNot) {
                    case flirtOrNotAnswer.not:
                        break;
                    case flirtOrNotAnswer.flirt:
                        Endabgabe.dataForSave.romancePoints++;
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.embarrassed2, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2243_12);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2243_13);
                        break;
                }
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.embarrassed2, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 3, false);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
                await Endabgabe.ƒS.update(3);
                return "protagonistHospitalHallway";
        }
        // Endings
        async function ending(endingNr) {
            switch (endingNr) {
                case 1:
                    await Endabgabe.ƒS.Speech.hide();
                    await Endabgabe.ƒS.Location.show(Endabgabe.endings.partingWays);
                    await Endabgabe.ƒS.update(3);
                    await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.neutral_ending, 0, 4, false);
                    return "endOfNovel";
            }
            return "endOfNovel";
        }
    }
    Endabgabe.ProtagonistHospital = ProtagonistHospital;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ProtagonistHospitalHallway() {
        console.log("FudgeStory ProtagonistHospitalHallway Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S3200_01: "Das klingt doch wie Sumi? Was ist da los?",
                S3200_07: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",
                S3230_02: "Sicher, dass du nichts weißt?",
                S3230_04: "Keine Sorge, die finden wir noch…",
                S3240_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3240_03: "Halte noch ein wenig durch.",
                S3240_05: "Klingt gut, geht mir genauso...",
                S3240_07: "Keine Sorge, wir finden deinen Bruder.",
                S3240_09: "Ganz bestimmt...",
                S3240_12: "Du hast Recht, machen wir weiter."
            },
            Sumi: {
                S3200_01: "Jetzt verschwinde endlich, du hast hier nichts zu suchen!",
                S3200_03: "Du spionierst mir nach? Das geht dich nichts an, verschwinde jetzt!",
                S3200_05: "Hör zu, ich habe gerade keine Zeit… warum komm ich nicht einfach zum nächsten Gang-Treffen und ich erzähle dir alles?",
                S3200_08: Endabgabe.dataForSave.nameProtagonist + ", warum?!...",
                S3200_10: "Nein… ehm…",
                S3220_02: "Nein… eh… ja… das ist nicht wichtig und geht dich nichts an.",
                S3220_04: "Nobu… geh einfach…",
                S3240_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3240_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3240_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3240_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3240_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3240_11: "Wir sollten den Plan fertig stellen… denn morgen wirst du entlassen und dann treffen wir uns bei mir zuhause, um den Plan zu beginnen."
            },
            Nobu: {
                S3200_02: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden! Du meidest mich, antwortest mir nicht auf meine Nachrichten oder Anrufe. Ich hab dich beobachtet… du bist ziemlich oft in diesem Krankenhaus… warum?",
                S3200_04: "Ja, ich will wissen, warum du mir aus dem Weg gehst!",
                S3200_06: "Wehe du tauchst nicht auf.",
                S3200_09: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und dich hier befindest? Hast dich in deinen Retter verliebt?",
                S3210_01: "Du kleine Ratte… hast du Glück, dass hier schon die Leute schauen. Aber das wirst du noch bereuen…",
                S3220_01: "Achsoooo, ihre Mutter ist hier im Krankenhaus?",
                S3220_03: "Aber warum hast du das nicht gleich gesagt? Deine arme Mutter ist also schwerkrank? Du armes Mädchen…",
                S3220_05: "Keine Sorge… ich gehe jetzt.",
                S3220_05b: "Aber an deiner Stelle würde ich definitiv zum nächsten Gang-Treffen kommen, wenn du nicht willst, dass es deiner schwerkranken Mutter noch schlechter geht.",
                S3230_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3230_03: "Hast du Beweise für deine Anschuldigungen?",
                S3230_05: "Pass lieber auf wo du deine Nase reinsteckst."
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
            couple: "Ja bin ich, wir sind jetzt ein Paar und sie besucht mich.",
            school: "Entspann dich, wir sind in der selben Klasse und ich bringe ihr nur die heutigen Notizen.",
            mother: "Das ist Zufall, du hast mich her befördert und sie besucht ihre Mutter.",
            brother: "Vielleicht ist der Grund eher, dass du etwas mit der Entführung ihres Bruders zu tun hast?"
        };
        let romanceChoicesAnswer = {
            beautiful: "Ich bewundere wunderschöne Menschen.",
            intelligent: "Du bist auch sehr intelligent, deine Ideen waren sogar noch besser.",
            thanks: "Danke"
        };
        // Start
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_day);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3200_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3200_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiNobuArgumentHospital);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hospital_ambiente, 0.5, true);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.1, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3200_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3200_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3200_04);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3200_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3200_06);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway3);
                Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.midToRight));
                Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeft));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3200_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3200_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3200_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3200_10);
                howToInterfere = await Endabgabe.ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");
                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3210_01);
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(10);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaitingHospital);
                        await Endabgabe.ƒS.update(5);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_night);
                        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Du hast dich mit mir angelegt... selbst Schuld.");
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
                        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife_stabbing, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.school:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Ihr kennt euch aus der Klasse? Das erklärt so einiges...");
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Ja, jetzt lass mich in Ruhe, denn ich muss hier meine Bildung nachholen.");
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Na gut... ausnahmsweise... aber glaub ja nicht, dass du immer so leicht davon kommst.");
                        break;
                    case howToInterfereAnswer.mother:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3220_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3220_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3220_03);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3220_04);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3220_05);
                        Endabgabe.dataForSave.nobuKnowsMother = true;
                        break;
                    case howToInterfereAnswer.brother:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3230_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3230_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3230_03);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3230_04);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3230_05);
                        Endabgabe.dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.rightToRightOut));
                await Endabgabe.ƒS.Speech.hide();
                break;
        }
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hospital_ambiente, 0, 0, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.protagonistHospitalRoom_day);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_03);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou2);
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 10, false);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNightHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNight2Hospital);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_10);
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
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesOpenHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3240_11);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesClosedHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3240_12);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 0, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
        await Endabgabe.ƒS.update(3);
        if (Endabgabe.dataForSave.nobuKnowsMother == false) {
            return "thePlan";
        }
        else {
            return "thePlanFailed";
        }
    }
    Endabgabe.ProtagonistHospitalHallway = ProtagonistHospitalHallway;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
                return "endOfNovel";
        }
        return "endOfNovel";
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
                S4120_22: "Sumi, geh deinen Bruder befreien!",
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
                S41221_08: "HALT, SUMI, STOP! Werde nicht auch zum Mörder wie er, er ist es nicht wert!",
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
                S41211_04: "DU HAST MEINEN BRUDER ERMORDET?!?",
                S41211_06: "Wie konntest du nur... Shou...",
                S41211_09: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41211_11: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41211_12: "Was mache ich jetzt? Ich habe Nobu getötet… ich bin kein Stück besser als er…",
                S41211_13: "Wie dem auch sei, ich sollte mich stellen.",
                S41211_14: "Ich danke dir für alles… vielleicht kann ich jetzt damit abschließen…",
                S41211_16: "Hier draußen haben wir Netz, ich rufe die Polizei… verschwinde von hier, du hast damit nichts zu tun… geh dein Leben weiterleben… vielleicht sieht man sich wieder…",
                S41211_17: "Aber... wieso nicht?",
                S41211_19: "Das klingt schön… vielleicht sollte ich das wirklich tun…",
                S41212_14: "Das ist " + Endabgabe.dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + Endabgabe.dataForSave.nameProtagonist + " plötzlich auf und rettete mich. Der gesamte Plan stammte von " + Endabgabe.dataForSave.nameProtagonist,
                S41212_16: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41212_18: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41212_20: "Von Nobu zusammengeschlagen zu werden scheint wohl dein Ding zu sein… aber ich hab dir vertraut und du dein Wort gehalten.",
                S41212_22: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…",
                S41221_04: "ER HAT IHN UMGEBRACHT… Shou ist tot…",
                S41221_07: "DU MONSTER!",
                S41221_09: "Du hast recht… das wäre ein zu einfacher Ausweg für ihn… er soll im Gefängnis verrotten…",
                S41221_12: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41221_14: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41221_16: "Ich kann endlich mit der Sache abschließen und mein Leben weiterleben schätze ich.",
                S41221_18: "Die Frage ist eher, ob du so einen kaputten Menschen wie mich überhaupt noch sehen willst… ich habe dir nur Probleme bereitet.",
                S41221_21: "Danke, wirklich… danke für Alles.",
                S41222_14: "Wir sollten die Polizei holen, immerhin wirst du vermisst Shou.",
                S41222_16: "Das ist " + Endabgabe.dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + Endabgabe.dataForSave.nameProtagonist + " plötzlich auf und rettete mich. Der gesamte Plan stammte von " + Endabgabe.dataForSave.nameProtagonist,
                S41222_18: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41222_20: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41222_22: "Hätte nicht gedacht, dass du Nobu schlagen könntest.",
                S41222_24: "Haha, tut mir leid.",
                S41222_26: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals in der Gasse nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…"
            },
            Nobu: {
                S4120_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor.",
                S4120_01b: "... oder findest du nicht, Sumi?",
                S4120_06: "Und ihr seid voll reingetappt… schon schade… ",
                S4120_10: "Du willst es wirklich vor deinem Tod noch wissen? Na schön, ich erzähl es dir, weil du ihn gefunden hast… als letzte Belohnung. Shou wollte mit der Gang immer nur das Mindeste, keine Ambitionen. Wir hatten Potenzial einer der gefürchtetsten Banden zu werden und als wir einen richtig dicken Fisch an der Angel hatten hat Shou alles abgebrochen, da seine Prinzipien ihm im Weg standen. Er ist weich und schwach!",
                S4120_12: "Wenn du nur wüsstest, wie oft ich das versucht habe. Doch das ist noch nicht alles. Shou hat immer sein Leben vor allen geheim gehalten. Wir wussten gar nichts über ihn, denn er war der Meinung, dass es nicht nötig ist. Aber wie willst du jemandem Folgen und dein Leben riskieren, wenn du nicht weißt, was er verbirgt? Wir waren so lange Freunde und ich wusste nichts über ihn, außer dass er eine Schwester hat.",
                S4120_14: "Natürlich nicht, ich habe das lange vor all den Problemen von allein rausgefunden. Zuerst war er auch sehr sauer, aber da wir schon fast wie Brüder waren, nahm er es mir am Ende doch nicht übel, solange ich es geheim halten würde. Aber als ich Sumi zum ersten Mal gesehen habe, habe ich mich sofort Kopf über in sie verliebt. Doch Shou wollte sie beschützen und aus all dem hier raushalten… und lies mich nicht an sie ran.",
                S4120_16: "Es war eine Mischung aus allem, irgendwann platzte mir der Kragen. Seine Regeln nahmen mir alles und ich konfrontierte ihn mit damit… doch es endete in einem riesigen Streit, da er nichts ändern wollte. Ich wollte ihn loswerden, da somit auch all meine Probleme verschwinden würden… also überlegt ich mir etwas. Ich verbündete mich mit den Gang-Mitgliedern, die derselben Meinung waren, dass die Gang ihr Potenzial nicht ausschöpfen würde.",
                S4120_18: "Er hätte niemals die Führung freiwillig abgegeben… also lockte ich ihn mit dem Vorwand mich entschuldigen zu wollen zu einem Treffen. Normal ist er sehr vorsichtig und wachsam, doch er ist zu weich, weswegen er nicht erwartet hatte, aus seinen eigenen Reihen verraten zu werden. Schon fast traurig…und schwach.",
                S4120_20: "Beweist nur, dass ich Recht habe…",
                S4120_21: "Ich hab euch nicht durchsucht... wie dumm von mir...",
                S4120_24: "Glaubst du wirklich ich lass dich gehen?",
                S4120_26: "Du willst ein Eins gegen Eins? Gegen mich? Hahahaha, na los!",
                S4120_28: "Das Einzige was ich beende ist dein Leben, du Wicht! Ha! Endlich kann ich dich erledigen, du warst mir schon seit der ersten Minute ein Dorn im Auge.",
                S4120_30: "Nicht reden, zeig mir was du draufhast! Hahaha!",
                S41211_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder?",
                S41211_01b: "Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
                S41211_03: "... was? ... wer? ... ?",
                S41211_05: "Ich musste… beim letzten Gespräch hat die kleine Ratte zu viele Fragen gestellt… ich wurde nervös, also musste ich Shou töten, bevor ihr ihn findet… nur habe ich es nicht rechtzeitig geschafft seine Leiche wegzuschaffen… ich habe nicht erwartet, dass ihr so schnell seid… ahhh",
                S41211_07: "Es war auch für mich nicht leicht, ich musste es tun…",
                S41212_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder?",
                S41212_01b: "Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
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
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.stealth_track, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHall);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hallway_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallEntrance);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallHallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallShou);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hallway_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Das muss Shou sein?! Schnell ich muss ihn befrei...");
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fall_on_ground, 0, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
        await Endabgabe.ƒS.update(10);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.stealth_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.01, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.storageHallWakeUp);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.storageHallWakeUp2);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0.1, 1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFull);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_01b);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiTiedUpComing);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_02);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFuller);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(3);
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
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(0.1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.lights, 1, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Was passiert hier? Warum ist es plötzlich dunkel?!");
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.whipped_man, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_3, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.groan_man_1, 1, false);
        await Endabgabe.ƒS.Speech.tell("Schläger", "Ahhh");
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.fall_on_ground, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.groan_man_2, 1, false);
        await Endabgabe.ƒS.Speech.tell("Prolet", "Auaaa");
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_2, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.fall_on_ground, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.lights, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFullest);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Was ist mit euch? Warum...?!?");
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiThreatsNobu);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_21);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Aber wie konntest du meine Leute besiegen? Du alleine?");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Ich dachte du hast uns durchschaut?");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "...");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Nein! Oder?!");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Oh doch... einfacher ging es nicht...");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Es kam mir von Anfang an komisch vor, dass du uns Alkohol mitbringst... was war da drin?");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Wir haben Tabletten besorgt, die euch schwächen und euch übel wird... damit wollten wir euch von vorne rein schwächen, falls es zum Kampf kommt.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Und so dumm wie deine Gorillas sind haben sie sich draufgeworfen und alles leer gesoffen... außer du.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Ja... ich war so misstrauisch, dass du etwas ausgeheckt haben könntest, dass ich mich nicht besaufen wollte und meine Sinne betäuben... das wäre eine zu große Angriffsfläche gewesen. Aber das etwas in den Getränken drin war? Da hatte ich wohl Glück im Unglück.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Egal, " + Endabgabe.dataForSave.nameProtagonist + " befrei dich und wir können das hier beenden.");
        if (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.knife) == 0) {
            await Endabgabe.ƒS.Inventory.add(Endabgabe.items.knife);
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ich sollte in meine Tasche greifen...");
        while (Endabgabe.ƒS.Inventory.getAmount(Endabgabe.items.knife) != 0) {
            await Endabgabe.ƒS.update(1);
        }
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.grabKnife);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.woman_groan_1, 1, false);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife, 1, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Ah");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Was?!");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, "Hahaha!");
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFullest);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y));
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_22);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4120_23);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_24);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_25);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.final_fight, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.letsFight);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_26);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_27);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_28);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4120_29);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4120_30);
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(3);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.fight_men, 1, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_2, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_6, 1, false);
        await Endabgabe.ƒS.update(2);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_3, 1, false);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_1, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_4, 1, false);
        await Endabgabe.ƒS.update(4);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_1, 1, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fight_men, 0, 0, false);
        await Endabgabe.ƒS.update(2);
        if (Endabgabe.dataForSave.protagonistHurt == true) {
            if (Endabgabe.dataForSave.nobuKnowsBrother == false) {
                Endabgabe.dataForSave.final = 1;
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.fightUnconscious);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFight);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_01b);
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.grabbed, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.shouHitsNobu);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(2);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.fall_on_ground, 1, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFullest);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41212_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_11);
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.rightToMid));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(3);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.fight_men, 1, true);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_2, 1, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_6, 1, false);
                await Endabgabe.ƒS.update(2);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_3, 1, false);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_1, 1, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_4, 1, false);
                await Endabgabe.ƒS.update(4);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_5, 1, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.punch_1, 1, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fight_men, 0, 0, false);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.final_fight, 0, 0, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallNobu);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFight);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.happy, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_14);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_16);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.shou);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_18);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41212_19);
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.firstAidStorageHall);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_20);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_21);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41212_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41212_23);
                await Endabgabe.ƒS.Speech.hide();
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryStorageHall);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.update(3);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKissStorageHall);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich kann mein Leben mit der Person, die ich liebe, verbringen. " + Endabgabe.dataForSave.nameProtagonist + ", ich liebe dich. \n \n Sumi");
                    return await ending(3);
                }
                else {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryStorageHall);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    return await ending(3);
                }
            }
            else {
                Endabgabe.dataForSave.final = 2;
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.fightUnconscious);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_01);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFight);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_01b);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife_stabbing, 1, false);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.hurt, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_03);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiRage);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_04);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.fall_on_ground, 1, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiStabbedNobu);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41211_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "... Sumi was hast du getan?");
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.final_fight, 0, 0, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storagehallOutside);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.shy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_11);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiCryingOutside);
                await Endabgabe.ƒS.update(1);
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
                            await Endabgabe.ƒS.Speech.hide();
                            await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKissOutside);
                            await Endabgabe.ƒS.update(1);
                            await Endabgabe.ƒS.update(3);
                            await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                            await Endabgabe.ƒS.update(5);
                            await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                            await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir ... und ich liebe dich. \n \n Sumi");
                            return await ending(1);
                        case sumiTurnInAnswer.yes:
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ja, das wäre wohl besser...");
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_14);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_16);
                            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                            await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                            await Endabgabe.ƒS.update(5);
                            await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                            await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und er wurde für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Ich habe mich gestellt, jedoch wurde der Fall als Notwehr abgestempelt, da er uns gekidnapped, gefesselt und fast umgebracht hat. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                            return await ending(2);
                    }
                }
                else {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ja, das wäre wohl besser...");
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_14);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41211_16);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41211_15);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und er wurde für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Ich habe mich gestellt, jedoch wurde der Fall als Notwehr abgestempelt, da er uns gekidnapped, gefesselt und fast umgebracht hat. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    return await ending(2);
                }
            }
        }
        else {
            if (Endabgabe.dataForSave.nobuKnowsBrother == false) {
                Endabgabe.dataForSave.final = 3;
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKO);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_03);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.final_fight, 0, 3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiShouComing);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, Endabgabe.dataForSave.nameProtagonist + "!!!");
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKO);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, new Endabgabe.ƒS.Position(480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.happy, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_05);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.shou);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_11);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41222_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_14);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.shou);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.happy, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_16);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_18);
                await Endabgabe.ƒS.Character.hide(Endabgabe.characters.shou);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_19);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_20);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.shou, text.Shou.S41222_21);
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.shou, Endabgabe.characters.shou.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.firstAidStorageHall);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_23);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_24);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_25);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41222_26);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41222_27);
                await Endabgabe.ƒS.Speech.hide();
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryStorageHall);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKissStorageHall);
                    await Endabgabe.ƒS.update(3);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich kann mein Leben mit der Person, die ich liebe, verbringen. " + Endabgabe.dataForSave.nameProtagonist + ", ich liebe dich. \n \n Sumi");
                    return await ending(3);
                }
                else {
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryStorageHall);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    return await ending(3);
                }
            }
            else {
                Endabgabe.dataForSave.final = 4;
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKO);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41221_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiRage);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_05);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKO);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S41221_06);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiRage);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_07);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiGrabsKnife);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife, 1, false);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKillsNobu);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_08);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiAlmostStabbedNobu);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_10);
                await Endabgabe.ƒS.Speech.hide();
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.police_sirens, 1, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.final_fight, 0, 0, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.storagehallOutside);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.shy, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_11);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_12);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_13);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_14);
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryOutside);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_16);
                if (Endabgabe.dataForSave.romancePoints >= 2) {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_17);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_18);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_19);
                    await Endabgabe.ƒS.Speech.hide();
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKissOutside);
                    await Endabgabe.ƒS.update(1);
                    await Endabgabe.ƒS.update(3);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir ... und ich liebe dich. \n \n Sumi");
                    return await ending(3);
                }
                else {
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S41221_20);
                    await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S41221_21);
                    await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                    await Endabgabe.ƒS.update(5);
                    await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: " + Endabgabe.dataForSave.final + "/4");
                    await Endabgabe.ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + Endabgabe.dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + Endabgabe.dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + Endabgabe.dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
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
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.good_ending, 0.5, 0, false);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.good_ending, 0.5, 0, false);
                return "endOfNovel";
            case 3:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.good_ending, 0.5, 0, false);
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
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.start);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell("", "");
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.blink.duration, Endabgabe.transitions.blink.alpha, Endabgabe.transitions.blink.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_01);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_1, 0.3, 1, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_2, 0.5, 1, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_02);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_3, 0.8, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.school2);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_03);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_groan_4, 0, 1, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.harassment);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.1, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1000_04);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.ignore:
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(3);
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
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1121_05);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1121_06);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.5, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.1, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.police);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell("Schläger", text.Schlaeger.S1121_07);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1121_08);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.running, 0, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0, 0, false);
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
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_05);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        Endabgabe.ƒS.Speech.hide();
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.5, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.3, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.1, true);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.police);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell("Schläger", text.Schlaeger.S1122_06);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1122_07);
                        Endabgabe.ƒS.Character.hide(Endabgabe.characters.nobu);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gimmeYourHand);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_08);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1122_09);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1122_10);
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.running, 0, 0, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0, 0, false);
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
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
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
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0, 0, false);
                        return await ending(2);
                    case provokeOrKeepUpAnswer.keepUp:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S1123_06);
                        await Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousNobuGang);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0.05, 3, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_2, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_3, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_4, 0, 1, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.police_sirens, 0, 5, false);
                        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0.2, 5, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.5, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.3, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_5, 0, 1, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_6, 0, 1, false);
                        Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.1, true);
                        await Endabgabe.ƒS.Speech.tell("Schläger", text.Schlaeger.S1121_07);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.unconsciousSumi);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S1123_07);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(2);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.running, 0, 0, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0, 0, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
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
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.gangRunningAway);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.running, 0.1, true);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_03);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHurt);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_heavy_breathing, 0.5, 6, false);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S1124_04);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.running, 0, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.group_scream, 0, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.woman_heavy_breathing, 0, 0, false);
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
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function SumiHospital() {
        console.log("FudgeStory SumiHospital Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S2300_01: "Hey du, du bist endlich wach.",
                S2300_03: "Im Krankenhaus.",
                S2300_05: "Ich heiße: ",
                S2300_07: "Ich habe gesehen, wie eine Gruppe von Gang-Mitgliedern dich belästigt hat und habe Hilfe geholt. Allerdings, als ich zurückkam, war es zu spät und du lagst auf dem Boden.",
                S2300_09: "Was ist passiert, was wollten die von dir?",
                S2300_11: "Okay tut mir leid… wie dem auch sei… Der Arzt meinte, dass du zum Glück nur leichte Verletzungen hast und für ein paar Tage hierbleiben musst, um dich auszuruhen.",
                S2300_13: "Darf ich noch deinen Namen erfahren?",
                S2300_15: "Und du willst mir wirklich nicht anvertrauen was da passiert ist?",
                S2300_17: "Nobu? Das heißt du kennst den Typen?",
                S2300_19: "Tut mir leid, war bloß neugierig…",
                S2300_31: "Gerne doch.",
                S2300_34: "Ach was… aber warum hast du sie angelogen?",
                S2300_36: "Anhand der Kleidung und dass sie gleich eine Therapie hat, ist sie auch in diesem Krankenhaus?",
                S2300_38: "Das tut mir leid zu hören…",
                S2310_02: "Das ist dein Bruder? Das nicht mitzukriegen ist schon beinahe unmöglich…. Aber das tut mir sehr leid für dich.",
                S2310_04: "Aber was ist passiert?",
                S2310_06: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2310_08: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
                S2310_10: "Und was hat deine Mutter?",
                S2320_02: "Was ist mit deinem Vater oder anderen Familienmitgliedern?",
                S2320_04: "Wo sind sie denn?",
                S2320_06: "Und jetzt ist auch dein Bruder verschwunden, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
                S2320_08: "Und dein Bruder ist jetzt verschwunden?",
                S2330_01: "Deine Mutter kann ich nicht heilen, aber ich kann dir bei der Suche deines Bruder helfen… Ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2330_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2330_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2330_07: "Es ist schon spät… ich sollte gehen. Ich komme dich morgen besuchen, dann können wir daran weiterarbeiten.",
                S2330_09: "…",
                S2330_12: "Bis morgen!"
            },
            Sumi: {
                S2300_02: "Wo bin ich?",
                S2300_04: "Und wer bist du?",
                //S2300_06: "Okay… PROTAGONIST… und was machst du hier?",
                S2300_08: "Ach… aua… ich erinnere mich…",
                S2300_10: "Geht dich wohl gar nichts an…",
                S2300_12: "Alles klar, danke fürs Bescheid geben…",
                S2300_14: "Meinetwegen… Sumi ist mein Name.",
                S2300_16: "Tzz… Nobu wurde wütend, weil ich jemanden verteidigt habe, über den er hergezogen hat…",
                S2300_18: "Ja. Sag mal, stellst du nicht zu viele Fragen?",
                S2300_21: "Mom… woher weißt du, dass ich hier bin.",
                S2300_23: "Ist nur halb so schlimm…",
                S2300_25: "Ehm… ich bin an einer erhöhten Stelle an einem halbfesten Geländer ausgerutscht und tief gefallen…",
                //S2300_27: "Nein, nicht ganz… das ist PROTAGNIST… PROTAGONIST hat mir geholfen und den Krankenwagen gerufen…",
                S2300_29: "Pfff…",
                S2300_33: "Entschuldige meine peinliche Mutter…",
                S2300_35: "Sie soll sich nicht noch mehr Sorgen machen, das ist nicht gut für sie…",
                S2300_37: "Ja ist sie… sie ist schwer krank und hat vielleicht nicht mehr lange…",
                S2300_39: "Jedenfalls reicht ihr der Stress mit meinem verschwundenen Bruder… wenn sie noch erfährt dass ich mich mit so einer Gang rumtreibe kann sie das vielleicht nicht verkraften…",
                S2310_01: "Ja, vielleicht hast du es schon gesehen… überall in den Nachrichten wird von ihm berichtet und in der Stadt hängen überall Plakate.",
                S2310_03: "Schon in Ordnung.",
                S2310_05: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der dich zusammen-geschlagen hat, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2310_07: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl…",
                S2310_09: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",
                S2320_01: "Was genau sie hat spielt keine Rolle… jedenfalls ist sie schwerkrank und hat wahrscheinlich nicht mehr lange zu leben…",
                S2320_03: "Der ist nicht mehr da… es ist niemand mehr da…",
                S2320_05: "Das ist eine lange Geschichte… Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade 	da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2320_05b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als 	unsere Mutter schwerkrank wurde und in dieses Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2320_07: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
                S2330_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2330_04: "Trotzdem…",
                S2330_06: "Na gut…",
                S2330_08: "Das klingt gut…",
                S2330_10: "Alles okay? Warum siehst du mich so an?",
                S2330_11: "Ehm… danke… bis morgen."
            },
            Yuko: {
                S2300_20: "SUMI? WAS IST PASSIERT MEIN SCHATZ?",
                S2300_22: "Die Schwester hat es mir gesagt, aber was ist nur passiert?",
                S2300_24: "Los raus mit der Sprache.",
                S2300_26: "Und wer ist das? Seid ihr Freunde… oder sogar mehr?",
                S2300_28: "Und dann bis ins Krankenhaus gefolgt? Nein nein, mein Schatz, das glaub ich dir nicht.",
                S2300_30: "Mein Name ist Yuko und ich bin Sumis Mutter. Komm doch gerne wieder vorbei… ich möchte dich kennen lernen. Ich habe noch nie Freunde von Sumi kennen gelernt!",
                S2300_32: "Wie dem auch sei… Sumi, dir geht es zum Glück gut! Ich habe gleich meine Therapie, wir reden später… man sieht sich."
            }
        };
        // Decisions
        let brotherOrMother;
        let flirtOrNot;
        let brotherOrMotherAnswer = {
            brother: "Dein Bruder ist verschwunden?",
            mother: "Was hat denn deine Mutter?"
        };
        let flirtOrNotAnswer = {
            flirt: "Du siehst sehr schön aus...",
            not: "Nichts..."
        };
        // Start
        Endabgabe.dataForSave.way = 3;
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.nobu.name = "Nobu";
        Endabgabe.characters.sumi.name = "Pinkes Mädchen";
        Endabgabe.characters.yuko.name = "???";
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospitalEyesClosed);
        await Endabgabe.ƒS.update(2);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospitalEyesOpening);
        await Endabgabe.ƒS.update(2);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospital);
        await Endabgabe.ƒS.update(2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospitalZoom);
        await Endabgabe.ƒS.update(2);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_05);
        //Name Input
        let name = await Endabgabe.ƒS.Speech.getInput();
        Endabgabe.dataForSave.nameProtagonist = name;
        Endabgabe.characters.protagonist.name = name;
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Okay... " + Endabgabe.characters.protagonist.name + "... und was machst du hier?");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_12);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_13);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_14);
        Endabgabe.characters.sumi.name = "Sumi";
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_15);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_18);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_19);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_20);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.normal, Endabgabe.animate(Endabgabe.animations.leftOutToLeft));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_21);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_22);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_23);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_24);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_25);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_26);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.happy, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Nein, nicht ganz… das ist " + Endabgabe.characters.protagonist.name + " … " + Endabgabe.characters.protagonist.name + " hat mir geholfen und den Krankenwagen gerufen…");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_28);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_29);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_30);
        Endabgabe.characters.yuko.name = "Yuko";
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_31);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S2300_32);
        await Endabgabe.ƒS.Character.hideAll();
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.happy, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_33);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_34);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_35);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_36);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_37);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2300_38);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2300_39);
        brotherOrMother = await Endabgabe.ƒS.Menu.getInput(brotherOrMotherAnswer, "decisionClass");
        switch (brotherOrMother) {
            case brotherOrMotherAnswer.brother:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiCryInHospital);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_09);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_10);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_05b);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_06);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryInHospital);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_07);
                break;
            case brotherOrMotherAnswer.mother:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_05b);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_06);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCryInHospital);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2320_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2320_08);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiCryInHospital);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_06);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_07);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2310_08);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2310_09);
                break;
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_06);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou);
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningDaySumiHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 10, false);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningSumiHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_07);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningSumiHospitalLooking);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_10);
        flirtOrNot = await Endabgabe.ƒS.Menu.getInput(flirtOrNotAnswer, "decisionClass");
        switch (flirtOrNot) {
            case flirtOrNotAnswer.not:
                break;
            case flirtOrNotAnswer.flirt:
                Endabgabe.dataForSave.romancePoints++;
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesOpenInHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2330_11);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesClosedInHospital);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2330_12);
                break;
        }
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 0, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
        await Endabgabe.ƒS.update(3);
        return "sumiHospitalHallway";
    }
    Endabgabe.SumiHospital = SumiHospital;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function SumiHospitalHallway() {
        console.log("FudgeStory SumiHospitalHallway Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S3300_02: "Klar, alles in Ordnung?",
                S3300_04: "Warum?",
                S3300_06: "Das würde niemanden gut tun…",
                S3300_08: "...",
                S3300_10: "...",
                S3300_12: "Ich versprechs…",
                S3300_14: "Gute Besserung...",
                S3300_21: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",
                S3330_02: "Sicher, dass du nichts weißt?",
                S3330_04: "Keine Sorge, die finden wir noch…",
                S3340_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3340_03: "Halte noch ein wenig durch.",
                S3340_05: "Klingt gut, geht mir genauso...",
                S3340_07: "Keine Sorge, wir finden deinen Bruder.",
                S3340_09: "Ganz bestimmt...",
                S3340_11: "Wir sollten den Plan fertig stellen… denn morgen wirst du entlassen und dann treffen wir uns bei dir zuhause, um den Plan zu beginnen."
            },
            Sumi: {
                S3300_15: "Jetzt verschwinde endlich, und lass mich in Ruhe!",
                S3300_17: "Sag mal spinnst du? Ich bin wegen dir hier drin!",
                S3300_19: "Hör zu, mir geht es gerade echt nicht gut… warum komm ich nicht einfach zum nächsten Gang-Treffen, sobald ich freigelassen werde?",
                S3300_22: Endabgabe.dataForSave.nameProtagonist + ", warum?!...",
                S3300_24: "Nein… ehm…",
                S3320_02: "Jetzt geh und lass mich ein wenig ausruhen.",
                S3340_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3340_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3340_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3340_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3340_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3340_12: "Du hast Recht, machen wir weiter."
            },
            Nobu: {
                S3300_16: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden! Du meidest mich, antwortest mir nicht auf meine Nachrichten oder Anrufe. Glaubst du nur weil du im Krankenhaus bist, kannst du mich ignorieren?",
                S3300_18: "Und das wirst du noch öfters, wenn du nicht auf mich hörst.",
                S3300_20: "Letzte Chance, wehe du tauchst nicht auf.",
                S3300_23: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und dich hier befindest? Hast dich in deinen Retter verliebt?",
                S3310_01: "Du kleine Ratte… hast du Glück, dass hier so viele Leute sind. Aber das wirst du noch bereuen…",
                S3320_01: "Zufällig also? Du kleine Ratte… ich glaube dir mal, aber wenn ich dich noch einmal in ihrer Nähe erwische, mach ich dich kalt!",
                S3320_03: "Na gut… aber ich komme wieder Sumi, denk nicht, dass du mich einfach so jedes Mal abschütteln kannst.",
                S3330_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3330_03: "Hast du Beweise für deine Anschuldigungen?",
                S3330_05: "Pass lieber auf wo du deine Nase reinsteckst."
            },
            Yuko: {
                S3300_01: "Hey " + Endabgabe.dataForSave.nameProtagonist + ", hast du eine Sekunde?",
                S3300_03: "Hör zu… vielleicht bist du nicht die richtige Person, an die ich mich wende, aber Sumi hat sonst keine anderen Freunde, zumindest kenne ich niemanden… und ich mache mir Sorgen.",
                S3300_05: "Sie gibt sich äußerlich stark und tut so als würde sie nichts erschüttern, jedoch kenn ich sie… das Alles frisst sie innerlich auf… und irgendwann wird es sie innerlich zerstören. Sie schleppt schon lange alte Familienbürden mit sich rum und seitdem ihr Bruder verschwunden ist tut ihr das sicherlich auch nicht gut.",
                S3300_07: "Jedenfalls… ich weiß nicht mehr wie lange ich habe… es ist jedenfalls nicht mehr viel Zeit… ich habe Angst, dass das Sumi den letzten Stoß verpassen wird… und das will ich nicht. Ich will, dass selbst, wenn ich nicht mehr da bin, sie ein langes und glückliches Leben führt und mit alldem hier abschließen kann.",
                S3300_09: "Wie gesagt, ich weiß nicht an wen ich mich sonst wenden soll… Aber kannst du für Sumi da sein und auf sie aufpassen? Bitte… pass auf meine Tochter auf, wenn ich es nicht mehr kann…versprich es mir!",
                S3300_11: "…bitte…",
                S3300_13: "…danke dir… ich sollte jetzt gehen… habt ihr zwei viel Spaß."
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
            couple: "Ja bin ich, wir sind jetzt ein Paar und ich besuche sie.",
            coincidence: "Ich besuche hier zufälligerweise Jemanden und hab euch bloß vom Gang schreien hören.",
            brother: "Vielleicht ist der Grund eher, dass du etwas mit der Entführung ihres Bruders zu tun hast?"
        };
        let romanceChoicesAnswer = {
            beautiful: "Ich bewundere wunderschöne Menschen.",
            intelligent: "Du bist auch sehr intelligent, deine Ideen waren sogar noch besser.",
            thanks: "Danke"
        };
        // Start
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0.5, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hospital_ambiente, 0.5, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway2);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway3);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_07);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.sad, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_12);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.yuko, text.Yuko.S3300_13);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_14);
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.yuko, Endabgabe.characters.yuko.pose.sad, Endabgabe.animate(Endabgabe.animations.midToRightOut));
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0.5, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway3);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.hospitalHallway2);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3300_15);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Das kommt doch aus Sumis Zimmer? Was ist da los?");
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hospital_ambiente, 0, 0, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiNobuArgumentHospitalroom);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3300_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3300_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3300_18);
        interfereOrNot = await Endabgabe.ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");
        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3300_19);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3300_20);
                Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospitalZoom);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, new Endabgabe.ƒS.Position(-480, Endabgabe.ƒS.positions.bottomcenter.y));
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3300_21);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3300_22);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3300_23);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3300_24);
                howToInterfere = await Endabgabe.ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");
                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3310_01);
                        await Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Character.hideAll();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaitingHospitalOutside);
                        await Endabgabe.ƒS.update(5);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaitingAndKnifeHospital);
                        await Endabgabe.ƒS.update(3);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
                        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.knife_stabbing, 0, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.coincidence:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3320_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3320_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3320_03);
                        break;
                    case howToInterfereAnswer.brother:
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3330_01);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3330_02);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3330_03);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3330_04);
                        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S3330_05);
                        Endabgabe.dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Character.hideAll();
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.update(2);
                break;
        }
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHospitalZoom);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_03);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou2);
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningDaySumiHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 10, false);
        await Endabgabe.ƒS.update(1);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningSumiHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEveningSumiHospitalLooking);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_10);
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
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesOpenInHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3340_11);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiSmilingEyesClosedInHospital);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3340_12);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 3, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
        await Endabgabe.ƒS.update(3);
        return "thePlan";
    }
    Endabgabe.SumiHospitalHallway = SumiHospitalHallway;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
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
                S2120_03: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der eben hier war, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
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
            go: "Tut mir leid, ich werde gehen.",
            talk: "Lass es raus, du kannst mir vertrauen."
        };
        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?"
        };
        let flirtOrSleepAnswer = {
            flirt: "Du siehst sehr schön aus...",
            sleep: "Wir sollten schlafen gehen..."
        };
        // Start
        Endabgabe.dataForSave.way = 1;
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.nobu.name = "???";
        Endabgabe.characters.sumi.name = "Pinkes Mädchen";
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
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
        Endabgabe.characters.sumi.name = "Sumi";
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2100_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_09);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.door_bell_buzzer, 1, 2, false);
        Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hideAll();
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, false);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeftOut));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_opening, 0.5, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.01, true);
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
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 0.5, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, false);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal_flipped, Endabgabe.animate(Endabgabe.animations.leftOutToMid));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_19);
        juiceOrNot = await Endabgabe.ƒS.Menu.getInput(juiceOrNotAnswer, "decisionClass");
        switch (juiceOrNot) {
            case juiceOrNotAnswer.juice:
                await Endabgabe.ƒS.Inventory.add(Endabgabe.items.juice);
                await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
                break;
            case juiceOrNotAnswer.nothing:
                break;
        }
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2100_20);
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiFirstAid);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.3, true);
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
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 0.5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.youLeave);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
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
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 0.5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiKicksYouOut);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
                return await ending(2);
            case talkOutOrHelpAnswer.morePeople:
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_01b);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2122_02);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiHappyCry);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2122_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_01);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_02);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_03);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_04);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_05);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_06);
                await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou);
                await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEvening);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 10, false);
                await Endabgabe.ƒS.update(1);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNight);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.raining, 0.1, 8, true);
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
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.bath_filling, 0.5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_bathRoom_normal);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_bathRoom_foggy);
                await Endabgabe.ƒS.update(5);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0.5, false);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_hallway);
                await Endabgabe.ƒS.update(2);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_12);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 0, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
                Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
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
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_15);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_16);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S2123_17);
                await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S2123_18);
                await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_futonroom);
                await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.embarrassed2, Endabgabe.ƒS.positions.bottomcenter);
                await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
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
                await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 3, false);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.raining, 0, 0, false);
                await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
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
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.neutral_ending, 0, 4, false);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.partingWays);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.neutral_ending, 0, 4, false);
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
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.street_day);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3100_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3100_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiNobuArgument);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.1, true);
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
                        await Endabgabe.ƒS.Speech.hide();
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(10);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaiting);
                        await Endabgabe.ƒS.update(5);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuWaitingAndKnife);
                        await Endabgabe.ƒS.update(3);
                        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
                        await Endabgabe.ƒS.update(1);
                        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife_stabbing, 1, false);
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
                        Endabgabe.dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.leftToLeftOut));
                await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.rightToRightOut));
                await Endabgabe.ƒS.Speech.hide();
                break;
        }
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S3121_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S3121_03);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsShou2);
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningEvening);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 10, false);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNight);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.planningNight2);
        await Endabgabe.ƒS.update(3);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.romantic_track, 0.3, true);
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
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.romantic_track, 0, 3, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.rooster, 0.2, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.theNextDay);
        await Endabgabe.ƒS.update(3);
        return "thePlan";
    }
    Endabgabe.SumisHouse = SumisHouse;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(3);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
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
        let question1;
        let question1Answers = {
            answer1: "A: Soma",
            answer2: "B: Shou",
            answer3: "C: Fuun",
            answer4: "D: Unbekannt"
        };
        let question2;
        let question2Answers = {
            answer1: "1: Er ist vestorben.",
            answer2: "2: Sein Status ist unbekannt.",
            answer3: "3: Er ist auf Geschäftsreise.",
            answer4: "4: Er hat sie verlassen."
        };
        let question3;
        let question3Answers = {
            answer1: "E: Sie ist verstorben",
            answer2: "F: Sie liegt im Krankenhaus.",
            answer3: "G: Ihr Status ist unbekannt.",
            answer4: "H: Sie ist abgehauen."
        };
        let question4;
        let question4Answers = {
            answer1: "5: Er hat Gefühle für sie.",
            answer2: "6: Er will sich an ihr rächen.",
            answer3: "7: Sie ist Shous kleine Schwester.",
            answer4: "8: Er will an ihre Wäsche."
        };
        // Start
        await Endabgabe.ƒS.Speech.tell("", "Hier ist Speichern zu empfehlen! (Zweiter Button)");
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.float_track, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_01);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.documentsNobu);
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4100_07);
        await Endabgabe.ƒS.Inventory.add(Endabgabe.items.knife);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, "Ich gebe dir noch Shous Messer mit... Er hat damit nie getötet, sondern es eher wie ein Werkzeug benutzt... Unser Vater hat es ihm geschenkt... damals. Jedenfalls für den notfall, benutz es. Ich möchte nicht noch mehr Menschen verlieren...");
        await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4100_08);
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Character.hideAll();
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeftOut));
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 0.5, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.float_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.searching_track, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.plan);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Okay... dann schau ich mir mal das Zeug an...");
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Text.print("Anleitung\n \nUm Shou zu finden, muss zuerst sein Aufenthaltsort gefunden werden. Dafür muss folgendes Quiz beantwortet werden, um die richtige Lagerhalle zu finden. Die Anfangsbuchstaben der ausgewählten Antworten ergeben eine Nummer, welche am Ende eingegeben wird. Selbst bei einer falschen Nummer geht die Visual Novel weiter, doch ob dann Shou noch gefunden wird, ist eine andere Frage.\n \nViel Glück!");
        await Endabgabe.ƒS.Speech.tell("Frage 1", "Wie hieß der kleine Bruder von Sumi?");
        question1 = await Endabgabe.ƒS.Menu.getInput(question1Answers, "decisionClass");
        switch (question1) {
            case question1Answers.answer1:
                Endabgabe.dataForSave.storageHall = "A";
                break;
            case question1Answers.answer2:
                Endabgabe.dataForSave.storageHall = "B";
                break;
            case question1Answers.answer3:
                Endabgabe.dataForSave.storageHall = "C";
                break;
            case question1Answers.answer4:
                Endabgabe.dataForSave.storageHall = "D";
                break;
        }
        await Endabgabe.ƒS.Speech.tell("Frage 2", "Was ist mit Sumis Vater passiert?");
        question2 = await Endabgabe.ƒS.Menu.getInput(question2Answers, "decisionClass");
        switch (question2) {
            case question2Answers.answer1:
                Endabgabe.dataForSave.storageHall += "1";
                break;
            case question2Answers.answer2:
                Endabgabe.dataForSave.storageHall += "2";
                break;
            case question2Answers.answer3:
                Endabgabe.dataForSave.storageHall += "3";
                break;
            case question2Answers.answer4:
                Endabgabe.dataForSave.storageHall += "4";
                break;
        }
        await Endabgabe.ƒS.Speech.tell("Frage 3", "Was ist mit Sumis Mutter passiert?");
        question3 = await Endabgabe.ƒS.Menu.getInput(question3Answers, "decisionClass");
        switch (question3) {
            case question3Answers.answer1:
                Endabgabe.dataForSave.storageHall += "E";
                break;
            case question3Answers.answer2:
                Endabgabe.dataForSave.storageHall += "F";
                break;
            case question3Answers.answer3:
                Endabgabe.dataForSave.storageHall += "G";
                break;
            case question3Answers.answer4:
                Endabgabe.dataForSave.storageHall += "H";
                break;
        }
        await Endabgabe.ƒS.Speech.tell("Frage 4", "Warum hängt Nobu so an Sumi?");
        question4 = await Endabgabe.ƒS.Menu.getInput(question4Answers, "decisionClass");
        switch (question4) {
            case question4Answers.answer1:
                Endabgabe.dataForSave.storageHall += "5";
                break;
            case question4Answers.answer2:
                Endabgabe.dataForSave.storageHall += "6";
                break;
            case question4Answers.answer3:
                Endabgabe.dataForSave.storageHall += "7";
                break;
            case question4Answers.answer4:
                Endabgabe.dataForSave.storageHall += "8";
                break;
        }
        Endabgabe.items.code.description = "Die Lagerhallennummer: " + Endabgabe.dataForSave.storageHall,
            await Endabgabe.ƒS.Inventory.add(Endabgabe.items.code);
        await Endabgabe.ƒS.Speech.tell("", "Die richtige Lagerhallennummer (Inventar) lautet: ");
        let code = await Endabgabe.ƒS.Speech.getInput();
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Das muss es sein ...");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "... tief durchatmen ...");
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "... auf geht's!");
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(10);
        if (code == "C4F5" || code == "c4f5") {
            await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.searching_track, 0, 3, false);
            return "rightPlace";
        }
        else if (code == "dm99" || code == "DM99") {
            await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Woher kommen die plötzlich...? Soll ich sie anziehen?");
            await Endabgabe.ƒS.Inventory.add(Endabgabe.items.glasses);
            await Endabgabe.ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
            await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.searching_track, 0, 3, false);
            return "rightPlace";
        }
        else {
            await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.searching_track, 0, 3, false);
            return "wrongPlace";
        }
    }
    Endabgabe.ThePlan = ThePlan;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function ThePlanFailed() {
        console.log("FudgeStory ThePlanFailed Scene starting");
        let menu = Endabgabe.ƒS.Menu.create(Endabgabe.menuItems, Endabgabe.menuButtons, "menu");
        menu.open();
        // Speeches
        let text = {
            Protagonist: {
                S4200_01: "Sumi?! Was ist passiert?",
                S4200_03: "Und dann?",
                S4200_05: "Oh nein… ich habe mich verplappert?",
                S4200_07: "Tut mir leid, aber das erklärt immer noch nicht warum du verletzt bist.",
                S4200_09: "Was will er denn von dir?",
                S4200_11: "Was habe ich nur angerichtet…"
            },
            Sumi: {
                S4200_02: "Als ich dich gestern aus dem Krankenhaus verlassen habe, hat mir Nobu aufgelauert…",
                S4200_04: "Ich habe Nobu nie wirklich etwas erzählt, auch nicht, dass meine Mutter im Krankenhaus liegt… da ich wusste, dass es nichts Gutes bringt.",
                S4200_06: "Ja, aber du wusstest es ja nicht…",
                S4200_08: "Naja, jetzt benutzt Nobu meine Mutter als Erpressung, um von mir zu bekommen was er möchte… das wollte ich ihm zuerst nicht geben, also hat er mich geschlagen… wie damals, als du mich gerettet hast.",
                S4200_10: "Was weiß denn ich, aber bisher hat er von mir verlangt seine Freundin zu sein und zu machen was er von mir verlangt… sonst tut er meiner Mutter etwas an.",
                S4200_12: "Jetzt ist es egal… ich habe keine andere Wahl als ihm zu gehorchen… meine Mutter verliere ich nicht auch noch…",
                S4200_13: "Nobu, warte doch draußen… geh nicht rein!",
                S4200_15: "Ehhh… moment, es ist nicht so wie du denkst!",
                S4200_17: "Nein! Warte! Das ist ein Missverständnis…",
                S4200_19: "Nein!"
            },
            Nobu: {
                S4200_14: "Was macht die Ratte hier? ",
                S4200_16: "Sumi… was habe ich dir gesagt? Du triffst dich mit niemanden außer mir… erst recht nicht mit der kleinen Ratte! Hast du vergessen was passiert?",
                S4200_18: "Du enttäuschst mich… ich habe echt an dich geglaubt. Das wirst du bereuen…"
            }
        };
        // Decisions
        // Start
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.sad_times, 0.2, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.sumisHome_livingRoom_evening);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.hurt, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_01);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_02);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_08);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_10);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4200_11);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_12);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.door_bell_buzzer, 1, 2, false);
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.hurt, Endabgabe.animate(Endabgabe.animations.midToLeftOut));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Character.hide(Endabgabe.characters.sumi);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_opening, 0.5, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_13);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_times, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.1, true);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.leftOutToMid));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4200_14);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_15);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.sumi, Endabgabe.characters.sumi.pose.hurt_flipped, Endabgabe.animate(Endabgabe.animations.leftOutToLeft));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4200_16);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_17);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4200_18);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hard_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Character.animate(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.normal, Endabgabe.animate(Endabgabe.animations.midToLeftOut));
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hard_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4200_19);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.door_closing, 0.5, false);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.searching_track, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiDepressed);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: -/4, Bad Ending");
        await Endabgabe.ƒS.Text.print("̶L̶i̶e̶b̶e̶s̶ Tagebuch, \n \n Es sind mittlerweile einige Wochen seitdem Tod von Mom vergangen... Es sind mittlerweile auch einige Wochen seitdem Fund von Shous Leiche vergangen... Es sind mittlerweile ebenso einige Wochen seitdem Unfall von " + Endabgabe.dataForSave.nameProtagonist + " vergangen. Nobu hat es geschafft... es gibt keine Beweise. Er baut sein Imperium auf Leichen auf... Mich hat er verschont, da er mich liebt... sagt er. Er hat gewonnen... Er hat mir alles genommen... ich bin allein und habe gar nichts mehr. Ich vermisse euch alle so sehr... ich will nicht mehr, ich sehe keinen Ausweg. \n \n Sumi");
        return await ending(1);
    }
    Endabgabe.ThePlanFailed = ThePlanFailed;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.sumiEnding);
                await Endabgabe.ƒS.update(5);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
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
                S4110_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor.",
                S4110_01b: "... oder findest du nicht, Sumi?",
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
        await Endabgabe.ƒS.Speech.hide();
        Endabgabe.characters.protagonist.name = Endabgabe.dataForSave.nameProtagonist;
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.stealth_track, 0.1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.fade.duration, Endabgabe.transitions.fade.alpha, Endabgabe.transitions.fade.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHall);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.hallway_floor_footsteps, 1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallEntrance);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallHallway);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallEmpty);
        await Endabgabe.ƒS.update(Endabgabe.transitions.swipe.duration, Endabgabe.transitions.swipe.alpha, Endabgabe.transitions.swipe.edge);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.hallway_floor_footsteps, 0, 0, false);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, "Ich habe so ziemlich alles durchsucht und keine Spur... sag mir nicht ich bin am falschen Ort...");
        await Endabgabe.ƒS.Speech.hide();
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.punch_1, 0, 1, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.fall_on_ground, 0, 1, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.heartbeat, 1, true);
        await Endabgabe.ƒS.update(10);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.stealth_track, 0, 3, false);
        Endabgabe.ƒS.Sound.play(Endabgabe.sound.first_encounter, 0.01, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.storageHallWakeUp);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.storageHallWakeUp2);
        await Endabgabe.ƒS.update(5);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_01);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesClosed.duration, Endabgabe.transitions.eyesClosed.alpha, Endabgabe.transitions.eyesClosed.edge);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.heartbeat, 0, 0, false);
        Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0.1, 1, true);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFull);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(Endabgabe.transitions.eyesOpen.duration, Endabgabe.transitions.eyesOpen.alpha, Endabgabe.transitions.eyesOpen.edge);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_01b);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiTiedUpComing);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_02);
        await Endabgabe.ƒS.Location.show(Endabgabe.locations.storageHallFightFuller);
        await Endabgabe.ƒS.Character.show(Endabgabe.characters.nobu, Endabgabe.characters.nobu.pose.happy, Endabgabe.ƒS.positions.bottomcenter);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_03);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_04);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_05);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_06);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.protagonist, text.Protagonist.S4110_07);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_08);
        await Endabgabe.ƒS.Character.hideAll();
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiTiedUp);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_09);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.sumi, text.Sumi.S4110_10);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.sumiEndCry);
        await Endabgabe.ƒS.update(3);
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
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife_stabbing, 1, false);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.nobuKnifeStorage);
        await Endabgabe.ƒS.update(3);
        await Endabgabe.ƒS.Speech.tell(Endabgabe.characters.nobu, text.Nobu.S4110_13);
        await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.first_encounter, 0, 0, false);
        await Endabgabe.ƒS.Location.show(Endabgabe.sequences.black);
        await Endabgabe.ƒS.Sound.play(Endabgabe.sound.knife_stabbing, 1, false);
        await Endabgabe.ƒS.update(1);
        await Endabgabe.ƒS.update(10);
        await Endabgabe.ƒS.Speech.tell("", "Weg: " + Endabgabe.dataForSave.way + "/3 , Finale: -/4, Bad Ending");
        if (Endabgabe.dataForSave.romancePoints >= 2) {
            return await ending(2);
        }
        else {
            return await ending(1);
        }
    }
    Endabgabe.WrongPlace = WrongPlace;
    // Endings
    async function ending(endingNr) {
        switch (endingNr) {
            case 1:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
                return "endOfNovel";
            case 2:
                await Endabgabe.ƒS.Speech.hide();
                await Endabgabe.ƒS.Text.print("L̶i̶e̶b̶e̶s̶ Tagebuch, \n \n Heute ist es soweit... der große Tag. Heute sehen wir, ob die Mühen der letzten Tage sich ausgezahlt haben... und vielleicht sehe ich auch endlich Shou wieder. Ich hoffe dir geht es gut Bruderherz... Jedenfalls habe ich alle Vorbereitungen getroffen und warte auf " + Endabgabe.dataForSave.nameProtagonist + " und dann starten wir auch mit dem Plan. In einigen Stunden kann sich alles ändern... und vielleicht, wenn das alles hier vorbei ist... kann ich " + Endabgabe.dataForSave.nameProtagonist + " meine Liebe gestehen. Ob sie erwidert wird? Heute werde ich es herausfinden... hoffentlich. \n \n Sumi");
                await Endabgabe.ƒS.Location.show(Endabgabe.endings.protagonistDead);
                await Endabgabe.ƒS.update(1);
                await Endabgabe.ƒS.Sound.fade(Endabgabe.sound.sad_ending, 0, 7, false);
                return "endOfNovel";
        }
        return "endOfNovel";
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Game.js.map