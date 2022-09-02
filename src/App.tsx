import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';

type dataType={
  body:string
  id:number
  title: string
  userId:number
}

function App() {
  const [data, setData] = useState<Array<dataType>>([])
  console.log(data)


  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData([]))
  }


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  },[])

  
  return (
    <div className="App">
      <Button name={"Clean Data"} callback={getData} />
      <ul>
        {data.map(item => {
          return (
            <li key ={item.id}> 
            <span>{item.id} </span>
            <span>{item.title} </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
