import './App.css'
import {useReducer, useState} from "react";
import {CustomerReducer, initialState} from "./reducers/CustomerReducer.ts";
import {Customer} from "./model/Customer.tsx";

function App() {

    const [customers,dispatch] = useReducer(CustomerReducer,initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type:'ADD_CUSTOMER', payload: newCustomer});
    }

    function deleteCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type: 'DELETE_CUSTOMER', payload: newCustomer});
    }

    function deleteCustomerByEmail() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type: 'DELETE_CUSTOMER_BY_EMAIL', payload: newCustomer});
    }

    function updateCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type: 'UPDATE_CUSTOMER', payload: newCustomer});
    }

  return (
      <>
          <input className="inputCSS" type="text" placeholder="Name"
                 onChange={(e) => setName(e.target.value)}/><br/><br/>
          <input className="inputCSS" type="text" placeholder="Email"
                 onChange={(e) => setEmail(e.target.value)}/><br/><br/>
          <input className="inputCSS" type="text" placeholder="Phone Number"
                 onChange={(e) => setPhone(e.target.value)}/>
          <br/><br/>
          <button className="buttonCSS" onClick={addCustomer}>Add Customer</button>
          <button className="buttonCSS" onClick={deleteCustomer}>Delete Customer</button>
          <button className="buttonCSS" onClick={deleteCustomerByEmail}>Delete By Email</button>
          <button className="buttonCSS" onClick={updateCustomer}>Update Customer</button>
          <br/><br/>
          {customers.map(name => (
              <div key={name.email}>{name.name + ' | ' + name.email + ' | ' + name.phone}</div>))}
      </>
  )
}

export default App
