import React from 'react';
import { Text, View } from 'react-native';

const Header = ({style, children}) => {
  return (
    <View>
      <Text style={[styles.textStyle, style]}>
        {children}
      </Text>
    </View>
  );
};

export default Header;

const styles = {
  textStyle: {
    margin: 20,
    fontSize: 40,
    fontWeight: "900"
  }
};
