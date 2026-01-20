import Input from "./Input";
import Label from "./Label";

const InputForm = ({ htmlFor, title, type, name, placeholder }) => {
  return (
    <div className="mb-5">
      <Label htmlFor={htmlFor} title={title} />
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
export default InputForm;
