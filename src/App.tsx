import NavBar from "./components/NavBar/";
import Footer from "./components/Footer/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
