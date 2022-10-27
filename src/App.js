import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from './components/Navbar';
export default function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer color={"#ddd"} saludo={"Bienvenido, aqui encontraras articulos de cosmetica, perfumeria y mucho mas! "}/>
  </>
  )
}