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
                    src={step.imgPath}
                    alt={step.label}
                  />
                </Grid>
                <Grid item xs={0} sm={1}></Grid>
                <Grid item xs={12} sm={6} className="testimonio-text-container">
                  <p className="testimonio-text">
                    “Estoy agradecido con el Grupo de Robótica porque me ayudo a
                    crear mi robot. Me encantó el ambiente que generan las
                    personas del grupo, son muy amables y divertidos.”
                  </p>
                  <p className="testimonio-text">Felix Gaea</p>
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
