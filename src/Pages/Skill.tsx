import styled from 'styled-components';

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

const Infos = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 100px;
`;

const Info = styled.div`
  width: 480px;
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: var(--lightBoxShadow);
  h1 {
    display: inline-block;
    font-size: 34px;
    border-bottom: 3px solid var(--accentColor);
    padding: 0 3px 5px;
    margin-bottom: 20px;
    color: var(--accentColor);
  }
  ul {
    list-style: '-  ';
    padding-left: 15px;
  }
  li {
    font-size: 18px;
    line-height: 2;
    font-family: var(--normalFont);
    text-shadow: none;
  }
  &:last-child {
    align-self: flex-start;
  }
`;

export default function Skill() {
  return (
    <Wrapper>
      <Index>Skill</Index>
      <Infos>
        <Info>
          <h1>HTML / CSS</h1>
          <br />
          <ul>
            <li>Flex & Grid를 활용하여 구조적인 화면구성 설계</li>
            <li>media-query를 이용한 반응형 화면 구성</li>
            <li>keyframe을 활용한 애니메이션 효과 도입</li>
            <li>Sass(SCSS) 등의 CSS 전처리기의 프로젝트 도입</li>
          </ul>
        </Info>
        <Info>
          <h1>JavaScript / TypeScript</h1>
          <br />
          <ul>
            <li>ES6+ 이상의 문법 사용</li>
            <li>Vanilla JS를 이용한 DOM 조작</li>
            <li>TypeScript를 사용해 컴파일 이전에 에러를 방지</li>
            <li>Library 활용: 'Apex Chart'를 활용한 그래프 작성 등</li>
          </ul>
        </Info>
        <Info>
          <h1>React(SPA)</h1>
          <br />
          <ul>
            <li>React hook을 사용한 라이프사이클의 이해 및 활용</li>
            <li>
              한 페이지를 적절한 컴포넌트 단위로 분리하여 구조적인<br /> 프로젝트
              설계
            </li>
            <li>'Recoil'를 활용한 전역상태 관리</li>
            <li>'React-query'를 활용한 불필요한 API Refetch 제어</li>
            <li>'Styled-components'를 활용한 프로젝트 스타일링</li>
            <li>Library 활용: Framer-motion, React-hook-form, React-Helmet 등</li>
          </ul>
        </Info>
        <Info>
          <h1>Tools</h1>
          <br />
          <ul>
            <li>Slack을 활용한 협업</li>
            <li>Git / GitHub를 활용한 프로젝트 버전 관리</li>
            <li>다양한 library를 이용하여 프로젝트 필요 요소를 생성</li>
            <li><a href="https://www.notion.so/library-9feda4e5b57c42e7a72414ea2ada4a4a" target='_blank'>- 📖 Library Study Link</a></li>
          </ul>
        </Info>
      </Infos>
    </Wrapper>
  );
}
