namespace Endabgabe {
    export async function SumiHospital(): ƒS.SceneReturn {
        console.log("FudgeStory SumiHospital Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S2300_01: "Hey du, du bist endlich wach.",
                S2300_03: "Im Krankenhaus.",
                S2300_05: "Ich heiße: ",
                S2300_07: "Ich habe gesehen, wie eine Gruppe von Gang-Mitgliedern dich belästigt hat und habe Hilfe geholt. Allerdings, als ich zurückkam, war es zu spät und du lagst auf dem Boden.",
                S2300_09: "Was ist passiert, was wollten die von dir?",
                S2300_11: "Okay tut mir leid… wie dem auch sei… Der Arzt meinte, dass du zum Glück nur leichte Verletzungen hast und für ein paar Tage hierbleiben musst, um dich auszuruhen.",
                S2300_13: "Darf ich noch deinen Namen erfahren?",
                S2300_15: "Und du willst mir wirklich nicht anvertrauen was da passiert ist?",
                S2300_17: "Nobu? Das heißt du kennst den Typen?",
                S2300_19: "Tut mir leid, war bloß neugierig…",
                S2300_31: "Gerne doch.",
                S2300_34: "Ach was… aber warum hast du sie angelogen?",
                S2300_36: "Anhand der Kleidung und dass sie gleich eine Therapie hat, ist sie auch in diesem Krankenhaus?",
                S2300_38: "Das tut mir leid zu hören…",
                
                S2310_02: "Das ist dein Bruder? Das nicht mitzukriegen ist schon beinahe unmöglich…. Aber das tut mir sehr leid für dich.",
                S2310_04: "Aber was ist passiert?",
                S2310_06: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2310_08: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
                S2310_10: "Und was hat deine Mutter?",
                
                S2320_02: "Was ist mit deinem Vater oder anderen Familienmitgliedern?",
                S2320_04: "Wo sind sie denn?",
                S2320_06: "Und jetzt ist auch dein Bruder verschwunden, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
                S2320_08: "Und dein Bruder ist jetzt verschwunden?",

                S2330_01: "Deine Mutter kann ich nicht heilen, aber ich kann dir bei der Suche deines Bruder helfen… Ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2330_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2330_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2330_07: "Es ist schon spät… ich sollte gehen. Ich komme dich morgen besuchen, dann können wir daran weiterarbeiten.",
                S2330_09: "…",
                S2330_12: "Bis morgen!"
            },
            Sumi: {
                S2300_02: "Wo bin ich?",
                S2300_04: "Und wer bist du?",
                //S2300_06: "Okay… PROTAGONIST… und was machst du hier?",
                S2300_08: "Ach… aua… ich erinnere mich…",
                S2300_10: "Geht dich wohl gar nichts an…",
                S2300_12: "Alles klar, danke fürs Bescheid geben…",
                S2300_14: "Meinetwegen… Sumi ist mein Name.",
                S2300_16: "Tzz… Nobu wurde wütend, weil ich jemanden verteidigt habe, über den er hergezogen hat…",
                S2300_18: "Ja. Sag mal, stellst du nicht zu viele Fragen?",
                S2300_21: "Mom… woher weißt du, dass ich hier bin.",
                S2300_23: "Ist nur halb so schlimm…",
                S2300_25: "Ehm… ich bin an einer erhöhten Stelle an einem halbfesten Geländer ausgerutscht und tief gefallen…",
                //S2300_27: "Nein, nicht ganz… das ist PROTAGNIST… PROTAGONIST hat mir geholfen und den Krankenwagen gerufen…",
                S2300_29: "Pfff…",
                S2300_33: "Entschuldige meine peinliche Mutter…",
                S2300_35: "Sie soll sich nicht noch mehr Sorgen machen, das ist nicht gut für sie…",
                S2300_37: "Ja ist sie… sie ist schwer krank und hat vielleicht nicht mehr lange…",
                S2300_39: "Jedenfalls reicht ihr der Stress mit meinem verschwundenen Bruder… wenn sie noch erfährt dass ich mich mit so einer Gang rumtreibe kann sie das vielleicht nicht verkraften…",
                
                S2310_01: "Ja, vielleicht hast du es schon gesehen… überall in den Nachrichten wird von ihm berichtet und in der Stadt hängen überall Plakate.",
                S2310_03: "Schon in Ordnung.",
                S2310_05: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der dich zusammen-geschlagen hat, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2310_07: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl…",
                S2310_09: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",
                
                S2320_01: "Was genau sie hat spielt keine Rolle… jedenfalls ist sie schwerkrank und hat wahrscheinlich nicht mehr lange zu leben…",
                S2320_03: "Der ist nicht mehr da… es ist niemand mehr da…",
                S2320_05: "Das ist eine lange Geschichte… Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade 	da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2320_05b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als 	unsere Mutter schwerkrank wurde und in dieses Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2320_07: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",

                S2330_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2330_04: "Trotzdem…",
                S2330_06: "Na gut…",
                S2330_08: "Das klingt gut…",
                S2330_10: "Alles okay? Warum siehst du mich so an?",
                S2330_11: "Ehm… danke… bis morgen."
            },
            Yuko: {
                S2300_20: "SUMI? WAS IST PASSIERT MEIN SCHATZ?",
                S2300_22: "Die Schwester hat es mir gesagt, aber was ist nur passiert?",
                S2300_24: "Los raus mit der Sprache.",
                S2300_26: "Und wer ist das? Seid ihr Freunde… oder sogar mehr?",
                S2300_28: "Und dann bis ins Krankenhaus gefolgt? Nein nein, mein Schatz, das glaub ich dir nicht.",
                S2300_30: "Mein Name ist Yuko und ich bin Sumis Mutter. Komm doch gerne wieder vorbei… ich möchte dich kennen lernen. Ich habe noch nie Freunde von Sumi kennen gelernt!",
                S2300_32: "Wie dem auch sei… Sumi, dir geht es zum Glück gut! Ich habe gleich meine Therapie, wir reden später… man sieht sich."
            }
        };

