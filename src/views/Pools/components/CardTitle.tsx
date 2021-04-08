import styled from 'styled-components'

interface StyledTitleProps {
  isFinished?: boolean
}

const CardTitle = styled.div<StyledTitleProps>`
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'text']};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.1;
  margin-bottom: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CardTitle
