const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="bg-slate-100 rounded-md py-2 px-3 w-full focus:outline-[#540863] placeholder:opacity-50 placeholder:text-sm"
    />
  );
};

export default Input;
