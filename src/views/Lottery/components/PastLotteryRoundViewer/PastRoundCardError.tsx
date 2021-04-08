import React from 'react'
import { Text } from '@blzd-dev/uikit-v2'

interface PastRoundCardErrorProps {
  error: {
    message: string
  }
}

const PastRoundCardError: React.FC<PastRoundCardErrorProps> = ({ error }) => {
  return <Text p="24px">{error.message}</Text>
}

export default PastRoundCardError
