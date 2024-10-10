import { MANAGEMENT } from "../../constant/constImage";
import styles from "./pageStyles/about.module.scss";
import { ABOUT } from "../../constant/constImage";

const About = () => {
  return (
    <div className={styles.parentSection}>
      <img src={ABOUT} alt="" />
      <div className={styles.aboutSection}>
        <h1>Purple Coffee Shop</h1>
        <img src={MANAGEMENT} alt="" />
        <p>
          Envato uses necessary cookies to make our site work. We would also
          like to use cookies and similar technologies on our sites to
          personalise content, provide and improve product features, and our
          marketing, and to analyse traffic.
          i got this text message a while back from Honolulu asking to get coffee, for context i’m nowhere near Honolulu and i have never met anyone from the state. It’s also worth noting i don’t ever share my number with anyone, and i haven’t had this one for very long (i use this for all my socials and things that need numbers) They sent one message and then never followed up so i have a feeling it was some kind of scam or trafficking scheme. I was just wondering if anyone has heard of this or had info
        </p>
      </div>
    </div>
  );
};
export default About;
