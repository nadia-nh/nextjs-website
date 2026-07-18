import screenshotRcWaterTracking from '@images/screenshot-rc-water-tracking.png';
import screenshotPlantPal from '@images/screenshot-plant-pal.png';
import screenshotRcTarot from '@images/screenshot-rc-tarot.png';
import screenshotRcPomodoro from '@images/screenshot-rc-pomodoro.png';
import screenshotCryptoTracker from '@images/screenshot-crypto-tracker.png';

import screenshotRcGodotFarmRpg from '@images/screenshot-rc-godot-farm-rpg.png';
import screenshotRcSurvivors from '@images/screenshot-rc-survivors.png';
import screenshotRcBigSeasons from '@images/screenshot-rc-big-seasons.png';

import screenshotRc8Ball from '@images/screenshot-rc-8-ball.png';
import screenshotRcCatIgnore from '@images/screenshot-rc-cat-ignore.png';

import screenshotRcShooter from '@images/screenshot-rc-shooter.png';
import screenshotRcLovePlatformer from '@images/screenshot-rc-love-platformer.png';

import screenshotRcFlowerGarden from '@images/screenshot-rc-flower-garden.png';
import screenshotRcPathMaker from '@images/screenshot-rc-path-maker.png';
import screenshotRcFlowerPomodoro from '@images/screenshot-rc-flower-pomodoro.png';
import screenshotRecursiveTree from '@images/screenshot-rc-recursive-tree.png';
import screenshotRcRainbowSpiral from '@images/screenshot-rc-rainbow-spiral.png';
import screenshotRcRingsPlanets from '@images/screenshot-rc-rings-planets.png';
import screenshotRcShiftingSpheres from '@images/screenshot-rc-shifting-spheres.png';

export const apps_android = [
    {
        id: 1,
        title: 'Quiet Garden',
        description: `Pomodoro app built with Jetpack Compose.
            Set a customizable timer to focus and track your pomodoro sessions.`,
        image: screenshotRcPomodoro,
        liveUrl: null,
        githubUrl: 'https://github.com/nadia-nh/rc-android-pomodoro',
        tags: ['Room', 'Productivity', 'Solo']
    },
    {
        id: 2,
        title: 'Arcana Flux',
        description: `Tarot reading app built with Jetpack Compose.
            Get tarot readings and explore the meanings of each card.`,
        image: screenshotRcTarot,
        liveUrl: 'https://arcana-flux.com/',
        githubUrl: 'https://github.com/nadia-nh/rc-android-tarot',
        tags: ['Room', 'Retrofit', 'Solo']
    },
    {
        id: 3,
        title: 'Crypto Tracker',
        description: `Crypto price tracking app built with Jetpack Compose.
            Monitor your crypto performance over time.`,
        image: screenshotCryptoTracker,
        liveUrl: null,
        githubUrl: 'https://github.com/nadia-nh/android-crypto-tracker',
        tags: ['Retrofit', 'Canvas drawing', 'Solo']
    }
    
];

export const apps_web = [
    {
        id: 1,
        title: 'Daily Drip',
        description: `Water tracking app built with React.
            Log your daily water intake and view your progress over time.`,
        image: screenshotRcWaterTracking,
        liveUrl: 'https://rc-water-tracking-app.vercel.app/',
        githubUrl: 'https://github.com/nadia-nh/rc-water-tracking-app',
        tags: ['Typescript', 'Productivity', 'Team']
    },
    {
        id: 2,
        title: 'Plant Pal',
        description: `Plant diversity tracking app built with React.
            Try out new foods and track your plant-based progress over time.`,
        image: screenshotPlantPal,
        liveUrl: 'https://plant-pal-phi.vercel.app/',
        githubUrl: 'https://github.com/nadia-nh/plant-pal',
        tags: ['Typescript', 'Health', 'Vibe-coded', 'Solo']
    },
]

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
    {
        id: 3,
        title: 'Big Seasons',
        description: `Cozy atmospheric game. 
            Walk through the changing seasons in a peaceful environment.`,
        image: screenshotRcBigSeasons,
        liveUrl: 'https://forgepixel.itch.io/2-big-2-seasons',
        githubUrl: 'https://github.com/nadia-nh/rc-godot-2big2seasons',
        tags: ['GDScript', 'Cozy', 'Team']
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
        tags: ['Pico-8', 'Lua', 'SHMUP', 'Solo']
    },
    {
        id: 2,
        title: 'One More Jump',
        description: `Platformer game. 
            Jump over platforms to collect all the coins.`,
        image: screenshotRcLovePlatformer,
        liveUrl: 'https://forgepixel.itch.io/one-more-jump',
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'Lua', 'Platformer', 'Solo']
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
    {
        id: 4,
        title: 'Recursive Geometry',
        description: `Recursive tree made in p5.js using simple geometry.
            Move the mouse to change the height and width of the tree.
            The colors change from green to brown as the branches get smaller.`,
        image: screenshotRecursiveTree,
        liveUrl: 'https://editor.p5js.org/nadia-nh/full/4X5ojv4IQ',
        githubUrl: 'https://github.com/nadia-nh/rc-creative-coding/tree/main/recursive-geometry',
        tags: ['Javascript', 'Geometric', 'Solo']
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

// A featured project reuses its category entry, with a title prefix and the
// platform tags that the category page implies but the mixed grid doesn't.
function feature(id, project, prefix, extraTags = []) {
    return {
        ...project,
        id,
        title: `${prefix} - ${project.title}`,
        tags: [...extraTags, ...project.tags]
    };
}

export const featured = [
    feature(1, apps_android[0], 'App', ['Android', 'Jetpack-compose', 'Kotlin']),
    feature(2, apps_android[1], 'App', ['Android', 'Jetpack-compose', 'Kotlin']),
    feature(3, games_godot[0], 'Game', ['Godot']),
    feature(4, games_other[0], 'Game'),
    feature(5, sketches[0], 'Generative Art', ['p5.js']),
    feature(6, shaders[1], 'Generative Art', ['Shader']),
];