import React, {Component} from 'react';

export default class UserDetailsTabsComponent extends Component {
    componentWillMount() {
        this.tabs = ['Overview', 'Data', 'Messages', 'Notes'];
        this.setState({
            currentTabIndex: 0
        });
    }

    selectTab(index) {
        this.setState({currentTabIndex: index});
    }

    render() {
        const {model} = this.props;

        return <div className="user-details-tabs">
            <ul>
                {this.tabs.map((tab, key)=> {
                    return (<li className={key === this.state.currentTabIndex ? 'selected' : ''} onClick={::this.selectTab.bind(this, key)} key={key}>{tab}</li>);
                })}
            </ul>
            {this.state.currentTabIndex === 0 ? <div className="overview">
                <h2>Details</h2>
                <p>
                    {model.selectedUser.description}
                </p>
            </div> : ''}
            {this.state.currentTabIndex === 1 ? <div className="data">
                <h2>Data</h2>
            </div> : ''}
            {this.state.currentTabIndex === 2 ? <div className="message">
                <h2>Message</h2>
            </div> : ''}
            {this.state.currentTabIndex === 3 ? <div className="notes">
                <h2>Notes</h2>
            </div> : ''}
        </div>;
    }
}