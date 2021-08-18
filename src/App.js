import React from "react";
import "./App.css";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AddBlog from "./pages/addBlog";
import DeleteBlog from "./pages/deleteBlog";
import UpdateBlog from "./pages/updateBlog";
import NoMatch from "./pages/no-match";
import { BrowserRouter as Router ,Route, Link , Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>Blogs GeekPlaform</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/createNewBlog" component={AddBlog} />
          <Route exact path="/updateBlog:slug" component={UpdateBlog} />
          <Route exact path="/deleteBlog:slug" component={DeleteBlog} />
          <Route path="/:slug" component={Blog} />
          <Route path="/404" component={NoMatch} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
