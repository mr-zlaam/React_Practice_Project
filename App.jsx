import { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");
  const passref = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+=~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);
  const onCopyClipboard = useCallback(() => {
    setCopy("!Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 1000);

    window.navigator.clipboard.writeText(password);

    passref.current?.select();
  }, [password]);
  useEffect(() => {
    passGenerator();
  }, [passGenerator, length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-9 text-orange-500 bg-gray-800 py-3 text-center">
        Password generator
        <div className="flex flex-wrap  shadow-md rounded-lg overflow-hidden  w-fit m-auto">
          <input
            type="text"
            value={password}
            className="outline-none  px-10 w-9/12 py-2"
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button
            className="bg-blue-500 px-3 py-2 text-white hover:opacity-70 duration-100 ease-in-out rounded-e-md "
            onClick={onCopyClipboard}
          >
            {copy}
          </button>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1 my-3">
              <input
                type="range"
                name="name"
                min={6}
                max={18}
                value={length}
                className="cursor-pointer"
                style={{ display: "inline-block" }}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="">length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                id="no"
                checked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="no">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                className="cursor-pointer"
                type="checkbox"
                id="chars"
                checked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="chars">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
