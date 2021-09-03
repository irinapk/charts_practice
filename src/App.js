import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import PolarAreaChart from "./components/PolarAreaChart";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RadarChart from "./components/RadarChart";
import MixedChart from "./components/MixedChart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "row",
  },
  paper: {
    display: "flex",
    backgroundColor: "#f7fbff",
    padding: theme.spacing(2),
    margin: "10px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "600px",
    minWidth: "600px",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    // backgroundImage:
    //   'url("https://static.vecteezy.com/system/resources/previews/000/204/228/original/abstract-global-tech-background-vector.jpg")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
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
            <Paper className={classes.paper} elevation={10}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper} elevation={10}>
              <PieChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Paper
              className={classes.paper}
              style={{ minWidth: "1400px" }}
              elevation={10}
            >
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper} elevation={10}>
              <PolarAreaChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper} elevation={10}>
              <RadarChart />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper
              className={classes.paper}
              style={{ minWidth: "1400px" }}
              elevation={10}
            >
              <MixedChart />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
