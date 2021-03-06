import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/App';  //eslint-disable-line import/no-named-as-default
import HomePage from './Home/HomePage';
import BuyTicketsPage from './Tickets/BuyTicketsPage';
import initialCastMembers from './castMemberData.js';
import initialUser from './initialUserData';
import seatData from './seatData';

export default (
  <Route path="/" initialUser={initialUser} component={App}>
    <IndexRoute initialCastMembers={initialCastMembers} component={HomePage} />
    <Route path="tickets" initialSeatData={seatData} component={BuyTicketsPage} />
  </Route>
);
