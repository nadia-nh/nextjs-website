
import screenshotRcGodotFarmRpg from './screenshot-rc-godot-farm-rpg.png';
import screenshotRcLovePlatformer from './screenshot-rc-love-platformer.png';
import screenshotRcShooter from './screenshot-rc-shooter.png';
import screenshotRcSurvivors from './screenshot-rc-survivors.png';
import screenshotRc8Ball from './screenshot-rc-8-ball.png';
import screenshotRcCatIgnore from './screenshot-rc-cat-ignore.png';

export const games = [
    {
        id: 1,
        title: 'RC Godot Farming Game',
        description: 'Farming game made with Godot Engine. The player can prepare the soil, plant seeds, water crops, and harvest them once they are fully grown.',
        image: screenshotRcGodotFarmRpg,
        githubUrl: 'https://github.com/nadia-nh/rc-godot-farm-rpg',
        tags: ['Godot', 'gdscript', 'farming', 'recurse-center', 'solo']
    },
    {
        id: 2,
        title: 'RC Pico-8 Shoot Em Up Game',
        description: 'Small shoot em up game made with Pico-8. The player controls a ship that can move and shoot lasers at falling enemies.',
        image: screenshotRcShooter,
        githubUrl: 'https://github.com/nadia-nh/rc-pico8-shoot-em-up',
        tags: ['Pico-8', 'lua', 'shmup', 'recurse-center', 'solo']
    },
    {
        id: 3,
        title: 'RC Love2D Platformer Game',
        description: 'Small platformer game made with Löve-2D. The player can jump over platforms in order to collect coins.',
        image: screenshotRcLovePlatformer,
        githubUrl: 'https://github.com/nadia-nh/rc-love2d-platformer',
        tags: ['Löve-2D', 'lua', 'platformer', 'recurse-center', 'solo']
    },
    {
        id: 4,
        title: 'RC Godot Survivors-like Game',
        description: 'Small underwater survivors-like game made with Godot. The player can move around and avoid enemies.',
        image: screenshotRcSurvivors,
        githubUrl: 'https://github.com/nadia-nh/rc-survivors-game',
        tags: ['Godot', 'gdscript', 'survivors-like', 'recurse-center', 'team']
    },
    {
        id: 5,
        title: 'RC RCade 8-ball Game',
        description: 'Small RCade game that simulates a magic 8-ball. The player can ask a question and receive a random answer.',
        image: screenshotRc8Ball,
        githubUrl: 'https://github.com/nadia-nh/rc-8-ball-rcade',
        tags: ['RCade', 'javascript', 'recurse-center', 'team']
    },
    {
        id: 6,
        title: 'RC RCade Cat Ignore Game',
        description: 'Small RCade game featuring a cat. The player calls out to it to try to get its attention.',
        image: screenshotRcCatIgnore,
        githubUrl: 'https://github.com/sllewely/cat-ignore',
        tags: ['RCade', 'typescript', 'recurse-center', 'team']
    },
];