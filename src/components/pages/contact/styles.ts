import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  basis: 50%;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  max-width: 100%;
`;

export const InputContainer = styled.div`
  max-width: 500px;
  margin-top: 25px;
  @media (min-width: 1200px) {
    max-width: 500px;
    margin-top: 0;
  }
`;

export const ContactImage = styled.img`
  max-width: 250px;
  margin-bottom: 25px;
  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;
