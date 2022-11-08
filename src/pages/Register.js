import { useState, useEffect } from 'react';

import { Link as RouterLink, useParams } from 'react-router-dom';
import axios from 'axios';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Box, Link, Button, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { RegisterForm } from '../sections/auth/register';
import AuthSocial from '../sections/auth/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const params = useParams();

  const [payment, setPayment] = useState({
    _id: '',
    order_id: '',
    payment_id: '',
    payhere_amount: '',
    payhere_currency: '',
    payment_status: '',
    status_code: '',
    createdAt: '',
  });

  useEffect(() => {
    async function fetchData() {
      axios.get(`https://avishkadevinda.up.railway.app/api/v1/payment/order_id/${params.id}`).then((res) => {
        console.log(res.data);
        const { _id, order_id, payment_status, payment_id, payhere_amount, payhere_currency, status_code, createdAt } =
          res.data;

        setPayment({
          _id,
          order_id,
          payment_id,
          payhere_amount,
          payhere_currency,
          payment_status,
          status_code,
          createdAt,
        });
      });
    }
    fetchData();
  }, []);

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        <Container>
          <ContentStyle>
            {payment.payment_status === 'successfull' && (
              <Card sx={{ padding: '20px', marginBottom: '20px', background: '#54D62C' }}>
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                  Payment Successfull
                </Typography>
              </Card>
            )}
            {payment.payment_status === 'error' && (
              <Card sx={{ padding: '20px', marginBottom: '20px', background: '#FF4842' }}>
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                  Payment Failed
                </Typography>
              </Card>
            )}
            <Card sx={{ padding: '20px' }}>
              <Typography variant="subtitle1">Payment Detail</Typography>
              <Box sx={{ padding: '5px', typography: 'body1' }}>
                <Box
                  sx={{
                    padding: '5px',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>Payment</Box>
                  <Box>
                    {payment.payhere_amount} {payment.payhere_currency}
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: '5px',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>Payment ID</Box>
                  <Box>{payment.payment_id}</Box>
                </Box>
                <Box
                  sx={{
                    padding: '5px',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>Order ID</Box>
                  <Box>{payment.order_id}</Box>
                </Box>
                <Box
                  sx={{
                    padding: '5px',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>Payment Staus</Box>
                  {true ? (
                    <Box sx={{ color: '#229A16', fontWidget: '600' }}>{payment.payment_status}</Box>
                  ) : (
                    <Box sx={{ color: '#FF4842' }}>{payment.payment_status}</Box>
                  )}
                </Box>
                <Button
                  sx={{ marginTop: '10px'}}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                component={RouterLink}
                to={`/order/${payment.order_id}`}
                >
                  View Order
                </Button>
              </Box>
            </Card>

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              By registering, I agree to Minimal&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>
              {''}and{''}
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>

            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?{' '}
              <Link variant="subtitle2" to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
