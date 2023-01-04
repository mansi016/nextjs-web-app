import { environment } from "../../environment";
import axios from "axios";
import { UserInfo } from "../../model/userModel";

let userInfo: UserInfo;

const UserSession = () => {
  const userData = {
    Active: "1",
    CityID: "0",
    CityName: "",
    CountryID: "0",
    CountryName: "",
    Course: null,
    CurrentUniversity: null,
    DateOfBirth: "",
    DestinationUniversity: null,
    Email: "mansi167.rejoice@gmail.com",
    File: null,
    FirstName: "Mansi",
    LastName: "Donga",
    MiddleName: "",
    Nationality: null,
    PhoneNo: "8980620772",
    PhoneNo_CountryCode: "+91",
    Photo:
      "https://ocxeeadmin.s3.eu-west-2.amazonaws.com/DefaultImage/no_image.png",
    StateID: "0",
    StateName: "",
    StudentCode: "",
    Token: "zKZyKCLeUCXBdbIAQaR/klWFAZK6Z1xWvVWnHwfwXAaM2D68+FZJyuzPQUpGJoI0",
    UserId: "39648",
  };
  localStorage.setItem("UserInfo", JSON.stringify(userData));

  if (localStorage.getItem("UserInfo")) {
    let localStorageData: any = localStorage.getItem("UserInfo");
    userInfo = JSON.parse(localStorageData);
    console.log("userinfo", userInfo);

    return userInfo;
  } else {
    return userInfo;
  }
};

const ApiPostHandler = async (ReqData: any = {}) => {
  //   ReqData.Token = environment.DefaultToken;
  //   ReqData.UserId = "39648";
    UserSession();
//   let localStorageData: any = localStorage.getItem("UserInfo");
//   userInfo = JSON.parse(localStorageData);
//   console.log("userinfo", userInfo);

  ReqData.Token =
    userInfo?.Token == "" ? environment.DefaultToken : userInfo?.Token;
  ReqData.UserId = userInfo?.UserId;
  ReqData.Source = environment.Source;
  ReqData.AppVersion = environment.AppVersion;
  ReqData.DeviceId = environment.DeviceId;
  ReqData.DeviceToken = environment.DeviceToken;

  console.log("ReqData", ReqData);

  const headers = {
    "Content-Type": "application/json",
    Authorization: ReqData.Token,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(ReqData),
  };

  //   const res = await fetch(
  //     "https://api.ocxee.com/api/v1.2/GetCountries",
  //     options
  //   );

  axios({
    url: "/GetCountries",
    baseURL: "https://api.ocxee.com/api/v1.2",
    headers: headers,
    method: "post",
    data: ReqData,
  })
    .then(function (response) {
      console.log("respoonse", response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  //   console.log("RESPONSE FROM FETCH REQUEST", res);
};

export default ApiPostHandler;
