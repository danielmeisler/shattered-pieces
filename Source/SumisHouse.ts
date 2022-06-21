namespace Endabgabe {
    export async function SumisHouse(): ƒS.SceneReturn {
        console.log("FudgeStory SumisHouse Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S3100_01: "Das klingt doch wie Sumi? Was ist da los?",

                S3100_07: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",

                S3130_02: "Sicher, dass du nichts weißt?",
                S3130_04: "Keine Sorge, die finden wir noch...",

                S3121_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3121_03: "Halte noch ein wenig durch.",
                S3121_05: "Klingt gut, geht mir genauso...",
                S3121_07: "Keine Sorge, wir finden deinen Bruder.",
                S3121_09: "Ganz bestimmt...",
                S3121_12: "Du hast Recht, machen wir weiter."
            },
            Sumi: {
                S3100_01: "Jetzt verschwinde endlich, ich bin immer noch sauer auf dich!",
                S3100_03: "Achja? Was passiert dann?!",

                S3100_05: "Hör zu, ich habe noch viel zu tun… warum komm ich nicht einfach zum nächsten Gang-Treffen und wir bereden es?",
                S3100_08: dataForSave.nameProtagonist + ", warum?!...",
                S3100_10: "Nein… ehm…",

                S3120_02: "Ja, das wäre richtig dumm...",
                S3120_04: "Nichts…. Jetzt geh und lass uns unser Projekt machen.",

                S3121_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3121_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3121_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3121_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3121_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3121_11: "Wir sollten den Plan fertig stellen..."
            },
            Nobu: {
                S3100_02: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden!",
                S3100_04: "Du unterschätzt mich…",

                S3100_06: "Wehe du tauchst nicht auf.",

                S3100_09: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und mich nicht reinlassen willst?",

                S3110_01: "Du kleine Ratte… hast du Glück, dass hier schon die Nachbarn schauen. Aber das wirst du noch bereuen…",

                S3120_01: "Achsoooo, ihr kennt euch aus der Schule? Das erklärt dann auch, warum du sie gestern beschützen wolltest… wer wäre so dumm und würde sonst sein Leben für eine Fremde aufs Spiel setzen und sich einmischen.",
                S3120_03: "Was?",
                S3120_05: "Na gut… aber ich komme wieder Sumi, denk nicht, dass du mich einfach so jedes Mal abschütteln kannst.",

                S3130_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3130_03: "Hast du Beweise für deine Anschuldigungen?",
                S3130_05: "Pass lieber auf wo du deine Nase reinsteckst."
            }
        };

        // Decisions
        let interfereOrNot;
        let howToInterfere;
        let romanceChoices;
        
        let interfereOrNotAnswer = {
            not: "Ich sollte mich raushalten, um den Plan nicht zu gefährden.",
            interefere: "Ich sollte was tun, es sieht brenzlig aus."
        };

        let howToInterfereAnswer = {
            couple: "Ja bin ich, wir sind jetzt ein Paar und ich habe letzte Nacht bei ihr übernachtet.",
            classmates: "Entspann dich, wir sind im gleichen Kurs und haben ein Projekt zusammen.",
            brother: "Vielleicht ist der Grund eher, dass du etwas mit der Entführung ihres Bruders zu tun hast?"
        };

        let romanceChoicesAnswer = {
            beautiful: "Ich bewundere wunderschöne Menschen.",
            intelligent: "Du bist auch sehr intelligent, deine Ideen waren sogar noch besser.",
            thanks: "Danke"
        };

        // Start
        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        await ƒS.Location.show(sequences.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.street_day);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3100_01);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3100_01);
        await ƒS.Location.show(sequences.sumiNobuArgument);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3100_02);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3100_03);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3100_04);
        interfereOrNot = await ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");

        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3100_05);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3100_06);
                ƒS.Speech.hide();
                await ƒS.Location.show(sequences.black);
                await ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await ƒS.Location.show(locations.sumisHouse_outside);
                ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.midToRight));
                ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.midToLeft));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3100_07);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3100_08);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3100_09);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3100_10);
                howToInterfere = await ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");

                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3110_01);
                        await ƒS.Character.hideAll();
                        await ƒS.Speech.hide();
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(10);
                        await ƒS.Location.show(sequences.nobuWaiting);
                        await ƒS.update(5);
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);

                        await ƒS.Location.show(sequences.nobuWaitingAndKnife);
                        await ƒS.update(3);
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);
                        await ƒS.Sound.fade(sound.knife_stabbing, 0, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.classmates:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3120_01);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3120_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3120_03);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3120_04);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3120_05);
                        break;
                    case howToInterfereAnswer.brother:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3130_01);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3130_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3130_03);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3130_04);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3130_05);
                        dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.leftToLeftOut));
                await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.rightToRightOut));
                await ƒS.Speech.hide();
                break;
            }

        await ƒS.Location.show(locations.sumisHome_livingRoom_evening);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_03);
        await ƒS.Inventory.add(items.documentsShou2);
        await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();

        await ƒS.Location.show(sequences.planningEvening);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(10);
        await ƒS.Location.show(sequences.planningNight);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.planningNight2);
        await ƒS.update(3);

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_10);

        romanceChoices = await ƒS.Menu.getInput(romanceChoicesAnswer, "decisionClass");
        
        switch (romanceChoices) {
            case romanceChoicesAnswer.beautiful:
                dataForSave.romancePoints++;
                break;
            case romanceChoicesAnswer.intelligent:
                dataForSave.romancePoints++;
                dataForSave.romancePoints++;
                break;
            case romanceChoicesAnswer.thanks:
                break;
        }

        await ƒS.Character.hide(characters.sumi);
        await ƒS.Location.show(sequences.sumiSmilingEyesOpen);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3121_11);
        await ƒS.Location.show(sequences.sumiSmilingEyesClosed);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3121_12);
        await ƒS.Location.show(sequences.theNextDay);
        await ƒS.update(3);

        return "thePlan";
    }

    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                await ƒS.Location.show(endings.protagonistDead);
                await ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
        }
}

