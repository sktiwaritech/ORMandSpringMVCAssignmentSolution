import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddCustomer from "./components/cms/addCustomer";
import CustomerList from "./components/cms/customerlist";
import EditCustomer from "./components/cms/editCustomet";
import AppBaar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <AppBaar/>

        <Routes>
          <Route path="/" element={<CustomerList/>} />
          <Route path="/customerList" element={<CustomerList/>} />
          <Route path="/addCustomer" element={<AddCustomer/>} />
          {/* <Route path="/editCustomer/:id?" element={<EditCustomer/>} /> */}
          <Route path="/updateCustomer/:id" element={<EditCustomer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
