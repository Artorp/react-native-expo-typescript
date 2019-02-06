import React from "react";
import { connect } from "react-redux";
import { TextInput, View, Text } from "react-native";
import { MyReduxState } from "../store";
import { setText, resetText } from "../store/textinput/actions";
import { Dispatch } from "redux";
import { TouchButton } from "../components/TouchButton";
import { HorizontalBar } from "../components/HorizontalBar";
import { TextInputAction } from "../store/textinput/types";

export interface OwnProps {}
interface StateProps {
  text: string,
  count: number
}
interface DispatchProps {
  onTextChange: (text: string) => void,
  onResetText: () => void
}

export type Props = OwnProps & StateProps & DispatchProps;

class TextInputContainer extends React.Component<Props, {}> {
  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.props.onTextChange}
          style={{borderColor: "#000", borderStyle: "solid", borderWidth: 1, padding: 5}}
          selectTextOnFocus={true}
        >
          {this.props.text}
        </TextInput>
        <Text>Here's what stored in Redux:</Text>
        <Text
          style={{color: "#151e26", marginVertical: 20, fontSize: 20}}
        >
          {this.props.text}
        </Text>
        <TouchButton text={"Reset"} onPress={this.props.onResetText}/>
        <HorizontalBar style={{marginVertical: 20}} />
        <Text style={{marginTop: 50}}>
          To showcase global redux state, here's what stored in the counter (see previous tab):
        </Text>
        <Text style={{
          color: "#305552",
          fontSize: 25
        }}>{this.props.count}</Text>
      </View>
    );
  }
}

export function mapStateToProps(state: MyReduxState, ownProps: OwnProps): StateProps {
  return {
    text: state.textInput.text,
    count: state.counter.count
  };
}

export function mapDispatchToProps(dispatch: Dispatch<TextInputAction>): DispatchProps {
  return {
    onTextChange: text => dispatch(setText(text)),
    onResetText: () => dispatch(resetText())
  };
}

export const ConnectedTextInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInputContainer);
