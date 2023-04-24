import './App.css';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import Home from './components/home';
import Cadastro from './components/cadastro';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

      <h1>Minha Aplicação de CRUD</h1>
      
      <BrowserRouter>
      <Nav variant="pills">
        <Nav.Link as={Link} to="/">Pagina Inicial</Nav.Link>
        <Nav.Link as={Link} to="/cadastro">Cadastros</Nav.Link>
      </Nav>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
