import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
  /* height: 90vh; */
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  text-shadow: var(--lightTextShadow);
`;

const Container = styled.div`
  margin-top: 80px;
  padding: 60px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  gap: 35px;
`;

const Box = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 480px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: var(--lightBoxShadow);
  overflow: hidden;
  h1 {
    display: block;
    border-bottom: 1px solid var(--hoverColor);
    padding-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
    color: var(--hoverColor);
    font-family: var(--normalFont);
  }
  p {
    position: absolute;
    color: transparent;
    text-align: center;
    padding-top: 150px;
    font-size: 28px;
    font-weight: bold;
    height: 100%;
    width: 100%;
  }
  img {
    height: 250px;
    width: 400px;
    border-radius: 5px;
  }
  &:hover {
    cursor: pointer;
    p {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
    }
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverBox = styled(Box)`
  width: 60%;
  max-width: 800px;
  height: max-content;
  padding: 30px;
  background-color: rgb(255, 255, 255);
  white-space: pre-wrap;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
  }
  img {
    height: 300px;
    width: 450px;
    border-radius: 5px;
  }
  h1 {
    font-size: 34px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 22px;
    text-decoration: underline;
    font-weight: 600;
    color: var(--accentColor);
    margin-bottom: 10px;
  }
  span {
    display: block;
    font-size: 18px;
    line-height: 1.4;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    &:last-child {
      font-size: 20px;
    }
  }
  &:hover {
    cursor: auto;
  }
  a:hover {
    color: red;
  }
`;

const Info = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
  justify-self: self-start;
  align-self: start;
  width: 250px;
`;

interface IProject {
  id: string;
  name: string;
  desc: string;
  img: string;
  skill: string;
  site: string;
  github: string;
  more?: string;
}

const projects: IProject[] = [
  {
    id: '0',
    name: 'Coin Tracker',
    desc: 'API를 활용한 실시간 \n가상화폐(코인) 가격 추적',
    img: 'coin-tracker.png',
    skill:
      'React, TypeScript,\nRecoil, React-query, \nStyled-component\n(ApexChart, React-Helmet)',
    site: 'https://jiiiiiaiiiii.github.io/react__coin-tracker',
    github: 'https://github.com/jiiiiiaiiiii/react__coin-tracker',
    more: 'https://lowly-client-ebb.notion.site/Coin-Tracker-7ea2519ad785466182cb87cfd899d830?pvs=4',
  },
  {
    id: '1',
    name: 'To Do List',
    desc: 'cool project',
    img: 'todo-list.png',
    skill: 'React, TypeScript, Recoil, React-hook-form, Styled-component',
    site: 'https://jiiiiiaiiiii.github.io/react__todo-list',
    github: 'https://github.com/jiiiiiaiiiii/react__todo-list',
  },
  {
    id: '2',
    name: '[WW]Social Activity Learning Service',
    desc: 'cool project',
    img: 'ww.png',
    skill: 'React, Redux, Node.js, MongoDB, Vercel',
    site: 'https://0-final-project-team6-w6x1.vercel.app/',
    github:
      'https://github.com/jiiiiiaiiiii/-WW-Social-Activity-Learning-Service',
    more: 'https://www.youtube.com/watch?v=dR1xooSlbNA',
  },
  {
    id: '3',
    name: 'CSS Layout',
    desc: 'cool project',
    img: 'css.png',
    skill: 'HTML, CSS(SCSS)',
    site: 'https://jiiiiiaiiiii.github.io/css__layout',
    github: 'https://github.com/jiiiiiaiiiii/css__layout',
  },
];

export default function Project() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Index>Project</Index>
      <Container>
        {projects.map((project) => (
          <Box
            onClick={() => setId(project.id)}
            key={project.id}
            layoutId={project.id}
          >
            <p>Click</p>
            <h1>{project.name}</h1>
            <img src={project.img} />
          </Box>
        ))}
      </Container>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)} // 바탕을 클릭하면 id값 초기화
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            <OverBox layoutId={id}>
              <h1>{projects[+id].name}</h1>
              <div>
                <img src={projects[+id].img} />
                <Info>
                  <h2>Introduction</h2>
                  <span>{projects[+id].desc}</span>
                  <h2>Skill</h2>
                  <span>
                    {projects[+id].skill}
                    <br />
                  </span>
                  <span>
                    <a href={projects[+id].site} target='_blank'>
                      Site
                    </a>{' '}
                    |{' '}
                    <a href={projects[+id].github} target='_blank'>
                      Source Code
                    </a>{' '}
                    {projects[+id].more ? (
                      <a href={projects[+id].more} target='_blank'>
                        | Detail
                      </a>
                    ) : null}
                  </span>
                </Info>
              </div>
            </OverBox>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
