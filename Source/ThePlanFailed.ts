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
                S4200_11: "Was habe ich nur angerichtet…",
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
        await ƒS.Location.show(locations.sumisHome_livingRoom_evening);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
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
        // Klopfen an der Tür
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.midToLeftOut));
        await ƒS.Character.hide(characters.sumi);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_13);
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.leftOutToMid));
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_14);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_15);
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.leftOutToMid));
        ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.midToLeft));
        ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.midToRight));
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_16);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_17);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4200_18);
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.rightToMid));
        await ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.midToLeftOut));
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4200_19);
        // Endsequenzen
        return await ending(1);
    }
    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                //await ƒS.Location.show(endings.suicide);
                await ƒS.update(3);
                return "endOfNovel";
        }
        return "endOfNovel";
        }
}