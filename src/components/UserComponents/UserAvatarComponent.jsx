import React, {Component} from 'react';

export default class UserAvatarComponent extends Component {

    render() {
        const {avatar, width} = this.props;

        return <div>
            <img className="avatar" src={avatar} width={width}/>
        </div>;
    }
}