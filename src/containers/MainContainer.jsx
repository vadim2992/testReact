import React, {Component} from 'react';
import UsersListComponent from '../components/UserComponents/UsersListComponent';
import CurrentUserComponent from '../components/UserComponents/CurrentUserComponent';

export default class MainContainer extends Component {
    render() {
        const {model, actions} = this.props;

        return (<div className="main">
            <UsersListComponent model={model} actions={actions}/>
            {model.selectedUser ? <CurrentUserComponent model={model} actions={actions}/> : <div className="current-user-container"><h2>Select user</h2></div>}
        </div>);
    }
}