import styled from 'styled-components';

export const NavStyle = styled.div`
  background-color: #fff;
  border-bottom: #333 1px solid;
  .menu {
    display: none;
  }
  .div,
  .hide {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 5px;
  }
  li {
    list-style: none;
    margin-right: 10px;
  }
  .line {
    display: none;
  }
  a {
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media (max-width: 700px) {
    .menu {
      display: block;
      color: #333;
    }
    .men {
      display: flex;
      align-item: center;
      justify-content: space-between;
      padding: 0px 10px;
      transform: translateY(10px);
      cursor: pointer;
    }
    h1 {
      transform: translateY(-5px);
    }
    .hide {
      //flex-direction: column;
      position: absolute;
      visibiliy: hidden;
      opacity: 0;
      transform: translate(1px, -20px);
      top: 10;
      left: 0;
      width: 200px;
      background: #333;
      p {
        cursor: pointer;
        color: #fff;
        margin-top: 5px;
        text-align: center;
      }
      p:hover {
        color: lightblue;
      }
    }
    .div {
      flex-direction: column;
      position: absolute;
      visibility: visible;
      opacity: 1;
      transform: translate(1px, -20px);
      top: 10;
      left: 0;
      width: 200px;
      background: #333;
      transition: 0.5s ease-in;
      p {
        cursor: pointer;
        color: #fff;
        margin-top: 5px;
        text-align: center;
      }
      p:hover {
        color: lightblue;
      }
    }
  }
`;

export const IntroStyle = styled.div`
  display: flex;
  padding-top: 5px;
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
  @media (max-width: 900px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 700px) {
    h1 {
      width: 350px;
      margin-top: 40px;
      text-align: center;
    }
    flex-direction: column;
    img {
      margin-top: 0px;
      width: 300px;
      clip-path: circle();
    }
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
  @media (max-width: 800px) {
    img {
      width: 300px;
    }
    align-items: center;
    flex-direction: column;
    .about {
      width: 330px;
      h1 {
        text-align: center;
      }
      p {
        font-size: 17px;
      }
    }
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
  ul {
    background: #333;
    padding: 10px;
    color: #fff !important;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    li {
      list-style: none;
    }
    a,
    h2 {
      color: #fff;
    }
  }
  .social-flex {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }
  @media (max-width: 800px) {
    ul {
      flex-direction: column;
      a > div {
        background: #fff;
        height: 1px;
        width: 100%;
      }
    }
  }
`;
