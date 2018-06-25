// @flow

import * as React from 'react';
import { compose, withState } from 'recompose';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import styles from './style';

const SelfExplanation = ({ classes, setText, next }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        Explain in your own words what you think a SET is.
      </Typography>
      <TextField
        onChange={e => setText(e.target.value)}
        fullWidth
        multiline
        placeholder="Write here"
        rows="6"
        rowsMax="16"
      />
    </CardContent>
    <CardActions>
      <Button color="primary" onClick={next} className={classes.button}>
        Next
      </Button>
    </CardActions>
  </Card>
);

export default compose(
  withStyles(styles),
  withState('text', 'setText', 'undefined')
)(SelfExplanation);
