import React from 'react';
import './App.css';
import { PostService } from './services/PostService';
import Header from './globals/Header';
import {Posts} from './components/Post';
function App() {
  const postService = new PostService();
  return (
    <>
    <Header />
    <Posts />
    </>
  );
}

export default App;
