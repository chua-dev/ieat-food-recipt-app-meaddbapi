import './App.scss';

// React Router
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';


// React Pages
import { HomePage, ErrorPage, CategoryPage, DishDetailsPage } from "./pages/index";

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element = { <HomePage/> } />
        <Route path='/dish/category/:name' element = { <CategoryPage /> } />
        <Route path='/dish/:id' element = { <DishDetailsPage/>} />
        {/* Error Page (*) Match any not found path */}
        <Route path='*' element = { <ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
