import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import beginner from '../images/Beginner.webp';
import inter from '../images/Intermidate.webp';
import advanced from '../images/Advanced.webp';

export default function ProgramsSection() {
  const programs = [
    {
      title: 'Beginner Program',
      description: 'Start your fitness journey with our beginner-friendly workouts.',
      duration: '8 weeks',
      price: '$49',
      image: beginner,
    },
    {
      title: 'Intermediate Program',
      description: 'Take your fitness to the next level with our intermediate workouts.',
      duration: '12 weeks',
      price: '$69',
      image: inter,
    },
    {
      title: 'Advanced Program',
      description: 'Challenge yourself and advance forward in our Advanced Calisthenics Workouts.',
      duration: '20 weeks',
      price: '$89',
      image: advanced,
    },
  ];

  return (
    <section id="programs" className="py-20" style={{ backgroundColor: '#161618' }}>
      <Container maxWidth="lg" className="text-center">
        <Typography variant="h3" component="h2" className="font-bold text-white mb-12">
          Our Programs
        </Typography>
        <Grid container spacing={4} className="mt-6">
          {programs.map((program) => (
            <Grid item xs={12} md={4} key={program.title}>
              <Card style={{ backgroundColor: '#212124', color: '#fff' }} className="p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <div className="program-img overflow-hidden rounded-lg cursor-pointer transition-transform duration-500">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="py-8 space-y-6 cursor-pointer">
                  <Typography variant="h5" component="h3" className="font-semibold">
                    {program.title}
                  </Typography>
                  <Typography variant="body2" className="mt-4 text-gray-400">
                    {program.description}
                  </Typography>
                  <Typography variant="body2" className="mt-2 text-gray-400">
                    Duration: {program.duration}
                  </Typography>
                  <Typography variant="body2" className="mt-2 text-gray-400">
                    Price: {program.price}
                  </Typography>
                 
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
