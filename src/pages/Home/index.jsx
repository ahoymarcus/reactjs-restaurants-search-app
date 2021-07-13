import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';


const Home = () => {
	const [ inputValue, setInputValue ] = useState('');
	const [ query, setQuery ] = useState(null);
	const [ placeId, setPlaceId ] = useState(null);
	const [ modalOpened, setModalOpened ] = useState(false);
	const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
	
	
	const restaurantsMocked = {
		name: 'Nome do Restaurante', 
		rating: 4, 
		address: 'Endereço do Restaurante, n. 200', 
		url: '../../assets/restaurante-fake.png'
	};
	
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
	
	function handleOpenModal(placeId) {
		setPlaceId(placeId);
		setModalOpened(true);
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
					{restaurants.length > 0 ? (
						<>
							<CarouselTitle>Na sua Área</CarouselTitle>
							<Carousel {...settings}>
								{restaurants.map((restaurant) => {
									<Card key={restaurant.place_id} photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} title={restaurant.name} />
								})}
							</Carousel>
						</>
					) : (
						<Loader />
					)}	
				</Search>
				{restaurants.map((restaurant) => 
					<RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
				)}
			</Container>
			<Map query={query} placeId={placeId} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				{restaurantSelected ? (
					<>
						<ModalTitle>{restaurantSelected?.name}</ModalTitle>
						<ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
						<ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
						<ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora :-)' : 'Fechado neste momento :-('}</ModalContent>
					</>
				) : (
					<>
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
					</>
				)}
			</Modal>
		</Wrapper>
	);
}


export default Home

