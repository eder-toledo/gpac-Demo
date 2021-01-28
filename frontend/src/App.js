import React, { useState } from "react";
import LeftMenu from './components/LeftMenu';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MarketPage from './pages/market';
import MapPage from './pages/map';
import NewPage from './pages/new';
import Index from './pages/index'
import './App.css';
import { CandidatesProvider } from './context/candidates-context';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [pageRender, setPageRender] = useState(NewPage);

  return (
    <div className="App">
      <Router>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="nowrap"
        >

          <Grid item xs={2}>
            <LeftMenu />
          </Grid>
          <Grid item xs={10}>
            <SearchBar />

            <Switch>
              <Route exact path="/">
                <Index />
              </Route>
              <Route path="/market/:id" component={MarketPage} />
              <Route path="/map/:id" component={MapPage} />
              <Route path="/new/:id" component={NewPage} />
            </Switch>
          </Grid>
        </Grid>
        <Footer />
      </Router>
    </div>
  );
}

export default () => <CandidatesProvider><App></App></CandidatesProvider>;
