import React, {Component} from 'react';
import UserAvatarComponent from '../UserComponents/UserAvatarComponent';

export default class UsersListComponent extends Component {

    onItemClick(item) {
        const {actions} = this.props;
        actions.selectUser(item);
    }

    render() {
        const {model} = this.props;
        if (model.users) {
            return (<div className="user-list">
                {model.users.map((item, key) =>
                    <div className={model.selectedUser && model.selectedUser.id ===  item.id ? 'user-item selected' : 'user-item'} key={key}>
                        <UserAvatarComponent avatar={item.avatar} width="50px"/>
                        <div className="user-description">
                            <span>{`${item.firstName} ${item.lastName}`}</span>
                            <a onClick={this.onItemClick.bind(this, item)}  href="#">Details</a>
                        </div>
                    </div>
                )}
            </div>);
        }

        return <div>There aren't users.</div>;
    }
}