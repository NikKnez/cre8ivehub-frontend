const MediaUploader = () => {
    const handleUpload = (file) => {
        // Handle file upload to the backend
    };

    return (
        <div>
            <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
        </div>
    );
};
