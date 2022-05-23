namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
  
    console.log("Endabgabe starting");

    export let dataForSave = {
        nameProtagonist: "",
        score: 0
    };
  
    export let transitions = {
        puzzle: {
            duration: 1,
            alpha: "./Images/jigsaw_06.jpg",
            edge: 1
  
        }
    };
  
    export let sound = {
        // themes
        nightclub: "Pfad für Musik",
  
        // sfx
        click: "Pfad für Soundeffekt"
    };
  
    export let locations = {
        street: {
            name: "Street",
            background: "./assets/images/backgrounds/street.png"
        },
        school: {
            name: "School",
            background: "./assets/images/backgrounds/school.png"
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
                normal: "./assets/images/characters/sumi/sumi_normal.png"
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

        schlaeger: {
            name: "Schläger",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""

            }
        },
        doktor: {
            name: "Doktor",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: ""

            }
        }
    };
  
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
        volumeUp: "♫",
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
            { scene: school, name: "school", id: "school"}
        ];
  
        // start the sequence
        ƒS.Progress.go(scenes);
    }
  
  }