import React, {PropTypes} from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import { actions as counterActions } from '../../redux/modules/counter';
import marked from 'marked';

function createMarkup (__html) {
  return {__html};
}

function renderMarkdown (rawInput) {
  return createMarkup(marked(rawInput));
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
// const mapStateToProps = (state) => ({
//   raw: state.raw
// });
export class HomeView extends React.Component {
  static propTypes = {
    raw: PropTypes.string.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      raw: ''
    };
  }

  render () {
    let raw = this.state.raw || '';

    return (
      <div className='container'>
        <div className='row'>
          <h1>Markdown Converter</h1>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h3>raw markdown</h3>
            <textarea
              onChange={(event) => { this.setState({raw: event.target.value}); }}
              value={this.props.raw}
              cols='30'
              rows='10' />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h3>markdown output</h3>

            <div dangerouslySetInnerHTML={renderMarkdown(raw)} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
