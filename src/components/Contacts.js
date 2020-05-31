import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactsAPI from './ContactsAPI'
import { v4 as uuidv4 } from 'uuid';

const Contacts = () => (
  <div>
  <h1>Contacts</h1>
    <ul>
      {ContactsAPI.all().map(c => (
        <li key={c.id}>
          <Link to={`/contacts/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;
