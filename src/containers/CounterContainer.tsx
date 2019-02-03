import React, { Component } from "react";
import { Text, View } from "react-native";
import { Action, Dispatch } from "redux";
import { Counter } from "../components/Counter";
import { connect } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
  counterReset
} from "../store/counter/actions";
import { MyReduxState } from "../store";
import { TouchButton } from "../components/TouchButton";
import { HorizontalBar } from "../components/HorizontalBar";

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
  count: number,
  text: string
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
      <React.Fragment>
        <Counter count={this.props.count}
                 onReset={this.props.counterReset}
                 onIncrement={this.props.counterIncrement}
                 onDecrement={this.props.counterDecrement} />
        <HorizontalBar style={{marginVertical: 20}} />
        <Text style={{marginTop: 20}}>
          The redux store can be accessed globally. Here's what stored as text (See next tab):
        </Text>
        <Text style={{fontSize: 20}}>{this.props.text}</Text>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ counter, textInput }: MyReduxState, ownProps: OwnProps): StateProps {
  return {
    count: counter.count,
    text: textInput.text
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
