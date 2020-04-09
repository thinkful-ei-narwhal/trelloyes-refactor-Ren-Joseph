import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props) {
  return (
    <section className="List">
      <header className="List-header">{props.header}</header>
      <div className="List-cards">
        <button
          onClick={() => {
            props.addCard(props.id);
          }}
        >
          Create Card
        </button>
        {props.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            deleteButton={props.deleteButton}
          />
        ))}
      </div>
    </section>
  );
}
