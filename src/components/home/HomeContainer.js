import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionHeader from '../common/SectionHeader';
import TemplateItem from './TemplateItem';

const mapStateToProps = state => ({});

const exampleList = [
  'socks',
  'pants',
  'shoes',
  'hat',
  'tie',
  'laptop',
  'toiletries',
  't-shirts',
  'button up shirts',
  'shorts',
  'reading glasses',
  'excedrin',
  'phone charger',
  'switch',
  'switch charger',
  'breath of the wild',
  'smash bros',
  'spare keys'
];

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <SectionHeader text="New List" />
        <TemplateItem name="Template 1" items={exampleList} id="1" />
        <TemplateItem name="Template 2" items={['item 1', 'item 2', 'item 3']} id="2" />
        <SectionHeader text="Continue" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeContainer);