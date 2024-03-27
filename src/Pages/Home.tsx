import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
	background-image: url("home.png");
	background-size: cover;
	padding: 40px;
	color: white;
	h1 {
		font-size: 60px;
		line-height: 2;
		font-weight: bold;
		&:not(:nth-child(2)) {
			opacity: 0.8;
		}
	}
`;

function Home() {
	return (
		<Wrapper>
			<h1>Front-End Developer<br /></h1>
			<h1>&lt; PARK JEE AE /&gt; <br /> </h1>
			<h1>Portfolio </h1>
		</Wrapper>
	)
}

export default Home;
