namespace Endabgabe {
    export async function ThePlan(): ƒS.SceneReturn {
        console.log("FudgeStory ThePlan Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S4100_01: "Und? Hast du alles besorgt?",
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
        };

        // Decisions
        let question1;

        let question1Answers = {
            answer1: "A: Soma",
            answer2: "B: Shou",
            answer3: "C: Fuun",
            answer4: "D: Unbekannt"
        };

        let question2;

        let question2Answers = {
            answer1: "1: Er ist vestorben.",
            answer2: "2: Sein Status ist unbekannt.",
            answer3: "3: Er ist auf Geschäftsreise.",
            answer4: "4: Er ist abgehauen."
        };

        let question3;

        let question3Answers = {
            answer1: "E: Sie ist verstorben",
            answer2: "F: Sie liegt im Krankenhaus.",
            answer3: "G: Ihr Status ist unbekannt.",
            answer4: "H: Sie ist abgehauen."
        };

        let question4;

        let question4Answers = {
            answer1: "5: Er hat Gefühle für sie.",
            answer2: "6: Er will sich an ihr rächen.",
            answer3: "7: Sie ist Shous kleine Schwester.",
            answer4: "8: Er will an ihre Wäsche."
        };

        let endOrAgain;

        let endOrAgainAnswer = {
            end: "Fortfahren",
            again: "Wiederholen"
        };

        // Start
        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        await ƒS.Location.show(locations.sumisHome_livingRoom_evening);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_01);
        await ƒS.Inventory.add(items.documentsNobu);
        // Inventar hinzufügen
        await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4100_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4100_08);
        quiz();

        async function quiz(): Promise<String> {

            await ƒS.Text.print("Um Shou zu finden müssen Sie den richtigen Ort finden. Diesen finden Sie durch das folgende Rätsel. Sie werden mit einem kleinen Quiz konfrontiert und Fragen beantworten, welche mit dieser Visual Novel zu tun haben. Somit prüfen wir einmal, ob Sie aufgepasst haben. Der Anfangsbuchstabe oder die Anfangszahl werden zusammengesetzt und am Ende ergeben sie die richtige Lagerhallen Nummer. Sollten Sie die falsche Nummer eingeben geht es auch weiter... jedoch ist die Frage, ob sie den Bruder finden, eine andere. Viel Glück!");
            await ƒS.Speech.tell("Frage 1", "Wie hieß der kleine Bruder von Sumi?");
            question1 = await ƒS.Menu.getInput(question1Answers, "decisionClass");

            switch (question1) {
                case question1Answers.answer1:
                    dataForSave.storageHall = "A";
                    break;
                case question1Answers.answer2:
                    dataForSave.storageHall = "B";
                    break;
                case question1Answers.answer3:
                    dataForSave.storageHall = "C";
                    break;
                case question1Answers.answer4:
                    dataForSave.storageHall = "D";
                    break;
            }

            await ƒS.Speech.tell("Frage 2", "Was ist mit Sumis Vater passiert?");
            question2 = await ƒS.Menu.getInput(question2Answers, "decisionClass");
            switch (question2) {
                case question2Answers.answer1:
                    dataForSave.storageHall += "1";
                    break;
                case question2Answers.answer2:
                    dataForSave.storageHall += "2";
                    break;
                case question2Answers.answer3:
                    dataForSave.storageHall += "3";
                    break;
                case question2Answers.answer4:
                    dataForSave.storageHall += "4";
                    break;
            }

            await ƒS.Speech.tell("Frage 3", "Was ist mit Sumis Mutter passiert?");
            question3 = await ƒS.Menu.getInput(question3Answers, "decisionClass");
            switch (question3) {
                case question3Answers.answer1:
                    dataForSave.storageHall += "E";
                    break;
                case question3Answers.answer2:
                    dataForSave.storageHall += "F";
                    break;
                case question3Answers.answer3:
                    dataForSave.storageHall += "G";
                    break;
                case question3Answers.answer4:
                    dataForSave.storageHall += "H";
                    break;
            }

            await ƒS.Speech.tell("Frage 4", "Warum hängt Nobu so an Sumi?");
            question4 = await ƒS.Menu.getInput(question4Answers, "decisionClass");
            switch (question4) {
                case question3Answers.answer1:
                    dataForSave.storageHall += "5";
                    break;
                case question3Answers.answer2:
                    dataForSave.storageHall += "6";
                    break;
                case question3Answers.answer3:
                    dataForSave.storageHall += "7";
                    break;
                case question3Answers.answer4:
                    dataForSave.storageHall += "8";
                    break;
            }

            await ƒS.Speech.tell("", "Der aktuelle Code lautet: " + dataForSave.storageHall + "\n Möchten Sie mit der Geschichte fortfahren oder das Quiz wiederholen?");
            endOrAgain = await ƒS.Menu.getInput(endOrAgainAnswer, "decisionClass");
            switch (endOrAgain) {
                case endOrAgainAnswer.again: 
                    quiz();
                    break;
                case endOrAgainAnswer.end:
                    await ƒS.Inventory.add(items.code);
                    await ƒS.Speech.tell("", "Die richtige Lagerhallennumer (Inventar) lautet: ");
                    let code: String = await ƒS.Speech.getInput();
                    if (code == "C4F5") {
                        return "rightPlace";
                    } else {
                        return "wrongPlace";
                    }
            }
            return "wrongPlace";
        }
    }
}
