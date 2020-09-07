import React, {memo, useState, useEffect, useCallback, useMemo} from 'react';
// We use React.PureComponent with class component while React.memo works with functional components 
// We can use React.useMemo when we compute expensive value that we don't want to compute it 
// again and again when the component is rerendered
// useMemo returns a memoized value
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
// import { Link, withRouter  } from "react-router-dom";
import Wrapper from '../../components/wrapper';
import { listProjects } from '../../redux/actions/lists';
import './home.css';

function Home(props){
    // const [counter, setCounter] = useState(0);
    // const [count1, setCount1] = useState(0)
    // const [count2, setCount2] = useState(0)
    let dispatch = useDispatch();
    const listings = useSelector(state => state.listings);

    // function loadList(){
    //     dispatch(readLists());
    // }

    // useEffect(() => {
    //     loadList();
    // }, [listings.id]);

    // const increaseCounter1 = () => {
    //     setCount1(count1 => count1 + 1)
    // }

    const handleLink = (e)=>{
        e.preventDefault();
        console.log(e.target.id);
        switch (e.target.id) {
            case 'readmore':
                return props.history.push(`/about`)
            case 'contact':
                return props.history.push(`/contact`)
            default:
                return;
        }
    }
    // const myReply = React.useMemo(() => decideWhatToSay (girlFriendWords), [girlFriendWords])
    // React.useMemo takes [girlFriendWords] as its dependencies array which means that it will only
    //  run decideWhatToSay function when girlFriendWords value changes.
    const {name, id, location} = listings;
    return (
        <Wrapper locale={'en'} title={`Desmond Ademiluyi`} viewId='home' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
            {/* <h1>Welcome Home Son 2 {name}</h1>
            <button onClick={increaseCounter1}>Increase counter 1</button> */}
            <div className="text-center hero-row">
				<h1 className="heading" style={{marginTop:'8%'}}><span>::Des</span>mond::</h1>
                <h2 className="subheading">Portfolio</h2>
				<div className="btn-group">
					<button className="btn btn-lg btnx-blue" id='readmore' onClick={handleLink}>Read more</button>
					<button className="btn btn-lg btnx-white" id='contact' onClick={handleLink}>Contact us</button>
				</div>
			</div>
            <div className="row header-features text-center hero-row hero-bottom">
				<div className="col-sm-6 col-md-4 col-lg-4">
					<span className="glyphicon glyphicon-pencil"></span>
					<div>
						<h3>Web Development - Frontend </h3>
						<p>Strong eye for UI design with extensive experiences working with HTML5, CSS, Bootstrap, JavaScript, React JS. </p>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4">
					<span className="glyphicon glyphicon-cloud"></span>
					<div>
						<h3>Web Development - Backend</h3>
						<p>Extensive experience working with Node.js, PostgreSQL, AWS, MySQL & PHP.</p>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 col-lg-4">
					<span className="glyphicon glyphicon-link"></span>
					<div>
						<h3>Mobile App & C TV</h3>
						<p>Vast experience developing Mobile & CTV Apps  with ReactNative, Bright Script and Swift/TVMLKit JS.</p>
					</div>
				</div>
			</div>
        </Wrapper>
    )
}
// //
// The Recompose package exports a { pure } HOC that tries to optimize a 
// React component by preventing updates on the component unless a prop has 
// changed, using shallowEqual() to test for changes.

// export default Home
export default memo(Home);

// const [count, setCount] = useState(0)

// const increment = useCallback(() => setCount((x) => x + 1), [])

// <input type='text' ref='name' onClicl={this.handleClick()} />
// handeClick = () => this.setState({name: this.refs.name.value})
// https://dev.to/dinhhuyams/introduction-to-react-memo-usememo-and-usecallback-5ei3

// 🚀 React.memo is similar to React.PureComponent except the fact that it is used for functional 
// component while React.PureComponent is used only in class component
// 🚀 React.useMemo returns a memoized value while React.useCallback return a memoized callback
// https://github.com/NataliaGon
