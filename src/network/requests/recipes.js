import { env } from "../env/env";
import { recipeService } from "../services/recipeService";

export const getRecipes = async () => {
  return await recipeService.get(env.endpoint, "recipes");
};

export const getRecipeById = async (id) => {
  return await recipeService.get(env.endpoint, `recipes/${id}`);
};

export const postRecipe = async (data) => {
  return await recipeService.post(env.endpoint, "recipes", data);
};

export const updateRecipe = async (id, data) => {
  return await recipeService.put(env.endpoint, `recipes/${id}`, data);
};

export const deleteRecipe = async (id) => {
  return await recipeService.delete(env.endpoint, `recipes/${id}`);
};
