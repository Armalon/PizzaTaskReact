import React from 'react';

import Cart from './components/Cart'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Logo from './components/Logo'

function App() {
    return (
        <div>
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <Logo></Logo>

                <Navigation></Navigation>

                <Login></Login>

                <Cart></Cart>
            </div>
        </div>
    );
}

export default App;
