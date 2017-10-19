import React, {Component} from 'react';
import CurrentUserDetails from './CurrentUserDetails';

export default class CurrentUserComponent extends Component {

    render() {
        const {model, actions} = this.props;

        return <div className="current-user-container">
            <CurrentUserDetails model={model} actions={actions}/>
        </div>;
    }
}