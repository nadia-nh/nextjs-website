import screenshotRcWaterTracking from './screenshot-rc-water-tracking.png';
import screenshotRcPomodoro from './screenshot-rc-pomodoro.png';

import screenshotRcGodotFarmRpg from './screenshot-rc-godot-farm-rpg.png';
import screenshotRcLovePlatformer from './screenshot-rc-love-platformer.png';
import screenshotRcShooter from './screenshot-rc-shooter.png';
import screenshotRcSurvivors from './screenshot-rc-survivors.png';
import screenshotRc8Ball from './screenshot-rc-8-ball.png';
import screenshotRcCatIgnore from './screenshot-rc-cat-ignore.png';

import screenshotRcFlowerGarden from './screenshot-rc-flower-garden.png';
import screenshotRcPathMaker from './screenshot-rc-path-maker.png';
import screenshotRcFlowerPomodoro from './screenshot-rc-flower-pomodoro.png';
import screenshotRcRainbowSpiral from './screenshot-rc-rainbow-spiral.png';
import screenshotRcRingsPlanets from './screenshot-rc-rings-planets.png';
import screenshotRcShiftingSpheres from './screenshot-rc-shifting-spheres.png';

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

export const games = [
    {
        id: 1,
        title: 'Plant And Prosper',
        description: `Cozy farming game made with Godot.
            Prepare the soil, plant seeds, water crops, and sell them once they are fully grown.`,
        image: screenshotRcGodotFarmRpg,
        liveUrl: 'https://forgepixel.itch.io/plant-and-prosper',
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['Godot', 'GDScript', 'Cozy', 'Recurse-center', 'Solo']
    },
    {
        id: 2,
        title: 'Space Laser',
        description: `Shoot-em-up game made with Pico-8.
            Steer a ship and shoot lasers at falling enemies.`,
        image: screenshotRcShooter,
        liveUrl: 'https://www.lexaloffle.com/bbs/cart_info.php?cid=rasifebuhi-8',
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'Lua', 'SHMUP', 'Recurse-center', 'Solo']
    },
    {
        id: 3,
        title: 'One More Jump',
        description: `Platformer game made with Löve-2D. 
            Jump over platforms to collect all the coins.`,
        image: screenshotRcLovePlatformer,
        liveUrl: 'https://forgepixel.itch.io/one-more-jump',
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'Lua', 'Platformer', 'Recurse-center', 'Solo']
    },
    {
        id: 4,
        title: 'Fishy Water',
        description: `Underwater survivors game experience made with Godot.
            Swim as fast as you can to avoid oncoming enemies.`,
        image: screenshotRcSurvivors,
        liveUrl: 'https://forgepixel.itch.io/fishy-water',
        githubUrl: 'https://github.com/nadia-nh/rc-survivors-game',
        tags: ['Godot', 'GDScript', 'Survivors', 'Recurse-center', 'Team']
    },
    {
        id: 5,
        title: 'Ask The Orb',
        description: `RCade game simulating a magic 8-ball.
            Ask a yes-no question and receive your answer from the all knowing 8-ball.`,
        image: screenshotRc8Ball,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/VKEy3PDBB',
        githubUrl: 'https://github.com/nadia-nh/rc-8-ball-rcade',
        tags: ['RCade', 'Javascript', 'Recurse-center', 'Team']
    },
    {
        id: 6,
        title: 'Your Cat',
        description: `RCade cozy game featuring a cat.
            Call out to your cat to get its attention, good luck!`,
        image: screenshotRcCatIgnore,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/lWcGcg2eZ',
        githubUrl: 'https://github.com/sllewely/cat-ignore',
        tags: ['RCade', 'Typescript', 'Cozy', 'Recurse-center', 'Team']
    },
];

export const creative_code = [
    {
        id: 1,
        title: 'Flower Garden',
        description: `Cozy garden made in p5.js.
            Left-click to plant flowers and watch them sway in the breeze.
            Right-click to remove them.`,
        image: screenshotRcFlowerGarden,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/H0Lgt_z6k',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-garden',
        tags: ['P5.js', 'Javascript', 'Cozy', 'Recurse-center', 'Solo']
    },
    {
        id: 2,
        title: 'Path Maker',
        description: `Path drawing experience made in p5.js.
            Click to change tiles, cycling through grass, soil, water, rock and grass.
            Click and drag to change tiles continuously.`,
        image: screenshotRcPathMaker,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/2wc-SBZAT',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/path-maker',
        tags: ['P5.js', 'Javascript', 'Recurse-center', 'Solo']
    },
    {
        id: 3,
        title: 'Flower Pomodoro',
        description: `Flower themed pomodoro made in p5.js.
            Click the Plant button to grow a flower.
            Click the timer to change the duration.`,
        image: screenshotRcFlowerPomodoro,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/NZ9HCfpnp',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-pomodoro',
        tags: ['P5.js', 'Javascript', 'Productivity', 'Recurse-center', 'Solo']
    },
    {
        id: 4,
        title: 'Rainbow Spiral',
        description: `Rainbow spiral using shaders.
            The spiral cycles through colors as it spins and fades at the edge.`,
        image: screenshotRcRainbowSpiral,
        liveUrl: 'https://www.shadertoy.com/view/33SBDD',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rainbow-spiral',
        tags: ['Shaders', 'GLSL', 'Recurse-center', 'Solo']
    },
    {
        id: 5,
        title: 'Rings And Planets',
        description: `Constellation using shaders.
            The rings with orbiting planets move dynamically.
            The colors shift with time.`,
        image: screenshotRcRingsPlanets,
        liveUrl: 'https://www.shadertoy.com/view/W3jBWW',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rings-and-planets',
        tags: ['Shaders', 'GLSL', 'Recurse-center', 'Solo']
    },
    {
        id: 6,
        title: 'Shifting Spheres',
        description: `Eye like circles using shaders.
            Shifting spheres move over time, featuring a changing color gradient.`,
        image: screenshotRcShiftingSpheres,
        liveUrl: 'https://www.shadertoy.com/view/tc3cWN',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/shifting-spheres',
        tags: ['Shaders', 'GLSL', 'Recurse-center', 'Team']
    },
];
