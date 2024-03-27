import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles.css';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: relative;
`;

const Index = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: var(--indexColor);
  box-shadow: var(--lightBoxShadow);
  text-align: center;
  color: whitesmoke;
  font-size: 26px;
  font-weight: bolder;
  line-height: 52px;
`;

const Img = styled.div`
  margin-top: 50px;
  img {
    width: 300px;
  }
`;

const Infos = styled.div`
  width: 70%;
  min-width: 560px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 35px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);
  padding: 40px 25px;
`;

const Info = styled.div`
  min-width: 480px;
  min-height: 150px;
  margin: 15px 0;
  display: flex;
  gap: 30px;
  h1 {
    display: inline-block;
    border-right: 2px solid rgba(128, 128, 128, 0.8);
    font-size: 34px;
    width: 200px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  span {
    font-size: 19px;
    line-height: 2;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Index>About</Index>
      <Img>
        <img src='./profile.png' />
      </Img>
      <Infos>
        <Info>
          <h1>Profile</h1>
          <span>
            박지애 (1994. 7. 28.)
            <br />
            <Link to='/contact'>msp827@naver.com</Link>
            <br />
            <a href='https://github.com/jiiiiiaiiiii' target='_blank'>GitHub</a>
          </span>
        </Info>
        <Info>
          <h1>Univ.</h1>
          <span>한양대학교 ERICA(건축공학과)</span>
        </Info>
        <Info>
          <h1>Education</h1>
          <span>
            멀티캠퍼스 수료 | 2023.7 - 11. <br />
            (프론트엔드 개발자 취업캠프)
          </span>
        </Info>
        <Info>
          <h1>Certificate</h1>
          <span>
            정보처리기사(필기) | 2024.3
            <br />
            정보처리기능사 | 2023.12
            <br />
            JLPT(N3) | 2020
            <br />
            건축기사 | 2020
          </span>
        </Info>
      </Infos>
    </Wrapper>
  );
}
