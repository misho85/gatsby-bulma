import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navbar from '../Navbar';
import '../../styles/app.sass';

const AppLayout = ({ children }) => (
  <>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    </Helmet>
    <Navbar />
    {children}
  </>
);

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.element.isRequired
};
