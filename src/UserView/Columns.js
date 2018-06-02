import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { TableRowColumn } from '../style';

function showMenuItems(field) {
  const keys = Object.keys(field);
  const arr = [];

  for (let i = 0; i < keys.length; i++) {
    arr[i] = <MenuItem key={i} value={i} primaryText={field[keys[i]]} />;
  }

  return arr;
}

class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    const { field } = this.props;
    const selectField = { fontSize: 13, top: 5 };
    if (typeof field === 'object') {
      return (
        <TableRowColumn>
          <SelectField value={this.state.value} onChange={this.handleChange} style={selectField}>
            {showMenuItems(field)}
          </SelectField>
        </TableRowColumn>
      );
    }
    return <TableRowColumn>{field}</TableRowColumn>;
  }
}

export default compose(
  setPropTypes({
    field: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  defaultProps({
    field: undefined,
  }),
)(Columns);
