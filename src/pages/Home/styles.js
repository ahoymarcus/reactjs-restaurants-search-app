import styled from 'styled-components';
//import Slider from 'react-slick';


export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;


// Abaixo ex do consumo do PROVIDER
export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 360px;
	height: 100vh;
	
	overflow-y: auto; /*scroll;*/
`;


export const Search = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	
	background-color: #ffffff;
	padding: 16px;
`;

export const Logo = styled.img`
	margin-bottom: 15px;
`;

export const CarouselTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${((props) => props.theme.colors.text)};
	font-size: 24px; 
	font-weight: bold;
	line-height: 29px;
	margin: 16px 0;
`;

export const Map = styled.div`
	background-color: red;
	width: 500px;
`;




