import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-900 text-white h-screen">
            <div className="p-4">
                <h2 className="text-xl font-bold">Cre8iveHub Admin</h2>
            </div>
            <nav className="mt-10">
                <ul>
                    <li className="p-2 hover:bg-gray-700"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="p-2 hover:bg-gray-700"><Link to="/portfolio-editor">Portfolio Editor</Link></li>
                    <li className="p-2 hover:bg-gray-700"><Link to="/templates">Templates</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
