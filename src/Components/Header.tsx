import styled from 'styled-components';
import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ToggleMenu } from './ToggleMenu';
import { Link } from 'react-router-dom';
import '../styles.css';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 95;
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  list-style: none;
  align-items: center;
  padding: 0 6vw;
  background-color: white;
  box-shadow: var(--lightBoxShadow);
  text-transform: uppercase;
  a:hover {
    color: navy;
  }
`;

const Logo = styled.div`
  font-weight: bold;
`;

const NavBar = styled.div`
  padding-right: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (max-width: 500px) {
    display: none;
  }
  li {
    padding: 1px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: navy;
      border-radius: 5px;
      transform: scaleX(0);
      transition: all 0.6s ease;
    }
  }
`;

const Nav = styled(motion.nav)`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  padding: 150px 40px;
  transform: translateX(100%);
  z-index: 90;
  text-transform: uppercase;
  text-align: right;
  li {
    font-size: 44px;
    margin-bottom: 48px;
    margin-left: 20px;
    color: whitesmoke;
    .smallText {
      font-size: 18px;
      padding-right: 10px;
    }
    &:hover {
      cursor: pointer;
      color: aliceblue;
      font-weight: bolder;
    }
  }
`;

const Contact = styled.div`
  color: white;
  border-top: 1px solid white;
  padding-top: 20px;
  position: relative;
  text-transform: none;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    &:last-child {
      position: absolute;
    }
  }
  a {
    font-size: 18px;
    line-height: 1.5;
    &:hover {
      color: yellow;
      font-weight: bold;
    }
  }
  p {
    position: absolute;
    bottom: 0px;
    color: gray;
  }
`;

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            'li',
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { delay: stagger(0.05), at: '-0.1' },
          ],
        ]
      : [
          [
            'li',
            { transform: 'scale(0.5)', opacity: 0, filter: 'blur(10px)' },
            { delay: stagger(0.05, { from: 'last' }), at: '<' },
          ],
          ['nav', { transform: 'translateX(100%)' }, { at: '-0.1' }],
        ];

    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <Wrapper>
      <Logo>
        <Link to='/'>
          <li>@ZEZE PARK</li>
        </Link>
      </Logo>
      <NavBar>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <span> / </span>
        <Link to='/project'>
          <li>Project</li>
        </Link>
        <span> / </span>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </NavBar>
      <div ref={scope}>
        <Nav onClick={() => setIsOpen(false)}>
          <ul>
            <Link to='/'>
              <li>
                <span className='smallText'>01/</span> Home
              </li>
            </Link>
            <Link to='/about'>
              <li>
                <span className='smallText'>02/</span> About
              </li>
            </Link>
            <Link to='/project'>
              <li>
                <span className='smallText'>03/</span> Project
              </li>
            </Link>
            <Link to='/contact'>
              <li>
                <span className='smallText'>04/</span> Contact
              </li>
            </Link>
          </ul>
          <Contact>
            <h1>_More &nbsp;&nbsp;&nbsp; +</h1>
            <a href='https://github.com/jiiiiiaiiiii' target='_blank'>
              GitHub ↗ <br />
            </a>
            <Link to='/contact'>
              <span>E-mail ↗</span>
            </Link>
            <p>@`24 JEEAE PARK</p>
          </Contact>
        </Nav>
        <ToggleMenu toggle={() => setIsOpen(!isOpen)} />
      </div>
    </Wrapper>
  );
}
