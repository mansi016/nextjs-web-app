export class Response {
  status: string = "0";
  alert: string = "";
  message: string = "";
  token: string = "";
  data: any = {};
}

export class UserInfo {
  UserId: string = "0";
  FirstName: string = "";
  MiddleName: string = "";
  LastName: string = "";
  Email: string = "";
  PhoneNo_CountryCode: string = "";
  PhoneNo: string = "";
  Photo: string = "";
  DateOfBirth: string = "1992-02-04";
  Gender: string = "";
  CountryID: string = "";
  CountryName: string = "";
  StateID: string = "";
  StateName: string = "";
  CityID: string = "";
  CityName: string = "";
  Location: string = "";
  Active: string = "";
  consultant_info: any = new consultant_info();
  Token: string = "";
  File: string = "";
  OldFile: string = "";
  IsStudentVerify: number = 0;
  Nationality: string = "";
  CurrentUniversity: string = "";
  DestinationUniversity: string = "";
  YearofStudy: string = "";
  Course: string = "";
  GI_FirstName: string = "";
  GI_LastName: string = "";
  GI_Relationship: string = "";
  GI_DateofBirth: string = "0000-00-00";
  GI_EmailAddress: string = "";
  GI_PhoneNumber: string = "";
  GI_Address: string = "";
  GI_City: string = "";
  GI_State: string = "";
  GI_Postalcode: string = "";
  GI_Country: string = "";
  Mail_Address: string = "";
  Mail_City: string = "";
  Mail_State: string = "";
  Mail_Postalcode: string = "";
  Mail_Country: string = "";
  StudentCode: string = "";
  FormProgress: number = 0;
}

export class consultant_info {
  ChannelPartnerID: string = "0";
  Name: string = "";
  Email: string = "";
  Photo: string = "";
  PhoneNoCode: string = "";
  PhoneNo_CountryCode: string = "";
  PhoneNo: string = "";
  CompanyName: string = "";
  FirstName: string = "";
  LastName: string = "";
  Password: string = "";
  ConfirmPassword: string = "";
  SubDomainName: string = "";
}

export class IsRemember {
  UserName: string = "";
  UserPassword: string = "";
  IsRemember: boolean = false;
}

export class PageDetails {
  Description: string = "";
  HtmlContent: string = "";
  MetaDes: string = "";
  MetaKeyword: string = "";
  MetaTitle: string = "";
  PageName: string = "";
  PageSlug: string = "";
}
