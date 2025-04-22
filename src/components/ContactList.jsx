import React from "react";

export default function ContactList({ contacts, setSelectedContactId }) {
  const handleClick = (id) => {
    console.log(id);
    setSelectedContactId(id);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr
                key={contact.id}
                onClick={() => {
                  handleClick(contact.id);
                }}
              >
                <th scope="row">{contact.name}</th>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
