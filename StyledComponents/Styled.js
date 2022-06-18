import styled from 'styled-components';

export const NavStyle = styled.div`
  background-color: #fff;
  padding: 5px 0px;
  border-bottom: #333 1px solid;
  ul {
    display: flex;
    padding-top: 5px;
    align-items: center;
    justify-content: space-around;
  }
  li {
    list-style: none;
  }

  a {
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const IntroStyle = styled.div`
  display: flex;
  padding-top: 5px;
  margin: 0px 10rem;
  align-items: center;
  justify-content: space-around;
  h1 {
    width: 300px;
    font-weight: bold;
  }
  img {
    margin-top: 50px;
    width: 400px;
    border-radius: 50%;
  }
`;
export const AboutMeStyle = styled.div`
  //border-top: #fff 5px solid;
  padding-top: 10px;
  display: flex;
  //align-items: center;
  margin: 4rem 1rem;
  justify-content: space-around;
  img {
    width: 350px;
  }
  .about {
    width: 600px;
    text-align: justify;
    p {
      font-size: 20px;
    }
  }
  button {
    background-color: blue;
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const AchieveStyle = styled.div`
  .achieve {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 4rem 1rem;
    justify-content: space-around;
    font-weight: bold;
    div {
      background: #fff;
      padding: 10px;
      width: 400px;
    }
  }
`;

export const FooterStyle = styled.div`
  background: #333;
  padding: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;
