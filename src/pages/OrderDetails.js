import { useState, useEffect } from 'react';

import { Link as RouterLink, useParams } from 'react-router-dom';
import axios from 'axios';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Box, Link,Button, Container, Typography } from '@mui/material';
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

export default function OrderDetails() {
  const smUp = useResponsive('up', 'sm');
  const mdUp = useResponsive('up', 'md');
  const params = useParams();

  const [order, setOrder] = useState({
    _id: '',
    merchant_id: '',
    order_id: '',
    items: '',
    amount: '',
    currency: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    delivery_address: '',
    delivery_city: '',
    delivery_country: '',
    payment_status: '',
    payment_id: '',
    server_id: '',
    createdAt: '',
  });

  useEffect(() => {
    async function fetchData() {
      axios.get(`https://avishkadevinda.up.railway.app/api/v1/order/${params.id}`).then((res) => {
        console.log(res.data);
        const {
          _id,
          merchant_id,
          order_id,
          items,
          amount,
          currency,
          first_name,
          last_name,
          email,
          phone,
          address,
          city,
          country,
          delivery_address,
          delivery_city,
          delivery_country,
          payment_status,
          payment_id,
          server_id,
          createdAt,
        } = res.data;

        console.log(createdAt);
        setOrder({
          _id,
          merchant_id,
          order_id,
          items,
          amount,
          currency,
          first_name,
          last_name,
          email,
          phone,
          address,
          city,
          country,
          delivery_address,
          delivery_city,
          delivery_country,
          payment_status,
          payment_id,
          server_id,
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
              <Card sx={{ padding: '20px', marginBottom:'20px', background:'#2065D1' }}>
        <Typography variant="subtitle1" sx={{color:'#fff'}}>Order on way!</Typography>
            </Card>
           
            <Card sx={{ padding: '20px' }}>
              <Typography variant="subtitle1">Order Detail</Typography>
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
                  <Box>Order ID</Box>
                  <Box>{order.order_id}</Box>
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
                  <Box>First Name</Box>
                  <Box>{order.first_name}</Box>
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
                  <Box>Last Name</Box>
                  <Box>{order.last_name}</Box>
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
                  <Box>Email</Box>
                  <Box>{order.email}</Box>
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
                  <Box>Phone Number</Box>
                  <Box>{order.phone}</Box>
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
                  <Box>Address</Box>
                  <Box>{order.address}</Box>
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
                  <Box>City</Box>
                  <Box>{order.city}</Box>
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
                  <Box>Country</Box>
                  <Box>{order.country}</Box>
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
                  <Box>Delivery Address</Box>
                  <Box>{order.delivery_address}</Box>
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
                  <Box>Delivery City</Box>
                  <Box>{order.delivery_city}</Box>
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
                  <Box>Delivery Country</Box>
                  <Box>{order.delivery_country}</Box>
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
                  <Box>Payment status</Box>
                  <Box>{order.payment_status}</Box>
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
                  <Box>Amount</Box>
                  <Box>{order.amount} {order.currency}</Box>
                </Box>
  
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
