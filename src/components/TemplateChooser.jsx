const TemplateChooser = ({ onSelectTemplate }) => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        // Fetch available templates from backend
    }, []);

    return (
        <div>
            {templates.map(template => (
                <div key={template.id} onClick={() => onSelectTemplate(template)}>
                    <img src={template.thumbnailUrl} alt={template.templateName} />
                    <h4>{template.templateName}</h4>
                </div>
            ))}
        </div>
    );
};
