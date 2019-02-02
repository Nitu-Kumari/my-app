import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "../component/Header";
import Results from "../component/Results";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({});

class Search extends React.Component {
  state = {
    query: ""
  };

  handleSearch = query => this.setState({ query });

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header handleSearch={this.handleSearch} />
        <Results query={this.state.query} />
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);

