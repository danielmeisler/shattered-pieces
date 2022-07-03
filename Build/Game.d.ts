declare namespace Endabgabe {
    function EndOfNovel(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let dataForSave: {
        nameProtagonist: string;
        romancePoints: number;
        protagonistHurt: boolean;
        nobuKnowsBrother: boolean;
        nobuKnowsMother: boolean;
        storageHall: string;
    };
    export let transitions: {
        blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fade: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
        eyesOpen: {
            duration: number;
            alpha: string;
            edge: number;
        };
        eyesClosed: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    export let sound: {
        filler_track: string;
        first_encounter: string;
        sad_times: string;
        romantic_track: string;
        searching_track: string;
        stealth_track: string;
        final_fight: string;
        good_ending: string;
        neutral_ending: string;
        sad_ending: string;
        woman_groan_1: string;
        woman_groan_2: string;
        woman_groan_3: string;
        woman_groan_4: string;
        punch_1: string;
        punch_2: string;
        punch_3: string;
        punch_4: string;
        punch_5: string;
        punch_6: string;
        fall_on_ground: string;
        knife_stabbing: string;
        smoking_cigarette: string;
        man_laughter_short: string;
        man_laughter_long: string;
        heartbeat: string;
        police_sirens: string;
        group_scream: string;
        running: string;
        woman_heavy_breathing: string;
        door_bell_buzzer: string;
        door_knocking: string;
        hard_floor_footsteps: string;
        door_opening: string;
        door_closing: string;
        raining: string;
        bath_filling: string;
        rooster: string;
        hospital_ambiente: string;
        hallway_floor_footsteps: string;
        lights: string;
        groan_man_1: string;
        groan_man_2: string;
        whipped_man: string;
        knife: string;
        fight_men: string;
    };
    export let locations: {
        street_evening: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
        school2: {
            name: string;
            background: string;
        };
        sumisHome_livingRoom_evening: {
            name: string;
            background: string;
        };
        sumisHome_livingRoom_night: {
            name: string;
            background: string;
        };
        sumisHome_bathRoom_normal: {
            name: string;
            background: string;
        };
        sumisHome_bathRoom_foggy: {
            name: string;
            background: string;
        };
        sumisHome_hallway: {
            name: string;
            background: string;
        };
        sumisHome_futonroom: {
            name: string;
            background: string;
        };
        street_day: {
            name: string;
            background: string;
        };
        sumisHouse_outside: {
            name: string;
            background: string;
        };
        protagonistHospitalRoom_day: {
            name: string;
            background: string;
        };
        protagonistHospitalRoom_evening: {
            name: string;
            background: string;
        };
        protagonistHospitalRoom_night: {
            name: string;
            background: string;
        };
        hospitalRoom_day: {
            name: string;
            background: string;
        };
        hospitalRoom_evening: {
            name: string;
            background: string;
        };
        hospitalRoom_night: {
            name: string;
            background: string;
        };
        hospitalHallway: {
            name: string;
            background: string;
        };
        hospitalHallway2: {
            name: string;
            background: string;
        };
        hospitalHallway3: {
            name: string;
            background: string;
        };
        yukosRoom: {
            name: string;
            background: string;
        };
        storageHall: {
            name: string;
            background: string;
        };
        storageHallEntrance: {
            name: string;
            background: string;
        };
        storageHallHallway: {
            name: string;
            background: string;
        };
        storageHallShou: {
            name: string;
            background: string;
        };
        storageHallNobu: {
            name: string;
            background: string;
        };
        storageHallEmpty: {
            name: string;
            background: string;
        };
        storageHallFight: {
            name: string;
            background: string;
        };
        storageHallFightFull: {
            name: string;
            background: string;
        };
        storageHallFightFuller: {
            name: string;
            background: string;
        };
        storageHallFightFullest: {
            name: string;
            background: string;
        };
        storagehallOutside: {
            name: string;
            background: string;
        };
    };
    export let sequences: {
        black: {
            name: string;
            background: string;
        };
        start: {
            name: string;
            background: string;
        };
        harassment: {
            name: string;
            background: string;
        };
        coming: {
            name: string;
            background: string;
        };
        gimmeYourHand: {
            name: string;
            background: string;
        };
        nobuHitMad: {
            name: string;
            background: string;
        };
        nobuKnife: {
            name: string;
            background: string;
        };
        sumiHurt: {
            name: string;
            background: string;
        };
        police: {
            name: string;
            background: string;
        };
        unconsciousSumi: {
            name: string;
            background: string;
        };
        unconsciousNobuGang: {
            name: string;
            background: string;
        };
        peopleStanding: {
            name: string;
            background: string;
        };
        gangRunningAway: {
            name: string;
            background: string;
        };
        sumiFirstAid: {
            name: string;
            background: string;
        };
        youLeave: {
            name: string;
            background: string;
        };
        sumiHappyCry: {
            name: string;
            background: string;
        };
        sumiMadCry: {
            name: string;
            background: string;
        };
        sumiKicksYouOut: {
            name: string;
            background: string;
        };
        planningEvening: {
            name: string;
            background: string;
        };
        planningNight: {
            name: string;
            background: string;
        };
        planningNight2: {
            name: string;
            background: string;
        };
        sumiUndress: {
            name: string;
            background: string;
        };
        sumiUndress2: {
            name: string;
            background: string;
        };
        sumiUndressHarmless: {
            name: string;
            background: string;
        };
        theNextDay: {
            name: string;
            background: string;
        };
        sumiNobuArgument: {
            name: string;
            background: string;
        };
        nobuWaiting: {
            name: string;
            background: string;
        };
        nobuWaitingAndKnife: {
            name: string;
            background: string;
        };
        sumiSmilingEyesOpen: {
            name: string;
            background: string;
        };
        sumiSmilingEyesClosed: {
            name: string;
            background: string;
        };
        wakeUp: {
            name: string;
            background: string;
        };
        wakeUp2: {
            name: string;
            background: string;
        };
        newsReporter: {
            name: string;
            background: string;
        };
        sumiWalksIn: {
            name: string;
            background: string;
        };
        yukoVisitNormal: {
            name: string;
            background: string;
        };
        yukoVisitSad: {
            name: string;
            background: string;
        };
        sumiCrying: {
            name: string;
            background: string;
        };
        sumiMadCryHospital: {
            name: string;
            background: string;
        };
        sumiHappyCryHospital: {
            name: string;
            background: string;
        };
        planningEveningHospital: {
            name: string;
            background: string;
        };
        planningNightHospital: {
            name: string;
            background: string;
        };
        planningNight2Hospital: {
            name: string;
            background: string;
        };
        sumiNobuArgumentHospital: {
            name: string;
            background: string;
        };
        nobuWaitingHospital: {
            name: string;
            background: string;
        };
        sumiSmilingEyesOpenHospital: {
            name: string;
            background: string;
        };
        sumiSmilingEyesClosedHospital: {
            name: string;
            background: string;
        };
        sumiDepressed: {
            name: string;
            background: string;
        };
        sumiHospitalEyesClosed: {
            name: string;
            background: string;
        };
        sumiHospitalEyesOpening: {
            name: string;
            background: string;
        };
        sumiHospital: {
            name: string;
            background: string;
        };
        sumiHospitalZoom: {
            name: string;
            background: string;
        };
        sumiHappyCryInHospital: {
            name: string;
            background: string;
        };
        sumiCryInHospital: {
            name: string;
            background: string;
        };
        planningDaySumiHospital: {
            name: string;
            background: string;
        };
        planningEveningSumiHospital: {
            name: string;
            background: string;
        };
        planningEveningSumiHospitalLooking: {
            name: string;
            background: string;
        };
        sumiSmilingEyesOpenInHospital: {
            name: string;
            background: string;
        };
        sumiSmilingEyesClosedInHospital: {
            name: string;
            background: string;
        };
        sumiNobuArgumentHospitalroom: {
            name: string;
            background: string;
        };
        nobuWaitingHospitalOutside: {
            name: string;
            background: string;
        };
        nobuWaitingAndKnifeHospital: {
            name: string;
            background: string;
        };
        plan: {
            name: string;
            background: string;
        };
        storageHallWakeUp: {
            name: string;
            background: string;
        };
        storageHallWakeUp2: {
            name: string;
            background: string;
        };
        sumiTiedUpComing: {
            name: string;
            background: string;
        };
        sumiTiedUp: {
            name: string;
            background: string;
        };
        sumiEndCry: {
            name: string;
            background: string;
        };
        nobuKnifeStorage: {
            name: string;
            background: string;
        };
        sumiThreatsNobu: {
            name: string;
            background: string;
        };
        grabKnife: {
            name: string;
            background: string;
        };
        letsFight: {
            name: string;
            background: string;
        };
        nobuKO: {
            name: string;
            background: string;
        };
        sumiGrabsKnife: {
            name: string;
            background: string;
        };
        sumiRage: {
            name: string;
            background: string;
        };
        sumiKillsNobu: {
            name: string;
            background: string;
        };
        fightUnconscious: {
            name: string;
            background: string;
        };
        sumiShouComing: {
            name: string;
            background: string;
        };
        sumiStabbedNobu: {
            name: string;
            background: string;
        };
        sumiAlmostStabbedNobu: {
            name: string;
            background: string;
        };
        shouHitsNobu: {
            name: string;
            background: string;
        };
        firstAidStorageHall: {
            name: string;
            background: string;
        };
        sumiHappyCryStorageHall: {
            name: string;
            background: string;
        };
        sumiHappyCryOutside: {
            name: string;
            background: string;
        };
        sumiCryingOutside: {
            name: string;
            background: string;
        };
        sumiKissOutside: {
            name: string;
            background: string;
        };
        sumiKissStorageHall: {
            name: string;
            background: string;
        };
    };
    export let endings: {
        newspaper: {
            name: string;
            background: string;
        };
        protagonistDead: {
            name: string;
            background: string;
        };
        partingWays: {
            name: string;
            background: string;
        };
        sumiEnding: {
            name: string;
            background: string;
        };
    };
    export let characters: {
        protagonist: {
            name: string;
        };
        sumi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                normal_flipped: string;
                embarrassed: string;
                embarrassed_flipped: string;
                hurt: string;
                hurt_flipped: string;
                shy: string;
                embarrassed2: string;
            };
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                hurt: string;
                grabbed: string;
            };
        };
        yuko: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                sad: string;
            };
        };
        shou: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
            };
        };
        credits: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                story: string;
                characters: string;
                sequences: string;
                music: string;
                sfx: string;
                backgrounds: string;
                tfp: string;
            };
        };
    };
    export let animations: {
        midToRightOut: string;
        midToLeftOut: string;
        midToRight: string;
        midToLeft: string;
        rightOutToMid: string;
        leftOutToMid: string;
        rightToMid: string;
        leftToMid: string;
        rightToRightOut: string;
        rightOutToRight: string;
        leftToLeftOut: string;
        leftOutToLeft: string;
        credits: string;
        creditsLast: string;
    };
    export function animate(_animation: string): ƒS.AnimationDefinition;
    export function volumeUp(): void;
    export function volumeDown(): void;
    export let menuItems: {
        inventory: string;
        save: string;
        load: string;
        volumeDown: string;
        volumeUp: string;
    };
    export let items: {
        glasses: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndGlasses;
        };
        juice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof hndJuice;
        };
        documentsShou: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        documentsShou2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        documentsNobu: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        knife: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        code: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function hndGlasses(_event: CustomEvent): Promise<void>;
    function hndJuice(_event: CustomEvent): Promise<void>;
    export function menuButtons(_option: string): Promise<void>;
    export {};
}
declare namespace Endabgabe {
    function ProtagonistHospital(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ProtagonistHospitalHallway(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function RightPlace(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function Street(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumiHospital(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumiHospitalHallway(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumisHome(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumisHouse(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ThePlan(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function ThePlanFailed(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function WrongPlace(): ƒS.SceneReturn;
}
