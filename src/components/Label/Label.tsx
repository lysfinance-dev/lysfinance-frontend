import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
  isFinished?: boolean
}

const Label: React.FC<LabelProps> = ({ text, isFinished = false }) => (
  <StyledLabel isFinished={isFinished}>{text}</StyledLabel>
)

const StyledLabel = styled.div<{ isFinished: boolean }>`
  color: #fff;
  font-size: 20px;
`

export default Label
