namespace Endabgabe {
    export async function SumiHospitalHallway(): ƒS.SceneReturn {
        console.log("FudgeStory SumiHospitalHallway Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S3300_02: "Klar, alles in Ordnung?",
                S3300_04: "Warum?",
                S3300_06: "Das würde niemanden gut tun…",
                S3300_08: "...",
                S3300_10: "...",
                S3300_12: "Ich versprechs…",
                S3300_14: "Gute Besserung...",

                S3300_21: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",

                S3330_02: "Sicher, dass du nichts weißt?",
                S3330_04: "Keine Sorge, die finden wir noch…",

                S3340_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3340_03: "Halte noch ein wenig durch.",
                S3340_05: "Klingt gut, geht mir genauso...",
                S3340_07: "Keine Sorge, wir finden deinen Bruder.",
                S3340_09: "Ganz bestimmt...",
                S3340_11: "Wir sollten den Plan fertig stellen… denn morgen wirst du entlassen und dann treffen wir uns bei dir zuhause, um den Plan zu beginnen."
            },
            Sumi: {
                S3300_15: "Jetzt verschwinde endlich, und lass mich in Ruhe!",
                S3300_17: "Sag mal spinnst du? Ich bin wegen dir hier drin!",

                S3300_19: "Hör zu, mir geht es gerade echt nicht gut… warum komm ich nicht einfach zum nächsten Gang-Treffen, sobald ich freigelassen werde?",
                S3300_22: dataForSave.nameProtagonist + ", warum?!...",
                S3300_24: "Nein… ehm…",

                S3320_02: "Jetzt geh und lass mich ein wenig ausruhen.",

                S3340_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3340_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3340_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3340_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3340_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3340_12: "Du hast Recht, machen wir weiter."
            },
            Nobu: {
                S3300_16: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden! Du meidest mich, antwortest mir nicht auf meine Nachrichten oder Anrufe. Glaubst du nur weil du im Krankenhaus bist, kannst du mich ignorieren?",
                S3300_18: "Und das wirst du noch öfters, wenn du nicht auf mich hörst.",

                S3300_20: "Letzte Chance, wehe du tauchst nicht auf.",
                S3300_23: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und dich hier befindest? Hast dich in deinen Retter verliebt?",

                S3310_01: "Du kleine Ratte… hast du Glück, dass hier so viele Leute sind. Aber das wirst du noch bereuen…",

                S3320_01: "Zufällig also? Du kleine Ratte… ich glaube dir mal, aber wenn ich dich noch einmal in ihrer Nähe erwische, mach ich dich kalt!",
                S3320_03: "Na gut… aber ich komme wieder Sumi, denk nicht, dass du mich einfach so jedes Mal abschütteln kannst.",

                S3330_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3330_03: "Hast du Beweise für deine Anschuldigungen?",
                S3330_05: "Pass lieber auf wo du deine Nase reinsteckst."
            },
            Yuko: {
                S3300_01: "Hey " + dataForSave.nameProtagonist + ", hast du eine Sekunde?",
                S3300_03: "Hör zu… vielleicht bist du nicht die richtige Person, an die ich mich wende, aber Sumi hat sonst keine anderen Freunde, zumindest kenne ich niemanden… und ich mache mir Sorgen.",
                S3300_05: "Sie gibt sich äußerlich stark und tut so als würde sie nichts erschüttern, jedoch kenn ich sie… das Alles frisst sie innerlich auf… und irgendwann wird es sie innerlich zerstören. Sie schleppt schon lange alte Familienbürden mit sich rum und seitdem ihr Bruder verschwunden ist tut ihr das sicherlich auch nicht gut.",
                S3300_07: "Jedenfalls… ich weiß nicht mehr wie lange ich habe… es ist jedenfalls nicht mehr viel Zeit… ich habe Angst, dass das Sumi den letzten Stoß verpassen wird… und das will ich nicht. Ich will, dass selbst, wenn ich nicht mehr da bin, sie ein langes und glückliches Leben führt und mit alldem hier abschließen kann.",
                S3300_09: "Wie gesagt, ich weiß nicht an wen ich mich sonst wenden soll… Aber kannst du für Sumi da sein und auf sie aufpassen? Bitte… pass auf meine Tochter auf, wenn ich es nicht mehr kann…versprich es mir!",
                S3300_11: "…bitte…",
                S3300_13: "…danke dir… ich sollte jetzt gehen… habt ihr zwei viel Spaß."
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
            couple: "Ja bin ich, wir sind jetzt ein Paar und ich besuche sie.",
            coincidence: "Ich besuche hier zufälligerweise Jemanden und hab euch bloß vom Gang schreien hören.",
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
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.hide();
        await ƒS.Location.show(locations.hospitalHallway2);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.hospitalHallway3);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.hospitalHallway);
        await ƒS.Character.show(characters.yuko, characters.yuko.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_01);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_02);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_03);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_04);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_05);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_06);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_07);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.yuko, characters.yuko.pose.sad, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_08);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_09);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_10);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_11);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_12);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S3300_13);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_14);
        await ƒS.Character.hideAll();
        await ƒS.Character.animate(characters.yuko, characters.yuko.pose.sad, animate(animations.midToRightOut));
        await ƒS.update(1);
        await ƒS.Location.show(locations.hospitalHallway3);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.hospitalHallway2);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3300_15);
        await ƒS.Speech.tell(characters.protagonist, "Das kommt doch aus Sumis Zimmer? Was ist da los?");
        await ƒS.Location.show(sequences.sumiNobuArgumentHospitalroom);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3300_16);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3300_17);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3300_18);
        interfereOrNot = await ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");

        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3300_19);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3300_20);
                ƒS.Speech.hide();
                await ƒS.Location.show(sequences.black);
                await ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await ƒS.Location.show(sequences.sumiHospitalZoom);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.normal, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3300_21);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3300_22);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3300_23);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3300_24);
                howToInterfere = await ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");

                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3310_01);
                        await ƒS.Speech.hide();
                        await ƒS.Character.hideAll();
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);
                        await ƒS.Location.show(sequences.nobuWaitingHospitalOutside);
                        await ƒS.update(5);
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);
                        await ƒS.Location.show(sequences.nobuWaitingAndKnifeHospital);
                        await ƒS.update(3);
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);
                        await ƒS.Sound.fade(sound.knife_stabbing, 0, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.coincidence:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3320_01);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3320_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3320_03);
                        break;
                    case howToInterfereAnswer.brother:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3330_01);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3330_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3330_03);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3330_04);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3330_05);
                        dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await ƒS.Speech.hide();
                await ƒS.Character.hideAll();
                await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.leftToLeftOut));
                await ƒS.update(2);
                break;
            }
        await ƒS.Location.show(sequences.sumiHospitalZoom);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_03);
        await ƒS.Inventory.add(items.documentsShou2);
        await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();

        await ƒS.Location.show(sequences.planningDaySumiHospital);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(10);
        await ƒS.Location.show(sequences.planningEveningSumiHospital);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.planningEveningSumiHospitalLooking);
        await ƒS.update(3);

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_10);

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

        await ƒS.Location.show(sequences.sumiSmilingEyesOpenInHospital);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3340_11);
        await ƒS.Location.show(sequences.sumiSmilingEyesClosedInHospital);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3340_12);

        ƒS.Speech.hide();
        await ƒS.update(1);
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