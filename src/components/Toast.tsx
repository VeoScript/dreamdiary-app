import React from 'react'
import { ToastAndroid } from 'react-native'

interface ToastProps {
  visible: Boolean,
  message: string
}

const Toast: React.FC<ToastProps> = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50
    );
    return null;
  }
  return null;
}

export default Toast