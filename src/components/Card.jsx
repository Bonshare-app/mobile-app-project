

const Card = ({moreClass,children}) => {
  return (
    <View className={ "rounded-lg bg-white" `${moreClass}`}>
        {children}
    </View>
  )
}

export default Card