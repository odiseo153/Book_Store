import React from "react"
import { libros } from "./Data/MiduBooks"


export default function Ejemplo(){



return(
<div className='ejemplo'>

		<article className="postcard dark blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="#">Podcast Title</a></h1>
				<div className="postcard__subtitle small">

				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
					<li className="tag__item play blue">
						<a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
					</li>
				</ul>
			</div>
		</article>
</div>
)

} 