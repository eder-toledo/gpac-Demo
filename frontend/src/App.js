import React, { useState } from "react";
import LeftMenu from './components/LeftMenu';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MarketPage from './pages/market';
import MapPage from './pages/map';
import './App.css';
import { CandidatesProvider } from './context/candidates-context';
import Grid from '@material-ui/core/Grid'


function App() {

  const [pageRender, setPageRender] = useState(MapPage);

  return (
    <div className="App">
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
          {pageRender}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default () => <CandidatesProvider><App></App></CandidatesProvider>;
