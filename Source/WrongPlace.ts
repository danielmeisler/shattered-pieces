namespace Endabgabe {
    export async function WrongPlace(): ƒS.SceneReturn {
        console.log("FudgeStory WrongPlace Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S4110_03: "Sumi, geht es dir gut? Bist du verletzt?",
                S4110_05: "Es war also eine Falle?",
                S4110_07: "Und was geschieht jetzt?",

                S4110_11a: "Es tut mir leid Sumi! Ich wollte nicht, dass das alles so endet!",
                S4110_11b: "Es ist alles meine Schuld... nur weil ich mit diesem dummen Plan ankam...",
                S4110_11c: "Bitte... tu uns nichts... oder lass zumindest Sumi am Leben!",
                S4110_11d: "Sumi... ich liebe dich!"
            },
            Sumi: {
                S4110_02: "Mhhh!",
                S4110_04: "MHHHHHHHH!",
                S4110_10: "Mhh?!",

                S4110_12a: "Mh mhh mhhhhh mhhnh Mhhhhh!",
                S4110_12b: "Nhhn, mhhnh!",
                S4110_12c: "Nhhn...",
                S4110_12d: "Mhh mhhhh mhhh mhhh!"

            },
            Nobu: {
                S4110_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor.",
                S4110_01b: "... oder findest du nicht, Sumi?",
                S4110_06: "Und ihr seid voll reingetappt… schon schade… Euer Plan hat leider nicht funktioniert, ich hab ihr alles abgenommen.",
                S4110_08: "Was denkst du? Ich weiß nicht wie viel ihr wisst und wie viel ihr mir hinterher geschnüffelt habt… Aber ich kann euch nicht mehr am Leben lassen.",
                S4110_09: "Sumi, es tut mir wirklich leid, dass es so enden muss. Ich habe dich geliebt...",
                S4110_13: "Hättest du dich damals nur nicht eingemischt, wäre das alles nicht passiert…"
            }
        };

        // Decisions
        let lastWords;
        let lastWordsPoints;

        let lastWordsAnswer = {
            iAmSorry: "Es tut mir leid...",
            itIsAllMyFault: "Es ist alles meine Schuld...",
            please: "Bitte... tu uns nichts..."
        };

        let lastWordsPointsAnswer = {
            iAmSorry: "Es tut mir leid...",
            itIsAllMyFault: "Es ist alles meine Schuld...",
            please: "Bitte... tu uns nichts...",
            iLoveYou: "Ich liebe dich..."
        };

        // Start
        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        ƒS.Sound.play(sound.stealth_track, 0.1, true);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Location.show(locations.storageHall);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        ƒS.Sound.play(sound.hallway_floor_footsteps, 1, true);
        await ƒS.Location.show(locations.storageHallEntrance);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.storageHallHallway);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.storageHallEmpty);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Sound.fade(sound.hallway_floor_footsteps, 0, 0, false);
        await ƒS.Speech.tell(characters.protagonist, "Ich habe so ziemlich alles durchsucht und keine Spur... sag mir nicht ich bin am falschen Ort...");
        await ƒS.Speech.hide();

        await ƒS.Sound.fade(sound.punch_1, 0, 1, false);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(1);
        await ƒS.Sound.fade(sound.fall_on_ground, 0, 1, false);
        ƒS.Sound.play(sound.heartbeat, 1, true);
        await ƒS.update(10);
        await ƒS.Sound.fade(sound.stealth_track, 0, 0, false);
        ƒS.Sound.play(sound.first_encounter, 0.01, true);

        await ƒS.Location.show(sequences.storageHallWakeUp);
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
        await ƒS.Location.show(sequences.storageHallWakeUp2);
        await ƒS.update(5);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_01);

        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
        ƒS.Sound.fade(sound.heartbeat, 0, 0, false);
        ƒS.Sound.fade(sound.first_encounter, 0.1, 1, true);
        await ƒS.Location.show(locations.storageHallFightFull);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);

        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_01b);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.sumiTiedUpComing);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_02);

        await ƒS.Location.show(locations.storageHallFightFuller);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_05);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_07);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_08);

        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.sumiTiedUp);
        await ƒS.update(3);

        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_10);
        await ƒS.Location.show(sequences.sumiEndCry);
        await ƒS.update(3);
        // Decision
        if (dataForSave.romancePoints >= 2 ) {
            lastWordsPoints = await ƒS.Menu.getInput(lastWordsPointsAnswer, "decisionClass");
            switch (lastWordsPoints) {
                case lastWordsPointsAnswer.iAmSorry:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11a);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12a);
                    break;
                case lastWordsPointsAnswer.itIsAllMyFault:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11b);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12b);
                    break;
                case lastWordsPointsAnswer.please:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11c);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12c);
                    break;
                case lastWordsPointsAnswer.iLoveYou:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11d);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12d);
            }
        } else {
            lastWords = await ƒS.Menu.getInput(lastWordsAnswer, "decisionClass");
            switch (lastWords) {
                case lastWordsAnswer.iAmSorry:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11a);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12a);
                    break;
                case lastWordsAnswer.itIsAllMyFault:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11b);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12b);
                    break;
                case lastWordsAnswer.please:
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4110_11c);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S4110_12c);
                    break;
            }
        }
        await ƒS.Location.show(sequences.black);
        await ƒS.update(1);
        await ƒS.Sound.play(sound.knife_stabbing, 1, false);
        await ƒS.update(3);
        await ƒS.Location.show(sequences.nobuKnifeStorage);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4110_13);
        await ƒS.Sound.fade(sound.first_encounter, 0, 0, false);
        await ƒS.Location.show(sequences.black);
        await ƒS.Sound.play(sound.knife_stabbing, 1, false);
        await ƒS.update(1);
        await ƒS.update(10);

        if (dataForSave.romancePoints >= 2 ) {
            return await ending(2);
        } else {
            return await ending(1);
        }
    }

    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                await ƒS.Location.show(endings.protagonistDead);
                await ƒS.update(1);
                await ƒS.Sound.fade(sound.sad_ending, 0, 7, false);
                return "endOfNovel";
            case 2:
                await ƒS.Speech.hide();
                await ƒS.Text.print("L̶i̶e̶b̶e̶s̶ Tagebuch, \n \n Heute ist es soweit... der große Tag. Heute sehen wir, ob die Mühen der letzten Tage sich ausgezahlt haben... und vielleicht sehe ich auch endlich Shou wieder. Ich hoffe dir geht es gut Bruderherz... Jedenfalls habe ich alle Vorbereitungen getroffen und warte auf " + dataForSave.nameProtagonist + " und dann starten wir auch mit dem Plan. In einigen Stunden kann sich alles ändern... und vielleicht, wenn das alles hier vorbei ist... kann ich " + dataForSave.nameProtagonist + " meine Liebe gestehen. Ob sie erwidert wird? Heute werde ich es herausfinden... hoffentlich. \n \n Sumi");
                await ƒS.Location.show(endings.protagonistDead);
                await ƒS.update(1);
                await ƒS.Sound.fade(sound.sad_ending, 0, 7, false);
                return "endOfNovel";
        }
        return "endOfNovel";
        }
}