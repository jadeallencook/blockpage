// Standard Navigation
import './style.scss';

const Block = ({ config, key, props }) => {
  console.log(props, config);
  const { name, colors } = config;
  return (
    <nav key style={{ backgroundColor: colors.primary }}>
      <div>{name}</div>
      <div></div>
    </nav>
  );
};

export default Block;
