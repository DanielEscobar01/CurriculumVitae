import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from 'pages';
import { Curriculum } from 'pages/curriculum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/curriculum' element={<Curriculum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
