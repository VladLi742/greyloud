import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';
import format from 'date-fns/format';
import {
  Card as Container,
  Avatar,
  Title,
  SubTitle,
  Icons,
  Icon,
  StyledLink as Link,
} from './style';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      title: 'Hi, My name is',
      subtitle: `${this.props.user.name.first} ${this.props.user.name.last}`,
      isName: true,
    };
    this.hoverOnIcon = this.hoverOnIcon.bind(this);
  }

  hoverOnIcon(e) {
    this.setState({
      title: e.target.getAttribute('data-title'),
      subtitle: e.target.getAttribute('data-value'),
      isName: e.target.getAttribute('data-label') === 'name',
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Container>
        <Avatar>
          <img src={user.picture.large} alt="User's avatar" />
        </Avatar>
        <Title>{this.state.title}</Title>
        {this.state.isName ? (
          <Link to={{ pathname: '/user-view', state: { user } }}>
            <SubTitle>{this.state.subtitle}</SubTitle>
          </Link>
        ) : (
          <SubTitle>{this.state.subtitle}</SubTitle>
        )}
        <Icons>
          <Link to={{ pathname: '/user-view', state: { user } }}>
            <Icon
              onMouseOver={this.hoverOnIcon}
              onFocus={this.hoverOnIcon}
              data-label="name"
              data-title="Hi, My name is"
              data-value={`${user.name.first} ${user.name.last}`}
            />
          </Link>
          <Icon
            onMouseOver={this.hoverOnIcon}
            onFocus={this.hoverOnIcon}
            data-label="email"
            data-title="My email address is"
            data-value={user.email}
          />
          <Icon
            onMouseOver={this.hoverOnIcon}
            onFocus={this.hoverOnIcon}
            data-label="birthday"
            data-title="My birthday is"
            data-value={format(new Date(user.dob), 'd/D/YYY')}
          />
          <Icon
            onMouseOver={this.hoverOnIcon}
            onFocus={this.hoverOnIcon}
            data-label="location"
            data-title="My address is"
            data-value={user.location.street}
          />
          <Icon
            onMouseOver={this.hoverOnIcon}
            onFocus={this.hoverOnIcon}
            data-label="phone"
            data-title="My phone number is"
            data-value={user.phone}
          />
          <Icon
            onMouseOver={this.hoverOnIcon}
            onFocus={this.hoverOnIcon}
            data-label="pass"
            data-title="My password is"
            data-value={user.login.password}
          />
        </Icons>
      </Container>
    );
  }
}

export default compose(
  setPropTypes({
    user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  defaultProps({
    user: undefined,
  }),
)(Card);
