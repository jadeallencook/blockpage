# Blockpage

Blockpage allows users to create webpages using custom React components. 

After a user creates an account they can easily add, organize, and pass props to blocks. 

Developed by [@jadeallencook](https://github.com/jadeallencook) & [@claytonlcook](https://github.com/claytonlcook)

[blockpage.io](http://blockpage.io)

## Glossary

- [Terms](https://github.com/jadeallencook/blockpage#terms)
- [Site Compilation](https://github.com/jadeallencook/blockpage#site-compilation)
- [Creating Blocks](https://github.com/jadeallencook/blockpage#creating-blocks)
- [Shared Components](https://github.com/jadeallencook/blockpage#shared-components)
- [Shared Configurations](https://github.com/jadeallencook/blockpage#shared-configurations)
- [Custom Fonts](https://github.com/jadeallencook/blockpage#custom-fonts)
- [Database Schema](https://github.com/jadeallencook/blockpage#database-schema)

## Terms

- **Site:** Collection of pages that contain blocks.
- **Page:** Single view or route on a user's site. 
- **Block:** Reuseable component that can be added to a page.
- **Props:** Parameters that are used to customize blocks.
- **Dashboard:** Where the user is able to edit their site.

## Site Compilation

When a user accesses a site using a subdomain:

**abc123.blockpage.io/example**

The subdomain and path are used to load the appropriate site. 

Once the site is loaded from Firebase, the application loops over the blocks.

```js
{pages.home.map(({ block, props }, index) =>
    getBlock(block)({
        key: `block-${index}`,
        config: config,
        props,
    })
)}
```

The ```getBlock``` method takes the block name (```navbar/standard```) and returns the block using the ```blocks/index.js``` file. 

## Creating Blocks

Blocks are stored at ```src/blocks``` and require these files:

- **Index.jsx:** The main entry to load the block.
- **Style.scss:** Style to be loaded into block. 
- **Block.test.js:** Test file for the block.

You can find a template directory at ```src/blocks/template```.

Within the blocks directory, blocks are sorted by type and version. 

All types should have a "standard" version:

- ```blocks/navbar/standard```
- ```blocks/header/standard```
- ```blocks/footer/standard```
- ```blocks/gallery/standard```

After a standard version has been created, you can add custom versions:

- ```standard/header/video```
- ```standard/header/gallery```
- ```standard/header/full```
- ```standard/header/products```

Once you've created your block using the template, add it to the ```index.js```.

This file is used to load blocks into our application and pass key, config, and props.

## Shared Components

If a component is shared by other blocks, this component should be in the ```blocks/shared/```.

- Button
- Input
- Link

## Shared Configurations

In order to insure that sites are cohesive, we have shared configuration settings.

```js
config: {
    name: 'Blockpage.io',
    font: 'lato',
    radius: '0px',
    colors: {
        primary: '#111',
        secondary: '#333',
        background: '#222',
        text: '#000'
    }
}
```

All blocks have access to these configuration settings. 

## Custom Fonts

We use Google fonts to host our custom fonts. 

They are loaded via our app component and our ```src/api/fonts.js``` file.

```js
zenDots: {
    font: 'Zen Dots',
    link: 'Zen+Dots',
}
```

## Database Schema

Each user is given a database node that is generated using thier UID:

```js
{
    users: {
        $UID: {
            ...userData
        }
    }
}
```

Within the user's node, they are able to create a new site:

```js
{
    example: {
        config: { ... },
        routes: { ... },
        pages: { ... }
    }
}
```

The config node stores the main configurations for the site:

```js
{
    name: 'example',
    colors: {
        primary: '#123456',
        secondary: '#567890'
    }
}
```

The routes node stores all of the page routes for the site: 

```js
{
    '/': 'home'
}
```

The pages node stores a node for each page, it's blocks, and their configurations:

```js
{
    home: [{
        block: 'navbar',
        props: {
            buttons: [{
                text: 'home',
                link: '/'
            }]
        }
    }]
}
```