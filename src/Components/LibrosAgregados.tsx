import React from 'react';
import {  Book } from './interface';


export default function LibrosAgregados({libro}) {

const [libros,setLibros] = React.useState<Book[]>(libro);


return( 

<div>

 <div className="container" id='librosAdd'>  
        <div className="row">
          {libros.map((e, i) => (
            <div key={i} style={{ width: 300 }}>
              <div className="carta">
                <figure>
                  <img src={e.cover} alt="Mountains" />
                  <figcaption>
                    <div className="cuerpo">
                      <h3 className="animate-charcter" style={{ fontSize: '30px' }}>
                        {e.title}
                      </h3>
                      <p className="card-text">{e?.synopsis}</p>
                      <p className="card-text">Author: {e.author.name}</p>
                      <p className="card-text">Genre: {e.genre}</p>
                      <p className="card-text">Year: {e.year}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>




</div>

);
}
