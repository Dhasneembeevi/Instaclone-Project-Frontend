import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import AddPost from "./AddPost/AddPost";
import ViewPost from "./ViewPost/ViewPost";
import Landing from "./LandingPage/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>}/>
        <Route path="/post" element={<AddPost/>} />
        <Route path="/view" element={<ViewPost/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
