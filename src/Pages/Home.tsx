import styled, {keyframes} from 'styled-components';
import Slider from './../Components/Slider';
import { Link } from 'react-router-dom';

const down = keyframes`
  0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(15px);
	}
	40% {
		transform: translate(0);
	}
`;

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
`;

const Landing = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  position: relative;
  background-color: #f2f2f2;
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const Scroll = styled.div`
  cursor: pointer;
  span {
    font-size: 20px;
  }
`;

const ScrollArrow = styled.div`
  margin-top: 20px;
  width: 45px;
	height: 45px;
  left: calc(50% - 26px);
	border: 2px solid #333;
	border-radius: 50%;
	position: relative;
	animation: ${down} 1.5s infinite;
  &::before{
		content: '';
		position: absolute;
		top: 8px;
		left: 13px;
		width: 15px;
		height: 15px;
		border-left: 2px solid #333;
    border-bottom: 2px solid #333;
		transform: rotate(-45deg);
	}
`;

const SendMail = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  padding: 120px 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  div {
    &:first-child {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 100px;
      span {
        font-size: 22px;
      }
      h1 {
      font-size: 80px;
    }
    }
    &:nth-child(2) {
      button {
        background-color: #f2f2f2;
        position: relative;
        display: inline-block;
        cursor: pointer;
        border: none;
        padding: 10px;
        width: 240px;
        .circle {
          transition : all  0.45s, cubic-bezier(0.65, 0, 0.078, 1) ease;
          position: relative;
          display: block;
          margin: 0;
          width: 3rem;
          height: 3rem;
          border-radius: 1.625rem;
          background-color: #1b1464;
          .icon {
            transition : all  0.45s, cubic-bezier(0.65, 0, 0.078, 1) ease;
            position: absolute;
            background-color: white;
            &.arrow {
              transition : all  0.45s, cubic-bezier(0.65, 0, 0.078, 1) ease;
              top: 50%;
              left: 0.625rem;
              width: 1.125rem;
              height: 2px;
              background: none;
              margin: 0;
              padding: 0;
              &::before {
                position: absolute;
                content: '';
                top: -5px;
                left: 0.46rem;
                width: 0.625rem;
                height: 0.625rem;
                border-top: 2px solid white;
                border-right: 2px solid white;
                transform: rotate(45deg);
              }
            }
          }
        }
        .text {
          transition : all  0.45s, cubic-bezier(0.65, 0, 0.078, 1) ease;
          position: absolute;
          top: 25%;
          left: 80px;
          padding: 5px 0;
          color: #1b1464;
          font-size: 20px;
          text-align: center;
        }
      }
      &:hover {
        .circle {
          width: 100%;
          .icon {
            &.arrow {
              background-color: white;
              transform: translate(1rem, 0);
            }
          }
        }
        .text {
          color: white;
        }
      }
    }
  }
`;

function Home() {
  const scroll = () => {
    window.scrollTo({
      top: window.innerHeight - window.parseInt('50px'),
      behavior: 'smooth'
    });
  }

  return (
    <Wrapper>
      <Landing>
        <Img src='./home.png'/>
        <Scroll onClick={scroll}>
          <span>scroll down</span>
          <ScrollArrow />
        </Scroll>
      </Landing>
      <Slider />
      <SendMail>
        <div>
          <span>More<br /> Question?</span>
          <h1>Contact Me</h1>
        </div>
        <div>
          <Link to='/contact'>
            <button>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='text'>Sending mail</span>
            </button>
          </Link>
        </div>
      </SendMail>
    </Wrapper>
  );
}

export default Home;
