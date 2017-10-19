import React, {Component} from 'react';

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
                        <img className="avatar" src={item.avatar}/>
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