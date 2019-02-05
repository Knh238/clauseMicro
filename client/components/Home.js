import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import ClauseDefinition from './ClauseDefinition'
import Claws from './Claws'
const crypto = require('crypto')
const hash = crypto.createHash('sha256')

function checkKeyTerms(word) {
  word = word.toLowerCase()
  const clauseArr = [
    'clause',
    'smartclause',
    'smartcontracts',
    'contracts',
    'contract'
  ]
  if (clauseArr.indexOf(word) !== -1) {
    console.log('hey it has a match')
    return true
  } else {
    return false
  }
}

function checkCatTerms(term) {
  term = term.toLowerCase()
  const catTerms = ['meow', 'kitty', 'cat', 'furball', 'kitten', 'paws', 'purr']
  if (catTerms.indexOf(term) !== -1) {
    return true
  } else {
    return false
  }
}

// async function postText(inputText) {
//   try {
//     const { data } = await axios.post(`/messages/`, inputText);
//     // hashFunc(inputText);
//     return data;
//     // ownProps.history.push(`/messages`);
//   } catch (err) {
//     console.error(err);
//     // ownProps.history.push(`/oops`);
//   }
// }

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {textToTranslate: '', translation: ''}
  }

  handleSubmit() {
    const input = this.state.textToTranslate
    const logoTerm = checkKeyTerms(input)
    const catTerm = checkCatTerms(input)
    if (logoTerm) {
      this.setState({textToTranslate: '', translation: 'CLAUSE!'})
    } else if (catTerm) {
      this.setState({textToTranslate: '', translation: 'CLAWS!'})
    } else {
      // const data = await postText(input);
      const result = crypto
        .createHash('sha256')
        .update(input, 'binary')
        .digest('hex')
      console.log('text', input, result)
      this.setState({textToTranslate: '', translation: result})
    }
  }
  render() {
    return (
      <div>
        <div>
          <Card
            style={{
              float: 'none',
              width: '55%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {' '}
            <Typography
              variant="h3"
              style={{fontFamily: 'Signika'}}
              align="center"
            >
              Let's Hash it out!
            </Typography>
            <CardMedia
              component="img"
              image="https://cdn101.picsart.com/207085903000201.jpg?r1024x1024"
              title="home"
            />
          </Card>
        </div>
        <div>
          <Card
            style={{
              float: 'none',
              width: '55%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                style={{fontFamily: 'Signika'}}
                align="center"
              >
                Enter some stuff to translate
              </Typography>
            </CardContent>
            <CardContent align="center">
              <TextField
                id="outlined-multiline-flexible"
                rowsMax="4"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput
                }}
                value={this.state.textToTranslate}
                onChange={event =>
                  this.setState({textToTranslate: event.target.value})
                }
                margin="normal"
                variant="outlined"
                centered
              />
            </CardContent>
            <CardContent align="center">
              <Button
                variant="contained"
                style={{backgroundColor: '#ef9a9a'}}
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>
        <div>
          {this.state.translation === 'CLAUSE!' ? <ClauseDefinition /> : null}
          {this.state.translation === 'CLAWS!' ? <Claws /> : null}
          <Card
            style={{
              float: 'none',
              width: '55%',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#009688'
            }}
          >
            <CardContent>
              <Typography
                paragraph
                gutterBottom
                style={{
                  fontFamily: 'Major Mono Display'
                }}
              >
                {this.state.translation}
              </Typography>
            </CardContent>
          </Card>
          )}
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
})
