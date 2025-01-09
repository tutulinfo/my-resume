interface Props {
  label?: string;
}

const Button = ({ label = "Click Me" }: Props) => {
  return (
    <button className="bg-blue-500 py-2 px-4 rounded text-white">
      {label}
    </button>
  );
};

export default Button;
