import './App.css';
import Banner from './Components/Banner';
import SignUpForm from './Components/SignUpForm';

function App() {
  return (
    <>
    <div className="row height100">
      <Banner />
      <div className="mt-lg-5 col-sm-12 col-lg-7 p-lg-5">
        <SignUpForm />
      </div>
    </div>
    </>
    
  );
}

export default App;
