const AuthLayouts = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center m-auto bg-[#1C4D8D] w-1/2 p-5 rounded-4xl">
      <h1 className="text-white text-3xl font-bold mb-2 mt-2">{title}</h1>
      <p className="text-white text-sm mb-5">
        Silahkan masukkan data untuk melanjutkan!
      </p>
      {children}
    </div>
  );
};
export default AuthLayouts;
