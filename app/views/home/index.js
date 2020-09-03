import React, {memo, useState, useEffect, useCallback, useMemo} from 'react';
// We use React.PureComponent with class component while React.memo works with functional components 
// We can use React.useMemo when we compute expensive value that we don't want to compute it 
// again and again when the component is rerendered
// useMemo returns a memoized value
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import Wrapper from '../../components/wrapper/index';
import {readLists} from '../../redux/actions/lists/listing';

function Home(){
    // const [counter, setCounter] = useState(0);
    // const [count1, setCount1] = useState(0)
    // const [count2, setCount2] = useState(0)
    let dispatch = useDispatch();
    const listings = useSelector(state => state.listings);

    function loadList(){
        dispatch(readLists());
    }

    useEffect(() => {
        loadList();
    }, [listings.id]);

    const increaseCounter1 = () => {
        setCount1(count1 => count1 + 1)
    }
    // const myReply = React.useMemo(() => decideWhatToSay (girlFriendWords), [girlFriendWords])
    // React.useMemo takes [girlFriendWords] as its dependencies array which means that it will only
    //  run decideWhatToSay function when girlFriendWords value changes.
    const {name, id, location} = listings;
    return (
        <Wrapper locale={'en'} title={`Desmond Ademiluyi - ${id}`} desc={location}>
            <h1>Welcome Home Son 2 {name}</h1>
            <button onClick={increaseCounter1}>Increase counter 1</button>
        </Wrapper>
    )
}
// //
// The Recompose package exports a { pure } HOC that tries to optimize a 
// React component by preventing updates on the component unless a prop has 
// changed, using shallowEqual() to test for changes.

// export default Home
export default memo(Home)

// const [count, setCount] = useState(0)

// const increment = useCallback(() => setCount((x) => x + 1), [])

// <input type='text' ref='name' onClicl={this.handleClick()} />
// handeClick = () => this.setState({name: this.refs.name.value})
// https://dev.to/dinhhuyams/introduction-to-react-memo-usememo-and-usecallback-5ei3

// 🚀 React.memo is similar to React.PureComponent except the fact that it is used for functional 
// component while React.PureComponent is used only in class component
// 🚀 React.useMemo returns a memoized value while React.useCallback return a memoized callback
// https://github.com/NataliaGon
