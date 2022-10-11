import React, { useState, useEffect } from 'react';
import './Personagens.css'
import axios from 'axios';

export default function App() {
  const [pers, setPers] = useState({});
  const [t, setT] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(
      (resp) => {
        let x = []
        let res = resp.data.results
        setPers(resp.data);

        x = res.map(e => e)
        setT(x)
      },
      (error) => {
        console.log('Error');
      }
    );
  }, []);

  console.log(`Teste ${pers}`)

  return (
    <div class="main">
      {t.map(e => {
       return(<div class='box'>
        <img src={e.image} alt="" />
        <p>Nome: {e.name}</p>
        <p>Status: {e.status}</p>
        <p>Especie: {e.species}</p>   
        </div>)
      })}
    </div>
  );
}