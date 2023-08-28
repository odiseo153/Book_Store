import React, { useState } from 'react';
import { libros } from './Data/MiduBooks.ts';
import { Book, LibraryItem } from './interface.ts';
import LibrosAgregados from './LibrosAgregados.tsx';


const See = () => {
  const [librosAdd, setLibro] = useState<Book[]>([]);
  const [Libros, setLibros] = useState<LibraryItem[]>(libros.library);
  const [agregado, setAgre] = useState<boolean[]>();


Libros.forEach(e => {
  librosAdd.forEach(i=>{
  if(e.book===i){
    setAgre([true])
}
})
});

console.log(agregado)


  const Agregar = (libro: Book) => {

const libroYaExistente = librosAdd.find(e=>e.title ===libro.title)

console.log(libroYaExistente);
if(!libroYaExistente){
    setLibro([...librosAdd, libro]);
}
  };

  const Paginas = (sliderValue: string) => {
    const valor = Number.parseInt(sliderValue);
    const libro = libros.library.filter(x => x.book.pages < valor);
    setLibros(libro);
  };

  const OrdenarCategoria = (valor: string) => {
    if (valor === 'Todas') {
      setLibros(libros.library);
    } else {
      const librosFiltrados = libros.library.filter(libro => libro.book.genre === valor);
      setLibros(librosFiltrados);
    }
  };

  const handleChange = (titulo: any | Event) => {

    const libro = libros.library.filter(e => e.book.title.toLowerCase().includes(titulo.target.value.toLowerCase()));
    if (libro.length > 0) {
      setLibros(libro);
    } else if (titulo === null || titulo === '') {
      setLibros(libros.library);
    }
  };

  return (
    <div className="App">


      <div style={{ padding: '10px', color: 'blue' }}>
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>.
          </button>
          <input
            type="text"
            onInput={handleChange}
            className="input-search"
            placeholder="Type to Search..."
          />
        </div>

        <div style={{ height: '40px' }}></div>
        <select
          className="form-select"
          onChange={e => {
            OrdenarCategoria(e.target.value);
          }}
          aria-label="Default select example"
        >
          <option value="Todas" selected>
            Todas
          </option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Terror">Terror</option>
          <option value="Zombies">Zombies</option>
        </select>
        <div style={{ height: '40px' }}></div>
        <div className="range">
          <input
            type="range"
            onChange={e => Paginas(e.target.value)}
            min={44}
            max={1300}
            className="form-range"
            id="customRange1"
            placeholder="."
          />
        </div>
      </div>


      <button className="alert alert-primary" id="muestra" onClick={() => setAgre(!agregado)}>
        Ver Libros Agregados
      </button>
      <div id="libros">
        {agregado && (
          <div>
            <h1 className="animate-charcter">{librosAdd.length === 0 ? 'No hay libros' : 'Libros Agregados'}</h1>
            <LibrosAgregados libro={librosAdd} />
          </div>
        )}
      </div>


      <div className="container">
        <div className="row">
          {Libros.map((e, i) => (
            <div key={i} style={{ width: 300 }}>
              <div className="carta">
                <figure>
                  <img src={e.book.cover} alt="Mountains" />
                  <figcaption>
                    <div className="cuerpo">
                      <h3 className="animate-charcter" style={{ fontSize: '30px' }}>
                        {e.book.title}
                      </h3>
                      <p className="card-text">{e?.book.synopsis}</p>
                      <p className="card-text">Author: {e.book.author.name}</p>
                      <p className="card-text">Genre: {e.book.genre}</p>
                      <p className="card-text">Year: {e.book.year}</p>
                      <a className="btn btn-success" onClick={() => Agregar(e.book)}>
                        Agregar libro
                      </a>
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
};

export default See;