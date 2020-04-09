import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="Card" key={props.id}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteButton(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
