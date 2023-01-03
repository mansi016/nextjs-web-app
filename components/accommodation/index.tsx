import Autocomplete from "react-google-autocomplete";
import { useRouter } from "next/router";
import styles from "./accommodation.module.scss";

export default function Accommodation() {
  const router = useRouter();

  return (
    <>
      <div>
        <h2 className={styles.welcomeMessageWrapper}>Welcome to accommodation</h2>
        <div>
          {/* <Autocomplete
            apiKey="ABcsdfojwdDOSFNOSnowiwbnf" // place your google map api key here
            onPlaceSelected={(place) => console.log(place)}
          /> */}
          <select
            className={styles.selectPlaceWrapper}
            onChange={(e) => {
              router.push(`/student-accommodation/${e.target.value}`);
            }}
          >
            <option value="" disabled selected>
              ---Select Place---
            </option>
            <option value="London">London</option>
            <option value="India">India</option>
            <option value="NewYork">New York</option>
          </select>
        </div>
      </div>
    </>
  );
}
