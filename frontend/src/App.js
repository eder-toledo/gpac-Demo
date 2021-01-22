import LeftMenu from './components/LeftMenu';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import './App.css';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'


function App() {
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
        <Grid>
          <SearchBar />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
