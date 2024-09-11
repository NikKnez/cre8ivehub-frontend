const PortfolioManager = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        // Fetch portfolios from the backend
    }, []);

    return (
        <div>
            {portfolios.map(portfolio => (
                <div key={portfolio.id}>
                    <h2>{portfolio.title}</h2>
                    <p>{portfolio.description}</p>
                </div>
            ))}
            <button>Add New Portfolio</button>
        </div>
    );
};
