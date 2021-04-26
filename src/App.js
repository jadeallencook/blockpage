import './App.css';
import getBlock from './utils/getBlock';
import getFont from './utils/getFont';

/*
  TODO: hookup firebase
  importing site locally
  needs moved to hook
*/
import site from './site';
const { config, pages } = site;
const { font, link } = getFont(config.font)

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundColor: config.colors.background,
        fontFamily: font,
        color: config.colors.text,
      }}
    >
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href={`https://fonts.googleapis.com/css2?family=${link}`}
        rel='stylesheet'
      />
      {pages.home.map(({ block, props }, index) =>
        getBlock(block)({
          key: `block-${index}`,
          config: config,
          props,
        })
      )}
    </div>
  );
}

export default App;
