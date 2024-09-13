import { useEffect, useState } from 'react';
import axios from 'axios';

const TemplateChooser = ({ onSelectTemplate }) => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch available templates from backend
        axios.get('/api/templates')
            .then(response => {
                setTemplates(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch templates');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading templates...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {templates.map(template => (
                <div key={template.id} onClick={() => onSelectTemplate(template)} className="bg-white p-4 shadow-md cursor-pointer">
                    <img src={template.thumbnailUrl} alt={template.templateName} className="w-full" />
                    <h4 className="text-center mt-2 font-bold">{template.templateName}</h4>
                </div>
            ))}
        </div>
    );
};

export default TemplateChooser;
