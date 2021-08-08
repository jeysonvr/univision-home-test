export const getGifs = async( keyword, offset ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( keyword ) }&offset=${ offset }&limit=10&api_key=lEb3Q8VAMchDtXItl4AA1AsaXEz8CmTT`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}