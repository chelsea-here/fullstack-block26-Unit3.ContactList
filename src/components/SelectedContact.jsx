import { useState, useEffect } from "react";
import axios from "axios";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState("");

  const handleSeeAll = () => {
    setSelectedContactId(null);
  };

  useEffect(() => {
    const fetchSelectedUserData = async () => {
      try {
        const { data } = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        console.log(data);
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSelectedUserData();
  }, [selectedContactId]);

  return (
    <div id={selectedContactId}>
      <p>ID: {contact.id}</p>
      <p>Name: {contact.name}</p>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>
        Website: <a href={contact.website}>{contact.website}</a>
      </p>
      <button onClick={handleSeeAll}>See All Users</button>
    </div>
  );
}
