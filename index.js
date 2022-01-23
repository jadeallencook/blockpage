'use strict';

const { exec } = require('child_process');
const build = require('./build');

const { argv } = process;
const [node, dir, name] = argv;
const commands = [
    `yarn create react-app react-app – template typescript`,
    'npx degit chromaui/intro-storybook-react-template react-storybook'
];
let index = 0;

console.log('\x1b[36m', '\nThanks for choosing Blockpage!\n');
console.log('\x1b[37m', `\nInstalling React, Storybook, and Blockpage Dashboard...\n`);

const recursive = () => {
    const command = commands[index];
    if (command) {
        console.log('\x1b[33m', command);
        exec(commands[index], (error, stdout, stderr) => {
            console.log('\x1b[0m', stdout);
            console.log('\x1b[0m', stderr);
            if (error !== null) {
                console.log('\x1b[31m', error);
            }
            index++;
            recursive();
        });
    } else {
        build();
    }
}

recursive();