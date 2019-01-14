/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import AppLayout from './src/components/Layout/AppLayout';

export const wrapPageElement = ({ element, props }) => (
  <AppLayout {...props}>{element}</AppLayout>
);
