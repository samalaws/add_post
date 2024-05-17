import axios from "axios";
axios.defaults.baseURL = "https://countriesnow.space/api/v0.1/countries";

const getCountries = async () => {
    try{
    const url = "/positions"
    return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

const getCities = async (country: string) => {
    try{
    const url = `/cities/q?country=${country}`
    return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

export {
    getCountries, getCities
}