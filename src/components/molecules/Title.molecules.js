import React from 'react'
import View from '../atoms/View.atom'
import Text from '../atoms/Text.atom'

const Title = ({ text, className }) => {
    return (
        <View>
            <Text className={className}>
                {text}
            </Text>
        </View>
    )
}

export default Title