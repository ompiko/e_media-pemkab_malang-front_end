import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login-test';
import Dashboard from './pages/Home';
// import Dashboardadminutama from './pages/admin-utama/dashboard-admin-utama';
import MailDetails from './pages/MailDetails';
import Template from './pages/tpl';
import Inbox from './pages/inbox/Inbox';
import suratMasuk from './pages/inbox/suratmasuk';
import InboxManual from './pages/inbox/inbox-manual/function-inbox-manual';
import disposisimMasuk from './pages/inbox/disposisimasuk';
import calendar from './pages/calendar';
import outbox from './pages/outbox/outbox';
import suratKeluar from './pages/outbox/suratKeluar';
import konsep from './pages/outbox/konsep';
import batal from './pages/outbox/batal';
import buatsurat from './pages/outbox/buatsurat/fungsi-buatsurat';
import disposisiKeluar from './pages/outbox/disposisikeluar';
import plh from './pages/plh';
import contact from './pages/bukualamat/contact';
import contactlist from './pages/bukualamat/contactlist';
import contactwaiting from './pages/bukualamat/contactwaiting';
import contacttobeapproved from './pages/bukualamat/contacttobeapproved';
import schedule from './pages/schedule/schedule';
import schedulein from './pages/schedule/schedulein';
import scheduleout from './pages/schedule/scheduleout';
import penomoran from './pages/penomoran';
import pengguna from './pages/pengguna';
import berkas from './pages/berkas';
import profil from './pages/profile';
import jabatan from './pages/jabatan';

const Router = () => (
  <div>
    <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
    {/* <Route exact path={`${process.env.PUBLIC_URL}/dashboard-admin-utama`} component={Dashboardadminutama} /> */}
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
    <Route exact path={`${process.env.PUBLIC_URL}/template`} component={Template} />
    <Route exact path={`${process.env.PUBLIC_URL}/inbox-details/`} component={MailDetails} />
    <Route exact path={`${process.env.PUBLIC_URL}/inbox/`} component={Inbox} />
    <Route exact path={`${process.env.PUBLIC_URL}/inbox/suratMasuk`} component={suratMasuk} />
    <Route exact path={`${process.env.PUBLIC_URL}/inbox/disposisiMasuk`} component={disposisimMasuk} />
    <Route exact path={`${process.env.PUBLIC_URL}/inbox/inbox-manual`} component={InboxManual} />
    <Route exact path={`${process.env.PUBLIC_URL}/calendar/`} component={calendar} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox`} component={outbox} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox/suratKeluar`} component={suratKeluar} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox/konsep`} component={konsep} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox/batal`} component={batal} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox/buatsurat`} component={buatsurat} />
    <Route exact path={`${process.env.PUBLIC_URL}/outbox/disposisikeluar`} component={disposisiKeluar} />
    <Route exact path={`${process.env.PUBLIC_URL}/plh`} component={plh} />
    <Route exact path={`${process.env.PUBLIC_URL}/contact/`} component={contact} />
    <Route exact path={`${process.env.PUBLIC_URL}/contact/contactlist`} component={contactlist} />
    <Route exact path={`${process.env.PUBLIC_URL}/contact/contactwaiting`} component={contactwaiting} />
    <Route exact path={`${process.env.PUBLIC_URL}/contact/contact-to-be-approved`} component={contacttobeapproved} />
    <Route exact path={`${process.env.PUBLIC_URL}/schedule`} component={schedule} />
    <Route exact path={`${process.env.PUBLIC_URL}/schedule/schedule-in`} component={schedulein} />
    <Route exact path={`${process.env.PUBLIC_URL}/schedule/schedule-out`} component={scheduleout} />
    <Route exact path={`${process.env.PUBLIC_URL}/penomoran`} component={penomoran} />
    <Route exact path={`${process.env.PUBLIC_URL}/pengguna`} component={pengguna} />
    <Route exact path={`${process.env.PUBLIC_URL}/berkas`} component={berkas} />
    <Route exact path={`${process.env.PUBLIC_URL}/profile`} component={profil} />
    <Route exact path={`${process.env.PUBLIC_URL}/jabatan`} component={jabatan} />
  </div>
);

export default Router;
