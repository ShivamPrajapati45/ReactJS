import React, { useState, useEffect, useRef } from "react";

function Password() {
  let [range, setRange] = useState(8);
  let [password, setPassword] = useState("");
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let copyInput = useRef(null);

  const passwordGenerator = () => {
    let pass = "";
    let vowel = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      vowel += "1234567890";
    }

    if (symbol) {
      vowel += '!@#$%^&*()<>?"|}{';
    }

    if (uppercase) {
      vowel = vowel.toUpperCase();
    }

    if (lowercase) {
      vowel = vowel.toLowerCase();
    }
    console.log(vowel);

    for (let i = 1; i <= range; i++) {
      let temp = Math.floor(Math.random() * vowel.length);
      pass += vowel.charAt(temp);
    }
    setPassword(pass);
  };
  let pop = document.getElementById("pop");
  const copy = () => {
    copyInput.current?.select();
    // copyInput.current?.setSelectionRange(0,8);

    window.navigator.clipboard.writeText(password);

    pop.style.display = "block";
    setTimeout(() => {
      pop.style.display = "none";
    },1200);
  };


  useEffect(() => {
    passwordGenerator();
  }, [range, number, symbol, uppercase, lowercase]);

  return (
    <>
      <div className="w-full h-screen bg-sky-300 text-black flex flex-col items-center box-border p-0 m-0">
        <div className="h-12 w-1/2 flex justify-center items-center m-10">
          <h2 className="font-bold text-4xl">
            Generate a Secure Random Password 
          </h2>
        </div>
        <div className="h-20 w-1/2 flex justify-around items-center bg-white rounded-lg border-b-8 border-green-800 m-4">
          <input
            id="value"
            type="text"
            readOnly
            ref={copyInput}
            className="w-full h-14 p-5 outline-none text-2xl font-semibold"
            placeholder="password.."
            value={password}
          />
          <span id="pop" className="hidden">
            copied!
          </span>
          <button
            className="bg-blue-600 p-3 m-1 rounded-lg text-white hover:bg-blue-500 font-semibold text-lg"
            onClick={copy}
          >
            COPY
          </button>
        </div>
        <div className="h-80 w-1/2 border bg-white rounded-xl ">
          <div className="h-8 ">
            <h1 className="font-semibold ml-10 mt-2  text-2xl underline">
              Customize your password
            </h1>
          </div>
          <div className="flex justify-around h-72 items-center">
            <div className="flex flex-col gap-5">
              <label className="text-2xl font-medium">
                Password Length: {range}
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={range}
                className="cursor-pointer"
                onChange={(e) => setRange(e.target.value)}
              />
            </div>
            <div className=" text-2xl font-semibold font-serif">
              <div className="p-3">
                <input
                  id="1"
                  type="checkbox"
                  className="m-3"
                  defaultChecked={uppercase}
                  onChange={() => setUppercase((e) => !e)}
                />
                <label htmlFor="1" className="hover:underline cursor-pointer">Uppercase</label>
              </div>
              <div className="p-3">
                <input
                  id="2"
                  type="checkbox"
                  className="m-3"
                  defaultChecked={lowercase}
                  onChange={() => setLowercase((e) => !e)}
                />
                <label htmlFor="2" className="hover:underline cursor-pointer">Lowercase</label>
              </div>
              <div className="p-3">
                <input
                  type="checkbox"
                  id="3"
                  className="m-3"
                  defaultChecked={number}
                  onChange={() => setNumber((e) => !e)}
                />
                <label htmlFor="3" className="hover:underline cursor-pointer">Number</label>
              </div>
              <div className="p-3">
                <input
                  type="checkbox"
                  id="4"
                  className="m-3"
                  defaultChecked={symbol}
                  onChange={() => setSymbol((e) => !e)}
                />
                <label htmlFor="4" className="hover:underline cursor-pointer">Symbols</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
