import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AdddContact";
import ContactList from "./ContactList";

class App extends React.Component {
function App() {
 return ( 
  <div>
    <Header />
    <AddContact />
    <ContactList />
  </div>
)
}

export default App;
