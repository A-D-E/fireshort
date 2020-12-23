import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "../actions"
import { withStyles } from "@material-ui/styles"

import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"

import hut from '../assets/img/hut.svg'

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#cc0000"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#cc0000",
    marginBottom: 5,
    textAlign: "center"
  }
})

class Login extends Component {
  state = { email: "", password: "" }

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value })
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value })
  }

  handleSubmit = () => {
    const { dispatch } = this.props
    const { email, password } = this.state

    dispatch(loginUser(email, password))
  }

  render() {
    const { classes, loginError, isAuthenticated } = this.props
    if (isAuthenticated) {
      return <Redirect to="/admin" />
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar} src={hut}>
            </Avatar>
            <Typography component="h1" variant="h5">
              RA-MICRO LS
            </Typography>
            <br></br>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Passwort"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            {loginError && (
              <Typography component="p" className={classes.errorText}>
                Fehler beim Anmelden
              </Typography>
            )}
            <br></br>
            <Button
              type="button"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Anmelden
            </Button>
          </Paper>
        </Container>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withStyles(styles)(connect(mapStateToProps)(Login))
