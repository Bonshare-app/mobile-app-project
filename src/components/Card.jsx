import React from 'react'
import { View } from 'react-native'

const Card = ({moreClass,children}) => {
  return (
    <View className={ `${moreClass}`}>
        {children}
    </View>
  )
}

export default Card