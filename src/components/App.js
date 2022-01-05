import React from "react";
import CreateLink from "./CreateLink";
import Header from "./Header";
import Search from "./Search";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import Login from "./Login";

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" render={() => <Navigate to="/new/1" />} />

          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
