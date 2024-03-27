import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
	justify-content: space-between;
	background-image: url("wave.jpg");
	background-size: cover;
	padding: 40px;
	color: white;
	h1 {
		margin-top: 10px;
		font-size: 54px;
		font-weight: 600;
		line-height: 2;
	}
	span {
		margin-top: 80vh;
		font-style: italic;
	}
`;

function Home() {
	return (
		<Wrapper>
			<h1>JEE AE PARK <br /> Front-End Developer<br />Portfolio </h1>
			<span>Last updated / 2024. 3. 27.</span>
		</Wrapper>
	)
}

export default Home;
