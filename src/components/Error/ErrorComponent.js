import React from 'react'


class ErrorComponent extends React.Component{

    state = {
        isError : false,
        errorMessage : ''

    };

    componentDidCatch(error,info){
        this.setState({
            isError:true,
            errorMessage : error
        })
    }

    render(){
        return (this.state.isError) ? <h1>{this.state.errorMessage}</h1> : this.props.children;
    }

}


export default ErrorComponent;