import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Tooltip } from '@material-ui/core';

export default function UrlsDialog(props) {

    return (
      <Dialog
        open={props.state.formopen}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>URL-Weiterleitung</DialogTitle>
        <DialogContent>
          {props.state.lurl.length === 0 && props.state.curl.length === 0 && (
            <DialogContentText>
              Geben Sie hier die Original-URL und Ihre gewünschte gekürzte URL
              ein
            </DialogContentText>
          )}
          {props.state.lurl.length === 0 && props.state.curl.length > 0 && (
            <DialogContentText>Original-URL</DialogContentText>
          )}
          {props.state.lurl.length > 0 && props.state.curl.length === 0 && (
            <DialogContentText>gekürzte URL</DialogContentText>
          )}
          {props.state.lurl.length > 0 && props.state.curl.length > 0 && (
            <DialogContentText>Sieht gut aus!</DialogContentText>
          )}
          <TextField
            autoFocus
            margin='dense'
            id='longurl'
            label='Original-URL'
            type='url'
            fullWidth
            value={props.state.lurl}
            onChange={props.handleLurlChange}
          />
          <TextField
            margin='dense'
            id='customurl'
            label='Gewünschte URL'
            type='text'
            fullWidth
            value={props.state.curl}
            onChange={props.handleCurlChange}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title='Vorgang abbrechen'>
          <Button onClick={props.handleClose} color='inherit' variant='outlined'>
            Abbrechen
          </Button>
          </Tooltip>
          <Tooltip title='URL kürzen'>
          <Button onClick={props.handleSubmit} color='inherit' variant='outlined'>
            URL kürzen
          </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>
    )
}