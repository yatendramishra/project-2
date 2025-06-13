import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="home-container">
            <header className="header">
                <h1>My Website</h1>
                <button className="menu-button" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>☰</button>
            </header>

            <aside className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <nav>
                    <Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link>
                    <Link to="/login" onClick={() => setIsDrawerOpen(false)}>Login</Link>
                    <Link to="/about" onClick={() => setIsDrawerOpen(false)}>About</Link>
                    <Link to="/to-do" onClick={() => setIsDrawerOpen(false)}>To-do</Link>
                    <button onClick={() => setIsDrawerOpen(false)}>❌ Close</button>
                </nav>
            </aside>

            <main className="main-content">
                <h2>Home Page</h2>
                <p>Welcome to the homepage!</p>
            </main>

            <footer className="footer">
                <p>© 2025 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
