import React from 'react';
import PreloaderImage from './preloader.svg';

const Preloader = (props) => {

	return(

		<div>
			{props.isFetching ? <img src={PreloaderImage}/> :null}
		</div>

	)
}

export default Preloader;