namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
      
    let text = {
        Narrator: {
            T0001: "hi",
            T0002: "noob"
        },
        Aisaka: {
            T0001: "he",
            T0002: "du assi"
        }
    };

    ƒS.Speech.hide();
    await ƒS.Location.show(locations.street);
    await ƒS.update();

    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.aisaka, "kanisterkopf");
  }
}