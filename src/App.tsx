import NavBar from "./components/NavBar/";
import Footer from "./components/Footer/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/landing-page/" exact component={Home} />
        <Route path="/landing-page/services" exact component={Services} />
        <Route path="/landing-page/products" exact component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
