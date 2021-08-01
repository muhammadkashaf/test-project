import React from 'react';
import { connect } from 'react-redux';
import { apiActions } from '../../redux/actions/apiActions';
import ResponsiveTable from '../ResponsiveTable/ResponsiveTable';

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.input = React.createRef();
  }

  componentDidMount() {
    /* Pass a country name here as an argument to get back a list of universities in the county*/
    this.props.loadUniversities("");
  }


  /* Please define the internal structure for the Responsive Table Component */
  renderTable() {
    let { universities } = this.props;
    return universities.length ? <ResponsiveTable
      headings={[{ title: 'Name', value: 'name' }, { title: 'Website(s)', value: 'websites' }]}
      rows={universities.map((item) => {
        return { name: item.name, websites: item.web_pages ? item.web_pages.join(',') : '' }
      })}
    /> : <p>Loading...</p>
  }

  search() {
    this.props.loadUniversities(this.input.current.value);
  }

  render() {
    return <div style={{ width: '100%' }}>
      <input ref={this.input} />
      <button onClick={() => this.search()}>Search</button>
      {this.renderTable()}
    </div>
  }

}
function mapState(state) {
  const { universities } = state.api;
  return { universities };
}

const actionCreators = {
  loadUniversities: apiActions.getUniversities
}

export default connect(mapState, actionCreators)(Main);