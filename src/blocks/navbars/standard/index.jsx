import './style.scss';

const Block = ({ config, props }) => {
  const { name, colors } = config;
  return (
    <nav style={{ backgroundColor: colors.primary }}>
      <div>{name}</div>
      <div></div>
    </nav>
  );
};

export default Block;
