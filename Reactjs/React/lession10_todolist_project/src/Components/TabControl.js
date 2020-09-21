import React, { Component } from 'react';
import TabSearch from './TabSearch';
import TabSort from './TabSort';

class TabControl extends Component {

   

  	render() {
        return(
            <div>
            	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            		<TabSearch onSearch={this.props.search}></TabSearch>
            	</div>
            	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            		<TabSort  onSort={this.props.sort}></TabSort>
            	</div>
            </div>
        );
 	}
}

export default TabControl;