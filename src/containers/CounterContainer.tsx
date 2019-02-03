import React, { Component } from "react";
import { Action, Dispatch } from "redux";
import { Counter } from "../components/Counter";
import { connect } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
  counterReset
} from "../store/counter/actions";
import { MyReduxState } from "../store";

/**
 * Typings for redux connect
 *
 * See: https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d
 */

// from parent
export interface OwnProps {
  examplePropFromParent?: string;
}

// from redux store
interface StateProps {
  count: number
}

// reducer dispatches
interface DispatchProps {
  counterIncrement: () => void;
  counterDecrement: () => void;
  counterReset: () => void;
}

// use type intersection to combine different props
// from different contexts into one single type
type Props = OwnProps & StateProps & DispatchProps;

// internal state
interface State {
  myInternalStatefulVariable: string;
}

class CounterContainer extends Component<Props, State> {
  state: State = { myInternalStatefulVariable: "example internal variable" };

  render() {
    return (
      <Counter count={this.props.count}
               onReset={this.props.counterReset}
               onIncrement={this.props.counterIncrement}
               onDecrement={this.props.counterDecrement}/>
    );
  }
}

function mapStateToProps({ counter }: MyReduxState, ownProps: OwnProps): StateProps {
  return {
    count: counter.count
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>, ownProps: OwnProps): DispatchProps {
  return {
    counterIncrement: () => dispatch(counterIncrement()),
    counterDecrement: () => dispatch(counterDecrement()),
    counterReset: () => dispatch(counterReset())
  };
}

export const ConnectedCounterContainer = connect<StateProps, DispatchProps, OwnProps, MyReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
