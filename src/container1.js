import styled from 'styled-components'

export const ContainerHomeCenter = styled.div`
height: 100vh;
width: 100%;
margin: 0;
align-items: center;
text-align: center;
display: flex;
text-align: center;
justify-content: center;



`;

export const ContainerHomeBluerSombra = styled.div`

margin: 0;
align-items: center;
text-align: center;
display: flex;
text-align: center;
justify-content: center;
width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: blur(4px);
  background-color: black ;
  position: absolute;
  z-index: 2;
  opacity: 0.5;
  @media screen and (max-width: 650px)  {
    height: 70vh;

  }

  
`;


export const TitleStyle = styled.div`

.title h1{
  color: var(--primary);
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: normal;
}
.title h2, .title p{
  text-align: center;
}
.title h2{
  margin-top: 60px;
  font-size: 2.6rem;
}
`;

