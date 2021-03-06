import React, { Component } from 'react';
import axios from 'axios'

import HomeStyleGuide from '../generic/HomeStyleGuide'
import { HomeInput, HomeDiv, HomeHeader, HomeSectionHeader } from '../generic/GenericStyledComponents';
import { Form } from 'semantic-ui-react'

import DepartmentBox from './DepartmentBox'
import SubDepartmentBox from './SubDepartment'

class DepartmentIntroduction extends Component {
  state = { number: 0, departments: [], subDepartments: [], input: "", increment: 0 }

  componentDidMount() {
    axios.get('/api/hotels')
    .then (res => console.log(res) )
  }

  appendSubDepartment = (sub) => {
    this.state.subDepartments.push(sub)
  }

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  appendDepartment = (name) => {
    this.state.departments.push(name)
    this.setState({input: ""})
  }

  displayDepartments = () => {
    return(
      this.state.departments.map( (single, index) => {
        return(
          <HomeDiv
            flexDirection={'row'}
            key={index}
          >
            <HomeHeader
            >
              {single.name}
            </HomeHeader>
            <HomeSectionHeader>
              {single.budget}
            </HomeSectionHeader>
          </HomeDiv>
        )
      })
    )
  }

  departmentIncrement = () => {
    axios.post('/api/hotels/1/departments/create_multiple', this.state.departments)
        .then( res => {
          this.setState({ increment: this.state.increment + 1})
          }).catch( err => {
            console.log("error")
            console.log(err)
        });
  }
  
  displayDepartmentIncrement = () => {
    return (
      <HomeDiv
        onClick={this.props.increment}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        margin={'0 10px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next
      </HomeDiv>
    )
  }

  subdepartmentIncrement = () => {
    // const departments = this.state.departments
    // axios.post('/api/hotels/0/departments', departments)
    //     .then( res => {
    //       this.setState({ increment: this.state.increment + 1})
    //       }).catch( err => {
    //         console.log("error")
    //         console.log(err)
    //     });
    this.props.increment()
  }
  
  displaySubdepartmentIncrement = () => {
    return (
      <HomeDiv
        onClick={this.subdepartmentIncrement}
        height={'50px'}
        width={'25%'}
        margin={'0 10px'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Next
      </HomeDiv>
    )
  }

  decrement = () => {
    this.setState({ increment: this.state.increment - 1 })
  }

  backButton = () => {
    return (
      <HomeDiv
        onClick={this.decrement}
        margin={'0 10px'}
        height={'50px'}
        width={'25%'}
        border={`2px solid ${HomeStyleGuide.color.darkgreen}`}
        borderRadius={'20px'}
        hoverBackgroundColor={HomeStyleGuide.color.darkgray}
        hoverColor={HomeStyleGuide.color.white}
        cursor={'pointer'}
      >
        Back
      </HomeDiv>
    )
  }
  
  render() {
    switch (this.state.increment){
    case 0:
      return <DepartmentBox appendDepartment={this.appendDepartment} incrementState={this.props.incrementState} displayDepartments={this.displayDepartments} handleChange={this.handleChange} displayButton={this.displayDepartmentIncrement} departments={this.state.departments}/>
    case 1: 
      return <SubDepartmentBox appendSubDepartment={this.appendSubDepartment} displayBackButton={this.backButton} subDepartments={this.state.subDepartments} departments={this.state.departments} displayButton={this.displaySubdepartmentIncrement}/>
    }
  }
}

export default DepartmentIntroduction;
