import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Viraj');
  const [text, setText] = useState('');
  return (
    <div>
      <h1>Hello {name}!</h1>
      <button
        onClick={() => {
          setName(text);
        }}
      >
        change name
      </button>

      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
}
