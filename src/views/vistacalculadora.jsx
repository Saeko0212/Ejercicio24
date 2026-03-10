import React, { useState } from 'react';
import Entradaproducto from '../components/entradaproducto';

export default function vistacalculadora() {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);

  const TAX_RATE = 0.07; 

  const subtotal = price1 + price2 + price3;
  const totalTaxes = subtotal * TAX_RATE;
  const totalWithTaxes = subtotal + totalTaxes;

  return (
    <div>
      <h2>Tienda de productos</h2>
      
      {}
      <Entradaproducto label="Producto 1" value={price1} onChange={setPrice1} />
      <Entradaproducto label="Producto 2" value={price2} onChange={setPrice2} />
      <Entradaproducto label="Producto 3" value={price3} onChange={setPrice3} />

      <div>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Impuestos (7%): ${totalTaxes.toFixed(2)}</p>
        <h3>Total a Pagar: ${totalWithTaxes.toFixed(2)}</h3>
      </div>
    </div>
  );
}