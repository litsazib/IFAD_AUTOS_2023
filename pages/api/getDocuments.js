const axios = require("axios");

export const getDocuments = async () => {
  let EndPoint = `https://autosapi.ifadgroup.com/documents`;
  return axios
    .get(EndPoint)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export const Mission = async () => {
  let EndPoint = `https://autosapi.ifadgroup.com/content-module/7`;
  return axios
    .get(EndPoint)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
