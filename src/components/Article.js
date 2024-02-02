// Article.js
import React from "react";

function Article({ title, date, preview }) {
  // Use a default date value if none is provided
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      {/* Add other components for the full content, author, etc. as needed */}
    </article>
  );
}

export default Article;
