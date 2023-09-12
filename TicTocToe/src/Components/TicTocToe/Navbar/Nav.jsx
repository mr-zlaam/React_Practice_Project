import {} from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center items-center  cursor-pointer">
        <h2
          className="text-white font-extrabold top-12 relative"
          style={{ fontFamily: "cursive", cursor: "pointer" }}
        >
          Tic Toc Toe
        </h2>
        <h2 className="text-white"> </h2>
      </header>
    </>
  );
};

export default Navbar;
