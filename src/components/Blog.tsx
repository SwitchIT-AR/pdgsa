import React from 'react';

interface BlogProps {
    data: {
        blogTitle: string;
        blogPosts: string;
    };
}

const Blog: React.FC<BlogProps> = ({ data }) => {
    const blogPosts = data.blogPosts.split('|');

    return (
        <div className="blog container my-5">
            <h2 className="text-center mb-4">{data.blogTitle}</h2>
            <div className="row">
                {blogPosts.map((post, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={post} className="card-img-top" alt={`Blog Post ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
