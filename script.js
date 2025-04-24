// पुराना कोड (हटाएँ)
// const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);

// नया कोड (CORS Proxy के साथ)
const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v4/anime?q=${query}&sfw`);
async function fetchAnime(query) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 सेकंड का इंतज़ार
  // बाकी कोड...
}
console.log("API Response:", data); // डेटा चेक करें
