import React from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';
import { Cards as Container } from './style';
import Card from './Card';

function Cards(props) {
  return (
    <Container>{props.users.map((user, index) => <Card key={index} user={user} />)}</Container>
  );
}

export default compose(
  setPropTypes({
    users: PropTypes.arrayOf(PropTypes.object),
  }),
  defaultProps({
    users: undefined,
  }),
)(Cards);
