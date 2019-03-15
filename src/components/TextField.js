import React, { PureComponent } from 'react'
import {
  Text,
  TextInput,
  StyleSheet,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

const colorsOutlined = {
  borderFocused: '#4285f4',
  borderBlurred: '#626262',
  text: '#222222',
  placeholder: '#B2B2B2',
}

const stylesOutlined = StyleSheet.create({
  container: {
    fontSize: 20,
    padding: 8,
    borderRadius: 4,
  },
  containerFocused: {
    color: colorsOutlined.text,
    borderColor: colorsOutlined.borderFocused,
    borderWidth: 2,
  },
  containerBlurred: {
    color: colorsOutlined.text,
    borderColor: colorsOutlined.borderBlurred,
    borderWidth: 1,
  },
})

const colorsContained = {
  //TODO
}

const stylesContained = StyleSheet.create({
  //TODO
})

const colors = {
  outlined: colorsOutlined,
  contained: colorsContained,
}

const styles = {
  outlined: stylesOutlined,
  contained: stylesContained,
}

class TextField extends PureComponent {
  state = {
    isFocused: false,
  }

  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })

  render () {
    const {
      label,
      onChangeText,
      value,
      style,
      type,
      disabled,
    } = this.props
    const {
      isFocused
    } = this.state

    const colorsByType = colors[type]
    const stylesByType = styles[type]

    const opacity = disabled ? 0.5 : 1.0
    const inputStyle = [
      stylesByType.container,
      isFocused
        ? stylesByType.containerFocused
        : stylesByType.containerBlurred,
      { opacity },
      style,
    ]

    return (
      <TextInput
        placeholder={label}
        placeholderTextColor={colorsByType.placeholder}
        onChangeText={onChangeText}
        value={value}
        editable={!disabled}
        style={inputStyle}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}

TextField.defaultProps = {
  style: {},
  type: 'outlined',
  disabled: false,
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  type: PropTypes.oneOf([
    'outlined',
    'filled',
  ]),
  disabled: PropTypes.bool,
}

export default TextField