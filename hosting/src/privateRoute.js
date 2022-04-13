import React from "react";
import { TailSpin } from "react-loader-spinner";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./data/hooks/useAuthContext";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authenticated, loadingAuthState } = useAuthContext();
  console.log(authenticated);
  if (loadingAuthState) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#759B81",
        }}
      >
        <TailSpin
          ariaLabel="loading-indicator"
          type="TailSpin"
          color="#c4c4c4"
          height={100}
          width={100}
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { prevPath: rest.path } }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
