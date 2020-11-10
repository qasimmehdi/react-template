import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  console.log(useSelector(state => state.user));

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
