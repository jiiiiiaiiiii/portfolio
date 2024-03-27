import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 40px;
  position: relative;
`;

const Index = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  width: 200px;
  height: 60px;
  padding: 15px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: rgba(190, 183, 180, 0.8);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  color: whitesmoke;
  font-size: 24px;
  letter-spacing: 2px;
`;

const Img = styled.div`
  margin-top: 35px;
  img {
    width: 300px;
  }
`;
const Infos = styled.div`
  width: 70%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: 35px;
`;

const Info = styled.div`
	width: 450px;
	min-height: 210px;
	padding: 25px;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 20px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);
	h1 {
		font-size: 32px;
		margin-bottom: 15px;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
	}
	span {
		font-size: 18px;
		line-height: 1.8;
	}
`;

export default function About() {
  return (
    <Wrapper>
      <Index>About</Index>
      <Img>
        <img src='profile.png' />
      </Img>
      <Infos>
        <Info>
          <h1>Profile</h1>
          <span>박지애 | 1994. 7. 28.<br/></span>
          <span>msp827@naver.com | GitHub</span>
        </Info>
				<Info>
          <h1>Univ.</h1>
          <span>한양대학교 ERICA(건축공학과)</span>
        </Info>
				<Info>
          <h1>Education</h1>
          <span>멀티캠퍼스(프론트엔드 개발자 취업캠프) 수료 | 2023.7 - 11.</span>
        </Info>
				<Info>
          <h1>Certificate</h1>
          <span>정보처리기사(필기) | 2024.3<br/></span>
          <span>정보처리기능사 | 2023.12<br/></span>
          <span>JLPT(N3)  | 2020<br/></span>
          <span>건축기사 | 2020</span>
        </Info>
      </Infos>
    </Wrapper>
  );
}
