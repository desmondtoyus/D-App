import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../../components/wrapper';
import { listProjects } from "../../redux/actions/lists";
import Thumbnail from '../../components/thumbnail';

function Portfolio(props){

    const { loading, projects } = useSelector((state)=>state.listings)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProjects());
    }, []);

    const lists = () => useMemo(()=><Thumbnail projects= {projects}/>,[projects])
    

    return(
        <Wrapper title={`PortFolio`} viewId='portfolio' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
          <div className="container">
			<div className="site-title text-center">
				<h3>Portfolio</h3>
			</div>
	<div className="row">
		<div className='list-group gallery'>
            {lists()}
        </div>
	</div> 
</div> 
         </Wrapper>
    )
}

export default memo(Portfolio);