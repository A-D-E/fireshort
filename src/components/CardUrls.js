import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Card, CardContent, CardHeader, Container, CardActions, Grid, IconButton, Tooltip } from '@material-ui/core'
import { FileCopyOutlined as FileCopyOutlinedIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    copyButton: {
        justifyContent: "flex-end",
    }

}))

export default function CardUrls(props) {
    const classes = useStyles()

    return (
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {props.shortUrls.map((card) => (
            <Grid item key={card.id} xs={12} sm={6}>
              <Card className={classes.card}>
                <CardHeader
                  action={
                    <Tooltip title='Gekürzte URL in die Zwischenablage kopieren'>
                      <IconButton
                        color='inherit'
                        className={classes.copyButton}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            window.location.hostname + '/' + card.data.curl
                          )
                        }}
                      >
                        <FileCopyOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  }
                  title={card.data.curl}
                  titleTypographyProps={{
                    variant: 'subtitle1',
                  }}
                />
                <CardContent className={classes.cardContent}>
                  <Box
                    bgcolor='text.primary'
                    color='background.paper'
                    p={2}
                    style={{
                      overflowX: 'auto',
                      overflowY: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {card.data.lurl}
                  </Box>
                </CardContent>
                <CardActions>
                  <Tooltip title='Direkt zur URL wechseln'>
                    <Button
                      size='small'
                      variant='outlined'
                      color='inherit'
                      href={card.data.lurl}
                      target='_blank'
                    >
                      direkt zu {card.data.curl}
                    </Button>
                  </Tooltip>
                  <Tooltip title='URL bearbeiten'>
                    <Button
                      size='small'
                      variant='outlined'
                      color='inherit'
                      onClick={() => props.handleEditShortUrl(card.data.curl)}
                    >
                      Bearbeiten
                    </Button>
                  </Tooltip>
                  <Tooltip title='URL löschen'>
                    <Button
                      size='small'
                      variant='outlined'
                      color='secondary'
                      onClick={() => props.handleDeleteShortUrl(card.data.curl)}
                    >
                      Löschen
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
}