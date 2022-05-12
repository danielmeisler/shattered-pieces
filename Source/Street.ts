namespace Endabgabe {
  export async function Street(): ƒS.SceneReturn {
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

    await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Character.show(characters.shou, characters.shou.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Character.show(characters.nobu, characters.nobu.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update();
    await ƒS.Speech.tell(characters.protagonist, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.sumi, "ich tret dir in die eier du schmock");
  }
}