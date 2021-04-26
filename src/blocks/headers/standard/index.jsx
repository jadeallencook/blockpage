// Standard Navigation
import './style.scss';

const Block = ({ config, key, props }) => {
  console.log(props, config);
  const { name, colors } = config;
  return (
    <header key style={{ backgroundColor: colors.primary }}>
      <div>{name}</div>
      <div></div>
    </header>
  );
};

export default Block;
