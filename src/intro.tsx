/*import './App.css'
import {useState} from "react";
import {Customer} from "./component/Customer.tsx";*/
/*import {useState} from "react";*/
/*import ButtonComponent from "./component/ButtonComponent.tsx";*/
/*import {useState} from "react";*/
/*import Subject from "./component/Subject.tsx";*/
/*import Item from "./component/item.tsx";*/
/*import Button  from './Button.tsx';*/

/*function App() {*/
    /*const bool : boolean = false;*/
    /*const itemsArray =  [];

    for (const item of itemsList) {
        itemsArray.push(
            <Item title={ item.title } desc={item.desc} />
        );
    }*/

    /*Conditional Rendering*/
    /*const isLoggedIn : boolean = true;*/

    /*let content : ReactElement;

    if (isLoggedIn) {
        content = <Dashboard/>
    } else {
        content = <LoginComponent/>
    }*/

    /*const [content, setContent] = useState("Default Value")*/

    /*function handleClick(type: string) {
        console.log(type);
        /!*alert((type + ' Clicked'));*!/
        setContent(type);
    }*/

    /*const [customer,setCustomer] = useState({
        firstName: "",
        lastName: "",
    })
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleOnChange() {
        setCustomer({
            ...customer,
            firstName: firstName,
            lastName: lastName,
        })
    }*/

    /*const [customers, setCustomers] = useState<Customer[]>([]);
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
        const updatedCustomer = customers.map((customer) => customer.email === email ? customers : customer);
        console.log(updatedCustomer);
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
}*/

{/*<input name="firstName" type="text" placeholder="First Name"
                 onChange={(e) => setFirstName(e.target.value)}/><br/><br/>
          <input name="lastName" type="text" placeholder="Last Name"
                 onChange={(e) => setLastName(e.target.value)}/><br/><br/>
          <button onClick={handleOnChange}>Submit</button>
          <p>
              Hello {customer.firstName} {customer.lastName}
          </p>*/}

/*const itemsList = [
    {
        title: 'RAD',
        desc: 'hi welcome to rad'
    },
    {
        title: 'RAD',
        desc: 'hi welcome to rad'
    },
    {
        title: 'RAD',
        desc: 'hi welcome to rad'
    }
];*/
{/*{bool ? 'true' : 'false'}*/}

{/*<Button></Button>*/}

{/*using props*/}
{/*
        <Item title={itemsList[0].title} desc={itemsList[0].desc}></Item>
        <Item title={itemsList[1].title} desc={itemsList[1].desc}></Item>
        <Item title={itemsList[2].title} desc={itemsList[2].desc}></Item>
        */}

{/*using 3dot operator*/}
{/*
        <Item {...itemsList[0]}></Item>
        <Item {...itemsList[1]}></Item>
        <Item {...itemsList[2]}></Item>
        */}
{/*{itemsList.map(item => {
            <Item title={item.title}  desc={item.desc}/>
        })}*/}
{/*{itemsArray}*/}

{/*Conditional Rendering Component*/}
{/*{content}*/}
{/*{isLoggedIn ? <Dashboard/> : <LoginComponent/>}*/}

{/*Children props*/}
{/*{<ButtonComponent>Click Me</ButtonComponent>}*/}

{/*Task*/}
{/*<Subject name = 'RAD'>subject</Subject>
        <Subject name = 'RAD'>subject</Subject>
        <Subject name = 'RAD'>subject</Subject>*/}


{/*{<ButtonComponent name ="Dashboard" onClick = {handleClick}></ButtonComponent>}
        {<ButtonComponent name ="Add Customer" onClick = {handleClick}></ButtonComponent>}
        {<ButtonComponent name ="Delete Customer" onClick = {handleClick}></ButtonComponent>}
        <br/>
        {content}*/}
{/*{<ButtonComponent></ButtonComponent>}
        {<ButtonComponent></ButtonComponent>}*/}

{/*Creating a Form*/}

/*export default App*/



// Form Control

// import './App.css'
// import {useState} from "react";
// import {Customer} from "./component/Customer.tsx";
//
// function App() {
//
//     const [customers, setCustomers] = useState<Customer[]>([]);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//
//     function addCustomer() {
//         const newCustomer = new Customer(name, email, phone);
//         setCustomers((customers => [...customers, newCustomer]));
//     }
//
//     function deleteCustomer() {
//         setCustomers((customers => customers.slice(0,-1)));
//     }
//
//     function deleteCustomerByEmail() {
//         const filteredEmail = customers.filter((customer) => customer.email === email);
//         console.log(filteredEmail);
//         setCustomers((customers => customers.slice(filteredEmail.length)));
//     }
//
//     function updateCustomer() {
//         const updatedCustomer = customers.map((customers => customers.email === email ?
//             {...customers, name:name,email:email,phone:phone} : customers));
//         console.log(updatedCustomer);
//         setCustomers(updatedCustomer)
//     }
//
//     return (
//         <>
//             <input className="inputCSS" type="text" placeholder="Name"
//                    onChange={(e) => setName(e.target.value)}/><br/><br/>
//             <input className="inputCSS" type="text" placeholder="Email"
//                    onChange={(e) => setEmail(e.target.value)}/><br/><br/>
//             <input className="inputCSS" type="text" placeholder="Phone Number"
//                    onChange={(e) => setPhone(e.target.value)}/>
//             <br/><br/>
//             <button className="buttonCSS" onClick={addCustomer}>Add Customer</button>
//             <button className="buttonCSS" onClick={deleteCustomer}>Delete Customer</button>
//             <button className="buttonCSS" onClick={deleteCustomerByEmail}>Delete By Email</button>
//             <button className="buttonCSS" onClick={updateCustomer}>Update Customer</button>
//             <br/><br/>
//             {customers.map(customer => (
//                 <div key={customer.email}>{customer.name + ' | ' + customer.email + ' | ' + customer.phone}</div>))}
//         </>
//     )
// }
//
// export default App


// import './App.css'
// import {createBrowserRouter, RouterProvider} from "react-router";
// import Dashboard from "./pages/Dashboard.tsx";
// import AddCustomer from "./pages/AddCustomer.tsx";
// import UpdateCustomer from "./pages/UpdateCustomer.tsx";
// import DeleteCustomer from "./pages/DeleteCustomer.tsx";
// import {RootLayout} from "./component/RootLayout.tsx";
// import {CustomerProvider} from "./component/CustomerProvider.tsx";
//
// function App() {
//     /*Route is a destination*/
//
//     const routers =  createBrowserRouter([
//         {path : '',
//             element : <RootLayout/>,
//             children:[
//                 {path : '',element : <Dashboard/>},
//                 {path : '/add',element:<AddCustomer/>},
//                 {path : '/update',element:<UpdateCustomer/>},
//                 {path : '/delete',element:<DeleteCustomer/>}
//             ]},
//     ])
//
//     return (
//         <>
//             <CustomerProvider>
//                 <RouterProvider router={routers}/>
//             </CustomerProvider>
//         </>
//     )
// }
// export default App


// import './App.css'
// import {useReducer} from "react";
// import {CustomerReducer, initialState} from "./reducers/CustomerReducer.ts";
//
// function App() {
//     const [count,dispatch] = useReducer(CustomerReducer,initialState);
//     return (
//         <>
//             {count}
//             <button onClick={() => dispatch({type: 'ADD',payload:1})}>ADD</button>
//             <button onClick={() => dispatch({type: 'REMOVE',payload:1})}>REMOVE</button>
//         </>
//     )
// }
// export default App
