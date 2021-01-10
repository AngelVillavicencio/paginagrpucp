import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import greg from '../assets/images/miembros/greg.jpg';
import './Testimonio.css';
import { Grid } from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: greg,
  },
  {
    imgPath: greg,
  },
  {
    imgPath: greg,
  },
  {
    imgPath: greg,
  },
  {
    imgPath: greg,
  },
];

const Testimonio = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="testimonio-container">
      <AutoPlaySwipeableViews
        interval={5000}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container className="testimonio-card">
                <Grid item xs={12} sm={5}>
                  <img
                    className="testimonio-imagen"
                    src="https://firebasestorage.googleapis.com/v0/b/futbolito-1ae33.appspot.com/o/extras%2FMila%20Healy.jpg?alt=media&token=8d50e567-106b-4a3e-8205-d86d22b82df9"
                    alt={step.label}
                  />
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} sm={6} className="testimonio-text-container">
                  <p className="testimonio-text">
                    “Agradezco mucho al GR. Ellos son comprensibles con los horarios de los estudiantes al momento de brindar asesorías para el curso de Fundamentos de Programación. Además, ellos resuelven problemas con dificultad distinta y absuelven cualquier tipo de duda(desde la más "simple" hasta la más compleja).”
                  </p>
                  <p className="testimonio-text">Micaela Castilla</p>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Testimonio;
