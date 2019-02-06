import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
}

export default class ClauseDefinition extends React.Component {
  render() {
    return (
      <Card
        style={{
          float: 'none',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {' '}
        <Typography variant="h3" style={{fontFamily: 'Signika'}} align="center">
          Translation:
        </Typography>
        <CardContent align="center">
          <CardMedia
            component="img"
            style={{height: '25%', width: '25%'}}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKhXkxjGCzShJzXhMGDCwKCv4BNJKzACb0bI9uWsOhECoWHeK"
            title="logo"
            fullwidth="true"
          />
        </CardContent>
        <CardContent align="center">
          <Typography variant="h2" style={{fontFamily: 'Signika'}}>
            Clause
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
