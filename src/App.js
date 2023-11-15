import {useEffect} from 'react';

function App() {


  useEffect(()=>{
    let celsius =document.getElementById('celsius'); 
    let fahrenheit =document.getElementById('fahrenheit'); 
    let kelvin =document.getElementById('kelvin'); 
    celsius.oninput =function() 
    { 
        let f =(parseFloat(celsius.value)*9)/5+32; 
        fahrenheit.value =parseFloat(f.toFixed(2)); 
        let k =(parseFloat(celsius.value)+273.15); 
        kelvin.value=parseFloat(k.toFixed(2)); 
    } 
    fahrenheit.oninput =function() 
    { 
        let c =((parseFloat(fahrenheit.value)-32)*5)/9; 
        celsius.value=parseFloat(c.toFixed(2)); 
        let k =(parseFloat(fahrenheit.value)-32)*5/9+273.15; 
        kelvin.value=parseFloat(k.toFixed(2)); 
    } 
    kelvin.oninput=function() 
    { 
        let f=(parseFloat(kelvin.value)-273.15)*9/5+32; 
        fahrenheit.value=parseFloat(f.toFixed(2)); 
        let c=(parseFloat(kelvin.value)- 273.15); 
        celsius.value=parseFloat(c.toFixed(2)); 
    } 
  },[])


  return (
      <div class="container">
        <div class="converter-row"> 
            <div class="col"> 
                <label>Fahrenheit</label> 
                <input type="number" id="fahrenheit"/> 
            </div> 
            <div class="col"> 
                <label>Celsius</label> 
                <input type="number" id="celsius"/> 
            </div> 
            <div class="col"> 
                <label>Kelvin</label> 
                <input type="number" id="kelvin"/> 
            </div> 
        </div> 
      </div> 
  );
}

export default App;
