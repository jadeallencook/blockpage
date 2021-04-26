import StandardNavbar from './navbars/standard';
import StandardHeader from './headers/standard';

const blocks = {
  navbars: {
    standard: ({ key, config, props }) => (
      <StandardNavbar key={key} config={config} props={props} />
    ),
  },
  headers: {
    standard: ({ key, config, props }) => (
      <StandardHeader key={key} config={config} props={props} />
    ),
  },
};

export default blocks;
