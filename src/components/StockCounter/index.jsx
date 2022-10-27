import React from 'react';
import './styles.css';

const StockCounter = () => {
    
    let stock = document.getElementById('stock');
    let count = document.getElementById('count');
    
    stock= 5;

    function remove() {
        if(count.value > 0){
            count.value --
        }
    }
    function add() {
        if(count.value < stock)
        count.value ++
    }

  return(
    <div className='container'>
        <div className='stock'>
            <p>Producto</p>
            <p>Stock: {stock}</p>
        </div>
        <div className='counter'>
            <button className='btn1' id='btn1' onClick={remove} >-</button>
            <input type="number" readOnly value={1} id='count'/>
            <button className='btn2' id='btn2'  onClick={add}>+</button>
        </div>
        <button className='carrito'>Agregar al carrito</button>

    </div>
  )
}
export default StockCounter;