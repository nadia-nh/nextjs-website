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
        description: 'Pomodoro app built with Android and Jetpack Compose. The user can set a timer and track their focus sessions.',
        image: screenshotRcPomodoro,
        liveUrl: null,
        githubUrl: 'https://github.com/nadia-nh/rc-android-pomodoro',
        tags: ['Android', 'jetpack-compose', 'room', 'recurse-center', 'solo']
    },
    {
        id: 2,
        title: 'Daily Drip',
        description: 'Water tracking app built with React and Nextjs. The user can log their daily water intake and view their progress over time.',
        image: screenshotRcWaterTracking,
        liveUrl: 'https://rc-water-tracking-app.vercel.app/',
        githubUrl: 'https://github.com/nadia-nh/rc-water-tracking-app',
        tags: ['React', 'Nextjs', 'typescript', 'recurse-center', 'team']
    },
];

export const games = [
    {
        id: 1,
        title: 'Plant And Prosper',
        description: 'Farming game made with Godot Engine. The player can prepare the soil, plant seeds, water crops, and harvest them once they are fully grown.',
        image: screenshotRcGodotFarmRpg,
        liveUrl: 'https://forgepixel.itch.io/plant-and-prosper',
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['Godot', 'gdscript', 'farming', 'recurse-center', 'solo']
    },
    {
        id: 2,
        title: 'Space Laser',
        description: 'Small shoot em up game made with Pico-8. The player controls a ship that can move and shoot lasers at falling enemies.',
        image: screenshotRcShooter,
        liveUrl: 'https://www.lexaloffle.com/bbs/cart_info.php?cid=rasifebuhi-8',
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'lua', 'shmup', 'recurse-center', 'solo']
    },
    {
        id: 3,
        title: 'One More Jump',
        description: 'Small platformer game made with Löve-2D. The player can jump over platforms in order to collect coins.',
        image: screenshotRcLovePlatformer,
        liveUrl: 'https://forgepixel.itch.io/one-more-jump',
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'lua', 'platformer', 'recurse-center', 'solo']
    },
    {
        id: 4,
        title: 'Fishy Water',
        description: 'Small underwater survivors-like game made with Godot. The player can move around and avoid enemies.',
        image: screenshotRcSurvivors,
        liveUrl: 'https://forgepixel.itch.io/fishy-water',
        githubUrl: 'https://github.com/nadia-nh/rc-survivors-game',
        tags: ['Godot', 'gdscript', 'survivors-like', 'recurse-center', 'team']
    },
    {
        id: 5,
        title: 'Ask The Orb',
        description: 'Small RCade game that simulates a magic 8-ball. The player can ask a question and receive a random answer.',
        image: screenshotRc8Ball,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/VKEy3PDBB',
        githubUrl: 'https://github.com/nadia-nh/rc-8-ball-rcade',
        tags: ['RCade', 'javascript', 'recurse-center', 'team']
    },
    {
        id: 6,
        title: 'Your Cat',
        description: 'Small RCade game featuring a cat. The player calls out to it to try to get its attention.',
        image: screenshotRcCatIgnore,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/lWcGcg2eZ',
        githubUrl: 'https://github.com/sllewely/cat-ignore',
        tags: ['RCade', 'typescript', 'recurse-center', 'team']
    },
];

export const creative_code = [
    {
        id: 1,
        title: 'Flower Garden',
        description: 'Left click anywhere to plant a random flower, right click to remove them. The flowers have a slight left to right sway.',
        image: screenshotRcFlowerGarden,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/H0Lgt_z6k',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-garden',
        tags: ['p5.js', 'javascript', 'garden', 'recurse-center', 'solo']
    },
    {
        id: 2,
        title: 'Path Maker',
        description: 'Click to change the current tile, they cycle through grass, soil, water, rock and grass. Clicking and dragging changes multiple tiles at once.',
        image: screenshotRcPathMaker,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/2wc-SBZAT',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/path-maker',
        tags: ['p5.js', 'javascript', 'recurse-center', 'solo']
    },
    {
        id: 3,
        title: 'Flower Pomodoro',
        description: 'Click the "Plant" button to start. Click the timer to increase the time, starting from 5 to 60 minutes, in 5 minute increments.',
        image: screenshotRcFlowerPomodoro,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/NZ9HCfpnp',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/flower-pomodoro',
        tags: ['p5.js', 'javascript', 'tracking', 'recurse-center', 'solo']
    },
    {
        id: 4,
        title: 'Rainbow Spiral',
        description: 'Moving spiral cycling through colors as it spins. The colors depend on the distance of each pixel to the center. The spiral fades at the edge.',
        image: screenshotRcRainbowSpiral,
        liveUrl: 'https://www.shadertoy.com/view/33SBDD',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rainbow-spiral',
        tags: ['shadertoy', 'glsl', 'recurse-center', 'solo']
    },
    {
        id: 5,
        title: 'Rings And Planets',
        description: 'Moving rings with tiny orbiting planets on them, with dynamic motion and a background color gradient. Based on another shader made collaboratively, this version adapts the drawing logic and adds color.',
        image: screenshotRcRingsPlanets,
        liveUrl: 'https://www.shadertoy.com/view/W3jBWW',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/rings-and-planets',
        tags: ['shadertoy', 'glsl', 'recurse-center', 'solo']
    },
    {
        id: 6,
        title: 'Shifting Spheres',
        description: 'Two overlapping circles with eye-like inner pupils that shift and move over time, with color gradients. Based on functions from the pixel spirit deck.',
        image: screenshotRcShiftingSpheres,
        liveUrl: 'https://www.shadertoy.com/view/tc3cWN',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/shifting-spheres',
        tags: ['shadertoy', 'glsl', 'recurse-center', 'team']
    },
];
