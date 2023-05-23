import logo from './logo.svg';
import './App.css';
import BannerComp from './comp/BannerComp';
import FaqComp from './comp/FaqComp';
import AboutComp from './comp/AboutComp';
import TestimoComp from './comp/TestimoComp';
import FeatureComp from './comp/FeatureComp';
import FooterComp from './comp/FooterComp';
import EnrollComp from './comp/EnrollComp';

function App() {
  return (
    <div className="App">

        <BannerComp />
        <FeatureComp />
        <AboutComp />
        <TestimoComp />
        <FaqComp />
        

        <EnrollComp />
        <FooterComp />
    </div>
  );
}

export default App;
