namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

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
          background: "./Images/street_01.png"
      },
      city: {
          name: "City",
          background: "./Images/city_01.png"
      }
  };

  export let characters = {
      narrator: {
          name: ""
      },
      aisaka: {
          name: "Aisaka",
          origin: ƒS.ORIGIN.BOTTOMCENTER,
          pose: {
              angry: "Pfad für Bild",
              happy: "./Images/placeholder_girl.png",
              upset: "Pfad für Bild"
          }
      },
      kohana: {
          name: "Kohana",
          origin: ƒS.ORIGIN.BOTTOMCENTER,
          pose: {
              happy: "Pfad für Bild"
          }
      }
  };

  export let dataForSave = {
      nameProtagonist: "",
      score: 0
  };



  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}