import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "row",
    // overflow: "auto",
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    margin: "10px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "600px",
    minWidth: "600px",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <div className="App">
        <header className="App-header">DASHBOARD</header>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
