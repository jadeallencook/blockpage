import './style.scss';

const Button = ({ props, config }) => {
  const { text } = props;
  const { radius } = config;
  return <button style={{ borderRadius: radius }}>{text}</button>;
};

export default Button;
