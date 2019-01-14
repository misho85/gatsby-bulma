/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import AppLayout from './src/components/Layout/AppLayout';

export const wrapPageElement = ({ element, props }) => (
  <AppLayout {...props}>{element}</AppLayout>
);
