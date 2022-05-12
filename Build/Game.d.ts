declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        click: string;
    };
    let locations: {
        street: {
            name: string;
            background: string;
        };
        city: {
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
    };
    let dataForSave: {
        nameProtagonist: string;
        score: number;
    };
    function volumeUp(): void;
    function volumeDown(): void;
}
declare namespace Endabgabe {
    function Street(): ƒS.SceneReturn;
}
