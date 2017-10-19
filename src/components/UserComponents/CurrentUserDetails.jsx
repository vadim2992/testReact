import React, {Component} from 'react';
import UserDetailsTabsComponent from './UserDetailsTabsComponent';
import UserAvatarComponent from '../UserComponents/UserAvatarComponent';

export default class CurrentUserDetails extends Component {

    calculateYears(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    render() {
        const {model, actions} = this.props;
        const selectedUser = model.selectedUser;

        return <div className="current-user-details">
            <div className="general-details">
                <div className="user-avatar">
                    <UserAvatarComponent avatar={selectedUser.avatar} width="150px"/>
                    <p><span>Age</span> {this.calculateYears(new Date(selectedUser.dateOfBirth))} <span>Gender</span> {selectedUser.gender}</p>
                </div>
                <div className="other-details">
                    <div className="full-name">{`${selectedUser.firstName} ${selectedUser.lastName}`}</div>
                    <ul className="user-details">
                        <li className="phone">{selectedUser.phone}</li>
                        <li className="date-of-birth">{selectedUser.dateOfBirth}</li>
                        <li className="location"><a>Location</a></li>
                    </ul>
                    <div className="email">
                        {selectedUser.email}
                    </div>
                </div>
            </div>
            <UserDetailsTabsComponent model={model} actions={actions}/>
        </div>;
    }
}