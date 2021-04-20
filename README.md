# Block Page

Block Page allows users to create webpages using custom React components. 

After a user creates an account they can easily add, organize, and pass props to blocks. 

## Terms

**Site:** Collection of pages that contain blocks.
**Page:** Single view or route on a user's site. 
**Block:** Reuseable component that can be added to a page.
**Props:** Parameters that are used to customize blocks.
**Dashboard:** Where the user is able to edit their site.

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
        routes: { ... }
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

## Site Compilation

When a user accesses a site using a subdomain:

**abc123.blockpage.io/example**

The subdomain to access the user's database node and the path loads the selected site. 

## Creating Blocks

Blocks are stored at ```src/blocks``` and require these files:

- **Index.jsx:** The main entry to load the component.
- **Props.js:** Holds all of the props for the componet.
- **Template.js:** Example props for demo purposes. 

## Shared Configurations

In order to insure that sites are cohesive, we have shared configuration settings.

- Colors
- Fonts
- Border Radius
- Name 

All blocks have access to these configuration settings. 