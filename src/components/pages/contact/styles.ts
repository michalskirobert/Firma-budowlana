import styled from "styled-components";

import Contact from "@assets/images/contact/contact.jpg";

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  basis: 50%;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
`;

export const DescriptionContainer = styled.div`
  max-width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
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

export const ContactSection = styled.section`
  background-image: url(${Contact});
  margin: 0;
  padding: 0;
  background-size: cover;
  background-blend-mode: multiply;
  background-color: rgb(0, 0, 0, 0.5);
  background-repear: no-reapeat;
  max-width: 100vw !important;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: #ffff;
  padding-top: 25px;
`;

export const DescriptionGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const DescriptionSubHeadling = styled.h3`
  font-size: 1.8rem;
  color: #ffc500;
  font-wieght: 500;
`;

export const DescriptionContent = styled.p`
  color: #fff8ee;
`;
