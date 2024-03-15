import React from "react";
import { useGetUserQuery } from "../../redux/api/authSlice";
import { useGetReportQuery } from "../../redux/api/reportSlice";

function Login() {
  // const { data } = useGetUserQuery(1);
  const { data } = useGetReportQuery(1);

  console.log(data);
  return <div>get logion page</div>;
}

export default Login;
