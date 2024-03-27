import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import GitHub from '../Components/GitHub';

const Wrapper = styled.div`
  height: 90vh;
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

const Grid = styled.div`
  margin-top: 80px;
  padding: 60px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  gap: 20px;
`;

const Box = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 480px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  h1 {
    font-size: 24px;
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
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
    }
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 120%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverBox = styled(Box)`
  width: 55%;
  max-width: 800px;
  height: max-content;
  padding: 30px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
  }
  &:hover {
    cursor: auto;
  }
`;

const Info = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
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
    desc: 'API를 활용한 실시간 가상화폐(코인) 가격 추적기',
    img: 'coin-tracker.png',
    skill:
      'React, TypeScript, Recoil, React-query, Styled-component(Lib: ApexChart, React-Helmet)',
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
    github: 'https://github.com/jiiiiiaiiiii/-WW-Social-Activity-Learning-Service',
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
      <Grid>
        {projects.map((project) => (
          <Box
            onClick={() => setId(project.id)}
            key={project.id}
            layoutId={project.id}
          >
            <p>Click</p>
            <img src={project.img} />
            <h1>{project.name}</h1>
          </Box>
        ))}
      </Grid>
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
                  <span>{projects[+id].skill}</span>
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
      <GitHub />
    </Wrapper>
  );
}
