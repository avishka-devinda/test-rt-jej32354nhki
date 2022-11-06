import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import TestCard from '../sections/@dashboard/test';
// mock

// ----------------------------------------------------------------------

export default function Test() {



  return (
    <Page title="Dashboard: Products">
    <TestCard/>
    </Page>
  );
}
