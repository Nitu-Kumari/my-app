import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Form, Field } from "react-final-form";
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 150
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },

  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    maxWidth: 300,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 1
  }
});

class Registration extends React.Component {
  state = {
    redirect: false
  };

  onSubmit = async values => {
    //make api call
    const response = await fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });
    await response.json();
    // drop cookie for session management
    const cookies = new Cookies();
    cookies.set("username", values.username, { path: "/" });
    // redirect
    this.setState({ redirect: true });

  };
  required = value => (value ? undefined : "*");
  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/search",
          }}
        />
      );
    }
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, pristine, invalid, submitting }) => (
          <form className={classes.container}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container wrap="col" spacing={10}>
                  <Grid item xs zeroMinWidth>
                  <Typography
                    className={classes.title}
                    color="inherit"
                    noWrap
                  >
                    Welcome Registration Page.
                  </Typography>
                    <Field name="username" validate={this.required}>
                      {({ input, meta }) => (
                        <div>
                          <TextField
                            {...input}
                            label="Username"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                          />
                          {meta.error && meta.touched && (
                            <span style={{ color: "red" }}>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>


                    <Field name="email" validate={this.required}>
                      {({ input, meta }) => (
                        <div>
                          <TextField
                            {...input}
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                          />
                          {meta.error && meta.touched && (
                            <span style={{ color: "red" }}>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>

                    <Field name="password" validate={this.required}>
                      {({ input, meta }) => (
                        <div>
                          <TextField
                            {...input}
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            type="password"
                          />
                          {meta.error && meta.touched && (
                            <span style={{ color: "red" }}>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      disabled={submitting || invalid}
                    >
                      Registration
                    </Button>
                    {/* <br/><br/>
                    Already have account?
                    <Link href="/login" color="blue" className={classes.link}>
                      Click here to login
                    </Link> */}
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </form>
        )}
      />
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registration);