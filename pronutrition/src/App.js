import React from 'react';
import './App.css';
import Search from './components/Search';
import Food from './components/Food';
// import { render}from 'react-dom';

function App(){
  const data = [{name:"Pizza",calories:"400cal",img:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",show:true},
  {name:"Pasta",calories:"200cal",img:"https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200.jpg",show:true},
  {name:"Noodles",calories:"600cal",img:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x500.jpg",show:true},
  {name:"Cake",calories:"500cal",img:"https://tatyanaseverydayfood.com/wp-content/uploads/2018/07/Summer-Sangria-Cake-4.jpg",show:true}]; 
  //render(){
  return(
    <div className="App">
      <Food content={data}/>
    </div>
  );
//}
}
export default App;