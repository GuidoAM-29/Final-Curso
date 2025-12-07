import React from 'react';
import "../styles/PublicacionForo.css";

function CompPostItem({ post }) {
  return (
    <div className="post-item">
      <h3 className="post-title">{post.titulo}</h3>
      <p className="post-category"><strong>Categoría:</strong> {post.categoria}</p>
      <p className="post-content">{post.contenido}</p>
    </div>
  );
}

export default CompPostItem;
