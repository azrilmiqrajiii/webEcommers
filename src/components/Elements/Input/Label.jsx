const Label = (htmlFor, title) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-left text-white font-bold text-sm"
    >
      {title}
    </label>
  );
};

export default Label;
