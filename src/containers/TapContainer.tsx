import { View } from "react-native";
import { TapActions, TapState, TapStates } from "../store/tap/types";
import React, { Component } from "react";
import { MyReduxState } from "../store";
import { startTap } from "../store/tap/actions";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

export interface OwnProps {
  colorFirst: string;
  colorWait: string;
  colorDone: string;
}

interface StateProps {
  status: TapStates;
}

interface DispatchProps {
  onTap: (waitFor: number) => void
}

type Props = OwnProps & StateProps & DispatchProps;

class TapContainer extends Component<Props> {

  private handleTouchStart = () => {
    const msToWait = 1000;
    this.props.onTap(msToWait);
  };

  render() {
    const { status, colorFirst, colorWait, colorDone } = this.props;
    const statusToColor: {[key in TapStates]: string} = {
      INITIAL: colorFirst,
      WAITING: colorWait,
      DONE: colorDone
    };
    let color = statusToColor[status];
    return (
      <View onTouchStart={this.handleTouchStart} style={{ flex: 1, backgroundColor: color }}/>
    );
  }
}

export function mapStateToProps(state: MyReduxState, ownProps: OwnProps): StateProps {
  return {
    status: state.tap.status
  };
}

export function mapDispatchToProps(dispatch: ThunkDispatch<TapState, undefined, TapActions>): DispatchProps {
  return {
    onTap: waitFor => dispatch(startTap(waitFor))
  }
}

export const ConnectedTapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TapContainer);
