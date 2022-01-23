# Blockpage

The web tool that bridges design and development using the latest technologies.

## Getting Started

Generate a new project by running `npx blockpage project-name`.

Start your development environment by running `yarn serve`.

## Common Terminology

- **Block:** A component created using building blocks.
- **Page:** A collection of components displayed on a route.
- **Route:** Mapping of URL to a certain page.
- **Theme:** Global settings such as styles.

## Dashboard Features

- Edit blocks and manage pages.
- Configure the router and theme.

## Additional Terminology

- **Building Blocks:** Atomic blocks used to build larger blocks.

## Developer's Guide

At the highest level there are only two steps:

1. Generate React & Storybook boilerplates.
1. Initalize Blockpage dashboard.

You can use Blockpage by running these commands:

- `yarn start` - generate boilerplates and initialize dashboard.
- `yarn clean` - removes directories for old boilerplates.
- `yarn update` - updates boilerplates using update script
- `yarn build` - overwrites boilplate using build script.
- `yarn serve` - serves blockpage dashboard and boilerplates.
- `yarn test` - does the same as start but uses cached data.
