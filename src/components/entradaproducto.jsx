import React from 'react';

export default function Entradaproducto({ label, value, onChange }) {
  return (
    <div>
      <label>{label}: $</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min="0"
      />
    </div>
  );
}