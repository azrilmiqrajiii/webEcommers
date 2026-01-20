const Button = ({
  children,
  classname = "bg-[#4988C4]",
  onclick = () => {},
}) => {
  return (
    <button
      onClick={onclick}
      className={`text-white font-bold ${classname} py-2 px-5 rounded cursor-pointer`}
    >
      {children}
    </button>
  );
};
export default Button;
