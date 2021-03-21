import React from 'react';

// componentDIdMount 를 이용하기 위해 class component로 만들어준다
class Detail extends React.Component{

    //사용자가 url을 쳐서 그냥 들어오려고 할때 홈으로 돌려보내기
    componentDidMount(){
        const {location, history} = this.props; // 구조분해 할당으로 location,histrory를 얻는다.
        if (location.state === undefined){ //location에 state가 없는 경우
            history.push('/'); //home으로 강제 이동
        }
    }

    render(){
        const { location } = this.props;
        // 새로고침시 location state가 undefined이기 때문에 에러가 발생한다.
        //그러므로 render 함수에도 리다이렉트 코드를 추가해주어야 한다.
        if(location.state){
            return <span>{ location.state.title }</span>
        }else{
            return null;
        }
    }
}

export default Detail;