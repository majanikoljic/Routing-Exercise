import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ContentPage from './ContentPage';

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:type/:id" element={<ContentPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
