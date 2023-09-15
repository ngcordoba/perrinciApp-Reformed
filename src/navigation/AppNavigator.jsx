import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";
import WalkerNavigator from "./WalkerNavigator";

const AppNavigator = () => {
    return <AuthNavigator />;

};

export default AppNavigator;