const site = {
  config: {
    name: 'Blockpage.io',
    font: 'lato',
    radius: '0px',
    colors: {
      primary: '#111',
      secondary: '#333',
      background: '#222',
      text: '#FFF'
    },
  },
  routes: {},
  pages: {
    home: [
      {
        block: 'navbars/standard',
        props: {
          buttons: [
            {
              text: 'home',
              link: '/',
            },
          ],
        },
      },
      {
        block: 'headers/standard',
        props: {
          title: 'This Is Where Custom Components Are Created',
          subtext: 'Blockpage allows users to create websites using custom block components and request blocks to be developed for business management.',
          buttons: [{
            text: 'Create Account',
            link: '#'
          }, {
            text: 'Sign In',
            link: '#'
          }]
        },
      }
    ],
  },
};

export default site;