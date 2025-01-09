import React, { useState } from "react";
import CoinValues from "../coinvalues";

export default function Searcher(props) {
  const { datos } = props;

  const [searched, setSearched] = useState("");
  const [lastSearch, setLastSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault(); // Prevenir que el formulario recargue la página
    console.log(datos);
    console.log(inputValue); // Verificar el valor ingresado

    // Buscar el índice del elemento que contiene el valor ingresado
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
    <div className="md:h-96 w-full grid rounded-lg border-4  md:grid-cols-2  m-10 sm:grid-rows-2 grid-cols-1 h-full">
      <div className="text-black">
        <form onSubmit={onSubmit}>
          <div className="grid  md:grid-cols-1 px-10 h-96 content-center">
            <input
              className="border-2 h-10 rounded-lg border-yellow-300 text-center"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="border-2 border-black h-10 p-1 rounded-lg font-bold bg-yellow-300 mt-7 active:bg-white active:scale-105 "
              type="submit"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      {!lastSearch ? (
        <div></div>
      ) : (
        <div className=" p-5 h-96 text-center">
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
