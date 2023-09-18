const Footer = () => {
  return (
    <div className=" flex items-center justify-between w-auto h-28  px-12 bg-slate-600 text-white">
      <p>
        All rights reserved by <span className="text-sky-500 ">Codiesys.</span>{" "}
        Copyright &copy; {new Date().getFullYear()}
      </p>
      <p>
        Designed by <span className="text-sky-500 ">Codiesys</span>
      </p>
    </div>
  );
};

export default Footer;
