import logo from './logo.svg';
import './App.css';
import HeadScreen from './Component/Head/HeadScreen';
import ReviewScreen2 from './Component/Review/ReviewScreen2';
import ReviewScreen1 from './Component/Review/ReviewScreen1';
import AboutScreen from './Component/About/AboutScreen';
import ContactUsScreen from './Component/ContactUs/ContactUsScreen';

function App() {
  return (
    <div className="App">
      {/* <h1 className='text-xl'>Hello Tailwind with CSS</h1> */}
      <HeadScreen />
      <ReviewScreen1 />
      <ReviewScreen2 />
      <AboutScreen />
      <ContactUsScreen />
    </div>
  );
}

export default App;
