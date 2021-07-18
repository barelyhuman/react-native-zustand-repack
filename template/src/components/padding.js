import React from 'react';
import {View} from 'react-native';

export const Padding = ({children, x, y, all, row, style, ...props}) => {
  const multiplier = 8;

  if (all && typeof all !== 'number') {
    all = 0;
  }

  if (x && typeof x !== 'number') {
    x = 0;
  }

  if (y && typeof y !== 'number') {
    y = 0;
  }

  const _style = {
    padding: {
      paddingTop: all * multiplier || y * multiplier || 0,
      paddingRight: all * multiplier || x * multiplier || 0,
      paddingLeft: all * multiplier || x * multiplier || 0,
      paddingBottom: all * multiplier || y * multiplier || 0,
      flexDirection: row ? 'row' : 'column',
      ...style,
    },
  };
  return (
    <>
      <View style={_style.padding}>{children}</View>
    </>
  );
};
