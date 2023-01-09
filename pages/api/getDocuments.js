const axios = require("axios");

export const getDocuments = async () => {
  let EndPoint = `http://cms.demo.api.net.bd/documents`;
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
  let EndPoint = `http://autosapi.ifadgroup.com:8001/content-module/7`;
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
