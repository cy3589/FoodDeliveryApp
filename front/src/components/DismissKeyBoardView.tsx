import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface DismissKeyboardViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DismissKeyboardHOC =
  (Comp: typeof KeyboardAwareScrollView): React.FC<DismissKeyboardViewProps> =>
  ({children, ...props}: DismissKeyboardViewProps) =>
    (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props} style={props.style}>
          {children}
        </Comp>
      </TouchableWithoutFeedback>
    );

const DismissKeyboardView = DismissKeyboardHOC(KeyboardAwareScrollView);

export default DismissKeyboardView;
