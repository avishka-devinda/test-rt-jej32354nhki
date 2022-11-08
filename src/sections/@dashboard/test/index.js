import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
// components
import { v4 as uuidv4 } from 'uuid';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import PaymentModal from './PaymentModal';

// ----------------------------------------------------------------------
const IncrementerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '6rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`,
}));

export default function LoginForm() {
  const [quantity, setQuantity] = useState(1);
  const [available, setAvailable] = useState(10);

  const handleIncreaseQuantity = (productId) => {
    console.log((quantity) => quantity + 1);
    // setQuantity(quantity);
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantity((quantity) => quantity - 1);
  };

  return (
    <>
      <PaymentModal orderId={uuidv4()} name="galaxy test" amount="100" />

      <IncrementerStyle>
        <IconButton size="small" color="inherit" onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
          <Iconify icon={'eva:minus-fill'} width={16} height={16} />
        </IconButton>
        {quantity}
        <IconButton size="small" color="inherit" onClick={handleIncreaseQuantity} disabled={quantity >= available}>
          <Iconify icon={'eva:plus-fill'} width={16} height={16} />
        </IconButton>
      </IncrementerStyle>
    </>
  );
}
