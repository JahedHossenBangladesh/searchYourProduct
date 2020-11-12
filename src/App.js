import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card-list/Card';
import Search from './Components/Search/Search';




function App() {

  const [gost,setGost] = useState({
    monsters:[],
    searchFiled:''
  });
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setGost({monsters:data}))


  },[]
  )
 const {monsters,searchFiled} = gost;
  
 const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
  return (
    <div className="App ">
    
 <Search placeholder= 'search monsters' handleChange ={e => setGost({searchFiled : e.target.value })}></Search>

   <Card detail={filterMonster}/>
     
      
      
    </div>
  );
}

export default App;
