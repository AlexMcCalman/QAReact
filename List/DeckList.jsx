import React from 'react';

class DeckList extends React.Component {
    constructor() {
        super();

        this.state = {
            initialItems: [
                {name: "Ace of hearts", colour: "red"},
                {name: "Two of hearts", colour: "red"},
                {name: "Three of hearts", colour: "red"},
                {name: "Four of hearts", colour: "red"},
                {name: "Five of hearts", colour: "red"},
                {name: "Six of hearts", colour: "red"},
                {name: "Seven of hearts", colour: "red"},
                {name: "Eight of hearts", colour: "red"},
                {name: "Nine of hearts", colour: "red"},
                {name: "Ten of hearts", colour: "red"},
                {name: "Jack of hearts", colour: "red"},
                {name: "Queen of hearts", colour: "red"},
                {name: "King of hearts", colour: "red"},
                {name: "Ace of spades", colour: "black"},
                {name: "Two of spades", colour: "black"},
                {name: "Three of spades", colour: "black"},
                {name: "Four of spades", colour: "black"},
                {name: "Five of spades", colour: "black"},
                {name: "Six of spades", colour: "black"},
                {name: "Seven of spades", colour: "black"},
                {name: "Eight of spades", colour: "black"},
                {name: "Nine of spades", colour: "black"},
                {name: "Ten of spades", colour: "black"},
                {name: "Jack of spades", colour: "black"},
                {name: "Queen of spades", colour: "black"},
                {name: "King of spades", colour: "black"}
            ],

            items: []
        };
    };

    componentWillMount() {
        this.setState({items: this.state.initialItems});
    };

    filterList(event) {
        var updatedList = this.state.initialItems;

        updatedList = updatedList.filter((item) => {
                          return item.name.toLowerCase().search(
                          event.target.value.toLowerCase()) != -1;
                      });

        this.setState({items: updatedList});
    };

    render() {
        return (
            <div>
                <h1>List</h1>
                <input type="text" placeholder="Pick a card" onChange={this.filterList()}/>
                <List items={this.state.items}/>
            </div>
        );
    };
};

export default DeckList;
