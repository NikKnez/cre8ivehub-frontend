import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaUploader from '//MediaUploader';

const PortfolioEditor = () => {
    const [portfolio, setPortfolio] = useState({
        title: '',
        description: '',
        contentBlocks: [],  // Content blocks will hold text, images, etc.
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPortfolio({ ...portfolio, [name]: value });
    };

    const handleAddContentBlock = (type) => {
        setPortfolio({
            ...portfolio,
            contentBlocks: [...portfolio.contentBlocks, { type, content: '' }],
        });
    };

    const handleContentChange = (index, content) => {
        const newContentBlocks = [...portfolio.contentBlocks];
        newContentBlocks[index].content = content;
        setPortfolio({ ...portfolio, contentBlocks: newContentBlocks });
    };

    const handleSavePortfolio = () => {
        axios.post('/api/portfolios', portfolio)
            .then((response) => {
                alert('Portfolio saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving portfolio:', error);
            });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Portfolio Editor</h1>

            <div className="mt-4">
                <label className="block">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={portfolio.title}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                />
            </div>

            <div className="mt-4">
                <label className="block">Description:</label>
                <textarea
                    name="description"
                    value={portfolio.description}
                    onChange={handleInputChange}
                    className="border p-2 w-full"
                />
            </div>

            <div className="mt-4">
                <h2 className="text-xl">Content Blocks</h2>
                <button onClick={() => handleAddContentBlock('text')} className="btn-primary mt-2">Add Text Block</button>
                <button onClick={() => handleAddContentBlock('image')} className="btn-primary mt-2 ml-2">Add Image Block</button>

                {portfolio.contentBlocks.map((block, index) => (
                    <div key={index} className="mt-4">
                        {block.type === 'text' && (
                            <div>
                                <textarea
                                    value={block.content}
                                    onChange={(e) => handleContentChange(index, e.target.value)}
                                    className="border p-2 w-full"
                                    placeholder="Enter text content"
                                />
                            </div>
                        )}
                        {block.type === 'image' && (
                            <MediaUploader
                                onUpload={(url) => handleContentChange(index, url)}
                                placeholder="Upload an image"
                            />
                        )}
                    </div>
                ))}
            </div>

            <button onClick={handleSavePortfolio} className="btn-primary mt-4">Save Portfolio</button>
        </div>
    );
};

export default PortfolioEditor;
