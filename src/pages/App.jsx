import { Route, Routes } from "react-router-dom";
import "/styles/cssReset.css";
import "/styles/style.scss";

import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import styles from "./pageStyles/index.module.scss";
import NotFoundPage from "./NotFoundPage";
import ListProducts from "./ListProducts";
import ShopPageComponent from "./Shop";
import HomePageComponent from "./Home";
import ContactUs from "./ContactUs";
import Products from "./Products";
import About from "./About";

function App() {
  return (
    <div className={styles.bgSection}>
      <HeaderComponent />
      <div className={styles.innerBackground}>
        <Routes>
          <Route path="/Home" element={<HomePageComponent />}></Route>
          <Route path="/Shop" element={<ShopPageComponent />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/ListProducts" element={<ListProducts />}></Route>
          <Route path="/Shop/:id" element={<ListProducts />}></Route>
          <Route path="/Products" element={<Products />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
