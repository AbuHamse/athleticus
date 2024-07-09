import React from 'react';
import { Container, Grid, Typography, Button, CardMedia } from '@mui/material';

export default function ProgramHeroSection() {
  return (
    <section style={{ backgroundColor: '#161618', color: '#fff' }} className="w-full py-12 md:py-24 lg:py-32">
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
                <Button variant="contained" style={{ backgroundColor: '#212124', color: '#fff', marginRight: '8px' }}>
                  Get Started
                </Button>
                <Button variant="outlined" style={{ borderColor: '#fff', color: '#fff' }}>
                  Learn More
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Fitness Program"
              height="400"
              image="/placeholder.svg"
              className="rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
