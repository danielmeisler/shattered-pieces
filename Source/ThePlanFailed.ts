namespace Endabgabe {
    export async function ThePlanFailed(): ƒS.SceneReturn {
        console.log("FudgeStory ThePlanFailed Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S4200_01: "Sumi?! Was ist passiert?",
                S4200_03: "Und dann?",
                S4200_05: "Oh nein… ich habe mich verplappert?",
                S4200_07: "Tut mir leid, aber das erklärt immer noch nicht warum du verletzt bist.",
                S4200_09: "Was will er denn von dir?",
                S4200_11: "Was habe ich nur angerichtet…"
            },
            Sumi: {
                S4200_02: "Als ich dich gestern aus dem Krankenhaus verlassen habe, hat mir Nobu aufgelauert…",
                S4200_04: "Ich habe Nobu nie wirklich etwas erzählt, auch nicht, dass meine Mutter im Krankenhaus liegt… da ich wusste, dass es nichts Gutes bringt.",
                S4200_06: "Ja, aber du wusstest es ja nicht…",
                S4200_08: "Naja, jetzt benutzt Nobu meine Mutter als Erpressung, um von mir zu bekommen was er möchte… das wollte ich ihm zuerst nicht geben, also hat er mich geschlagen… wie damals, als du mich gerettet hast.",
                S4200_10: "Was weiß denn ich, aber bisher hat er von mir verlangt seine Freundin zu sein und zu machen was er von mir verlangt… sonst tut er meiner Mutter etwas an.",
                S4200_12: "Jetzt ist es egal… ich habe keine andere Wahl als ihm zu gehorchen… meine Mutter verliere ich nicht auch noch…",
                S4200_13: "Nobu, warte doch draußen… geh nicht rein!",
                S4200_15: "Ehhh… moment, es ist nicht so wie du denkst!",
                S4200_17: "Nein! Warte! Das ist ein Missverständnis…",
                S4200_19: "Nein!"
            },
            Nobu: {
                S4200_14: "Was macht die Ratte hier? ",
                S4200_16: "Sumi… was habe ich dir gesagt? Du triffst dich mit niemanden außer mir… erst recht nicht mit der kleinen Ratte! Hast du vergessen was passiert?",
                S4200_18: "Du enttäuschst mich… ich habe echt an dich geglaubt. Das wirst du bereuen…"
            }
        };

        // Decisions

        // Start
        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        ƒS.Sound.play(sound.sad_times, 0.2, true);
        await ƒS.Location.show(locations.sumisHome_livingRoom_evening);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.hurt, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_10);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4200_11);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_12);
        await ƒS.Sound.fade(sound.door_bell_buzzer, 1, 2, false);
        await ƒS.Speech.hide();
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.hurt, animate(animations.midToLeftOut));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.Character.hide(characters.sumi);
        await ƒS.update(1);
        await ƒS.Sound.play(sound.door_opening, 0.5, false);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_13);
        await ƒS.Sound.fade(sound.sad_times, 0, 3, false);
        ƒS.Sound.play(sound.first_encounter, 0.1, true);
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.leftOutToMid));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_14);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_15);
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.hurt_flipped, animate(animations.leftOutToLeft));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_16);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_17);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_18);
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.midToLeftOut));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_19);
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();
        await ƒS.Sound.play(sound.door_closing, 0.5, false);
        await ƒS.Sound.fade(sound.first_encounter, 0, 3, false);
        ƒS.Sound.play(sound.searching_track, 0.1, true);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(5);
        await ƒS.Location.show(sequences.sumiDepressed);
        await ƒS.update(5);
        await ƒS.Text.print("̶L̶i̶e̶b̶e̶s̶ Tagebuch, \n \n Es sind mittlerweile einige Wochen seitdem Tod von Mom vergangen... Es sind mittlerweile auch einige Wochen seitdem Fund von Shous Leiche vergangen... Es sind mittlerweile ebenso einige Wochen seitdem Unfall von " + dataForSave.nameProtagonist + " vergangen. Nobu hat es geschafft... es gibt keine Beweise. Er baut sein Imperium auf Leichen auf... Mich hat er verschont, da er mich liebt... sagt er. Er hat gewonnen... Er hat mir alles genommen... ich bin allein und habe gar nichts mehr. Ich vermisse euch alle so sehr... ich will nicht mehr, ich sehe keinen Ausweg. \n \n Sumi");
        return await ending(1);
    }
    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                await ƒS.Location.show(endings.sumiEnding);
                await ƒS.update(5);
                return "endOfNovel";
        }
        return "endOfNovel";
        }
}