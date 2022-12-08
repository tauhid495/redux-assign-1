
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/React/Navbar';
import Home from './components/React/Home';
import Post from './components/React/Post';
import History from './components/React/History';
import Dashboard from './components/React/Dashboard';
import BlogLIst from './components/React/BlogLIst';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='bloglist'element={<BlogLIst/>}/>
            <Route index element={<BlogLIst/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
