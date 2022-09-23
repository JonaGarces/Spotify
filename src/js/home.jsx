import React, { useEffect, useState } from "react";
import Botones from "./component/Botones.jsx"

import Titulo from "./component/Titulo.jsx";


//create your first component
const Home = () => {

	return (
		<>
			<Titulo className={'text-center m-5'} name={'Spotify pirata'} />
			<div className='container'>
				<div className="row d-flex justify-content-center">
					<div className="col-md-6 ">
						<Botones />
						
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
