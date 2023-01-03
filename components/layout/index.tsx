import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.scss";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className={styles.mainWrapper}>{children}</main>
      <Footer />
    </>
  );
}
