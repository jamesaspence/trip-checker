import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionHeader from '../common/SectionHeader';
import TemplateItem from './TemplateItem';
import { getTemplates } from '../../actions/template';

const mapStateToProps = state => ({
  templates: state.template.templates
});

const mapDispatchToProps = dispatch => ({
  getTemplates: () => dispatch(getTemplates())
});

const renderTemplateItem = templateItem => {
  const { name, items, id } = templateItem;
  const parsedItems = items.map(item => item.item);

  return (
    <TemplateItem key={id} id={id} name={name} items={parsedItems} />
  );
};

class HomeContainer extends Component {

  componentDidMount() {
    this.props.getTemplates();
  }

  render() {
    const { templates } = this.props;
    return (
      <div className="home-container">
        <SectionHeader text="New List" />
        {templates.length > 0 ? templates.map(renderTemplateItem) : <p>Nothing!</p>}
        <SectionHeader text="Continue" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);