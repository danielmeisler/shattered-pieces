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
        alley: {
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
    let dataForSave: {
        nameProtagonist: string;
        score: number;
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
