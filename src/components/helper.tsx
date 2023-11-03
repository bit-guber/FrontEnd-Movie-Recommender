const options:{
    auth_headers: {
    method: string,
    headers: {
        accept: string,
        Authorization: string },
    priority: string
    },
    loadingGif:string,
    api_url: string
    ViewedMovieList: string[]
} = {
    auth_headers: {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer '
        },
        priority: "high"
    },
    
    loadingGif: "https://media1.giphy.com/media/W22b2eea2XxB6DiTWg/giphy.gif",
    api_url: "https://recommender-api-vercel.vercel.app/get-list",
    ViewedMovieList: []
};

export default options
