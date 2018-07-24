
import React from 'react'

// const wrapperWithClass = (className,ComponentToWrap) => (props) => {
//     return (
//         <div className={className}>
//             <ComponentToWrap {...props} />
//         </div>
//     );
// };
//


const wrapperWithClass = (className,ComponentToWrap) =>
    class Wrapper extends React.Component{

        render(){
            return (<div className={className}>
                <ComponentToWrap {...this.props} />
            </div>)
        }

    };




export default wrapperWithClass;