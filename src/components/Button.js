import React, { PureComponent } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

const colorsOutlined = {
  border: '#4285f4',
  text: '#4285f4',
}

const stylesOutlined = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colorsOutlined.border,
    borderWidth: 1,
  },
  title: {
    fontSize: 15,
    color: colorsOutlined.text,
    fontWeight: '500',
    marginHorizontal: 24,
    marginVertical: 8,
  },
})

const colorsContained = {
  background: '#4285f4',
  text: '#FFFFFF',
}

const stylesContained = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: colorsContained.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: colorsContained.text,
    fontWeight: '500',
    marginHorizontal: 24,
    marginVertical: 8,
  },
})

const styles = {
  outlined: stylesOutlined,
  contained: stylesContained,
}

class Button extends PureComponent {

  render () {
    const {
      title,
      onPress,
      style,
      type,
      disabled,
    } = this.props

    const stylesByType = styles[type]

    const opacity = disabled ? 0.5 : 1.0
    const buttonStyle = [
      stylesByType.button,
      { opacity },
      style,
    ]

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={buttonStyle}
      >
        <Text style={stylesByType.title}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  style: {},
  type: 'contained',
  disabled: false,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  type: PropTypes.oneOf([
    'outlined',
    'contained',
  ]),
  disabled: PropTypes.bool,
}

export default Button