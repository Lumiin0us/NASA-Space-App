import React from "react";
import ResponsiveAppBar from "./navbar";
import FetchingApi from "./fetch-api";
function HomeScreen()
{
    return <>
        <ResponsiveAppBar></ResponsiveAppBar>
        <FetchingApi></FetchingApi>
        <h1>WAGWAN</h1>
    </>
}

export default HomeScreen