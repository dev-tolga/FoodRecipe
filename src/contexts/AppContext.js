import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { getRecipes } from "../network/requests/recipes";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = async () => {
    const response = await getRecipes();
    if (response && response.status === 200) {
      setRecipes(response.data);
      console.log("recipes", response.data);
    }
  };
  useEffect(() => {
    getAllRecipes();
  }, []);

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    recipes,
    setRecipes,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
