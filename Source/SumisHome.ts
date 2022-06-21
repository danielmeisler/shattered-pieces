namespace Endabgabe {
    export async function SumisHome(): ƒS.SceneReturn {
        console.log("FudgeStory SumisHome Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S2100_02: "Ach so bedankt man sich also? Was wäre denn mit dir passiert, wenn ich nicht eingegriffen hätte?",
                S2100_04: "Wow, da hat jemand aber eine gesunde Einstellung seine Probleme anzugehen.",
                S2100_06: "Stellt man sich eigentlich nicht zuerst vor? Egal, ich heiße: ",
                S2100_08: "Sumi, ein schöner Name. Was waren das eigentlich für Typen, die dich so bedrängt haben?",
                
                S2100_22: "Ach du kennst ihn? Ich dachte das wären einfach Schlägertypen, die dich abgefangen haben.",
                S2100_24: "Was ist passiert?",

                S2100_26: "Das ist dein Bruder? Das nicht mitzukriegen ist schon beinahe unmöglich…. Aber das tut mir sehr leid für dich.",
                S2100_28: "Aber was ist passiert?",

                S2110_01: "Tut mir leid, du hast natürlich Recht. Danke fürs Verarzten, dann gehe ich jetzt.",
                S2110_02: "Das sollte ich zu dir sagen. Aber ja, adé.",

                S2120_01: "Gerade weil ich ein Fremder bin und nichts mit der Sache zu tun habe ist es manchmal leichter darüber zu reden.",
                S2120_02: "Ich weiß jetzt nicht, ob ich mich bedanken soll.",
                S2120_04: "Wie kommst du darauf? Er war doch sein bester Freund.",
                S2120_06: "Lass mich raten… Deswegen gibst du dich mit ihm ab und spielst sein Spiel mit, um mehr herauszufinden?",
            
                S2121_01: "Das ist viel zu gefährlich, du solltest das lieber alles sein lassen. Du hast keine richtigen Anhaltspunkte, das ist viel zu riskant. Wenn er wirklich was mit der Entführung deines Bruders zu tun hat, dann ist er gefährlich und du könntest die Nächste sein.",
            
                S2122_02: "Und jetzt ist auch dein Bruder weg, du hast kein Geld und bist ganz allein. Wow, ich weiß nicht was ich sagen soll…",
            
                S2123_01: "Ich schätze deinen Optimismus, aber ohne einen Plan wirst du nichts erreichen. Du hast keine Anhaltspunkte, sondern jagst deinem Gefühl hinterher. Wir sollten erst einen Plan ausarbeiten und vorsichtig sein.",
                S2123_03: "Ich glaube nicht, dass wir noch fremde Personen sind, Sumi. Ich habe bereits mehr mit dir erlebt und weiß mehr von dir als von den meisten Menschen in meinem Umfeld. Aber das spielt keine Rolle, wenn jemand Hilfe braucht, sollte ihr geholfen werden.",
                S2123_05: "Jetzt erzähl mir lieber mehr über Nobu, damit wir uns einen Plan überlegen können.",
                S2123_07: "Es ist schon richtig spät, ich sollte nach Hause… Wir treffen uns einfach morgen nach der Schule und setzen unsere Planung fort.",
                S2123_09: "Wirklich? Nur wenn es dir nichts ausmacht, denn ich möchte wirklich nicht komplett durchnässt zu Hause ankommen.",
                S2123_11: "Das klingt super. Vielen Dank!",
                S2123_12: "Sumi? Wo bist du? Ah hier brennt Licht...",
                S2123_13: "AHH! TUT MIR LEID, TUT MIR LEID!",
                S2123_15: "Tut mir leid, das war nicht mit Absicht…",
                S2123_17: "..."
            },
            Sumi: {
                S2100_01: "Ich bin dir zwar dankbar, dass du mich gerettet hast…. Aber bist du irgendwie lebensmüde? Er hätte dich umbringen können.",
                S2100_03: "Das hätte dir ja egal sein können, ist ja meine Sache.",
                S2100_05: "Sag mir mal lieber, wie du heißt. Wenn du schon bei mir zuhause bist und ich dich verarzte, kann ich ja zumindest den Namen meines vermeintlichen „Retters“ erfahren.",
                //S2100_07: "Alles klar, " + characters.protagonist.name + ", danke nochmal für deine Hilfe. Ich heiße Sumi.",
                S2100_09: "Ehhhh, das ist kompliziert… und geht dich eigentlich auch nichts an…",
                S2100_11: "Das ist mir so egal, du hast über meinen Bruder hergezogen und ihn beleidigt.",
                S2100_13: "Verdiente Strafe? Ich weiß, dass zwischen ihm und dir was vorgefallen ist. Aber egal was es war, du hast keinen Recht so über ihn zu reden, nachdem er immer für dich da war.",
                S2100_15: "DU hast dich verändert, nicht er!",
                S2100_17: "JETZT VERZIEH DICH!",
                S2100_19: "Tut mir leid, dass du das Mitanhören musstest… komm ich verarzte dich fertig, dann kannst du nach Hause. Willst du so lange etwas zum Trinken haben?",
                S2100_20: "Alles klar.",
                
                S2100_21: "Das war eben der Typ, der dich so übel zugerichtet hat.",
                S2100_23: "Nein, Nobu kenn ich schon sehr lange… Er war der beste Freund meines Bruders. Jedoch ist er nicht mehr derselbe Mensch.",
                
                S2100_25: "Ja, vielleicht hast du es schon gesehen… überall in den Nachrichten wird von ihm berichtet und in der Stadt hängen überall Plakate.",
                S2100_27: "Schon in Ordnung.",

                S2100_29: "Hör zu, ich weiß nicht, ob ich einer fremden Person hier private Geschichten erzählen sollte. Ich bin gleich fertig, dann können sich unsere Wege wieder trennen.",

                S2110_01: "Ich bin fertig, danke nochmal. Pass auf dich auf und renn nicht wieder in solche Situationen rein, wenn du nicht draufgehen willst. Tschüss.",
                
                S2120_01: "Wow, so wie du aussiehst hätte ich solchen weise Worte nicht erwartet.",
                S2120_03: "Na gut, wenn du schon darauf bestehst. Jetzt gibt es keinen Rückzieher mehr. Mein Bruder Shou ist, oder eher war, der Anführer dieser kleinen Möchtegern Gang…. Er war ein herzensguter Mensch und stark, alle haben ihm vertraut und waren stolz ihm zu folgen. Auch wenn manche seiner Geschäfte nicht gerade die Saubersten waren, er hat nie jemanden Unschuldigen verletzt. Nobu, der Typ, der eben hier war, war sein Vize und bester Freund. Doch irgendwas ist zwischen ihnen passiert und Nobu hat sich zum Schlimmsten entwickelt. Irgendwann ist mein Bruder verschwunden und ich wette Nobu hat damit zu tun.",
                S2120_05: "Ja, aber am letzten Abend, an dem ich meinen Bruder sah, ist er zu einem Gang-Treffen aufgebrochen und laut Nobu nie dort angekommen. Seitdem macht er sich auch so ekelhaft an mich ran. Er ist der Meinung, dass als sein bester Freund es jetzt seine Aufgabe ist mich zu beschützen. Und da er der Vize ist wurde er natürlich zum Anführer und strukturiert die Gang um… alle Prinzipien und Grenzen, die mein Bruder aufgestellt hat, ignoriert er komplett. Es scheint alles perfekt für ihn zu laufen, seitdem Shou weg ist…. Ich habe das im Gefühl...",
                S2120_07: "Wow, ich bin beeindruckt… du kapierst schnell. Aber was bleibt mir übrig. Ich kann nicht noch mehr Menschen in meinem Leben verlieren. Das ist das Einzige was mir noch einfällt, ich bin in einer Sackgasse und weiß nicht weiter.",
            
                S2121_02: "Wer bist du? Ich treffe meine eigenen Entscheidungen… warum erzähl ich das eigentlich einer fremden Person? Du solltest gehen und mich in Ruhe mein Ding machen lassen.",
            
                S2122_01: "Vor sehr vielen Jahren ist mein kleiner Bruder Fuun bei einem Unfall gestorben, das hat meine Eltern innerlich zerrissen. Sie haben sich nur noch gestritten und sich gegenseitig die Schuld in die Schuhe geschoben. Das war für Shou und mich auch keine leichte Zeit. Gerade da als wir unsere Eltern am meisten brauchten waren Sie nicht da für uns. Aber wer kann es ihnen verübeln… sie konnten es selbst nicht verarbeiten.",
                S2122_01b: "Jedenfalls hat Shou angefangen mit zwielichtigen Leuten abzuhängen. Als dann unser Vater uns verlassen hat, da er das alles nicht ausgehalten hat, sah sich Shou als Mann im Haus… Und als unsere Mutter schwerkrank wurde und ins Krankenhaus kam gründete er die Gang, um an Geld zu kommen, damit wir uns über Wasser halten und die Krankenhaus Rechnungen meiner Mutter bezahlen können.",
                S2122_03: "Ich brauch kein Mitleid… meine Mutter wird wieder gesund, mein Vater wird zurückkommen und meinen Bruder werde ich finden. Auch wenn meine Familie wie eine Vase zerbrochen ist und ohne meinen kleinen Bruder ein Teil fehlt… sie kann wieder zusammengeklebt werden, auch wenn die Risse bleiben werden.",
            
                S2123_02: "Wir? Warum sollte eine fremde Person mir helfen wollen? Außerdem schaffe ich das auch allein.",
                S2123_04: "Trotzdem…",
                S2123_06: "Na gut…",
                S2123_08: "Es ist zu spät und es regnet stark. Ich bin sowieso allein und erwarte niemanden. Du kannst hier übernachten.",
                S2123_10: "Ja das passt schon. Ich lass dir ein Bad ein und bringe dir Klamotten zum Wechseln, du wirst ja wahrscheinlich keine dabeihaben.",
                S2123_14: "ICH HABE VERGESSEN ABZUSCHLIESSEN, DA ICH SONST IMMER ALLEIN BIN, SCHLIESSE ICH NIE AB…. SCHLIESS WENIGSTENS DEINE AUGEN!",
                S2123_16: "Nicht so schlimm, war ja nicht deine Schuld…",
                S2123_18: "Ich bin fertig, du kannst sie wieder aufmachen...",
                
                S2123_19: "Ich weiß nicht, ob das der richtige Zeitpunkt ist sowas zu sagen, nachdem du mich halbnackt gesehen hast… aber danke…"
            },
          Nobu: {
                S2100_10: "Du glaubst wohl nicht, dass du einfach so verschwinden kannst? Nachdem du mich so vor meinen Jungs blamiert hast, musste ich ein Zeichen setzen, dass niemand mit ihrem Anführer so umgeht, auch du nicht.",
                S2100_12: "Es tut mir leid, dass Shou immer noch vermisst wird, Sumi… Aber seien wir ganz ehrlich. Dein Bruder hat schon immer seine Nase reingesteckt, wohin er nicht sollte, wahrscheinlich hat er sich mit den falschen Leuten angelegt und hat seine verdiente Strafe bezahlt.",
                S2100_14: "Kann ja sein, dass wir mal beste Freunde waren, jedoch hat er sich geändert.",
                S2100_16: "Immer heulst du wegen deinem Bruder rum, hast du auch ein anderes Band zum Abspielen?",
                S2100_18: "Na gut, heute ist viel passiert. Aber glaub nicht, dass du das nächste Mal so leicht davonkommst."
            }
        };

        // Decisions
        let juiceOrNot;
        let nobuOrShou;
        let goOrTalk;
        let talkOutOrHelp;
        let flirtOrSleep;
        
        let juiceOrNotAnswer = {
            juice: "Ich hätte gern Saft!",
            nothing: "Ich brauche nichts, danke."
        };

        let nobuOrShouAnswer = {
            nobu: "Wer war das?",
            shou: "Dein Bruder wird vermisst?"
        };

        let goOrTalkAnswer = {
            go: "Tut mir leid, ich werde gehen.",
            talk: "Lass es raus, du kannst mir vertrauen."
        };

        let talkOutOrHelpAnswer = {
            talkOut: "Ausreden",
            morePeople: "Noch mehr Menschen?",
            help: "Hilfe anbieten"
        };

        let flirtOrSleepAnswer = {
            flirt: "Du siehst sehr schön aus...",
            sleep: "Wir sollten schlafen gehen..."
        };

        // Start
        ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.first_encounter, 0, 0, false);
        characters.nobu.name = "???";
        characters.sumi.name = "Pinkes Mädchen";
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Location.show(locations.sumisHome_livingRoom_evening);
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_01);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_02);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_03);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_04);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_05);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_06);

        //Name Input
        let name: string = await ƒS.Speech.getInput();
        dataForSave.nameProtagonist = name;
        characters.protagonist.name = name;

        if (dataForSave.nameProtagonist == "ecchi") {
            await ƒS.Inventory.add(items.glasses);
            await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
        }

        await ƒS.Speech.tell(characters.sumi, "Alles klar, " + characters.protagonist.name + ", danke nochmal für deine Hilfe. Ich heiße Sumi.");
        characters.sumi.name = "Sumi";
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_08);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_09);
        ƒS.Speech.hide();
        await ƒS.Character.hide(characters.sumi);
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.midToLeftOut));
        await ƒS.Character.hide(characters.sumi);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S2100_10);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_11);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S2100_12);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_13);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S2100_14);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_15);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S2100_16);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_17);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S2100_18);
        ƒS.Speech.hide();
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal_flipped, animate(animations.leftOutToMid));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_19);
        juiceOrNot = await ƒS.Menu.getInput(juiceOrNotAnswer, "decisionClass");

        switch (juiceOrNot) {
            case juiceOrNotAnswer.juice:
                await ƒS.Inventory.add(items.juice);
                await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
                break;
            case juiceOrNotAnswer.nothing:
                break;
        }

        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_20);
        await ƒS.Character.hide(characters.sumi);
        await ƒS.update(1);
        await ƒS.Location.show(sequences.sumiFirstAid);
        await ƒS.update(1);
        nobuOrShou = await ƒS.Menu.getInput(nobuOrShouAnswer, "decisionClass");

        switch (nobuOrShou) {
            case nobuOrShouAnswer.nobu:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_21);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_22);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_23);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_24);
                break;
            case nobuOrShouAnswer.shou:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_25);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_26);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_27);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2100_28);
                break;
        }
        characters.nobu.name = "Nobu";
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2100_29);
        goOrTalk = await ƒS.Menu.getInput(goOrTalkAnswer, "decisionClass");

        switch (goOrTalk) {
            case goOrTalkAnswer.go:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2110_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2110_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2110_02);
                await ƒS.Location.show(sequences.youLeave);
                await ƒS.update(3);
                return await ending(1);
            case goOrTalkAnswer.talk:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2120_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2120_01);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2120_02);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2120_03);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2120_04);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2120_05);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2120_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2120_07);
                talkOutOrHelp = await ƒS.Menu.getInput(talkOutOrHelpAnswer, "decisionClass");
        }

        switch (talkOutOrHelp) {
            case talkOutOrHelpAnswer.talkOut:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2121_01);
                await ƒS.Location.show(sequences.sumiMadCry);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2121_02);
                await ƒS.Location.show(sequences.sumiKicksYouOut);
                await ƒS.update(3);
                return await ending(2);
            case talkOutOrHelpAnswer.morePeople:
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2122_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2122_01b);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2122_02);
                await ƒS.Location.show(sequences.sumiHappyCry);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2122_03);
            case talkOutOrHelpAnswer.help:
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_01);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_03);
                await ƒS.Location.show(sequences.sumiHappyCry);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_04);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_06);
                await ƒS.Inventory.add(items.documentsShou);
                await ƒS.Speech.tell("", "Dem Inventar wurden neue Gegenstände hinzugefügt.");
                await ƒS.Speech.hide();
                await ƒS.Location.show(sequences.planningEvening);
                await ƒS.update(1);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(10);
                await ƒS.Location.show(sequences.planningNight);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_07);
                await ƒS.Location.show(locations.sumisHome_livingRoom_night);
                await ƒS.update(1);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, ƒS.positions.bottomcenter);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_08);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_09);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_10);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_11);
                await ƒS.Character.hide(characters.sumi);
                await ƒS.update(1);
                ƒS.Speech.hide();
                await ƒS.Location.show(locations.sumisHome_bathRoom_normal);
                await ƒS.update(2);
                await ƒS.Location.show(locations.sumisHome_bathRoom_foggy);
                await ƒS.update(5);
                await ƒS.Location.show(locations.sumisHome_hallway);
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_12);
                if (dataForSave.nameProtagonist == "ecchi") {
                    await ƒS.Location.show(sequences.sumiUndress);
                    await ƒS.update(1);
                    await ƒS.Location.show(sequences.sumiUndress2);
                    await ƒS.update(1);
                } else {
                    await ƒS.Location.show(sequences.sumiUndressHarmless);
                    await ƒS.update(1);
                }
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_13);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_14);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_15);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_16);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S2123_17);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_18);
                await ƒS.Location.show(locations.sumisHome_futonroom);
                await ƒS.update(1);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.embarrassed, ƒS.positions.bottomcenter);
                await ƒS.update(1);
                
                flirtOrSleep = await ƒS.Menu.getInput(flirtOrSleepAnswer, "decisionClass");
                switch (flirtOrSleep) {
                    case flirtOrSleepAnswer.sleep:
                        break;
                    case flirtOrSleepAnswer.flirt:
                        dataForSave.romancePoints++;
                        await ƒS.Speech.tell(characters.sumi, text.Sumi.S2123_19);
                        break;
                }
                ƒS.Speech.hide();
                ƒS.Character.hide(characters.sumi);
                await ƒS.update(1);
                await ƒS.Location.show(sequences.theNextDay);
                await ƒS.update(3);
                return "sumisHouse";
        }
    }

    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
              await ƒS.Speech.hide();
              await ƒS.Location.show(endings.partingWays);
              await ƒS.update(3);
              return "endOfNovel";
            case 2:
              await ƒS.Speech.hide();
              await ƒS.Location.show(endings.partingWays);
              await ƒS.update(3);
              return "endOfNovel";
        }
        return "endOfNovel";
      }
}