
// Higher order component AKA HOC

// use aux  wrapper in place of div that does not do any styling - avoid render of a unnecessary html element(ie., div)

const Aux = (props) => props.children;

export default Aux;