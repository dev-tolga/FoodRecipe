import axios from "axios";

export const recipeService = {};

recipeService.get = async (url, endpoint) => {
  let response = null;
  try {
    response = await axios.get(url + endpoint);
    return response;
  } catch (error) {
    `\recipeService.getAll ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response;
  }
};

recipeService.post = async (url, endpoint, data, header = null) => {
  let response = null;
  try {
    response = await axios.post(url + endpoint, data, { ...header });
    return response;
  } catch (error) {
    `\recipeService.post ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response;
  }
};

recipeService.put = async (url, endpoint, data,header= null) => {
  let response = null;
  try {
    response = await axios.put(url + endpoint, data, { ...header });
    return response;
  } catch (error) {
    `\recipeService.put ${url + endpoint}`,
      "\nerror: ",
      error,
      "\nresponse: ",
      response;
  }
};

recipeService.delete = async (url, endpoint, data,header= null) => {
    let response = null;
    try {
        response = await axios.delete(url + endpoint, { ...header });
        return response;
    } catch (error) {
        `\recipeService.delete ${url + endpoint}`,
        "\nerror: ",
        error,
        "\nresponse: ",
        response;
    }
    }
