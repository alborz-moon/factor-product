import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Invoice from './components/Invoice';
import ProductDetails from './components/ProductDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Invoice} />
                <Route path="/products/:id" component={ProductDetails} />
            </Switch>
        </Router>
    );
}

export default App;
