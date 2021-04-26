const site = {
  config: {
    name: 'Blockchain.io',
    font: 'lato',
    radius: '0px',
    colors: {
      primary: '#111',
      secondary: '#333',
      background: '#222',
      text: '#000'
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
      }, {
        block: 'headers/standard',
        props: {
        },
      },
    ],
  },
};

export default site;