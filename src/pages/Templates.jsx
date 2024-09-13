import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Templates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axios.get('/api/templates')
            .then(response => setTemplates(response.data))
            .catch(error => console.error('Error fetching templates:', error));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Choose a Template</h1>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {templates.map((template) => (
                    <div key={template.id} className="bg-white p-4 shadow-md">
                        <img src={template.thumbnailUrl} alt={template.name} />
                        <h3 className="mt-2 font-bold">{template.name}</h3>
                        <button className="btn-primary mt-4">Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Templates;
