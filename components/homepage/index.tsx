import getCountryList from "../../helpers/api/apiData";
import styles from "./homepage.module.scss";

export default function Homepage() {
  const ReqData = {};
  const countryData = getCountryList(ReqData);
  console.log("countryData", countryData);

  return (
    <>
      <div className={styles.homepageWrapper}>
        <h2>Welcome to homepage</h2>
        <div>This is the description.</div>
      </div>
    </>
  );
}
