import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { FaDumbbell, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section style={{ backgroundColor: '#212124', color: '#fff' }} className="w-full py-12 md:py-24 lg:py-32">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Typography variant="h3" component="h2" className="font-bold tracking-tight">
            Unlock Your Fitness Potential
          </Typography>
          <Typography variant="body1" className="max-w-2xl">
            Our fitness program is designed to help you achieve your health and wellness goals, no matter your current fitness level.
          </Typography>
        </div>
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#161618', color: '#fff' }} className="p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="text-center">
                <FaDumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Strength Training
                </Typography>
                <Typography variant="body2">
                  Build muscle, increase strength, and improve overall body composition with our targeted strength training program.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#161618', color: '#fff' }} className="p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="text-center">
                <FaHeartbeat className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Cardio
                </Typography>
                <Typography variant="body2">
                  Improve your cardiovascular health and endurance with our dynamic cardio workouts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ backgroundColor: '#161618', color: '#fff' }} className="p-6 shadow-lg transition-transform duration-300 hover:scale-105">
              <CardContent className="text-center">
                <FaAppleAlt className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Nutrition
                </Typography>
                <Typography variant="body2">
                  Fuel your body with our personalized nutrition plan, designed to support your fitness goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
