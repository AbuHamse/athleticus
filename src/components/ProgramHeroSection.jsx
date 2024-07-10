import React from 'react';
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';
import img from '../images/carousel1/art2.webp'
import { NavLink } from 'react-router-dom';

export default function ProgramHeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black-500 text-white">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="space-y-4 text-center lg:text-left">
              <Typography variant="h3" component="h1" className="font-bold tracking-tight">
                Transform Your Fitness Journey
              </Typography>
              <Typography variant="body1" className="max-w-md">
                Our comprehensive fitness program is designed to help you achieve your goals and unlock your full potential. Discover the benefits of our holistic approach to wellness.
              </Typography>
              <div className="mt-4">
                <NavLink to='/contact' style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      backgroundColor: '#212124', 
                      color: '#fff', 
                      marginRight: '8px', 
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </NavLink>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Fitness Program"
              height="400"
              image={img}
              className="rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
