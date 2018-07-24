
import React from 'react'



const wrapperWithClass = (className,ComponentToWrap) =>
    class Wrapper extends React.Component{


        render(){
            return (<div className={className}>
                <ComponentToWrap {...this.props} />
            </div>)
        }
    };




export default wrapperWithClass;