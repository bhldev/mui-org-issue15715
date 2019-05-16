import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import { theme } from './theme';
const useStyles = makeStyles({
    root: {
        color: 'white',
    }
});
export const App = () => {
    const classes = useStyles();
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("img", { src: 'http://www.example.com', className: "App-logo", alt: "logo" }),
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.js"),
                    " and save to reload."),
                React.createElement(Button, { className: classes.root },
                    React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))))));
};
export default App;
//# sourceMappingURL=App.js.map