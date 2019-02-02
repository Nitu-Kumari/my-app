import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  result: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left'
  },
});
  
class Result extends React.Component {
render(){
  const { classes, result } = this.props;

return(
  <div className={classes.result} elevation={1}>
          <Typography variant="h6" component="h3">{result.title}</Typography>
          <Typography component="p">
          {result.point} point | be used to build | 6 years | {result.num_comments} comments | {" "}
            <Link href={result.url} color="blue" className={classes.link}>
              {result.url}
            </Link>
          </Typography>
          <hr/>
        </div>
    )
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);