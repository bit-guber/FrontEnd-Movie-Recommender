// import options from "./helper"
import Describe from "./components/Describe";
import RecommendedMovies from "./components/RecommendedMovies";
// import ViewedMovies from "./components/ViewedMovies";

// const temp  = "dark"
// const [Theme, setTheme] = useState( 0 );
// let viewedMovieList = options.viewedMovieList;
function App() {

  return (
    <>
      <Describe data-bs-theme = "dark"/>
      {/* <ViewedMovies data-bs-theme = "dark"/> */}
      <RecommendedMovies data-bs-theme = "dark"/>
    </>
  )
}

export default App
