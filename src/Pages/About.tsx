import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles.css';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 110px 6vw 100px;
  line-height: 1.4;
  overflow: auto;
  scroll-snap-type: y mandatory;
  span.bold {
      font-weight: bolder;
    }
  span.bolder { 
    font-weight: 600;
  }
`;

const Title = styled.div`
  width: 100%;
  h1 {
    font-size: 90px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
  }
`;

const Desc = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  h1 {
    font-size: 26px;
    padding-bottom: 10px;
    font-weight: bolder;
  }
  p {
    font-size: 18px;
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 300px;
    object-fit: cover;
    box-shadow: var(--darkBoxShadow);
  }
`;

const Infos = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 440px));
  gap: 40px;
  margin-bottom: 160px;
  scroll-snap-align: start;
`;

const Info = styled.div`
  /* border: 1px solid black; */
  &:first-child {
    @media (min-width: 1613.5px) {
      padding-left: 100px;
    }
  }
  padding: 10px;
  margin: 20px;
  h2 {
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 25px;
  }
  p {
    padding-bottom: 5px;
    font-weight: 500;
    color: navy;
  }
  span {
    display: inline-block;
    padding-bottom: 15px;
    font-size: 1x;
  }
  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 14px;
    a {
      font-size: 15px;
      display: flex;
      gap: 5px;
      &:hover {
        span {
          color: #1b1464;
          text-decoration: underline;
        }
      }
      svg {
        width: 22px;
        height: 22px;
        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
  }
`;

const Skills = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  gap: 30px;
  margin-top: 100px;
  scroll-snap-align: start;
`;

const Skill = styled.div`
  border: 1px solid #eeebeb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  p {
    margin-bottom: 40px;
    color: gray;
  }
  li {
    margin-left: 14px;
    list-style: disc;
    font-size: 14px;
    line-height: 1.8;
    color: #181616;
  }
  a{
    font-weight: 600;
    text-decoration: underline;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Title>
        <h1>About</h1>
      </Title>
      <Desc>
        <h1>Profile</h1>
        <p>I`m a Front-End Developer.</p>
      </Desc>
      <Infos>
        <Info>
          <h2>About me</h2>
          <span>
            안녕하세요. <br />
            <span className='bold'> 프론트엔드 개발자 박지애</span>입니다.
            <br />
            저는 구상하고 만들어내는 것을 좋아하고 <br />
            이를 여러 사람이 이용하는 것에 성취를 느껴
            <br />
            대학에서 건축(공)학을 전공하였고, <br />
            <br />
            더 나아가 온라인에 그려가기 위해
            <br /> 개발을 시작하였습니다.
            <br />
            <br />
            꾸준히 공부하고 성장하여 <br />
            더욱 전문적인 개발자로
            <br /> 나아가고자 합니다.
          </span>
        </Info>
        <Info>
          <Img>
            <img src='./profile.png' />
          </Img>
        </Info>
        <Info>
          <h2>Details</h2>
          <p>Name</p>
          <span>Park Jee Ae</span>
          <p>Education</p>
          <span>
            [멀티캠퍼스]프론트엔드 개발자 취업캠프
            <br />
            (2023.7 - 11. 수료)
          </span>
          <p>Certificate</p>
          <span>
            정보처리기능사
            <br />
            정보처리기사(필기)
            <br />
            JLPT(N3)
            <br />
          </span>
          <div>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
              </svg>
              <span>GitHub</span>
            </a>
            <a href='/contact'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z' />
              </svg>
              <span>Mail</span>
            </a>
          </div>
        </Info>
      </Infos>
      <Desc>
        <h1>Skills</h1>
        <p>What can I do!</p>
        <Skills>
          <Skill>
            <p>01/</p>
            <h1>HTML & CSS</h1>
            <br />
            <ul>
              <li><span className='bolder'>Flex & Grid</span>를 활용하여 구조적인 화면구성 설계</li>
              <li>media-query를 이용한 반응형 화면 구성</li>
              <li>keyframe을 활용한 애니메이션 효과 도입</li>
              <li><span className='bolder'>Sass(SCSS)</span> 등의 CSS 전처리기의 프로젝트 도입</li>
            </ul>
          </Skill>
          <Skill>
            <p>02/</p>
            <h1>JavaScript & TypeScript</h1>
            <br />
            <ul>
              <li>ES6+ 이상의 문법 사용</li>
              <li>Vanilla JS를 이용한 DOM 조작</li>
              <li>TypeScript를 사용해 컴파일 이전 에러 방지</li>
              <li>다양한 Library 활용</li>
            </ul>
          </Skill>
          <Skill>
            <p>03/</p>
            <h1>React(SPA)</h1>
            <br />
            <ul>
              <li>React hook을 사용한 라이프사이클의 이해 및 활용</li>
              <li>
              적절한 컴포넌트 단위의 사용
              </li>
              <li><span className='bolder'>Recoil</span>을 활용한 전역상태 관리</li>
              <li><span className='bolder'>React-query</span>로 불필요한 API Refetch 제어</li>
              <li>Styled-components를 활용한 프로젝트 스타일링</li>
              <li>다양한 Library 활용</li>
            </ul>
          </Skill>
          <Skill>
            <p>04/</p>
            <h1>Tools</h1>
            <br />
            <ul>
              <li>Slack을 활용한 협업</li>
              <li><span className='bolder'>Git / GitHub</span>를 활용한 프로젝트 버전 관리</li>
              <li>다양한 library를 이용한 프로젝트 필요요소 생성</li>
              <li>
                <a
                  href='https://www.notion.so/library-9feda4e5b57c42e7a72414ea2ada4a4a'
                  target='_blank'
                >
                  Library Study ↗
                </a>
              </li>
            </ul>
          </Skill>
        </Skills>
      </Desc>
    </Wrapper>
  );
}
