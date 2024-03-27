import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../styles.css';

const Btn = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
  z-index: 100;
	position: absolute;
	top: 20px;
	right: 35px;
	padding: 15px;
	background-color: var(--accentColor);
	cursor: pointer;
  box-shadow: var(--darkBoxShadow);
`;

const Path = styled(motion.path)`
	fill: transparent;
	stroke-width: 2;
	stroke-linecap: round;
	stroke: white;
`;

export const ToggleMenu = ({ toggle }: any) => (
  <Btn onClick={toggle}>
    <svg viewBox="0 0 20 25">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </Btn>
);