        // Decisions
        let brotherOrMother;
        let flirtOrNot;

        let brotherOrMotherAnswer = {
            brother: "Dein Bruder ist verschwunden?",
            mother: "Was hat denn deine Mutter?"
        };

        let flirtOrNotAnswer = {
            flirt: "Du siehst sehr schön aus...",
            not: "Nichts..."
        };

        // Start
        ƒS.Speech.hide();
        characters.nobu.name = "Nobu";
        characters.sumi.name = "Pinkes Mädchen";
        characters.yuko.name = "???";
        ƒS.Sound.play(sound.float_track, 0.2, true);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Location.show(sequences.sumiHospitalEyesClosed);
        await ƒS.update(2);
        await ƒS.Location.show(sequences.sumiHospitalEyesOpening);
        await ƒS.update(2);
        await ƒS.Location.show(sequences.sumiHospital);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_01);
        await ƒS.Location.show(sequences.sumiHospitalZoom);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_05);

        //Name Input
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        await ƒS.Speech.tell(characters.sumi, "Okay... " + characters.protagonist.name + "... und was machst du hier?");
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_10);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_11);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_12);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_13);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_14);
        characters.sumi.name = "Sumi";
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_15);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_16);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_17);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_18);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_19);
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_20);
        await ƒS.Character.animate(characters.yuko, characters.yuko.pose.normal, animate(animations.leftOutToLeft));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_21);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_22);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_23);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_24);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_25);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_26);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.yuko, characters.yuko.pose.happy, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, "Nein, nicht ganz… das ist " + characters.protagonist.name + " … " + characters.protagonist.name + " hat mir geholfen und den Krankenwagen gerufen…");
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_28);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_29);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_30);
        characters.yuko.name = "Yuko";
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_31);
        await ƒS.Speech.tell(characters.yuko, text.Yuko.S2300_32);
        await ƒS.Character.hideAll();
        ƒS.Sound.play(sound.hard_floor_footsteps, 1, true);
        await ƒS.Character.animate(characters.yuko, characters.yuko.pose.happy, animate(animations.leftToLeftOut));
        await ƒS.Sound.fade(sound.hard_floor_footsteps, 0, 0, false);
        await ƒS.update(1);
        await ƒS.Sound.fade(sound.float_track, 0, 3, false);
        ƒS.Sound.play(sound.sad_times, 0.3, true);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_33);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_34);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_35);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_36);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_37);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2300_38);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2300_39);
        brotherOrMother = await ƒS.Menu.getInput(brotherOrMotherAnswer, "decisionClass");

        switch (brotherOrMother) {
            case brotherOrMotherAnswer.brother:
                await ƒS.Location.show(sequences.sumiCryInHospital);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_05);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_07);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_09);

                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_10);

                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_05b);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_06);
                await ƒS.Location.show(sequences.sumiHappyCryInHospital);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_07);
                break;
            case brotherOrMotherAnswer.mother: 
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_05b);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_06);
                await ƒS.Location.show(sequences.sumiHappyCryInHospital);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2320_07);

                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2320_08);

                await ƒS.Location.show(sequences.sumiCryInHospital);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_05);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_07);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2310_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2310_09);
                break;
        }

        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_01);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_02);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_05);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_06);
        await ƒS.Inventory.add(items.documentsShou);
        await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        await ƒS.Character.hideAll();
        await ƒS.Speech.hide();

        await ƒS.Location.show(sequences.planningDaySumiHospital);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.black);
        await ƒS.Sound.fade(sound.sad_times, 0, 10, false);
        await ƒS.update(1);
        ƒS.Sound.play(sound.romantic_track, 0.3, true);
        await ƒS.Location.show(sequences.planningEveningSumiHospital);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_07);
        await ƒS.Location.show(sequences.planningEveningSumiHospitalLooking);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_09);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_10);

        flirtOrNot = await ƒS.Menu.getInput(flirtOrNotAnswer, "decisionClass");
        switch (flirtOrNot) {
            case flirtOrNotAnswer.not:
                break;
            case flirtOrNotAnswer.flirt:
                dataForSave.romancePoints++;
                await ƒS.Location.show(sequences.sumiSmilingEyesOpenInHospital);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2330_11);
                await ƒS.Location.show(sequences.sumiSmilingEyesClosedInHospital);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2330_12);
                break;
        }
        ƒS.Speech.hide();
        await ƒS.update(1);
        await ƒS.Sound.fade(sound.romantic_track, 0, 0, false);
        await ƒS.Sound.play(sound.rooster, 0.2, false);
        await ƒS.Location.show(sequences.theNextDay);
        await ƒS.update(3);
        return "sumiHospitalHallway";
    }
}