import React, {Component} from 'react'
import { HomeDiv, HomeSectionHeader } from '../generic/GenericStyledComponents';
import RaisedButton from 'material-ui/RaisedButton';
import HomeStyleGuide from '../generic/HomeStyleGuide';

class Departments extends Component {

  displayJobs = (subIndex) => {
    const result = this.props.jobs.filter(single => single.subDeptID === subIndex)
    return ( result.map( (single, index) => {
      return(
        <HomeDiv
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
            width={'80%'}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'75%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.payrate}
              </HomeSectionHeader>
              <HomeSectionHeader>
                {single.paytype}
              </HomeSectionHeader>
            </HomeDiv>
          </HomeDiv>
      )
    }))
  }

  displayChildren = (children) => {
    return ( children.map( (single, index) => {
      return(
        <HomeDiv
          width={'100%'}
          border={`1px solid ${HomeStyleGuide.color.lightgray}`}
        >
          <HomeDiv
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'25%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
            </HomeDiv>
            <HomeDiv
              width={'75%'}
              flexDirection={'row'}
            >
              <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.SubDepartmentForm(single.id)} />
              <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(index)} />
            </HomeDiv>
          </HomeDiv>
          { this.props.jobs.length > 0 && this.displayJobs(index) }
          { single.children ? this.displayChildren(single.children) : null }
        </HomeDiv>
      )
    }))
  }

  displaySubdepartments = () => {
    return ( this.props.additionalDepartments.map( (single, index) => {
      return(
        <HomeDiv
          width={'100%'}
          border={`1px solid ${HomeStyleGuide.color.lightgray}`}
        >
          <HomeDiv
            width={'100%'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            backgroundColor={ index % 2 === 0 ? `${HomeStyleGuide.color.lightgray}`: `${HomeStyleGuide.color.white}`}
          >
            <HomeDiv
              flexDirection={'row'}
              width={'25%'}
            >
              <HomeSectionHeader>
                {single.name}
              </HomeSectionHeader>
            </HomeDiv>
            <HomeDiv
              width={'75%'}
              flexDirection={'row'}
            >
              <RaisedButton label="Add Sub Departments" secondary={true} style={{margin: '12px'}} onClick={() => this.props.departmentForm(single.id)} />
              <RaisedButton label="View / Add Jobs" secondary={true} style={{margin: '12px'}} onClick={() => this.props.jobsForm(single.id, single.name)} />
            </HomeDiv>
          </HomeDiv>
          { this.props.jobs.length > 0 && this.displayJobs(index) }
          { single.children ? this.displayChildren(single.children) : null }
        </HomeDiv>
      )
    }))
  }

  displayDepartments = () => {
    return ( this.props.department.map( single => {
      return(
        <HomeDiv
            width={'100%'}
            border={`2px solid ${HomeStyleGuide.color.darkblue}`}
          >
            <HomeDiv
              flexDirection={'row'}
              justifyContent={'space-around'}
              borderBottom={this.props.additionalDepartments.length > 0 ? `1px solid ${HomeStyleGuide.color.black}` : null }
              width={'100%'}
            >
              <HomeSectionHeader
                width={'50%'}
              >
                {single.title}
              </HomeSectionHeader>
              <RaisedButton label="Add Sub-Departments" primary={true} style={{margin: '12px', width: '25%'}} onClick={this.props.departmentForm} />
            </HomeDiv>
            {this.props.additionalDepartments.length > 0 && this.displaySubdepartments()}
          </HomeDiv>
      )
    }))
  }


  render() {
    console.log("departments rendered")
    console.log(this.props)
    return(
      <HomeDiv
        margin={'2%'}
      >
        {this.displayDepartments()}
      </HomeDiv>
    )
  }
}

export default Departments;