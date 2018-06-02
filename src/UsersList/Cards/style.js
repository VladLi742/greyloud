import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icons from './images/icons.png';

const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 20px 70px 30px;
  margin: 0 30px 30px 20px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: center;
  @media (max-width: 768px) {
    padding: 40px 0px 45px;
    margin: 0;
  }
`;

const Avatar = styled.div`
  padding: 5px;
  margin: 0 auto 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  & > img {
    width: 150px;
    border-radius: 50%;
  }
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;
  color: #757575;
`;

const SubTitle = styled.p`
  margin: 5px 0 10px;
  font-size: 38px;
  color: #212121;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const Icons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 48px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Icon = styled.li`
  display: block;
  width: 50px;
  height: 48px;
  float: left;
  margin: 0;
  background-image: url(${icons});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    margin-top: 7px;
    transition: margin-top 0.25s ease-out;
  }

  &[data-label='name'] {
    background-position-y: 52px;
  }

  &[data-label='email'] {
    background-position-y: -47px;
  }

  &[data-label='birthday'] {
    background-position-y: 3px;
  }

  &[data-label='location'] {
    background-position-y: 101px;
  }

  &[data-label='phone'] {
    background-position-y: -149px;
  }

  &[data-label='pass'] {
    background-position-y: -100px;
  }
`;

const StyledLink = styled(Link)`
  color: #212121;
  text-decoration: unset;

  &:hover {
    text-decoration: underline;
  }
`;

export { Cards, Card, Avatar, Title, SubTitle, Icons, Icon, StyledLink };
