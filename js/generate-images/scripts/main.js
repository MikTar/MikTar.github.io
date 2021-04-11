  
  let section = document.querySelector('.pokemons')
  
  for(let i = 1; i < 301; i++){
        let pokemondiv = document.createElement('div');
        let pokemon = document.createElement('img')
        let num = document.createElement('p');
        num.innerText = `#${[i]}`
        pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`;
        pokemon.classList.add('pokemon-size');
        pokemondiv.classList.add('div-size')
        section.appendChild(pokemondiv)
        pokemondiv.appendChild(pokemon)
         pokemon.after(num)
  } 

  let heading = document.createElement('h1');
  heading.innerText = 'Look at my pokemons!';
  heading.classList.add('heading');
  document.body.prepend(heading);