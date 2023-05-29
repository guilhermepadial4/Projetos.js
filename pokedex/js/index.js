const pokemonName = document.querySelector(".pokemon--name");
const pokemonNumber = document.querySelector(".pokemon--number");
const pokemonImage = document.querySelector(".pokemon--image");
const form = document.querySelector(".form");
const inputSearch = document.querySelector(".input--search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-netx");

let serachPokemon=1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    } ;  
};

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'loading...'
    pokemonNumber.innerHTML='';

    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonImage.style.display='block'
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        inputSearch.value='';
        serachPokemon = data.id;
    }else{
        pokemonImage.style.display='none';
        pokemonName.innerHTML = 'not found :c';
        pokemonNumber.innerHTML = '';
    };
};

form.addEventListener("submit", (evt)=>{   
    evt.preventDefault();
    renderPokemon(inputSearch.value.toLowerCase());
});

buttonPrev.addEventListener("click",()=>{
    if(serachPokemon > 1){
        serachPokemon -= 1;
        renderPokemon(serachPokemon);
    };
});

buttonNext.addEventListener("click",()=>{
    serachPokemon += 1;
    renderPokemon(serachPokemon);
});

renderPokemon(serachPokemon);
