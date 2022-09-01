import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [pers, setPers] = useState({});
  const [t, setT] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(
      (resp) => {
        let x = []
        let res = resp.data.results
        console.log(resp.data);
        setPers(resp.data);

        x = res.map(e => e)
        setT(x)
      },
      (error) => {
        console.log('Error');
      }
    );
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {t.map(e => {
        return(<p>{e.id} - {e.name} </p>)
      })}
    </div>
  );
}