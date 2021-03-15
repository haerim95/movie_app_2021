import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovie = async () =>{
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // this.setState({ movies : movies }) // state : 구조분해 할당으로 얻은 영화 데이터 변수
    // state와 axios.get()의 결과 값 변수의 이름이 같다고 둘을 혼동하면 안된다.

    this.setState({ movies, isLoading : false }); // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 다음과 같이 'movies' 로 축약할 수 있다.
  }
  componentDidMount(){  //render 함수가 실행한 뒤 실행
    this.getMovie();
  };
  render(){
    const { isLoading, movies } = this.state;
    return <section>{isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ): (
        <div className="movies">
          {movies.map( movie => (
                <Movie //Movie Component 출력
                  key={movie.id} //리액트는 컴포넌트가 서로 다르다는걸 알 방법이 없기때문에 key값을 입력해서 서로 다르다는걸 알려줘야한다.
                  //key 값은 리액트 내부에서 사용되는 특수한 props라 Movie 컴포넌트에 직접 연결되지 않는다.
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} //movie 컴퍼넌트에선  poster로 지정했지만 실제 key 이름은 medium_cover_image이다.
                  genres={movie.genres}
                />
              ))}
        </div>
      )}
      </section>
  }
}

export default App;
