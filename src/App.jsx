import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PortfolioEditor from './components/PortfolioEditor';  // Add Portfolio Editor
import TemplateChooser from './components/TemplateChooser';  // Add Template Chooser

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/portfolio-editor" element={<PortfolioEditor />} />  {/* New Route */}
                <Route path="/templates" element={<TemplateChooser />} />  {/* New Route */}
            </Routes>
        </Router>
    );
}

export default App;
