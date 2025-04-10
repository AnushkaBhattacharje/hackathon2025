import React, { useState } from 'react';
import { Box, Typography, Select, Option, IconButton } from '@mui/joy';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PhoneIcon from '@mui/icons-material/Phone';
const DistributorPage = () => {
  const [location, setLocation] = useState('Khandwa (East Nimar), MADHYA PRADESH');
  const [category, setCategory] = useState('');
  const [productType, setProductType] = useState('');
  return (
    <Box sx={{ padding: 2, maxWidth: '800px', margin: '0 auto' }}>
      {/* Header with back button and help */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to="/"
            sx={{ color: '#000', mr: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography level="h4" sx={{ fontWeight: 'bold' }}>
            Distributor List
          </Typography>
        </Box>
        <Box
          component={Link}
          to="/help"
          sx={{
            backgroundColor: '#FFF3E0',
            padding: '4px 12px',
            borderRadius: '4px',
            textDecoration: 'none',
            color: '#000'
          }}
        >
          Help
        </Box>
      </Box>
      {/* Location Selector */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 2,
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          mb: 3
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 1, color: '#666' }} />
          <Typography level="h5">
            {location}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: '#4CAF50',
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Change
        </Typography>
      </Box>
      {/* Filters and Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Select
            placeholder="Category"
            value={category}
            onChange={(_, newValue) => setCategory(newValue)}
            sx={{
              minWidth: '150px',
              backgroundColor: '#fff',
              borderRadius: '20px'
            }}
          >
            <Option value="seeds">Seeds</Option>
            <Option value="fertilizers">Fertilizers</Option>
            <Option value="pesticides">Pesticides</Option>
          </Select>
          <Select
            placeholder="Product Type"
            value={productType}
            onChange={(_, newValue) => setProductType(newValue)}
            sx={{
              minWidth: '150px',
              backgroundColor: '#fff',
              borderRadius: '20px'
            }}
          >
            <Option value="organic">Organic</Option>
            <Option value="inorganic">Inorganic</Option>
          </Select>
        </Box>
        {/* FarMart Logo - Entry point to Homepage */}
        <Link to="/home">
          <Box
            component="img"
            src="../../public/image.png"
            alt="FarMart Marketplace"
            sx={{
              height: '60px',
              cursor: 'pointer'
            }}
          />
        </Link>
      </Box>
      {/* Distributor Count */}
      <Typography
        level="h5"
        sx={{
          color: '#666',
          mb: 3,
          textAlign: 'center'
        }}
      >
        776 Distributor Found
      </Typography>
      {/* Distributor Card */}
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: 2,
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography level="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            A.P.Agro Ajency
          </Typography>
          <Box
            sx={{
              backgroundColor: '#FFE4E1',
              padding: '4px 12px',
              borderRadius: '4px',
              display: 'inline-block'
            }}
          >
            <Typography>Seeds</Typography>
          </Box>
        </Box>
        <IconButton sx={{ backgroundColor: '#F5F5F5' }}>
          <PhoneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default DistributorPage;