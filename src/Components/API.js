import axios from "axios";

export const fetchData = () => {
  const globalData = fetchglobaldata();
  const countryData = fetchcountrydata();

  return {
    global: wrapPromise(globalData),
    country: wrapPromise(countryData),
  };
};

const wrapPromise = (promise) => {
  let status = "Pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "Pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchcountrydata = () => {
  // console.log("Fetch fetchcountrydata..");
  return axios
    .get(`https://corona.lmao.ninja/v2/countries`)
    .then((res) => res.data)
    .catch((error) => console.log("error"));
};

const fetchglobaldata = () => {
  // console.log("Fetch fetchglobaldata..");
  return axios
    .get(`https://corona.lmao.ninja/v2/all`)
    .then((res) => res.data)
    .catch((error) => console.log("error"));
};
