// import {useNavigate} from "react-router";
// import {useContext, useState} from "react";
// import {CustomerContext} from "../component/CustomerProvider.tsx";
// import {Customer} from "../model/Customer.tsx";
//
// export default function UpdateCustomer() {
//
//     const navigate = useNavigate();
//     const [customers, setCustomers] = useContext(CustomerContext);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//
//     function updateCustomer() {
//         const updatedCustomer = customers.map((customers:Customer) => customers.email === email ?
//             {...customers, name:name,email:email,phone:phone} : customers);
//         console.log(updatedCustomer);
//         setCustomers(updatedCustomer)
//         navigate('/')
//     }
//
//     return (
//         <>
//             <h2>Update Customer</h2>
//             <input className="inputCSS" type="text" placeholder="Name"
//                    onChange={(e) => setName(e.target.value)}/><br/><br/>
//             <input className="inputCSS" type="text" placeholder="Email"
//                    onChange={(e) => setEmail(e.target.value)}/><br/><br/>
//             <input className="inputCSS" type="text" placeholder="Phone Number"
//                    onChange={(e) => setPhone(e.target.value)}/>
//             <br/><br/>
//             <button className="buttonCSS" onClick={updateCustomer}>Update Customer</button>
//         </>
//     )
// }