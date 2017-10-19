import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';
import MainContainer from './MainContainer';

class App extends Component {
    componentWillMount() {
        const {actions} = this.props;
        actions.getData();
    }

    render() {
        const {model, actions} = this.props;

        return (<div id="appContainer">
            <MainContainer model={model} actions={actions}/>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        model: state.model
    };
}

/**
 * method for getting action creators
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
