namespace Endabgabe {
    export async function ThePlan(): ƒS.SceneReturn {
        console.log("FudgeStory ThePlan Scene starting");

        // Speeches
        let text = {
            Protagonist: {
                S4100_01: "Und?",
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
        }

        // Decisions

        // Start
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.sumisHome_livingRoom);
        await ƒS.update(transitions.jigsaw.duration, transitions.jigsaw.alpha, transitions.jigsaw.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_08);
        
    }
}