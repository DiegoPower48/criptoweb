import React, { useState } from "react";
import CoinValues from "../coinvalues";

export default function Searcher(props) {
  const { datos } = props;

  const [searched, setSearched] = useState("");
  const [lastSearch, setLastSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const position = datos.findIndex((item) =>
      item[1].toLowerCase().includes(inputValue.toLowerCase())
    );

    if (position !== -1) {
      setSearched(datos[position]);
      setLastSearch(true);
    } else {
      console.log("Elemento no encontrado");
      setLastSearch(false);
    }
  };

  return (
    <div className="md:h-96 w-full h-full  grid rounded-lg border-4  md:grid-cols-2  m-10 grid-rows-1 ">
      <div className="text-black   content-center ">
        <form onSubmit={onSubmit}>
          <div className="grid  md:grid-cols-1 md:p-10 p-6 ">
            <input
              className="border-2 h-10 rounded-lg border-yellow-300 text-center"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="border-2 border-black h-10 p-1 rounded-lg font-bold bg-yellow-300 mt-7 active:bg-white active:scale-105 hover:bg-red-400 hover:scale-105"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {!lastSearch ? (
        <></>
      ) : (
        <div
          className=" h-full  p-7  md:border-white
        border-yellow-300 md:border-l-2 md:border-t-0 border-t-2"
        >
          <CoinValues
            name={searched[1]}
            icon={searched[2]}
            price={searched[3]}
            hour={searched[4]}
            day={searched[5]}
            week={searched[6]}
          />
        </div>
      )}
    </div>
  );
}
