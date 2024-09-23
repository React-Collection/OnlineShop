import styles from "./pageStyles/homePage.module.scss";

const Home= ()=>{
    return(
<div className={styles.mainSection}>
    <h1>Welcome to Purple Coffee Shop</h1>
    <video controls autoPlay src="/public/videos/videoplayback.mp4"></video>
</div>
    )
}

export default Home;