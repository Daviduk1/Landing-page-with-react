
import InsureShowcase from "./component/InsureShowcase";
import Navbar from "./component/Navbar";
import './component/css/insure.css'
import InsuranceDeep from "./component/InsuranceDeep";
import './component/css/deep.css'
import Footer from "./component/Footer";
import './component/css/footer.css'



function App() {
  return (
    <div className="App">
     <Navbar />
     <InsureShowcase />
     <InsuranceDeep />
     <Footer />
    </div>
  );
}

export default App;
