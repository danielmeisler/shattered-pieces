namespace Endabgabe {
    export async function EndOfNovel(): ƒS.SceneReturn {
        await ƒS.update(5);
        await ƒS.Location.show(sequences.black);
        ƒS.Sound.play(sound.float_track, 0.2, true);
        await ƒS.update(1);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.story, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.characters, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.sequences, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.music, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.sfx, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);
        await ƒS.Character.animate(characters.credits, characters.credits.pose.backgrounds, animate(animations.credits));
        await ƒS.Character.hide(characters.credits);

        await ƒS.Character.animate(characters.credits, characters.credits.pose.tfp, animate(animations.creditsLast));
        await ƒS.Sound.fade(sound.float_track, 0, 3, false);
    }
}