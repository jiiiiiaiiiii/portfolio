import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  padding: 110px 6vw 0;
  width: 100%;
  h1 {
    font-size: 90px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
  }
`;

const TabBtns = styled.div`
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  button {
    font-size: 18px;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      color: navy;
    }
  }
`;

const Container = styled.div`
  padding: 60px 6vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  align-items: center;
  justify-content: center;
  width: 100%;
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
  height: 320px;
  overflow: hidden;
  h1 {
    display: block;
    width: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  p {
    position: absolute;
    top: 10px;
    color: transparent;
    text-align: center;
    padding-top: 120px;
    font-size: 28px;
    font-weight: bold;
    height: 260px;
    width: 100%;
  }
  img {
    height: 260px;
    width: 100%;
    object-fit: cover;
    box-shadow: var(--lightBoxShadow);
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverBox = styled(Box)`
  width: 90%;
  max-width: 800px;
  height: max-content;
  padding: 20px 30px;
  background-color: rgb(255, 255, 255);
  white-space: pre-wrap;
  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    flex-wrap: wrap;
    gap: 25px;
  }
  img {
    width: minmax(300px, 500px);
    height: 100%;
  }
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: var(--accentColor);
  }
  span {
    display: block;
    font-size: 18px;
    line-height: 1.4;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    &:last-child {
      font-size: 20px;
    }
  }
  a {
    color: whitesmoke;
    display: inline-block;
    font-size: 16px;
    border: 1px solid #1b1464;
    background-color: #1b1464;
    height: 30px;
    margin-right: 10px;
    padding: 10px;
    line-height: 7px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      color: #1b1464;
      background-color: white;
      
    }
  }
`;

const Info = styled.div`
  justify-self: self-start;
  align-self: start;
`;

interface IProject {
  id: string;
  category: string;
  name: string;
  desc: string;
  img: string;
  skill: string;
  etc: string;
  site: string;
  github: string;
  more?: string;
}

const projects: IProject[] = [
  {
    id: '0',
    category: 'toy',
    name: 'Coin Tracker',
    desc: 'Real-time coin price tracker',
    img: './coin-tracker.jpg',
    skill: 'React, TypeScript, Recoil, React-query',
    etc: 'Styled-components, ApexChart, React-Helmet',
    site: 'https://jiiiiiaiiiii.github.io/react__coin-tracker',
    github: 'https://github.com/jiiiiiaiiiii/react__coin-tracker',
    more: 'https://lowly-client-ebb.notion.site/Coin-Tracker-7ea2519ad785466182cb87cfd899d830?pvs=4',
  },
  {
    id: '1',
    category: 'toy',
    name: 'To Do List',
    desc: 'Check your tasks!',
    img: './todo-list.jpg',
    skill: 'React, TypeScript, Recoil',
    etc: 'React-hook-form, Styled-components',
    site: 'https://jiiiiiaiiiii.github.io/react__todo-list',
    github: 'https://github.com/jiiiiiaiiiii/react__todo-list',
  },
  {
    id: '2',
    category: 'web',
    name: '[WW] Who Want!',
    desc: 'Social Activity Learning Service',
    img: './ww.jpg',
    skill: 'React, Redux',
    etc: 'Node.js, MongoDB, Vercel',
    site: 'https://0-final-project-team6-w6x1.vercel.app/',
    github:
      'https://github.com/jiiiiiaiiiii/-WW-Social-Activity-Learning-Service',
    more: 'https://www.youtube.com/watch?v=dR1xooSlbNA',
  },
  {
    id: '3',
    category: 'toy',
    name: 'CSS Layout',
    desc: 'Practice Grid & Flex box',
    img: './css.jpg',
    skill: 'HTML, CSS',
    etc: 'SASS(SCSS)',
    site: 'https://jiiiiiaiiiii.github.io/css__layout',
    github: 'https://github.com/jiiiiiaiiiii/css__layout',
  },
];

export default function Project() {
  const [id, setId] = useState<null | string>(null);
  // const [category, setCategory] = useState<string | null>(null);

  // const filterProjects = (category: string | null) => {
  //   if (!category) return projects;
  //   return projects.filter(project => project.category === category);
  // };

  return (
    <Wrapper>
      <Title>
        <h1>Projects</h1>
        {/* <TabBtns>
          <button onClick={() => setCategory(null)} className={!category && 'active'}>all</button>
          <span> / </span>
          <button onClick={() => setCategory('web')} className={category === 'web' && 'active'}>web site</button>
          <span> / </span>
          <button onClick={() => setCategory('toy')} className={category === 'toy' && 'active'}>toy</button>
        </TabBtns> */}
        <TabBtns>
          <button>all</button>
          <span> / </span>
          <button>web site</button>
          <span> / </span>
          <button>toy</button>
        </TabBtns>
      </Title>
      <Container>
        {projects.map((project) => (
          <Box
            className={project.category}
            onClick={() => setId(project.id)}
            key={project.id}
            layoutId={project.id}
          >
            <p>MORE</p>
            <img src={project.img} />
            <h1>{project.name}</h1>
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
                  <h2>Etc</h2>
                  <span>
                    {projects[+id].etc}
                    <br />
                  </span>
                  <span>
                    <a href={projects[+id].site} target='_blank'>
                      Site
                    </a>
                    <a href={projects[+id].github} target='_blank'>
                      Source Code
                    </a>
                    {projects[+id].more ? (
                      <a href={projects[+id].more} target='_blank'>
                        Detail
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
