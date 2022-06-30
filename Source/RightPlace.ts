namespace Endabgabe {
    export async function RightPlace(): ƒS.SceneReturn {
        console.log("FudgeStory RightPlace Scene starting");
        let menu = ƒS.Menu.create(menuItems, menuButtons, "menu");
        menu.open();

        // Speeches
        let text = {
            Protagonist: {
                S4120_03: "Sumi, geht es dir gut? Bist du verletzt?",
                S4120_05: "Es war also eine Falle?",
                S4120_07: "Sumi, dein Bruder ist da drin… wir haben ihn gefunden.",
                S4120_09: "Warum hast du ihren Bruder entführt Nobu?",
                S4120_11: "Und da dachtest du einfach ihn zu entführen, anstatt mit ihm zu reden?",
                S4120_13: "Aber, dass er eine Schwester hat, hat er dir einfach so erzählt?",
                S4120_15: "Also war das am Ende ein Racheakt, weil er dich nicht seine Schwester lieben ließ? Du bist krank!",
                S4120_17: "Also was, ihr habt einen Putsch geplant um ihn als euren Anführer abzulösen?",
                S4120_19: "Du warst sein bester Freund, natürlich erwartet er nicht das Schlimmste.",
                S4120_22: "Sumi, geh deinen Bruder befreien!",
                S4120_25: "Keine Sorge, ich halte ihn auf. Er ist diesmal allein, es ist fairer als sonst mit seinem Schlägertrupp, ich schaff das, vertrau mir! Lauf los!",
                S4120_27: "Wir beenden es so wie es begonnen hat!",
                S4120_29: "Wir werden sehen, wie stark du ohne deine Männer wirklich bist.",

                S41211_02: "Nein… es ist noch nicht vorbei!",
                S41211_08: "Geht es dir gut?",
                S41211_10: "Es tut mir leid, Shou ist meinetwegen tot.",

                S41211_15: "Vielleicht.",

                S41211_18: "Es ist nicht fair, dass dein ganzes Leben voller Unglück gejagt wird. Mach es dir nicht kaputt, indem du weggesperrt wirst. Starte ein neues Leben… einen Neuanfang. Vielleicht nicht allein?",
                
                S41212_02: "Nein… es ist noch nicht vorbei!",

                S41212_12: "Wir sollten die Polizei rufen, immerhin wirst du vermisst.",
                S41212_21: "Haha... Aber ihr seid ja rechtzeitig gekommen…",
                S41212_23: "Lebe ein glückliches Leben, mehr will ich nicht.",

                S41221_01: "Das Spiel ist aus, Nobu. Du hast verloren!",
                S41221_03: "Vielleicht bist du ohne deine Handlanger doch nicht so ein großer Kämpfer.",
                S41221_05: "Was?",
                S41221_08: "Er ist es nicht wert, Sumi. Werde nicht auch zum Mörder wie er.",
                S41221_10: "Ich rufe die Polizei und lass sie den Fall aufklären.",
                S41221_11: "Geht es dir gut?",
                S41221_13: "Es tut mir leid, Shou ist meinetwegen tot.",
                S41221_15: "Was machst du jetzt?",

                S41221_17: "Ist in deinem Leben auch Platz für mich?",
                S41221_19: "Beantwortet das deine Frage?",
                S41221_20: "Wenn du dich je einsam fühlst, du kannst gerne immer zu mir kommen.",

                S41222_01: "Das Spiel ist aus, Nobu. Du hast verloren!",
                S41222_03: "Vielleicht bist du ohne deine Handlanger doch nicht so ein großer Kämpfer.",
                S41222_23: "Aua, das fehlende Vertrauen tut ja mehr weh als Nobus Schläge.",
                S41222_25: "Ist ja aber noch alles gut gelaufen… deinen Bruder haben wir gefunden.",
                S41222_27: "Lebe ein glückliches Leben, mehr will ich nicht."
            },
            Sumi: {
                S4120_02: "Mhhh!",
                S4120_04: "MHHHHHHHH!",
                S4120_08: "Mhh?!",
                S4120_23: "Aber was ist mit dir?",

                S41211_04: "DU HAST MEINEN BRUDER ERMORDET?!?",
                S41211_06: "Wie konntest du nur... Shou...",
                S41211_09: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41211_11: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41211_12: "Was mache ich jetzt? Ich habe Nobu getötet… ich bin kein Stück besser als er…",
                S41211_13: "Wie dem auch sei, ich sollte mich stellen.",

                S41211_14: "Ich danke dir für alles… vielleicht kann ich jetzt damit abschließen…",
                S41211_16: "Hier draußen haben wir Netz, ich rufe die Polizei… verschwinde von hier, du hast damit nichts zu tun… geh dein Leben weiterleben… vielleicht sieht man sich wieder…",

                S41211_17: "Aber... wieso nicht?",
                S41211_19: "Das klingt schön… vielleicht sollte ich das wirklich tun…",
                
                S41212_14: "Das ist " + dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + dataForSave.nameProtagonist + "plötzlich auf und rettete mich. Der gesamte Plan stammte von " + dataForSave.nameProtagonist,
                S41212_16: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41212_18: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41212_20: "Von Nobu zusammengeschlagen zu werden scheint wohl dein Ding zu sein… aber ich hab dir vertraut und du dein Wort gehalten.",
                S41212_22: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…",

                S41221_04: "ER HAT IHN UMGEBRACHT… Shou ist tot…",
                S41221_07: "DU MONSTER!",
                S41221_09: "Du hast recht… das wäre ein zu einfacher Ausweg für ihn… er soll im Gefängnis verrotten…",
                S41221_12: "Ja… ich habe mich ja bereits innerlich für diesen Fall schon vorbereitet… nur als ich seine Leiche gesehen habe… darauf kann man sich nicht vorbereiten… aber es geht wieder.",
                S41221_14: "Sag das nicht, das Monster hätte ihn jederzeit ermordet, wenn es ihm zu eng geworden wäre… es ist nicht deine Schuld. Du hast dein Versprechen gehalten und ihn gefunden, dafür bin ich dir dankbar.",
                S41221_16: "Ich kann endlich mit der Sache abschließen und mein Leben weiterleben schätze ich.",
                S41221_18: "Die Frage ist eher, ob du so einen kaputten Menschen wie mich überhaupt noch sehen willst… ich habe dir nur Probleme bereitet.",
                S41221_21: "Danke, wirklich… danke für Alles.",

                S41222_14: "Wir sollten die Polizei holen, immerhin wirst du vermisst Shou.",
                S41222_16: "Das ist " + dataForSave.nameProtagonist + ". Als Nobu und einige seiner Leute mit bedrängt haben und sich an mir vergehen wollten, tauchte " + dataForSave.nameProtagonist + "plötzlich auf und rettete mich. Der gesamte Plan stammte von " + dataForSave.nameProtagonist,
                S41222_18: "Ich bin so froh, dass wir dich noch rechtzeitig gefunden haben...",
                S41222_20: "Keine Veränderungen, sie liegt immer noch schwerkrank im Krankenhaus…",
                S41222_22: "Hätte nicht gedacht, dass du Nobu schlagen könntest.",
                S41222_24: "Haha, tut mir leid.",
                S41222_26: "Ja, das stimmt wohl… Aber ich wollte mich nochmal bedanken… Hättest du dich damals in der Gasse nicht eingemischt, hätte ich meinen Bruder wahrscheinlich nie wieder gesehen. Ich weiß nicht, wie ich das je zurückgeben soll…"
            },
            Nobu: {
                S4120_01: "Na, hast du gut geschlafen? Wer hätte gedacht, dass du mir wirklich hinterherschnüffeln würdest. Dass Sumi plötzlich nett ist und sogar zum Gang-Treffen kommt, kam mir sofort falsch vor.",
                S4120_01b: "... oder findest du nicht, Sumi?",
                S4120_06: "Und ihr seid voll reingetappt… schon schade… ",
                S4120_10: "Du willst es wirklich vor deinem Tod noch wissen? Na schön, ich erzähl es dir, weil du ihn gefunden hast… als letzte Belohnung. Shou wollte mit der Gang immer nur das Mindeste, keine Ambitionen. Wir hatten Potenzial einer der gefürchtetsten Banden zu werden und als wir einen richtig dicken Fisch an der Angel hatten hat Shou alles abgebrochen, da seine Prinzipien ihm im Weg standen. Er ist weich und schwach!",
                S4120_12: "Wenn du nur wüsstest, wie oft ich das versucht habe. Doch das ist noch nicht alles. Shou hat immer sein Leben vor allen geheim gehalten. Wir wussten gar nichts über ihn, denn er war der Meinung, dass es nicht nötig ist. Aber wie willst du jemandem Folgen und dein Leben riskieren, wenn du nicht weißt, was er verbirgt? Wir waren so lange Freunde und ich wusste nichts über ihn, außer dass er eine Schwester hat.",
                S4120_14: "Natürlich nicht, ich habe das lange vor all den Problemen von allein rausgefunden. Zuerst war er auch sehr sauer, aber da wir schon fast wie Brüder waren, nahm er es mir am Ende doch nicht übel, solange ich es geheim halten würde. Aber als ich Sumi zum ersten Mal gesehen habe, habe ich mich sofort Kopf über in sie verliebt. Doch Shou wollte sie beschützen und aus all dem hier raushalten… und lies mich nicht an sie ran.",
                S4120_16: "Es war eine Mischung aus allen, irgendwann platzte mir der Kragen. Seine Regeln nahmen mir alles und ich konfrontierte ihn mit damit… doch es endete in einem riesigen Streit, da er nichts ändern wollte. Ich wollte ihn loswerden, da somit auch all meine Probleme verschwinden würden… also überlegt ich mir etwas. Ich verbündete mich mit den Gang-Mitgliedern, die derselben Meinung waren, dass die Gang ihr Potenzial nicht ausschöpfen würde.",
                S4120_18: "Er hätte niemals die Führung freiwillig abgegeben… also lockte ich ihn mit dem Vorwand mich entschuldigen zu wollen zu einem Treffen. Normal ist er sehr vorsichtig und wachsam, doch er ist zu weich, weswegen er nicht erwartet hatte, aus seinen eigenen Reihen verraten zu werden. Schon fast traurig…und schwach.",
                S4120_20: "Beweist nur, dass ich Recht habe…",
                S4120_21: "Ich hab euch nicht durchsucht... wie dumm von mir...",
                S4120_24: "Glaubst du wirklich ich lass dich gehen?",
                S4120_26: "Du willst ein Eins gegen Eins? Gegen mich? Hahahaha, na los!",
                S4120_28: "Das Einzige was ich beende ist dein Leben, du Wicht! Ha! Endlich kann ich dich erledigen, du warst mir schon seit der ersten Minute ein Dorn im Auge.",
                S4120_30: "Nicht reden, zeig mir was du draufhast! Hahaha!",

                S41211_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder?",
                S41211_01b: "Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
                S41211_03: "... was? ... wer? ... ?",
                S41211_05: "Ich musste… beim letzten Gespräch hat die kleine Ratte zu viele Fragen gestellt… ich wurde nervös, also musste ich Shou töten, bevor ihr ihn findet… nur habe ich es nicht rechtzeitig geschafft seine Leiche wegzuschaffen… ich habe nicht erwartet, dass ihr so schnell seid… ahhh",
                S41211_07: "Es war auch für mich nicht leicht, ich musste es tun…",

                S41212_01: "Das wars! Du hast echt nicht gedacht, dass du gegen mich gewinnen kannst, oder?",
                S41212_01b: "Hahaha… verabschiede dich schon einmal von deinem Leben, du Wicht!",
                S41212_04: "Shou?!",
                S41212_06: "Was soll ich mit einem Bruder, der mir Steine in den Weg legt?",
                S41212_08: "Ich habe versucht mit dir zu reden, aber du warst ignorant.",
                S41212_10: "Reden bringt auch nichts mehr, bringen wir es hinter uns… ein für Alle mal.",

                S41221_02: "Das kann nicht sein, so eine kleine Ratte wie du kann mich nicht besiegen.",
                S41221_06: "Ich musste es tun… ihr wart mir auf die Schliche gekommen… beim letzten Gespräch hat die kleine Ratte zu viele Fragen gestellt… ich wurde nervös, also musste ich Shou töten, bevor ihr ihn findet… nur habe ich es nicht rechtzeitig geschafft seine Leiche wegzuschaffen… ich habe nicht erwartet, dass ihr so schnell seid… ahhh", 

                S41222_02: "Das kann nicht sein, so eine kleine Ratte wie du kann mich nicht besiegen.",
                S41222_05: "Shou?!",
                S41222_07: "Was soll ich mit einem Bruder, der mir Steine in den Weg legt?",
                S41222_09: "Ich habe versucht mit dir zu reden, aber du warst ignorant.",
                S41222_11: "Reden bringt auch nichts mehr, meine kurze Ära ist wohl vorbei.",
                S41222_13: "..."
            },
            Shou: {
                S41212_03: "Nobu, Nobu, Nobu…",
                S41212_05: "Ich habe dir vertraut… du warst wie ein Bruder für mich…",
                S41212_07: "Weil ich dich davon abhalte Fehler zu begehen und meine Schwester von all diesen illegalen Machenschaften raushalten möchte, lege ich dir Steine in den Weg?",
                S41212_09: "Und deswegen hintergehst du mich und entführst mich wochenlang?",
                S41212_11: "Und wieder mal siehst du nichts als Gewalt als Lösung…",
                S41212_13: "Das klingt nach einem Plan… Wir hatten das Vergnügen noch nicht… ich nehme an du weißt wer ich bin, aber ich weiß nicht wer du bist.",
                S41212_15: "Du bist also mein Retter? Danke dafür… ich habe eigentlich nur noch auf meinen Tod gewartet…",
                S41212_17: "Wie geht es unserer Mutter?",
                S41212_19: "Hauptsache sie ist noch am Leben… Aber das bereden wir, sobald wir zuhause sind. Ich trag Nobu schon einmal raus und warte auf die Polizei… Du solltest vielleicht " + dataForSave.nameProtagonist + " verarzten… hat gut was abbekommen…",

                S41222_04: "Wow, du hast Nobu besiegt? So jemanden wie dich könnte ich in meiner Gang gebrauchen! Haha!",
                S41222_06: "Nobu, ich habe dir vertraut… du warst wie ein Bruder für mich…",
                S41222_08: "Weil ich dich davon abhalte Fehler zu begehen und meine Schwester von all diesen illegalen Machenschaften raushalten möchte, lege ich dir Steine in den Weg?",
                S41222_10: "Und deswegen hintergehst du mich und entführst mich wochenlang?",
                S41222_12: "...",
                S41222_15: "Das klingt nach einem Plan… Wir hatten das Vergnügen noch nicht… ich nehme an du weißt wer ich bin, aber ich weiß nicht wer du bist.",
                S41222_17: "Du bist also mein Retter? Danke dafür… ich habe eigentlich nur noch auf meinen Tod gewartet…",
                S41222_19: "Wie geht es unserer Mutter?",
                S41222_21: "Hauptsache sie ist noch am Leben… Aber das bereden wir, sobald wir zuhause sind. Ich trag Nobu schon einmal raus und warte auf die Polizei… Du solltest vielleicht " + dataForSave.nameProtagonist + " verarzten… hat gut was abbekommen…"
            }
        };

        // Decisions
        //let isSumiBetter;
        let sumiTurnIn;

        let isSumiBetterAnswer = {
            yes: "Doch bist du.",
            selfDefense: "Es war Notwehr.",
            youSavedMe: "Du hast mich gerettet.",
            heDeservedIt: "Er hat es verdient."
        };

        let sumiTurnInAnswer = {
            yes: "Ja, das wäre wohl besser...",
            no: "Nein, lieber nicht..."
        };

        // Start
        ƒS.Speech.hide();
        characters.protagonist.name = dataForSave.nameProtagonist;
        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.fade.duration, transitions.fade.alpha, transitions.fade.edge);
        await ƒS.Location.show(locations.storageHall);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.storageHallEntrance);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.storageHallHallway);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Location.show(locations.storageHallShou);
        await ƒS.update(transitions.swipe.duration, transitions.swipe.alpha, transitions.swipe.edge);
        await ƒS.Speech.tell(characters.protagonist, "Das muss Shou sein?! Schnell ich muss ihn befrei...");
        await ƒS.Speech.hide();
        // Sound von Hinten Schlag auf den Kopf.

        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
        await ƒS.update(10);

        await ƒS.Location.show(sequences.storageHallWakeUp);
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
        await ƒS.Location.show(sequences.storageHallWakeUp2);
        await ƒS.update(5);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_01);

        await ƒS.Location.show(sequences.black);
        await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);

        await ƒS.Location.show(locations.storageHallFightFull);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);

        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_01b);
        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.sumiTiedUpComing);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4120_02);
        await ƒS.update(5);

        await ƒS.Location.show(locations.storageHallFightFuller);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_03);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4120_04);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_05);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_06);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_07);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4120_08);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_09);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_10);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_11);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_12);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_13);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_14);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_15);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_16);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_17);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_18);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_19);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_20);

        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.black);
        await ƒS.update(0.1);
        await ƒS.Speech.tell(characters.nobu, "Was passiert hier? Warum ist es plötzlich dunkel?!");
        await ƒS.Speech.tell("Schläger", "Ahhh");
        await ƒS.Speech.tell("Prolet", "Auaaa");

        await ƒS.Location.show(locations.storageHallFightFullest);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.normal, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, "Was ist mit euch? Warum...?!?");
        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.sumiThreatsNobu);
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_21);
        await ƒS.Speech.tell(characters.nobu, "Aber wie konntest du meine Leute besiegen? Du alleine?");
        await ƒS.Speech.tell(characters.sumi, "Ich dachte du hast uns durchschaut?");
        await ƒS.Speech.tell(characters.nobu, "...");
        await ƒS.Speech.tell(characters.nobu, "Nein! Oder?!");
        await ƒS.Speech.tell(characters.sumi, "Oh doch... einfacher ging es nicht...");
        await ƒS.Speech.tell(characters.nobu, "Es kam mir von Anfang an komisch vor, dass du uns Alkohol mitbringst... was war da drin?");
        await ƒS.Speech.tell(characters.protagonist, "Wir haben Tabletten besorgt, die euch schwächen und euch übel wird... damit wollten wir euch von vorne rein schwächen, falls es zum Kampf kommt.");
        await ƒS.Speech.tell(characters.sumi, "Und so dumm wie deine Gorillas sind haben sie sich draufgeworfen und alles leer gesoffen... außer du.");
        await ƒS.Speech.tell(characters.nobu, "Ja... ich war so misstrauisch, dass du etwas ausgeheckt haben könntest, dass ich mich nicht besaufen wollte und meine Sinne betäuben... das wäre eine zu große Angriffsfläche gewesen. Aber das etwas in den Getränken drin war? Da hatte ich wohl Glück im Unglück.");
        await ƒS.Speech.tell(characters.sumi, "Egal, " + dataForSave.nameProtagonist + " befrei dich und wir können das hier beenden.");

        items.knife.static = false;
        await ƒS.Inventory.add(items.knife);
        await ƒS.Speech.tell(characters.protagonist, "Ich sollte in meine Tasche greifen...");

        while (ƒS.Inventory.getAmount(items.knife) != 0) {
            await ƒS.update(1);
        }

        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.grabKnife);
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.nobu, "Ah");
        await ƒS.Speech.tell(characters.sumi, "Was?!");
        await ƒS.Speech.tell(characters.nobu, "Hahaha!");
        // sounds fallendes knife, schmerz, blut? 

        await ƒS.Location.show(locations.storageHallFightFullest);
        await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, new ƒS.Position(480, ƒS.positions.bottomcenter.y));
        await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal_flipped, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
        await ƒS.update(1);
        
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_22);
        await ƒS.Speech.tell(characters.sumi, text.Sumi.S4120_23);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_24);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_25);
        await ƒS.Character.hide(characters.sumi);
        await ƒS.Character.animate(characters.sumi, characters.sumi.pose.normal, animate(animations.leftToLeftOut));
        await ƒS.Character.hideAll();
        await ƒS.Location.show(sequences.letsFight);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_26);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_27);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_28);
        await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S4120_29);
        await ƒS.Speech.tell(characters.nobu, text.Nobu.S4120_30);
        await ƒS.Location.show(sequences.black);
        await ƒS.update(3);

        if (dataForSave.protagonistHurt == true) {
            if (dataForSave.nobuKnowsBrother == false) {
                //Sounds vom Kampf
                await ƒS.Location.show(sequences.fightUnconscious);
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_01);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41212_02);
                await ƒS.Location.show(locations.storageHallFight);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_01b);
                await ƒS.Speech.hide();
                //Sounds?
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.grabbed, ƒS.positions.bottomcenter);
                await ƒS.update(2);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.shouHitsNobu);
                await ƒS.update(3);
                //Sounds
                await ƒS.Location.show(sequences.black);
                await ƒS.update(2);

                await ƒS.Location.show(locations.storageHallFightFullest);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.normal, new ƒS.Position(480, ƒS.positions.bottomcenter.y));
                await ƒS.Character.show(characters.shou, characters.shou.pose.normal, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(1);

                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_03);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_04);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_05);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_06);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_07);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_08);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_09);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41212_10);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_11);

                ƒS.Character.animate(characters.nobu, characters.nobu.pose.normal, animate(animations.rightToMid));
                ƒS.Character.animate(characters.shou, characters.shou.pose.normal, animate(animations.leftToMid));
                await ƒS.update(1);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.black);
                await ƒS.update(3);
                // Sounds
                await ƒS.update(5);
                await ƒS.Location.show(locations.storageHallNobu);
                await ƒS.update(3);
                await ƒS.Location.show(locations.storageHallFight);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.normal, new ƒS.Position(480, ƒS.positions.bottomcenter.y));
                await ƒS.Character.show(characters.shou, characters.shou.pose.happy, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41212_12);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_13);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41212_14);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_15);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41212_16);
                await ƒS.Character.hide(characters.shou);
                await ƒS.Character.show(characters.shou, characters.shou.pose.normal, new ƒS.Position(-480, ƒS.positions.bottomcenter.y));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_17);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41212_18);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41212_19);
                await ƒS.Character.animate(characters.shou, characters.shou.pose.normal, animate(animations.leftToLeftOut));
                await ƒS.update(1);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.firstAidStorageHall);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41212_20);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41212_21);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41212_22);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41212_23);
                await ƒS.Speech.hide();
                if (dataForSave.romancePoints >= 2 ) {
                    await ƒS.Location.show(sequences.sumiHappyCryStorageHall);
                    await ƒS.update(1);
                    await ƒS.update(3);
                    await ƒS.Location.show(sequences.sumiKissStorageHall);
                    await ƒS.update(1);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich kann mein Leben mit der Person, die ich liebe, verbringen. " + dataForSave.nameProtagonist + ", ich liebe dich. \n \n Sumi");
                    return await ending(3);
                } else {
                    await ƒS.Location.show(sequences.sumiHappyCryStorageHall);
                    await ƒS.update(1);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    return await ending(3);
                }
            } else {
                await ƒS.Location.show(sequences.fightUnconscious);
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41211_01);
                await ƒS.Location.show(sequences.black);
                await ƒS.update(transitions.eyesClosed.duration, transitions.eyesClosed.alpha, transitions.eyesClosed.edge);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_02);
                await ƒS.Location.show(locations.storageHallFight);
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.happy, ƒS.positions.bottomcenter);
                await ƒS.update(transitions.eyesOpen.duration, transitions.eyesOpen.alpha, transitions.eyesOpen.edge);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41211_01b);
                //Sounds 
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.nobu, characters.nobu.pose.hurt, ƒS.positions.bottomcenter);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41211_03);
                await ƒS.Location.show(sequences.sumiRage);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_04);
                await ƒS.Location.show(sequences.sumiStabbedNobu);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41211_05);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_06);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41211_07);


                await ƒS.Location.show(locations.storagehallOutside);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.shy, ƒS.positions.bottomcenter);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_09);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_10);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_11);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.sumiHappyCryOutside);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_12);
                await ƒS.Menu.getInput(isSumiBetterAnswer, "decisionClass");
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_13);

                if (dataForSave.romancePoints >= 2 ) {
                    sumiTurnIn = await ƒS.Menu.getInput(sumiTurnInAnswer, "decisionClass");
                    switch (sumiTurnIn) {
                        case sumiTurnInAnswer.no:
                            await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_17);
                            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_18);
                            await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_19);
                            await ƒS.Location.show(sequences.sumiKissOutside);
                            await ƒS.update(1);
                            await ƒS.update(3);
                            await ƒS.Location.show(sequences.black);
                            await ƒS.update(5);
                            await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir ... und ich liebe dich. \n \n Sumi");
                            return await ending(1);
                        case sumiTurnInAnswer.yes:
                            await ƒS.Speech.tell(characters.protagonist, "Ja, das wäre wohl besser...");
                            await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_14);
                            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_15);
                            await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_16);
                            await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_15);
                            await ƒS.Location.show(sequences.black);
                            await ƒS.update(5);
                            await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und er wurde für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Ich habe mich gestellt, jedoch wurde der Fall als Notwehr abgestempelt, da er uns gekidnapped, gefesselt und fast umgebracht hat. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                            return await ending(2);
                    }
                } else {
                    await ƒS.Speech.tell(characters.protagonist, "Ja, das wäre wohl besser...");
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_14);
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_15);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S41211_16);
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41211_15);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und er wurde für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Ich habe mich gestellt, jedoch wurde der Fall als Notwehr abgestempelt, da er uns gekidnapped, gefesselt und fast umgebracht hat. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    return await ending(2);
                }
            }
        } else {
            if (dataForSave.nobuKnowsBrother == false) {
                await ƒS.Location.show(sequences.nobuKO);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41222_01);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41222_03);
                await ƒS.Location.show(sequences.sumiShouComing);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_04);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_05);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_06);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_07);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_08);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_09);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_10);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_11);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_12);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41222_13);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_14);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_15);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_16);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_17);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_18);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_19);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_20);
                await ƒS.Speech.tell(characters.shou, text.Shou.S41222_21);
                // Shou trägt Nobu raus
                await ƒS.Location.show(sequences.firstAidStorageHall);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_22);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41222_23);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_24);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41222_25);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41222_26);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41222_27);
                if (dataForSave.romancePoints >= 2 ) {
                    await ƒS.Location.show(sequences.sumiHappyCryStorageHall);
                    await ƒS.update(1);
                    await ƒS.update(3);
                    await ƒS.Location.show(sequences.sumiKissStorageHall);
                    await ƒS.update(1);
                    await ƒS.update(3);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich kann mein Leben mit der Person, die ich liebe, verbringen. " + dataForSave.nameProtagonist + ", ich liebe dich. \n \n Sumi");
                    // Sequenz Sumi und Protagonist küssen sich und gehen Hand in Hand zum Bruder
                    return await ending(3);
                } else {
                    await ƒS.Location.show(sequences.sumiHappyCryStorageHall);
                    await ƒS.update(1);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides war ungewiss und ich weiß nicht was wäre, wenn ich beide verloren hätte. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " konnte ich meinen Bruder wiedersehen und Mom geht es auch ein wenig besser. Nobu wurde für seine Taten bestraft und hinter Gittern gebracht. Mein Leben fühlt sich wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    // Sumi schaut den Protaginisten mit Tränen in den Augen glücklich an und sie gehen zum Bruder
                    return await ending(3);
                }
            } else {
                await ƒS.Location.show(sequences.nobuKO);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_01);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41221_02);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_03);
                await ƒS.Location.show(sequences.sumiRage);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_04);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_05);
                await ƒS.Speech.tell(characters.nobu, text.Nobu.S41221_06);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_07);
                await ƒS.Location.show(sequences.sumiGrabsKnife);
                await ƒS.update(3);
                await ƒS.Location.show(sequences.sumiKillsNobu);
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_08);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_09);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_10);
                // Polizei kommt
                await ƒS.Location.show(locations.storagehallOutside);
                await ƒS.Character.show(characters.sumi, characters.sumi.pose.shy, ƒS.positions.bottomcenter);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_11);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_12);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_13);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_14);
                await ƒS.Character.hideAll();
                await ƒS.Location.show(sequences.sumiHappyCryOutside);
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_15);
                await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_16);
                if (dataForSave.romancePoints >= 2 ) {
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_17);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_18);
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_19);
                    await ƒS.Location.show(sequences.sumiKissOutside);
                    await ƒS.update(1);
                    await ƒS.update(3);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir ... und ich liebe dich. \n \n Sumi");
                    return await ending(3);
                } else {
                    await ƒS.Speech.tell(characters.protagonist, text.Protagonist.S41221_20);
                    await ƒS.Speech.tell(characters.sumi, text.Sumi.S41221_21);
                    await ƒS.Location.show(sequences.black);
                    await ƒS.update(5);
                    await ƒS.Text.print("Liebes Tagebuch \n \n Vor ungefähr einer Woche kämpfte ich mit mir selbst... es war die schlimmste Zeit meines Lebens und ich wusste nicht weiter. Ich hing mit einem seidenen Faden am Leben, und dieser Faden bestand aus der Hoffnung Shou wiederzusehen und dass es Mom besser gehen wird... Doch beides ist eingetreten und ich habe alle Menschen verloren, dir mir wichtig sind. Doch in einem Moment hat sich alles verändert und " + dataForSave.nameProtagonist + " betrat plötzlich mein Leben. Was sich zuerst als lästiges Anhängsel anfühlte entpuppte sich schnell als Hoffnungsschimmer. Dank " + dataForSave.nameProtagonist + " versinke ich nicht in einem schwarzen Loch, sondern kann damit abschließen und mein Leben fortsetzen. Nobu hat den Vorfall überlebt und es wurden keine Fragen zum Täter gestellt, da sie es als interne Gang Angelegenheit abgestempelt haben. Jedoch wurde er für Shous Mord hinter Gittern gebracht... und ich konnte meinen Bruder in Frieden beerdigen. Mein Leben fühlt sich langsam wieder lebendig an ... und nicht nur das ... ich habe einen neuen wichtigen Menschen in meinem Leben. " + dataForSave.nameProtagonist + ", ich danke dir. \n \n Sumi");
                    // Sie gehen
                    return await ending(3);
                }
            }
        }
    }

    // Endings
    async function ending(endingNr: number): Promise<string> {
        switch (endingNr) {
            case 1:
                await ƒS.Speech.hide();
                // Sumi und Protagonist schönes Leben
                await ƒS.update(1);
                return "endOfNovel";
            case 2:
                await ƒS.Speech.hide();
                // Sumi wird gestellt
                await ƒS.update(1);
                return "endOfNovel";
            case 3:
                await ƒS.Speech.hide();
                // Sumi und ihr Bruder haben ein Happy Ending
                await ƒS.update(1);
                return "endOfNovel";
        }
        return "endOfNovel";
        }
}