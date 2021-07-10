import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, CarouselTitle, Map } from './styles';



const Home = () => {
	const [inputValue, setInputValue] = useState('');
	
	// Configurações para o slick-carousel
	const settings = {
		dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
		adaptiveHeight: true
	};
	
	
	return (
		<Wrapper>
			<Container>
				<Search>
					<Logo src={logo} alt="Logo da página de buscas de restaurante" />
						
					<TextField
						label="Pesquisar restaurantes"
						outlined
						onTrailingIconSelect={(e) => setInputValue('')}
						trailingIcon={<MaterialIcon role="button" icon="delete"/>}
					>
						<Input
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)} />
					</TextField>
					<CarouselTitle>Na sua Área</CarouselTitle>
					<Slider {...settings}>
						<div>
							<img src={restaurante} alt="Fotos de restaurantes na sua área" />
						</div>
						<div>
							<img src={restaurante} alt="Fotos de restaurantes na sua área" />
						</div>
						<div>
							<img src={restaurante} alt="Fotos de restaurantes na sua área" />
						</div>
						<div>
							<img src={restaurante} alt="Fotos de restaurantes na sua área" />
						</div>
					</Slider>
				</Search>
			</Container>
			<Map />
		</Wrapper>
	);
}


export default Home

