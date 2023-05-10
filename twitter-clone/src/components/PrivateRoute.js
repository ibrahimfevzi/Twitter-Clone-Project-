import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("s11g2_0223") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
