import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Table } from 'semantic-ui-react'


class DepartmentHeaderRow extends React.Component {
  render(){
    return(
      <Table.Row>
        <Table.HeaderCell colSpan='8'>{this.props.department.name}</Table.HeaderCell>
      </Table.Row>
    )
  }

}

export default DepartmentHeaderRow