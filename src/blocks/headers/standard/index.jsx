import './style.scss';
import Button from '../../shared/button';

const Block = ({ config, key, props }) => {
  const { colors } = config;
  const { title, subtext, buttons } = props;
  return (
    <header key={key} style={{ backgroundColor: colors.secondary }}>
      <h1>{title}</h1>
      <p>{subtext}</p>
      {buttons.map(({ text, link }) => (
        <Button props={{ text, link }} config={config} />
      ))}
    </header>
  );
};

export default Block;
