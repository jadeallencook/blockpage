import './style.scss';

const Block = ({ config, key, props }) => {
  const { name, colors } = config;
  return (
    <nav key={key} style={{ backgroundColor: colors.primary }}>
      <div>{name}</div>
      <div></div>
    </nav>
  );
};

export default Block;
