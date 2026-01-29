import screenshotRcWaterTracking from '@images/screenshot-rc-water-tracking.png';
import screenshotRcPomodoro from '@images/screenshot-rc-pomodoro.png';

import screenshotRcGodotFarmRpg from '@images/screenshot-rc-godot-farm-rpg.png';
import screenshotRcLovePlatformer from '@images/screenshot-rc-love-platformer.png';
import screenshotRcShooter from '@images/screenshot-rc-shooter.png';
import screenshotRcSurvivors from '@images/screenshot-rc-survivors.png';
import screenshotRc8Ball from '@images/screenshot-rc-8-ball.png';
import screenshotRcCatIgnore from '@images/screenshot-rc-cat-ignore.png';

import screenshotRcFlowerGarden from '@images/screenshot-rc-flower-garden.png';
import screenshotRcPathMaker from '@images/screenshot-rc-path-maker.png';
import screenshotRcFlowerPomodoro from '@images/screenshot-rc-flower-pomodoro.png';
import screenshotRcRainbowSpiral from '@images/screenshot-rc-rainbow-spiral.png';
import screenshotRcRingsPlanets from '@images/screenshot-rc-rings-planets.png';
import screenshotRcShiftingSpheres from '@images/screenshot-rc-shifting-spheres.png';

export const applications = [
    {
        id: 1,
        title: 'Quiet Garden',
        description: `Pomodoro app built with Android.
            Set a customizable timer to focus and track you pomodoro sessions.`,
        image: screenshotRcPomodoro,
        liveUrl: null,
        githubUrl: 'https://github.com/nadia-nh/rc-android-pomodoro',
        tags: ['Android', 'Jetpack-compose', 'Room', 'Productivity', 'Recurse-center', 'Solo']
    },
    {
        id: 2,
        title: 'Daily Drip',
        description: `Water tracking app built with React.
            Log your daily water intake and view your progress over time.`,
        image: screenshotRcWaterTracking,
        liveUrl: 'https://rc-water-tracking-app.vercel.app/',
        githubUrl: 'https://github.com/nadia-nh/rc-water-tracking-app',
        tags: ['React', 'Nextjs', 'Typescript', 'Productivity', 'Recurse-center', 'Team']
    },
];

export const games_godot = [
    {
        id: 1,
        title: 'Plant And Prosper',
        description: `Cozy farming game.
            Prepare the soil, plant seeds, water crops, and sell them once they are fully grown.`,
        image: screenshotRcGodotFarmRpg,
        liveUrl: 'https://forgepixel.itch.io/plant-and-prosper',
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['GDScript', 'Cozy', 'Solo']
    },
    {
        id: 2,
        title: 'Fishy Water',
        description: `Underwater survivors game experience.
            Swim as fast as you can to avoid oncoming enemies.`,
        image: screenshotRcSurvivors,
        liveUrl: 'https://forgepixel.itch.io/fishy-water',
        githubUrl: 'https://github.com/nadia-nh/rc-survivors-game',
        tags: ['GDScript', 'Survivors', 'Team']
    },
];

export const games_rcade = [
    {
        id: 1,
        title: 'Ask The Orb',
        description: `Game simulating a magic 8-ball.
            Ask a yes-no question and receive your answer from the all knowing 8-ball.`,
        image: screenshotRc8Ball,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/VKEy3PDBB',
        githubUrl: 'https://github.com/nadia-nh/rc-8-ball-rcade',
        tags: ['Javascript', 'Team']
    },
    {
        id: 2,
        title: 'Your Cat',
        description: `Cozy game featuring a cat.
            Call out to your cat to get its attention, good luck!`,
        image: screenshotRcCatIgnore,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/lWcGcg2eZ',
        githubUrl: 'https://github.com/sllewely/cat-ignore',
        tags: ['Typescript', 'Cozy', 'Team']
    },
];

export const games_other = [
    {
        id: 1,
        title: 'Space Laser',
        description: `Shoot-em-up game in space.
            Steer a ship and shoot lasers at falling enemies.`,
        image: screenshotRcShooter,
        liveUrl: 'https://www.lexaloffle.com/bbs/cart_info.php?cid=rasifebuhi-8',
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'Lua', 'SHMUP', 'Recurse-center', 'Solo']
    },
    {
        id: 2,
        title: 'One More Jump',
        description: `Platformer game. 
            Jump over platforms to collect all the coins.`,
        image: screenshotRcLovePlatformer,
        liveUrl: 'https://forgepixel.itch.io/one-more-jump',
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'Lua', 'Platformer', 'Recurse-center', 'Solo']
    },
];

export const sketches = [
    {
        id: 1,
        title: 'Flower Garden',
        description: `Cozy garden.
            Left-click to plant flowers and watch them sway in the breeze.
            Right-click to remove them.`,
        image: screenshotRcFlowerGarden,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/H0Lgt_z6k',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-garden',
        tags: ['Javascript', 'Cozy', 'Solo']
    },
    {
        id: 2,
        title: 'Path Maker',
        description: `Path-drawing experience.
            Click to cycle through grass, soil, water, and rock.
            Click and drag to paint tiles continuously.`,
        image: screenshotRcPathMaker,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/2wc-SBZAT',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/path-maker',
        tags: ['Javascript', 'Planning', 'Solo']
    },
    {
        id: 3,
        title: 'Flower Pomodoro',
        description: `Flower themed pomodoro.
            Click the Plant button to grow a flower.
            Click the timer to change the duration.`,
        image: screenshotRcFlowerPomodoro,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/NZ9HCfpnp',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-pomodoro',
        tags: ['Javascript', 'Productivity', 'Solo']
    },
];

export const shaders = [
    {
        id: 1,
        title: 'Rainbow Spiral',
        description: `Rainbow spinning spiral.
            It cycles through colors and softly fades at the edges.`,
        image: screenshotRcRainbowSpiral,
        liveUrl: 'https://www.shadertoy.com/view/33SBDD',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rainbow-spiral',
        tags: ['GLSL', 'Abstract', 'Solo']
    },
    {
        id: 2,
        title: 'Rings And Planets',
        description: `Constellation scene.
            Rings and orbiting planets move dynamically, with colors shifting over time.`,
        image: screenshotRcRingsPlanets,
        liveUrl: 'https://www.shadertoy.com/view/W3jBWW',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rings-and-planets',
        tags: ['GLSL', 'Geometric', 'Solo']
    },
    {
        id: 3,
        title: 'Shifting Spheres',
        description: `Shifting eye-like spheres.
            The forms loop continously featuring a changing color gradient.`,
        image: screenshotRcShiftingSpheres,
        liveUrl: 'https://www.shadertoy.com/view/tc3cWN',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/shifting-spheres',
        tags: ['GLSL', 'Abstract','Solo']
    },
];
