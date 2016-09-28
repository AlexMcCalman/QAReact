import React from 'react';
import List from './List.jsx';

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
                {name: "King of spades", colour: "black"},

                {name: "Ace of diamonds", colour: "red"},
                {name: "Two of diamonds", colour: "red"},
                {name: "Three of diamonds", colour: "red"},
                {name: "Four of diamonds", colour: "red"},
                {name: "Five of diamonds", colour: "red"},
                {name: "Six of diamonds", colour: "red"},
                {name: "Seven of diamonds", colour: "red"},
                {name: "Eight of diamonds", colour: "red"},
                {name: "Nine of diamonds", colour: "red"},
                {name: "Ten of diamonds", colour: "red"},
                {name: "Jack of diamonds", colour: "red"},
                {name: "Queen of diamonds", colour: "red"},
                {name: "King of diamonds", colour: "red"},

                {name: "Ace of clubs", colour: "black"},
                {name: "Two of clubs", colour: "black"},
                {name: "Three of clubs", colour: "black"},
                {name: "Four of clubs", colour: "black"},
                {name: "Five of clubs", colour: "black"},
                {name: "Six of clubs", colour: "black"},
                {name: "Seven of clubs", colour: "black"},
                {name: "Eight of clubs", colour: "black"},
                {name: "Nine of clubs", colour: "black"},
                {name: "Ten of clubs", colour: "black"},
                {name: "Jack of clubs", colour: "black"},
                {name: "Queen of clubs", colour: "black"},
                {name: "King of clubs", colour: "black"}
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
                <h1>Deck List</h1>
                <input type="text" placeholder="Pick a card" onChange={this.filterList.bind(this)}/>
                <List items={this.state.items}/>
            </div>
        );
    };
};

export default DeckList;
