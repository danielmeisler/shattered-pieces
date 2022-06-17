namespace Endabgabe {
    export async function ProtagonistHospital(): ƒS.SceneReturn {
        console.log("FudgeStory ProtagonistHospital Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S2200_02: "Wo bin ich?",
                S2200_04: "Ahh aua, ich fühle den Grund, mist…",
                S2200_06: "Nobu? Du kennst diesen Typen?",
                S2200_08: "Wow, wie nett von ihm…",
                S2200_10: "Ja ehm… kein Problem…",
                S2200_12: "Warte! Du gehst schon? Kann ich wenigstens deinen Namen erfahren?",
                S2200_14: "Ein sehr schöner Name! Ich heiße: ",
                S2200_16: "Okay, danke… wow dann muss ich mich wohl einige Tage hier langweilen…",
                S2200_18: "Warte! Werde ich dich wiedersehen?",
                S2200_20: "Dann besuch mich wenigstens, während ich noch hier im Krankenhaus bin, mir ist sowieso langweilig.",
                S2200_22: "Ja, man sieht sich.",

                S2210_02: "Das ist doch der Junge von den Plakaten… Wow… Immer noch keine Spur? Seine Familie muss sich große Sorgen machen...",
                S2210_04: "Seine Jacke kommt mir bekannt vor… das ist doch die von Nobu und seiner Gang?",

                S2220_01: "War das nicht gerade Sumi? Was macht sie hier…",
                S2220_13: "Ich habe genug zugehört… ich sollte zurück auf mein Zimmer.",

                S2230_02: "Sumi? Dachte nicht, dass du wirklich kommst und mich tatsächlich besuchst…",
                S2230_04: "Freut mich! Mir geht es an sich ganz gut, aber fühle immer noch leichten Schmerz… aber habe etwas dagegen bekommen.",
                S2230_06: "Was meinst du? Wieso?",

                S2231_01: "Du hör zu… ich habe in den Nachrichten einen Jungen gesehen, welcher seit Wochen vermisst wird. Auf dem Foto hatte er dieselbe Jacke an wie Nobu und seine Gang. Kennst du den auch?",
                S2231_03: "Alles okay?",
                S2231_05: "Wow… bei deiner Reaktion kennst du ihn wohl sehr gut… tut mir leid, falls ich etwas Falsches gesagt habe…",
                S2231_07: "Darf ich fragen was passiert ist?",
                S2231_09: "Gerade weil ich eine fremde Person bin und nichts mit der Sache zu tun habe ist es vielleicht manchmal leichter darüber zu reden.",

                S2232_01: "Du hör zu… ich bin vorhin aus Langeweile durch das Krankenhaus spaziert und habe dich in ein Zimmer reinlaufen sehen. Ich bin dir hinterher, weil ich dich nochmal sehen wollte, habe aber dabei aus Versehen ein kleines Stück eines Gespräches mitgekriegt…",
                S2232_03: "Tut mir leid, ich wollte euch nicht belauschen… alles okay?",
                S2232_05: "Nicht viel, nur dass dein Bruder vermisst wird und die Frau schwerkrank ist?",
                S2232_07: "Wow… tut mir leid, falls ich etwas Falsches gesagt habe…",
                S2232_09: "Darf ich fragen was passiert ist?",
                S2232_11: "Gerade weil ich eine fremde Person bin und nichts mit der Sache zu tun habe ist es vielleicht manchmal leichter darüber zu reden.",

                S2240_02: "Ich weiß jetzt nicht, ob ich mich bedanken soll.",
                S2240_04: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2240_06: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",

                S2241_01: "Das ist viel zu gefährlich, du solltest das lieber alles sein lassen. Du hast keine richtigen Anhaltspunkte, das ist viel zu riskant. Wenn er wirklich was mit der Entführung deines Bruders zu tun hat, dann ist er gefährlich und du könntest die Nächste sein.",
            
                S2242_02: "Und jetzt ist auch dein Bruder weg, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
            
                S2243_01: "Ich schätze deinen Optimismus, aber ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2243_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2243_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2243_08: "Das klingt gut...",
                S2243_10: "...",
                S2243_13: "Bis morgen!"
            },
            Sumi: {
                S2200_01: "Da bist du ja endlich, hat ja lang genug gedauert…",
                S2200_03: "Wonach sieht es denn aus? Du bist im Krankenhaus natürlich.",
                S2200_05: "Ja Nobu hat dich ordentlich zusammengeschlagen, aber du wolltest ja nicht aufhören…",
                S2200_07: "Ja, lange Geschichte… jedenfalls hast du nochmal Glück gehabt… er hätte dich auch umbringen können.",
                S2200_09: "Jedenfalls hast du mich trotzdem irgendwie gerettet und deswegen hab ich gewartet bis du aufwachst…um mich zu bedanken… also danke.",
                S2200_11: "Also dann geh ich wieder… und halt dich in Zukunft lieber raus, wenn du weiterleben willst…",
                S2200_13: "In Ordnung, ich heiße Sumi…",
                //S2200_15: "Alles klar, PROTAGONIST. Ahja und noch eine Sache. Der Arzt war hier und sagte, dass du einige Tage hierbleiben musst. Du hast leichte Verletzungen, nichts Schwerwiegendes, musst dich aber schonen.",
                S2200_17: "Du kannst Fernsehen oder lern deine Zimmernachbarn kennen, mir egal. Ich muss aber jetzt gehen, hab noch etwas zu erledigen.",
                S2200_19: "Hör zu, halt dich lieber fern von mir, alles klar? Sonst kommst du wieder in solche Schwierigkeiten.",
                S2200_21: "Ich verspreche dir nichts... und jetzt ruh dich aus.",

                S2220_03: "Nein, Mom… leider nicht.",
                S2220_05: "Nicht ganz… ich wusste, dass er mit komischen Typen abhing… aber nicht, dass sie eine Gang waren.",
                S2220_07: "Mach dir keine Gedanken… in deinem Zustand solltest du dir keine Sorgen machen, das ist nicht gut für dich.",
                S2220_09: "Ich weiß doch… aber wenn sich dein Zustand noch verschlechtert… und ich dich auch noch verliere… dann bin ich allein.",
                S2220_11: "Ich vermisse ihn…",

                S2230_01: "Na du Superheld, wie geht es dir?",
                S2230_03: "Ach, ich war in der Nähe… dachte ich komm mal vorbei und schaue nach wie es dir geht. Immerhin hast du Schläge für mich kassiert, da kann ich ja auch mal vorbeischauen.",
                S2230_05: "Davon könnte ich auch etwas gebrauchen…",
                S2230_07: "Ach egal…",

                S2231_02: "…",
                S2231_04: "Ja nein, alles in Ordnung… ja ich kenne diesen Jungen aus den Nachrichten…",
                S2231_06: "Nein ist schon in Ordnung…",
                S2231_08: "Ich weiß nicht, ob ich hier einer ziemlich fremden Person private Geschichten erzählen sollte. Außerdem hat das alles sowieso nichts mit dir zu tun…",

                S2232_02: "…",
                S2232_04: "Ja nein, alles in Ordnung… was genau hast du denn mit angehört?",
                S2232_06: "Nicht viel…",
                S2232_08: "Nein ist schon in Ordnung…",
                S2232_10: "Ich weiß nicht, ob ich hier einer ziemlich fremden Person private Geschichten erzählen sollte. Außerdem hat das alles sowieso nichts mit dir zu tun…",

                S2240_01: "Wow, so wie du aussiehst hätte ich solchen weise Worte nicht erwartet.",
                S2240_03: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der dich zusammen-geschlagen hat, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2240_05: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine  Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl…",
                S2240_07: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",

                S2241_02: "Wer bist du? Ich treffe meine eigenen Entscheidungen… warum erzähl ich das eigentlich einer fremden Person? Ich sollte gehen und nicht meine Zeit mit einem Fremden verschwenden…",
            
                S2242_01: "Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2242_01b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als unsere Mutter schwerkrank wurde und ins Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2242_03: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
            
                S2243_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2243_04: "Trotzdem…",
                S2243_06: "Na gut…",
                S2243_07: "Es ist schon spät und ich muss noch wohin... ich komme dich morgen besuchen, dann können wir daran weiterarbeiten.",
                S2243_09: "...",
                S2243_11: "Alles okay? Warum siehst du mich so an?",
                S2243_12: "Ehm… danke… ich sollte aber jetzt gehen… bis morgen."
            },
            Yuko: {
                S2220_02: "Ich habe gerade die Nachrichten gesehen… es gibt immer noch keine Neuigkeiten von Shou?",
                S2220_04: "Wusstest du, dass er Mitglied einer Gang war?",
                S2220_06: "Ach Schatz… wann wird mein Sohn endlich zurückkehren?",
                S2220_08: "Wie soll ich mir keine Sorgen machen, wenn dein Bruder seit Wochen vermisst wird? Sumi, er ist mein Sohn… ich würde mir ja auch Sorgen machen, wenn du wochenlang verschwunden wärst.",
                S2220_10: "Schatz, egal was passiert… ich werde immer bei dir sein… und ich bin mir sicher, dass dein Bruder zurückkommt.",
                S2220_12: "Ich vermisse ihn auch…"
            },
            Reporter: {
                S2210_01: "… seit Wochen gibt es immer noch keine Hinweise zum Verschwinden von dem jungen Shou …",
                S2210_03: "… da dieser Junge Mitglied einer Gang ist, geht die Polizei davon aus, dass dieser in illegale Machenschaften reingezogen wurde …",
                S2210_05: "… demnach stellt sich die Frage, lebt dieser Junge überhaupt noch?"
            }
        };

        // Decisions
        let tvOrWalk;
        let talkOutOrHelp;
        let flirtOrNot;
        
        let tvOrWalkAnswer = {
            tv: "Fernseher schauen",
            walk: "Durch das Krankenhaus spazieren"
        };

        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?",
            help: "Hilfe anbieten"
        };

        let flirtOrNotAnswer = {
            flirt: "Du siehst sehr schön aus...",
            not: "Nichts..."
        };

        // Start
        ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.first_encounter, 0, 0, false);
        characters.nobu.name = "Nobu";
        characters.sumi.name = "Pinkes Mädchen";
        characters.yuko.name = "Sumis Mom";
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Location.show(sequences.wakeUp);
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_01);
        await ƒS.Location.show(sequences.wakeUp2);
        await ƒS.update(5);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_02);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
        await ƒS.Location.show(locations.protagonistHospitalRoom_day);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_03);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_04);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_05);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_06);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_07);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_08);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_09);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_10);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_11);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_12);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_13);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_14);
        characters.sumi.name = "Sumi";

        //Name Input
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        await ƒS.Speech.tell(characters.sumi, "Alles klar, " + characters.protagonist.name + ". Ahja und noch eine Sache. Der Arzt war hier und sagte, dass du einige Tage hierbleiben musst. Du hast leichte Verletzungen, nichts Schwerwiegendes, musst dich aber schonen.");
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_16);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_17);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_18);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_19);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_20);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2200_21);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2200_22);
        await ƒS.Character.hideAll();
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal_flipped, animate(animations.leftToLeftOut));
        await ƒS.Character.hideAll();
        await ƒS.update(1);

        tvOrWalk = await ƒS.Menu.getInput(tvOrWalkAnswer, "decisionClass");

        switch (tvOrWalk) {
            case tvOrWalkAnswer.tv:
                await ƒS.Location.show(sequences.newsReporter);
                await ƒS.update(1);
                await ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2210_02);
                await ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2210_04);
                await ƒS.Speech.tell("Nachrichtensprecher", text.Reporter.S2210_05);
                await ƒS.Speech.tell(characters.protagonist, "... irgendwie bin ich noch sehr müde... vielleicht sollte ich ein wenig schlaf...");
                await ƒS.Location.show(sequences.black);
                await ƒS.update(5);
                await ƒS.update(5);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_01);
                await ƒS.Location.show(locations.protagonistHospitalRoom_evening);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);

                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_05);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_07);

                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2231_01);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.sumiCrying);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2231_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2231_03);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2231_04);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2231_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2231_06);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2231_07);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2231_08);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2231_09);

                break;
            case tvOrWalkAnswer.walk:
                // Sequenz von verschiedenen Gängen und eine wo Sumi reinläuft. Checken ob hide dieses flackern beim update verursacht.
                await ƒS.Speech.hide();
                await ƒS.Location.show(locations.hospitalHallway2);
                await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
                await ƒS.Location.show(locations.hospitalHallway3);
                await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
                await ƒS.Location.show(sequences.sumiWalksIn);
                await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
                await ƒS.Location.show(locations.hospitalHallway);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2220_01);
                await ƒS.Location.show(sequences.yukoVisitNormal);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2220_03);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2220_05);
                await ƒS.Location.show(sequences.yukoVisitSad);
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2220_07);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2220_09);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_10);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2220_11);
                await ƒS.Speech.tell(characters.yuko, text.Yuko.S2220_12);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2220_13);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(5);
                await ƒS.update(5);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_01);
                await ƒS.Location.show(locations.protagonistHospitalRoom_evening);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_05);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2230_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2230_07);

                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_01);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.sumiCrying);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2232_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_03);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2232_04);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2232_06);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_07);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2232_08);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_09);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2232_10);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2232_11);

                break;
        }

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2240_01);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2240_02);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2240_03);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2240_04);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2240_05);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2240_06);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2240_07);
        talkOutOrHelp = await ƒS.Menu.getInput(talkOutOrHelpAnswer, "decisionClass");

        switch (talkOutOrHelp) {
            case talkOutOrHelpAnswer.talkOut:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2241_01);
                await ƒS.Location.show(sequences.sumiMadCryHospital);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2241_02);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(5);
                // Türknall Geräusche
                return await ending(1);
            case talkOutOrHelpAnswer.morePeople:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2242_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2242_01b);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2242_02);
                await ƒS.Location.show(sequences.sumiHappyCryHospital);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2242_03);
            case talkOutOrHelpAnswer.help:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_03);
                await ƒS.Location.show(sequences.sumiHappyCryHospital);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_04);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_06);
                await ƒS.Character.hideAll();
                await ƒS.Speech.hide();

                await ƒS.Location.show(sequences.planningEveningHospital);
                await ƒS.update(1);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(10);
                await ƒS.Location.show(sequences.planningNightHospital);
                await ƒS.update(1);
                await ƒS.Location.show(sequences.planningNight2Hospital);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_07);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_09);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_10);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_11);

                flirtOrNot = await ƒS.Menu.getInput(flirtOrNotAnswer, "decisionClass");

                await ƒS.Location.show(locations.protagonistHospitalRoom_night);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(1);

                switch (flirtOrNot) {
                    case flirtOrNotAnswer.not:
                        break;
                    case flirtOrNotAnswer.flirt:
                        dataForSave.romancePoints++;
                        await ƒS.Character.hideAll();
                        await ƒS.Character.show(characters.sumi, characters.sumi.pose.embarrassed_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                        await ƒS.update(1);
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2243_12);
                        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2243_13);
                        break;
                }
                ƒS.Speech.hide();
                await ƒS.Character.animate(characters.sumi, characters.sumi.pose.embarrassed_flipped, animate(animations.leftToLeftOut));
                ƒS.Character.hideAll();
                await ƒS.update(1);
                await ƒS.Location.show(sequences.theNextDay);
                await ƒS.update(3);
                return "protagonistHospitalHallway";
        }
        
        // Endings
        async function ending(endingNr: number): Promise<string> {
            switch (endingNr) {
                case 1:
                await ƒS.Speech.hide();
                await ƒS.Location.show(endings.partingWays);
                await ƒS.update(3);
                return "endOfNovel";
            }
            return "endOfNovel";
        }
    }
}