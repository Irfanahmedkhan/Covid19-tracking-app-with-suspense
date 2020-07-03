import axios from "axios";

export const fetchData = () => {
  const ApiPromise = fetchFromAPI();

  return {
    user: wrapPromise(ApiPromise),
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

const fetchFromAPI = () => {
  console.log("Fetch User..");
  return axios
    .get(`https://covid19.mathdro.id/api`)
    .then((res) => res.data)
    .catch((error) => console.log("error"));
};
