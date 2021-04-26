import "./style.scss";
import Button from '../../shared/button';
import Input from '../../shared/input';

const Block = ({ config, props }) => {
  const { font, colors } = config;
  const { title, subtext, inputs, buttons } = props;
  return (
    <form style={{backgroundColor: colors.secondary}}>
      <h1>{title}</h1>
      <p>{subtext}</p>
      {inputs.map(({ type, text }, index) => (
        <Input
          key={`form-button-${index}`}
          props={{ type, text }}
          config={config}
        />
      ))}
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
