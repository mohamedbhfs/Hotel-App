import axios from 'axios';
import React from 'react';
export default function RequestApi(critere:string,setresultat:React.Dispatch<React.SetStateAction<[{[key:string]:any}]|null>>) {
        axios.get(`https://overpass-api.de/api/interpreter?data=[out:json];node["tourism"="hotel"]${critere};out;`)
        .then((res) => {
           setresultat(res.data.elements);})
          .catch((err) => {
            console.error('Erreur API:', err);
          });
}
