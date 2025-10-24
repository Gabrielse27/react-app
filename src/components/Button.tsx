 type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="btn btn-warning px-4 py-2 rounded" onClick={onClick}>
      {text}
    </button>
  );
};
<Button text="Get Started" />
export default Button;
