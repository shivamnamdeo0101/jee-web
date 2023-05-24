import logo from './logo.svg';
import './App.css';
import BannerComp from './comp/BannerComp';
import CourseComp from './comp/CourseComp';
import ExampComp from './comp/ExampComp';
import FaqComp from './comp/FaqComp';
import EnrollNowComp from './comp/EnrollNowComp';


function App() {
  return (
    <div className="App">
      <BannerComp />
      <CourseComp />
      <ExampComp />
      <FaqComp />
      <EnrollNowComp />


    </div>
  );
}

export default App;
