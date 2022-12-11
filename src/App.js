
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/React/Navbar';
import Home from './components/React/Home';
import PostBlog from './components/React/PostBlog';
import History from './components/React/History';
import Dashboard from './components/React/Dashboard';
import BlogLIst from './components/React/BlogLIst';
import ProductCardFull from './components/React/ProductCardFull';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/post' element={<PostBlog />} />
          <Route path='/history' element={<History />} />
          <Route path='/blog/:id' element={<ProductCardFull />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='bloglist' element={<BlogLIst />} />
            <Route index element={<BlogLIst />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
