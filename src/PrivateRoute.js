import React from "react";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import { Route, Redirect} from "react-router-dom";

class PrivateRoute extends React.Component {
  state = {
    loading: true,
    authenticated: false,
  };
  getUserDetails = async () => {
    // Read username from cookie
    const cookies = new Cookies();
    const username = cookies.get("username");

    //make api call
    const response = await fetch(`http://localhost:5000/users/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    if (data) {
      this.setState({ authenticated: true, loading: false });
    } else {
        this.setState({ authenticated: false, loading: false });
    }
  };
  async componentDidMount() {
    await this.getUserDetails();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    console.log('loading ', this.state.loading)
    console.log('authenticated ', this.state.authenticated)
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    return (
        <Route
        {...rest}
        render={props =>
          this.state.authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

PrivateRoute.propTypes = {};

export default PrivateRoute;