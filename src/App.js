import React from 'react';
import axios from 'axios';

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
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // this.setState({ movies : movies }) // state : 구조분해 할당으로 얻은 영화 데이터 변수
    // state와 axios.get()의 결과 값 변수의 이름이 같다고 둘을 혼동하면 안된다.

    this.setState({ movies, isLoading : false }); // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 다음과 같이 'movies' 로 축약할 수 있다.
  }
  componentDidMount(){ 
    this.getMovie();
  };
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;
