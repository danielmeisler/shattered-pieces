namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
  
    console.log("FILLER starting");
  
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
            background: "./assets/images/backgrounds/test.jpg"
        },
        city: {
            name: "City",
            background: "./Images/city_01.png"
        }
    };
  
    export let characters = {
        protagonist: {
            name: ""
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
        }
    };
  
    export let dataForSave = {
            nameProtagonist: "",
            score: 0
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
  
    let menuItems = {
        //inventory: "I",
        save: "q",
        load: "p",
        volumeUp: "y",
        volumeDown: "x"
    };
  
    async function menuButtons(_option: string): Promise<void> {
        console.log(_option);
        // if (_option == inGameMenu.inventory) {
            
        // }
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
    let menu: ƒS.Menu;
  
    function start(_event: Event): void {
        menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();
        
        let scenes: ƒS.Scenes = [
            { scene: Street, name: "Street", id: "street"}
        ];
  
        // start the sequence
        ƒS.Progress.go(scenes);
    }
  
  }