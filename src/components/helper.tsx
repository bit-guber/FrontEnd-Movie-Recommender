const options:{
    auth_headers: {
    method: string,
    headers: {
        accept: string,
        Authorization: string },
    priority: string},
    api_url: string
    ViewedMovieList: string[]
} = {
    auth_headers: {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODVhOGY3NGUxYjFhNjc0YTIwZDhmY2UzYzQ3OWJiOSIsInN1YiI6IjY1MmU3NTcxMDI0ZWM4MDExZTM1Njk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cY6LOPoZCTF5fuZ7h42N_bqHqau3XxgrHUI2o37Fvto'
        },
        priority: "high"
    },
    
    api_url: "https://recommender-api-vercel.vercel.app/get-list",
    ViewedMovieList: []
};

export default options