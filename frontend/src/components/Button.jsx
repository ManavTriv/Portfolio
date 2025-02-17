// eslint-disable-next-line react/prop-types
const Button = ({label, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-xl font-medium border-1 border-black py-2 px-4 cursor-pointer"
    >
      <div>{label}</div>
    </button>
  );
};

export default Button;