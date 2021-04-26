import './style.scss';
import Button from '../../shared/button';

const Block = ({ config, props }) => {
  const { colors } = config;
  const { title, subtext, buttons } = props;
  return (
    <header style={{ backgroundColor: colors.secondary }}>
      <h1>{title}</h1>
      <p>{subtext}</p>
      {buttons.map(({ text, link }, index) => (
        <Button
          key={`header-button-${index}`}
          props={{ text, link }}
          config={config}
        />
      ))}
    </header>
  );
};

export default Block;
