# Blockpage

The web tool that bridges design and development using the latest technologies.

## Developer's Guide

At the highest level there are only two steps:

1. Generate React & Storybook boilerplates.
1. Initalize Blockpage dashboard.

You can test your changes by using these commands:

- **yarn test:init** - simulates blockpage init command
- **yarn test:clean** - removes old boilerplates and runs blockpage init
- **yarn test:update** - updates boilerplates using update script
- **yarn test:build** - overwrites boilplate using build script
- **yarn test:serve** - serves blockpage and boilerplates

The bulk of our proprietary logic is within the dashboard (where users are able to create new components, configure routes, and update the theme). Our dashboard is built using React and executes node scripts running on localhost.
