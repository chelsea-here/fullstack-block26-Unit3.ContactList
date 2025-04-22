import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import axios from "axios";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        console.log(data);
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
          // onClick={clickHandler}
        />
      )}
    </>
  );
}

export default App;
