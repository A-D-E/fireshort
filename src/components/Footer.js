import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const currentYear = () => {
      let d = new Date()
      return d.getFullYear()
    }
    return (
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            <Link color='inherit' href='https://ra-micro.de'>
              © RA-MICRO Software AG
            </Link>{' '}
            {currentYear()}
          </Typography>
        </footer>
    )
}