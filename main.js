import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter/Counter.jsx';
import DeckList from './List/DeckList.jsx';
import List from './List/List.jsx';

import App from './App.jsx';
import ProductDetail from './NBGCatalogue/ProductDetail.jsx';
import CategoryRow from './NBGCatalogue/CategoryRow.jsx';
import ProductRow from './NBGCatalogue/ProductRow.jsx';
import ProductTable from './NBGCatalogue/ProductTable.jsx';
import SearchBar from './NBGCatalogue/SearchBar.jsx';
import SearchableTable from './NBGCatalogue/SearchableTable.jsx';

var PRODUCTS = [
    {category: 'Gnomes', id: 1, name: 'Sexy Gnome', price: 69.69, quantity: 69, description: 'A provocative gnome to hide around your garden.'},
    {category: 'Gnomes', id: 2, name: 'Fishing Gnome', price: 30, quantity: 200, description: 'A tradition gnome to liven up any pond.'},
    {category: 'Landscaping', id: 3, name: 'Sexy Fountain', price: 1000, quantity: 12, description: 'An excellent centrepiece, perfect for a provocateur.'},
    {category: 'Landscaping', id: 4, name: 'Rose Arch', price: 60, quantity: 0, description: 'A simple wooden arch to train roses across.'},
    {category: 'Gnomes', id: 5, name: 'Giant Gnome', price: 100.90, quantity: 300, description: 'A truely gigantic gnome to intimidate unsuspecting visitors.'},
    {category: 'Gnomes', id: 6, name: 'Green Gnome', price: 38.50, quantity: 127, description: 'A leprechaun gnome to bring good luck your garden.'},
    {category: 'Furniture', id: 7, name: 'Wooden Table', price: 75, quantity: 50, description: 'A table so that you can eat outside and enjoy the good weather.'},
    {category: 'Furniture', id: 8, name: 'Wooden Chair', price: 23, quantity: 80, description: 'A chair so that you can sit outside and enjoy the good weather.'},
    {category: 'Clearance', id: 9, name: 'Fishing Rod', price: 12.76, quantity: 4, description: 'An imported fishing rod. End of the line, so on clearance'},
    {category: 'Accessories', id: 10, name: 'Gnome Cleaning Kit (Exclusive)', price: 120, quantity: 10, description: 'A premium cleaning kit for cleaning all gnomes and gnome accessories.'},
    {category: 'Accessories', id: 11, name: 'Gnome Cleaning Kit (Basic)', price: 10, quantity: 10, description: 'A basic cleaning kit, suitable for beginner gnome cleaners.'},
    {category: 'Animals', id: 12, name: 'Clownfish', price: 345, quantity: 0, description: "Nemo's dad."}
]

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('app'));
