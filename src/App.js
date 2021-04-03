import { Navbar } from './component';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router >
  );
}

export default App;
