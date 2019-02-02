import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Result from "../component/Result";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({});

class Results extends React.Component {
  state = {
    query: this.props.query,
    tags: "story",
    page: 1,
    results: []
  };

  searchNews = async () => {
      const {query, tags, page} = this.state;
    //make api call
    const response = await fetch(
      `http://localhost:5000/search?query=${query}&tags=${tags}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();

    const results = data.hits.map(res => ({
      title: res.title,
      url: res.url,
      points: res.points,
      created_at_i: res.created_at_i,
      num_comments: res.num_comments
    }));
    this.setState({ results });
  };
  componentDidMount() {
    this.searchNews();
  }
  componentWillReceiveProps() {
      this.setState({query: this.props.query});
    this.searchNews();
  }
  render() {
    return (
      <Grid container wrap="col" justify="center" spacing={10}>
        <Grid item xs={12} sm={10} md={8}>
          {this.state.results.length === 0 && <span>Loading...</span>}
          {this.state.results.map(r => (
            <Result key={r.title} result={r} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired
};

export default withStyles(styles)(Results);