
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=l3OM7eGqGpkqp7yElwBO9PBFBpKPWC6d&q=${category}&limit=10`;

    // const url = `https://api.giphy.com/v1/gifs/search?api_key=MkoJ3e9X6Ir7lM4JQHwxwMmhgc7LyD9q&q=${category}&limit=10`;
    const resp = await fetch(url); 
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    return gifs;

}; 