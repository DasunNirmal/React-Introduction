import './App.css'
import {useState} from "react";
import {Customer} from "./component/Customer.tsx";

function App() {

    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers => [...customers, newCustomer]));
    }

    function deleteCustomer() {
        setCustomers((customers => customers.slice(0,-1)));
    }

    function deleteCustomerByEmail() {
        const filteredEmail = customers.filter((customer) => customer.email === email);
        console.log(filteredEmail);
        setCustomers((customers => customers.slice(filteredEmail.length)));
    }

    function updateCustomer() {
        const updatedCustomer = customers.map((customers => customers.email === email ?
            {...customers, name:name,email:email,phone:phone} : customers));
        console.log(updatedCustomer);
        setCustomers(updatedCustomer)
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
          {customers.map(customer => (
              <div key={customer.email}>{customer.name + ' | ' + customer.email + ' | ' + customer.phone}</div>))}
      </>
  )
}

export default App
