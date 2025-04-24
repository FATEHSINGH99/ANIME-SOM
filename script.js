// पुराना कोड (हटाएँ)
// const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);

// नया कोड (CORS Proxy के साथ)
const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v4/anime?q=${query}&sfw`);
