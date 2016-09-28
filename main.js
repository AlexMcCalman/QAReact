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
    {category: 'Landscaping', id: 4, name: 'Rose Arch', price: 60, quantity: 80, description: 'A simple wooden arch to train roses across.'}
]

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('app'));
