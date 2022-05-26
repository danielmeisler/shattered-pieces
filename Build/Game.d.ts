declare namespace Endabgabe {
    function EndOfNovel(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        romancePoints: number;
    };
    let transitions: {
        blink: {
            duration: number;
            alpha: string;
            edge: number;
        };
        jigsaw: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
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
        woman_heavy_breathing: string;
    };
    let locations: {
        street: {
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
        sumisHome_livingRoom: {
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
    };
    let sequences: {
        black: {
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
    };
    let endings: {
        newspaper: {
            name: string;
            background: string;
        };
        protagonistDead: {
            name: string;
            background: string;
        };
    };
    let characters: {
        protagonist: {
            name: string;
        };
        sumi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        nobu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
            };
        };
        yuko: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
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
        schlaeger: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        doktor: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    function volumeUp(): void;
    function volumeDown(): void;
    let menuItems: {
        inventory: string;
        save: string;
        load: string;
        volumeDown: string;
        volumeUp: string;
    };
    let items: {
        item1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item3: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item4: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item5: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item6: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function menuButtons(_option: string): Promise<void>;
}
declare namespace Endabgabe {
    function Street(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumisHome(): ƒS.SceneReturn;
}
declare namespace Endabgabe {
    function SumisHouse(): ƒS.SceneReturn;
}
