import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import { theme } from './theme';

const useStyles = makeStyles({
  root: {
    color: 'white',
  }
})

export const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={'http://www.example.com'} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button className={classes.root}>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
