import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel } from './styles';

import { Card, RestaurantCard, Modal, Map } from '../../components';


const Home = () => {
	const [ inputValue, setInputValue ] = useState('');
	const [ query, setQuery ] = useState(null);
	const [ modalOpened, setModalOpened ] = useState(true);
	const { restaurants } = useSelector((state) => state.restaurants);
	
	
	
	
	// Configurações para o slick-carousel
	const settings = {
		dots: false,
    infinite: true,
		autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
		adaptiveHeight: true
	};
	
	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			setQuery(inputValue);
		}
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
							value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
					</TextField>
					<CarouselTitle>Na sua Área</CarouselTitle>
					<Carousel {...settings}>
						{restaurants.map((restaurant) => {
							<Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
						})}
					</Carousel>
				</Search>
				{restaurants.map((restaurant) => 
					<RestaurantCard restaurant={restaurant} />
				)}
			</Container>
			<Map query={query} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
		</Wrapper>
	);
}


export default Home

