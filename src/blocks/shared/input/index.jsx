import './style.scss';

const Input = ({ props, config }) => {
  const { type, text } = props;
  const { radius } = config;
  return <input style={{ borderRadius: radius }} type={type} placeholder={text}/>
};

export default Input;
