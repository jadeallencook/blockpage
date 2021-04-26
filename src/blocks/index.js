import StandardNavbar from './navbars/standard';

const blocks = {
  navbars: {
    standard: ({ key, config, props }) => (
      <StandardNavbar key={key} config={config} props={props} />
    ),
  },
};

export default blocks;
