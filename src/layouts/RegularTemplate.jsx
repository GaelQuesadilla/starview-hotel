import { Footer } from "../components/footer/Footer";
import { NavigationBar } from "../components/navbar/NavigationBar";

export const RegularTemplate = (props) => {
  return (
    <>
      <div data-bs-theme="dark">
        <NavigationBar />

        {props.children}

        <Footer />
      </div>
    </>
  );
  w;
};
