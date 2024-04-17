import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  padding: 50px 6vw 100px;
  overflow: hidden;
  .link:hover {
    text-decoration: underline;
  }
`;

const Title = styled.div`
  font-size: clamp(48px, 8vw, 100px);
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
  gap: 30px;
  margin-top: 30px;
`;

const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  img {
    display: block;
    width: 100%;
    min-width: 300px;
    object-fit: contain;
    margin-right: 20px;
  }
`;

const ProjectInfo = styled.div`
  grid-column: span 2;
`;

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:not(:first-child) {
    padding-top: 10px;
  }
  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: #eeeff1;
    div:nth-child(2) {
      font-weight: 500;
    }
    /* h1 {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 0;
        height: 26px;
        background-color: #1b1464;
				opacity: 10%;
        transition: width 0.4s ease-in;
      }
      &:hover::before {
        width: 180px;
      }
    } */
  }
  div {
    padding-left: 10px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
    width: 50%;
    min-width: 340px;
    &:nth-child(2n) {
      padding-top: 10px;
    }
    h1 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 8px;
    }
    a {
      display: inline-block;
      font-size: 14px;
      color: #1b1464;
      background-color: white;
      height: 30px;
      border: 1px solid #1b1464;
      margin: 20px 10px 0 0;
      padding: 10px;
      line-height: 7px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        color: white;
        background-color: #1b1464;
      }
    }
    p {
      color: navy;
      font-size: 16px;
      font-weight: 500;
      padding-bottom: 5px;
      &:nth-child(3) {
        margin-top: 15px;
      }
    }
    h2,
    span {
      font-size: 15px;
    }
  }
`;

interface IProject {
  id: string;
  name: string;
  desc: string;
  img: string;
  skill: string;
  etc?: string;
  github: string;
  site: string;
}

const projects: IProject[] = [
  {
    id: '1',
    name: 'Coin Tracker',
    desc: 'Real-time coin price tracker',
    img: './coin-tracker.jpg',
    skill: 'React, TypeScript, Recoil, React-query',
    etc: 'Styled-components, ApexChart, React-Helmet',
    site: 'https://jiiiiiaiiiii.github.io/react__coin-tracker',
    github: 'https://github.com/jiiiiiaiiiii/react__coin-tracker',
  },
  {
    id: '2',
    name: 'To Do List',
    desc: 'Check your tasks',
    img: './todo-list.jpg',
    skill: 'React, TypeScript, Recoil',
    etc: 'React-hook-form, Styled-components',
    site: 'https://jiiiiiaiiiii.github.io/react__todo-list',
    github: 'https://github.com/jiiiiiaiiiii/react__todo-list',
  },
  {
    id: '3',
    name: '[WW]Who Want!',
    desc: 'Social Activity Learning Service',
    img: './ww.jpg',
    skill: 'React, Redux',
    etc: 'Node.js, MongoDB, Vercel',
    site: 'https://0-final-project-team6-w6x1.vercel.app/',
    github:
      'https://github.com/jiiiiiaiiiii/-WW-Social-Activity-Learning-Service',
  },
  {
    id: '4',
    name: 'CSS Layout',
    desc: 'Practice Grid & Flex box',
    img: './css.jpg',
    skill: 'HTML, CSS',
    etc: 'SASS(SCSS)',
    site: 'https://jiiiiiaiiiii.github.io/css__layout',
    github: 'https://github.com/jiiiiiaiiiii/css__layout',
  },
];

function Slider() {
  const [imgSrc, setImgSrc] = useState('./coin-tracker.png');

  const imgHover = (newImgSrc: string) => {
    setImgSrc(newImgSrc);
  };

  return (
    <Wrapper>
      <Title>Recent projects</Title>
      <Link to='/project'>
        <span className='link'>
          <br />
          All Projects +{' '}
        </span>
      </Link>
      <ProjectCard>
        <ProjectImg>
          <img src={imgSrc} alt='프로젝트 이미지' />
        </ProjectImg>
        <ProjectInfo>
          {projects.map((project) => (
            <Project
              key={project.id}
              onMouseEnter={() => imgHover(project.img)}
            >
              <div>
                <span>{project.id}/</span>
                <h1>{project.name}</h1>
                <h2>{project.desc}</h2>
                <a href={project.github} target='_blank'>
                  Source Code
                </a>
                <a href={project.site} target='_blank'>
                  Site
                </a>
              </div>
              <div>
                <p>Skill</p>
                <span>{project.skill}</span>
                <p>Etc</p>
                <span>{project.etc}</span>
              </div>
            </Project>
          ))}
        </ProjectInfo>
      </ProjectCard>
    </Wrapper>
  );
}

export default Slider;
