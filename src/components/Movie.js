import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({title, year, summary, poster, genres}){ //함수형 컴포넌트
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: 'movie-detail',
                    state: {year, title, summary, poster, genres},
                }}
            >
                <img src={poster}  alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    {/* 장르는 배열이므로 map() 함수를 사용하여 출력한다 */}
                    <ul className="movie_genres">
                        {genres.map((genre, index)=>{ //genre에는 genres의 배열 원소가, indexdpsms 1,2,3...번째임을 알리는 숫자가
                            return <li key={index} className="movie__genre">{genre}</li>;
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p> {/* //slice 함수로 글자 수 제한 */}
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = { //propTypes : props의 자료형을 검사하는 도구, 설치해서 사용, 전달받은 props가 맞는 값인지 확인해준다.
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // 이미지 주소가 문자열이므로 string
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //문자열 배일이 맞는지
};

export default Movie;