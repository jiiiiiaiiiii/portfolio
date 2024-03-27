import styled from 'styled-components';
import GitHub from '../Components/GitHub';

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

const Infos = styled.div`
  width: 70%;
  min-width: 560px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;
  background-color: rgba(255, 255, 255, 0.5);
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
    font-size: 32px;
    width: 200px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  span {
    font-size: 18px;
    line-height: 2;
  }
`;

export default function Skill() {
  return (
    <Wrapper>
      <Index>Skill</Index>
      <Infos>
        <Info>
          <h1>HTML/CSS</h1>
          <span>
            - Flex & Grid를 활용하여 구조적인 화면구성 설계
            <br />
            - media-query를 이용한 반응형 화면 구성
            <br />
            - keyframe을 활용한 애니메이션 효과 도입
            <br />- `**Sass(SCSS)**` 등의 CSS 전처리기의 프로젝트 도입
          </span>
        </Info>
        <Info>
          <h1>JavaScript / TypeScript</h1>
          <span>
            - ES6+ 이상의 문법 사용
            <br />
            - Vanilla JS를 이용한 DOM 조작
            <br />
            - TypeScript를 사용해 컴파일 이전에 에러를 방지
            <br />- Library 활용: **`Apex Chart`**를 활용한 그래프 작성 등
          </span>
        </Info>
        <Info>
          <h1>React(SPA)</h1>
          <span>
            - React hook을 사용한 라이프사이클의 이해 및 활용
            <br />
            - 한 페이지를 적절한 컴포넌트 단위로 분리하여 구조적인 프로젝트 설계
            <br />
            - **`Recoil`**를 활용한 전역상태 관리
            <br />
            - **`React-query`**를 활용한 불필요한 API Refetch 제어
            <br />
            - **`Styled-components`**를 활용한 프로젝트 스타일링
            <br />
            - 다양한 Library 활용
            <br />
            - **`Framer-motion`** 을 활용한 다양한 애니메이션 효과 도입
            <br />
            - **`React-hook-form`**을 이용한 적절한 form 이벤트 활용
            <br />- **`React-Helmet`**을 이용한 적절한 head 구성 등
          </span>
        </Info>
        <Info>
          <h1>Tools</h1>
          <span>
            - Slack을 활용한 협업
            <br />
            - Git / GitHub를 활용한 프로젝트 버전 관리
            <br />
            - 다양한 library를 이용하여 프로젝트 필요 요소를 생성
            <br />
            -library link
          </span>
        </Info>
      </Infos>
      <GitHub />
    </Wrapper>
  );
}
