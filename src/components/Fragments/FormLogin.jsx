import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        htmlFor="email"
        title="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        htmlFor="password"
        title="Password"
        type="password"
        name="password"
        placeholder="*********"
      />
      <Button classname="bg-[#4988C4] w-full">Masuk</Button>
    </form>
  );
};

export default FormLogin;
