import loading from "../Components/loader.gif";
const Loader = () => {
  return (
    <div className=" w-20 h-20 mx-auto my-70">
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loader;
