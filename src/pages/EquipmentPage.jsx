import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button } from '@mui/joy';

const equipment = [
  { name: 'Medium Tractor', rental: '$150/day', purchase: '$45,000-$75,000' },
  { name: 'Large Tractor', rental: '$250/day', purchase: '$100,000-$200,000' },
  // Add more equipment here...
];

const EquipmentPage = () => (
  <Box>
    <Typography level="h2" sx={{ textAlign: 'center', mt: 4 }}>
      Farm Equipment
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, padding: 4 }}>
      {equipment.map((item, idx) => (
        <Card key={idx} sx={{ width: 300 }}>
          <CardContent>
            <Typography level="h6">{item.name}</Typography>
            <Typography>Rental: {item.rental}</Typography>
            <Typography>Purchase: {item.purchase}</Typography>
            <Button component={Link} to="/cart" sx={{ mt: 2 }}>
              Rent / Buy
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default EquipmentPage;
