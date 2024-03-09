import API from "../api/api.js";

async function getDataByName(name) {
  try {
    const response = await fetch(API + name);
    const json = await response.json();
    const gender = json.gender;

    const isGenderExists = gender !== null;

    if (isGenderExists) {
      return gender;
    } else {
      throw new Error('Not defined gender');
    }
  } catch(error) {
    return error.message
  }
};

export default getDataByName;