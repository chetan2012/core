import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LocationManagerObj from "../LocationManager";
import { injectIntl } from "react-intl";

class RouteRenderer extends React.PureComponent {
  componentDidMount() {
    LocationManagerObj.platformLocalIntl = this.props.intl;
  }

  render() {
     return this.props.routes.map((route, i) => {
        const { access, ...restProps } = route;
        if (access) {
          return (
            <PrivateRoute
              key={i}
              store={this.props.store}
              access={access}
              {...restProps}
            />
          );
        }

        return (
          <Route
            key={i}
            {...restProps}
          />
        );
      });
  }
}

export default injectIntl(RouteRenderer);

RouteRenderer.propTypes = {
  routes: PropTypes.any,
  store: PropTypes.any,
  intl: PropTypes.any
};