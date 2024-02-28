import './App.css';
import Header from './components/common/header';
import Bedsheet_set from './pages/bedsheet_set';
import Decor from './pages/decor';
import Sale_upto from './pages/sale_upto';
import Sign_up_letter from './pages/sign_up_letter';
import Top_rating from './pages/top_rating';
import Vintage_chair from './pages/vintage_chair';

function App() {
  return (
    <>
      <Header />
      <Sale_upto />
      <Vintage_chair />
      <Decor />
      <Bedsheet_set />
      <Top_rating />
      <Sign_up_letter />
    </>
  );
}

export default App;
