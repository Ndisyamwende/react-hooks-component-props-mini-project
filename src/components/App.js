import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About
      imageSrc={blogData.logo || "https://via.placeholder.com/215"}
      aboutText={blogData.about}
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
