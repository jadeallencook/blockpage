import "./style.scss";
import Button from '../../shared/button';

const Block = ({ config, props }) => {
  const { font, colors } = config;
  const { title, subtext, type, placeholder, buttons } = props;
  return (
    <form style={{backgroundColor: colors.secondary}}>
      <h1>{title}</h1>
      <p>{subtext}</p>
      <input type={type} placeholder={placeholder} />
      {buttons.map(({ text, link }, index) => (
        <Button
          key={`header-button-${index}`}
          props={{ text, link }}
          config={config}
        />
      ))}
    </form>
  );
};

export default Block;
