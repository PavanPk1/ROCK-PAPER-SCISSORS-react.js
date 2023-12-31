import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vw;
  padding: 10px;
  @media (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopupImage = styled.img`
  height: 90%;
  width: 100%;
  margin-top: auto;
`
