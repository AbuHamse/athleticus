import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { FaDumbbell, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const DirectionAwareHover = ({ children }) => (
  <motion.div
    className="relative overflow-hidden"
    whileHover={{
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    }}
  >
    {children}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary to-transparent pointer-events-none"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0, x: '-100%' }}
      whileHover={{ opacity: 0.6, x: '0%' }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

export default function FeatureSection() {
  return (
    <section style={{ backgroundColor: '#212124', color: '#fff' }} className="w-full py-12 md:py-24 lg:py-32">
      <Container maxWidth="lg">
        <div className="flex flex-col items-center justify-center space-y-8 text-center mb-12">
          <Typography variant="h3" component="h2" className="font-bold tracking-tight">
            Unlock Your Fitness Potential
          </Typography>
          <Typography variant="body1" className="max-w-2xl">
            Our fitness program is designed to help you achieve your health and wellness goals, no matter your current fitness level.
          </Typography>
        </div>
        <Grid container spacing={4} className="mt-8">
          <Grid item xs={12} md={4}>
            <DirectionAwareHover>
              <div className="bg-[#161618] p-6 shadow-lg text-center text-white rounded-lg">
                <FaDumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Strength Training
                </Typography>
                <Typography variant="body2">
                  Build muscle, increase strength, and improve overall body composition with our targeted strength training program.
                </Typography>
              </div>
            </DirectionAwareHover>
          </Grid>
          <Grid item xs={12} md={4}>
            <DirectionAwareHover>
              <div className="bg-[#161618] p-6 shadow-lg text-center text-white rounded-lg">
                <FaHeartbeat className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Cardio
                </Typography>
                <Typography variant="body2">
                  Improve your cardiovascular health and endurance with our dynamic cardio workouts.
                </Typography>
              </div>
            </DirectionAwareHover>
          </Grid>
          <Grid item xs={12} md={4}>
            <DirectionAwareHover>
              <div className="bg-[#161618] p-6 shadow-lg text-center text-white rounded-lg">
                <FaAppleAlt className="h-12 w-12 text-primary mx-auto mb-4" />
                <Typography variant="h5" component="h3" className="font-bold">
                  Nutrition
                </Typography>
                <Typography variant="body2">
                  Fuel your body with our personalized nutrition plan, designed to support your fitness goals.
                </Typography>
              </div>
            </DirectionAwareHover>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
