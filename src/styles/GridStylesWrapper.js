import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleWrapper = styled.div`
  padding-top: 15%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: row-reverse;
  left: 50%;
`
export const TitleBoxWrapper = styled.div`
  width: 50%;
  justify-content: left;


`

export const TableStyles = styled.table`
  border-collapse:collapse;
  table-layout: fixed;
  width: 80vw;
`

export const FooterStyles = styled.div`
  padding-top: 10%;

`
export const ThStyles = styled.th`
  padding: 20px;
  &:nth-child(3) {
    background-color: lightgrey
  }
;
`

export const TdStyles = styled.td`
  letter-spacing: 1px;
  padding: 20px;
  overflow: hidden;

  &:nth-child(3) {
    border-color: lightgrey;
    background-color: lightgrey;
    width: 10%;
  }
;

`
