namespace Endabgabe {
    export async function ProtagonistHospitalHallway(): ƒS.SceneReturn {
        console.log("FudgeStory ProtagonistHospitalHallway Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S3200_01: "Das klingt doch wie Sumi? Was ist da los?",
                S3200_07: "Du hast echt nichts Besseres zu tun als sie zu nerven, oder?",
                
                S3230_02: "Sicher, dass du nichts weißt?",
                S3230_04: "Keine Sorge, die finden wir noch…",

                S3240_01: "Dass der Typ dich auch nicht in Ruhe lässt.",
                S3240_03: "Halte noch ein wenig durch.",
                S3240_05: "Klingt gut, geht mir genauso...",
                S3240_07: "Keine Sorge, wir finden deinen Bruder.",
                S3240_09: "Ganz bestimmt...",
                S3240_12: "Du hast Recht, machen wir weiter."
            },
            Sumi: {
                S3200_01: "Jetzt verschwinde endlich, du hast hier nichts zu suchen!",
                S3200_03: "Du spionierst mir nach? Das geht dich nichts an, verschwinde jetzt!",
                
                S3200_05: "Hör zu, ich habe gerade keine Zeit… warum komm ich nicht einfach zum nächsten Gang-Treffen und ich erzähle dir alles?",
                
                S3200_08: dataForSave.nameProtagonist + ", warum?!...",
                S3200_10: "Nein… ehm…",

                S3220_02: "Nein… eh… ja… das ist nicht wichtig und geht dich nichts an.",
                S3220_04: "Nobu… geh einfach…",

                S3240_02: "Ja… aber lange muss ich mir das nicht mehr geben.",
                S3240_04: "Wir sollten eine kurze Pause einlegen, ich kann nicht mehr denken…",
                S3240_06: "Ich find es echt nett von dir, dass du mir hilfst… danke…",
                S3240_08: "Hoffentlich… vielleicht, wenn das alles vorbei ist… kann ich dann auch ein ganz normales Leben als Teenagerin führen…",
                S3240_10: "Sag mal, du bist ziemlich intelligent, wenn ich mir deine Ideen so anschaue… ich bewundere intelligente Menschen.",
                S3240_11: "Wir sollten den Plan fertig stellen… denn morgen wirst du entlassen und dann treffen wir uns bei mir zuhause, um den Plan zu beginnen."
            },
            Nobu: {
                S3200_02: "Glaubst du ich werde mir das weiterhin Gefallen lassen Sumi?! Irgendwann reißt der Faden! Du meidest mich, antwortest mir nicht auf meine Nachrichten oder Anrufe. Ich hab dich beobachtet… du bist ziemlich oft in diesem Krankenhaus… warum?",
                S3200_04: "Ja, ich will wissen, warum du mir aus dem Weg gehst!",
                
                S3200_06: "Wehe du tauchst nicht auf.",
                
                S3200_09: "Ach ist er der Grund, weshalb du so eiskalt zu mir bist, mich dauernd meidest und dich hier befindest? Hast dich in deinen Retter verliebt?",

                S3210_01: "Du kleine Ratte… hast du Glück, dass hier schon die Leute schauen. Aber das wirst du noch bereuen…",

                S3220_01: "Achsoooo, ihre Mutter ist hier im Krankenhaus?",
                S3220_03: "Aber warum hast du das nicht gleich gesagt? Deine arme Mutter ist also schwerkrank? Du armes Mädchen…",
                S3220_05: "Keine Sorge… ich gehe jetzt.",
                S3220_05b: "Aber an deiner Stelle würde ich definitiv zum nächsten Gang-Treffen kommen, wenn du nicht willst, dass es deiner schwerkranken Mutter noch schlechter geht.",

                S3230_01: "Ich weiß absolut nicht was du meinst… und was kümmert dich das eigentlich?",
                S3230_03: "Hast du Beweise für deine Anschuldigungen?",
                S3230_05: "Pass lieber auf wo du deine Nase reinsteckst."
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
            couple: "Ja bin ich, wir sind jetzt ein Paar und sie besucht mich.",
            school: "Entspann dich, wir sind in der selben Klasse und ich bringe ihr nur die heutigen Notizen.",
            mother: "Das ist Zufall, du hast mich her befördert und sie besucht ihre Mutter.",
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
        ƒS.Sound.play(sound.float_track, 0.2, true);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.protagonistHospitalRoom_day);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3200_01);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3200_01);
        await ƒS.Location.show(sequences.sumiNobuArgumentHospital);
        await ƒS.update(1);
        ƒS.Sound.play(sound.hospital_ambiente, 0.5, true);
        await ƒS.Sound.fade(sound.float_track, 0, 3, false);
        ƒS.Sound.play(sound.first_encounter, 0.1, true);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3200_02);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3200_03);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3200_04);
        interfereOrNot = await ƒS.Menu.getInput(interfereOrNotAnswer, "decisionClass");

        switch (interfereOrNot) {
            case interfereOrNotAnswer.not:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3200_05);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3200_06);
                ƒS.Speech.hide();
                await ƒS.Location.show(sequences.black);
                await ƒS.update(1);
                break;
            case interfereOrNotAnswer.interefere:
                await ƒS.Location.show(locations.hospitalHallway3);
                ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.midToRight));
                ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.midToLeft));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3200_07);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3200_08);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S3200_09);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S3200_10);
                howToInterfere = await ƒS.Menu.getInput(howToInterfereAnswer, "decisionClass");

                switch (howToInterfere) {
                    case howToInterfereAnswer.couple:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3210_01);
                        await ƒS.Character.hideAll();
                        await ƒS.Speech.hide();
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(10);
                        await ƒS.Location.show(sequences.nobuWaitingHospital);
                        await ƒS.update(5);
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(1);

                        await ƒS.Location.show(locations.protagonistHospitalRoom_night);
                        await ƒS.Character.show(characters.nobu, characters.nobu.pose.normal, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                        await ƒS.Speech.tell(characters.nobu, "Du hast dich mit mir angelegt... selbst Schuld.");
                        await ƒS.Character.hideAll();
                        await ƒS.Speech.hide();
                        await ƒS.Location.show(sequences.black);
                        await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
                        await ƒS.Sound.fade(sound.first_encounter, 0, 0, false);  
                        await ƒS.Sound.play(sound.knife_stabbing, 1, false);
                        return await ending(1);
                    case howToInterfereAnswer.school:
                        await ƒS.Speech.tell(characters.nobu, "Ihr kennt euch aus der Klasse? Das erklärt so einiges...");
                        await ƒS.Speech.tell(characters.sumi, "Ja, jetzt lass mich in Ruhe, denn ich muss hier meine Bildung nachholen.");
                        await ƒS.Speech.tell(characters.nobu, "Na gut... ausnahmsweise... aber glaub ja nicht, dass du immer so leicht davon kommst.");
                        break;
                    case howToInterfereAnswer.mother:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3220_01);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3220_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3220_03);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3220_04);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3220_05);
                        dataForSave.nobuKnowsMother = true;
                        break;
                    case howToInterfereAnswer.brother:
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3230_01);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3230_02);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3230_03);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3230_04);
                        await ƒS.Speech.tell(characters.nobu, text.Nobu.S3230_05);
                        dataForSave.nobuKnowsBrother = true;
                        break;
                }
                await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.leftToLeftOut));
                await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.rightToRightOut));
                await ƒS.Speech.hide();
                break;
            }

        await ƒS.Sound.fade(sound.first_encounter, 0, 0, false);    
        await ƒS.Sound.fade(sound.hospital_ambiente, 0, 0, false);
        ƒS.Sound.play(sound.float_track, 0.2, true);
        await ƒS.Location.show(locations.protagonistHospitalRoom_day);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_03);
        await ƒS.Inventory.add(items.documentsShou2);
        await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.planningEveningHospital);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.black);
        await ƒS.Sound.fade(sound.float_track, 0, 10, false);
        await ƒS.update(1);
        ƒS.Sound.play(sound.romantic_track, 0.3, true);
        await ƒS.Location.show(sequences.planningNightHospital);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.planningNight2Hospital);
        await ƒS.update(3);

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_10);

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
        await ƒS.Location.show(sequences.sumiSmilingEyesOpenHospital);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S3240_11);
        await ƒS.Location.show(sequences.sumiSmilingEyesClosedHospital);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S3240_12);
        await ƒS.Sound.fade(sound.romantic_track, 0, 0, false);
        await ƒS.Sound.play(sound.rooster, 0.2, false);
        await ƒS.Location.show(sequences.theNextDay);
        await ƒS.update(3);

        if (dataForSave.nobuKnowsMother == false) {
            return "thePlan";
        } else {
            return "thePlanFailed";
        }
    }

    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                await ƒS.Location.show(endings.protagonistDead);
                await ƒS.update(3);
                await ƒS.Sound.fade(sound.sad_ending, 0, 7, false);
                return "endOfNovel";
        }
        return "endOfNovel";
        
    }
}