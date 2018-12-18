import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort:</DropdownItem>
          <DropdownItem>most common</DropdownItem>
          <DropdownItem>alphabetical</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
