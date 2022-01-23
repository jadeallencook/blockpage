# Blockpage

The web tool that bridges design and development using the latest technologies.

## Getting Started

Generate a new project by running `npx blockpage project-name`.

Start your development environment by running `yarn serve`.

## Developer's Guide

At the highest level there are only two steps:

1. Generate React & Storybook boilerplates.
1. Initalize Blockpage dashboard.

You can test your changes by using these commands:

- **yarn start** - generate boilerplates and initialize dashboard.
- **yarn clean** - removes directories for old boilerplates.
- **yarn update** - updates boilerplates using update script
- **yarn build** - overwrites boilplate using build script.
- **yarn serve** - serves blockpage dashboard and boilerplates.

The bulk of our proprietary logic is within the dashboard (where users are able to create new components, configure routes, and update the theme). Our dashboard is built using React and executes node scripts running on localhost.
