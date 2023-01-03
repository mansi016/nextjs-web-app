import Image from "next/image";
import googlePayImage from "/public/assets/images/google-pay.webp";
import appStoreImage from "/public/assets/images/app-store.webp";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faYoutubeSquare,
  faSquareYoutube,
  faTwitter,
  faLinkedinIn,
  faInstagramSquare,
  faInstagram,
  faFacebook,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footerWrapper">
        {/* <div className="footerLinksWrapper">
          <div className="startExploring">Start Exploring OCXEE Today</div>
        </div> */}
        <div className={styles.socialLinksWrapper}>
          <div className={styles.playStoreWrapper}>
            <Image src={googlePayImage} alt="Google Play Store" />
            <Image src={appStoreImage} alt="App Store" />
          </div>

          <div className={styles.followUsWrapper}>
            <div className="followUsText">Follow us on:</div>
            <div className={styles.followUsImagesWrapper}>
              <FontAwesomeIcon
                icon={faYoutube}
                className={styles.iconWrapper}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.iconWrapper}
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={styles.iconWrapper}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.iconWrapper}
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className={styles.iconWrapper}
              />
              {/* <Image/>
              <Image/>
              <Image/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
