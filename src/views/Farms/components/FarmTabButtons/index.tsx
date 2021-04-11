import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@lysfinance-dev/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <ButtonMenu activeIndex={!isExact ? 1 : 0} scale="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`} style={{ backgroundColor: isExact ? '#2F70FF' : '#151B30' }}>
          {TranslateString(999, 'Active Pool')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`} style={{ backgroundColor: !isExact ? '#2F70FF' : '#151B30' }}>
          {TranslateString(999, 'Inactive Pool')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
display: flex;
margin-bottom: 32px;
margin-right: 15px;
margin-left: 15px;
& > div {
  background-color: #151b30;
  & > a {
    border-radius: 0px;
    font-size: 18px;
    font-weight: 100;
    height: 46px;
    @media (min-width: 600px) {
      width: 205px;
    }
    @media (min-width: 900px) {
      width: 205px;
    }
    @media (min-width: 1100px) {
      width: 205px;
    }
    border-radius: 8px;
    color: #fff;
  }
  
}
`
