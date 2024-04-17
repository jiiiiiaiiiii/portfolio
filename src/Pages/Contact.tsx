import styled from 'styled-components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles.css';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 110px 6vw 10px;
  width: 100%;
  h1 {
    font-size: 90px;
    padding-bottom: 10px;
    margin-bottom: 40px;
    border-bottom: 1px solid gray;
  }
  p {
    padding-top: 10px;
    font-size: clamp(18px, 4vw, 22px);
    text-align: center;
    font-weight: 500;
  }
`;

const EmailForm = styled.form`
  padding: auto 6vw;
  border-top: 3px solid black;
  margin: 50px auto 100px;
  width: 90%;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 90px 90px 200px;
  gap: 1px;
  box-shadow: var(--lightBoxShadow);
  background-color: black;
  div {
    padding: 8px;
    background-color: white;
    &:nth-child(3),
    &:nth-child(4) {
      grid-column: span 2;
    }
  }
  label {
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
  }
  input {
    font-size: 16px;
    border: none;

    width: 100%;
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 100px;
    font-family: inherit;
    font-size: 16px;
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  button {
    grid-column: span 2;
    color: whitesmoke;
    font-size: 20px;
    padding: 10px;
    font-weight: 600;
    border: none;
    box-shadow: var(--darkBoxShadow);
    background-color: var(--accentColor);
    transition: 0.2s ease-in-out;
    text-shadow: var(--textShadow);
    &:hover {
      cursor: pointer;
      background-color: var(--hoverColor);
    }
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Send = styled.div`
  width: 200px;
  height: 200px;
  padding-top: 20px;
  padding-left: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--lightBoxShadow);
`;

const Svg = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: var(--accentColor);
    stroke-width: 2;
  }
`;

const svgVar = {
  start: {
    pathLength: 0,
    fill: 'rgba(4, 19, 43, 0)',
  },
  end: {
    pathLength: 1,
    fill: 'rgba(4, 19, 43, 1)',
    transition: {
      duration: 1.5,
    },
  },
};

export default function Contact() {
  const form = useRef<HTMLFormElement>();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mfr7cla',
        'template_eokafeb',
        form.current as any,
        'HmztL2tyGXGi1ChrN'
      )
      .then(
        (result) => {
          setIsSend(true);
          form?.current?.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Title>
        <h1>Contact</h1>
        <p>If you have any questions, send me a mail.</p>
        <p>I'll get back to you as soon as possible.</p>
      </Title>
      <EmailForm ref={form as any} onSubmit={sendEmail}>
        <div>
          <label>NAME</label>
          <input required type='text' name='from_name' />
        </div>
        <div>
          <label>EMAIL</label>
          <input type='email' name='from_mail' />
        </div>
        <div>
          <label>TITLE</label>
          <input required type='text' name='from_title' />
        </div>
        <div>
          <label>MESSAGE</label>
          <textarea name='message' />
        </div>
        <button>Send</button>
      </EmailForm>
      {isSend ? (
        <Overlay
          onClick={() => setIsSend(false)}
          initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        >
          <Send>
            <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'>
              <motion.path
                variants={svgVar}
                initial='start'
                animate='end'
                d='M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z'
              />
            </Svg>
          </Send>
        </Overlay>
      ) : null}
    </Wrapper>
  );
}