import styled from "styled-components";
import {colors, fontWeight} from "../../utils";

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoadingTitle = styled.h2`
  color: ${colors.ligthGreyHEX};
  font-size: 20px;
  font-weight: ${fontWeight.fontWeightMedium};`

const Loading = () => {
    return(
        <Container>
            <LoadingTitle>
                LOADING
            </LoadingTitle>
        </Container>
    )
}

export default Loading