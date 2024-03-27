import styled from 'styled-components';
import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ToggleMenu } from './ToggleMenu';
import { Link } from 'react-router-dom';
import '../styles.css';

const Wrapper = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  box-shadow: var(--darkBoxShadow);
`;

const Logo = styled.div`
display: flex;
align-items: center;
  &:hover {
    cursor: pointer;
  }
  img {
    margin-top: 10px;
    width: 250px;
    opacity: 0.8;
  }
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  background-color: var(--accentColor);
  padding: 150px 30px;
  transform: translateX(100%);
  box-shadow: var(--darkBoxShadow);
  z-index: 90;
  li {
    font-size: 44px;
    margin-bottom: 48px;
    margin-left: 20px;
    color: whitesmoke;
    text-shadow: var(--lightTextShadow);
    &:hover {
      cursor: pointer;
      font-weight: bold;
      color: aliceblue;
      text-decoration: line-through;
    }
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
          <img src="./logo.png" alt="logo" />
          </Link>
      </Logo>
      <div ref={scope}>
        <Nav>
          <ul>
          <Link to='/about'><li>About</li></Link>
            <Link to='/project'><li>Project</li></Link>
            <Link to='/skill'><li>Skill</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
          </ul>
        </Nav>
        <ToggleMenu toggle={() => setIsOpen(!isOpen)} />
      </div>
    </Wrapper>
  );
}