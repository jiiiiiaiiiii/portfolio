import styled from 'styled-components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../styles.css';

const Wrapper = styled.div`
  height: 110vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const Title = styled.h1`
  margin-top: 100px;
  font-size: 34px;
  line-height: 1.8;
`;

const EmailForm = styled.form`
  margin: 30px auto;
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 50px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: var(--lightBoxShadow);
  label {
    font-size: 28px;
  }
  input {
    padding: 10px;
    font-size: 20px;
    border: 0.5px solid black;
    margin-bottom: 10px;
  }
  textarea {
    padding: 10px;
    min-height: 100px;
    font-family: inherit;
    font-size: 20px;
    border: 0.5px solid black;
  }
  button {
    color: whitesmoke;
    font-family: inherit;
    font-size: 24px;
    margin-top: 10px;
    padding: 10px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
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
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Send = styled.div`
  width: 400px;
  height: 400px;
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
  width: 250px;
  height: 250px;
  path {
    stroke: var(--accentColor);
    stroke-width: 3;
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
      default: { duration: 3 }, // 모든 property에 적용
      fill: { duration: 1, delay: 2 },
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
      <Index>Contact</Index>
      <Title>
        If you have any questions, send me a mail.
        <br />
        I'll get back to you as soon as possible.
      </Title>
      <EmailForm ref={form as any} onSubmit={sendEmail}>
        <label>Name</label>
        <input required type='text' name='from_name' placeholder='Your Name' />
        <label>Email</label>
        <input
          type='email'
          name='from_mail'
          placeholder='eg, abc123@mail.com'
        />
        <label>Title</label>
        <input required type='text' name='from_title' />
        <label>Message</label>
        <textarea name='message' />
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

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg> */
}
