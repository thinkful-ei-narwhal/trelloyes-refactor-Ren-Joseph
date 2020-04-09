import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
        ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm'],
      },
    ],
    allCards: {
      a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
      b: { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      c: { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      d: { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      e: { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      f: { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      g: { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      h: { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      i: { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      j: { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      k: { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      l: { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      m: { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  };

  deleteReference = (id) => {
    let newLists = this.state.lists.map((list) => {
      return {
        id: list.id,
        header: list.header,
        cardIds: list.cardIds.filter((item) => item !== id),
      };
    });
    this.setState({
      lists: newLists,
    });
  };

  newRandomCard = () => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    };
  };
  addNewCard = (id) => {
    const card = this.newRandomCard();
    const listItem = this.state.lists.find((list) => list.id === id);
    const newId = listItem.cardIds.push(card.id);
    this.state.lists.map((item, index) => (index === id - 1 ? newId : item));
    this.setState({
      allCards: { ...this.state.allCards, [card.id]: card },
    });
  };

  render() {
    console.log('workin', this.state.lists, this.state.allCards);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => this.state.allCards[id])}
              deleteButton={this.deleteReference}
              addCard={this.addNewCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
