import React, { memo, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../../components/wrapper';
import { listProjects, listChanges } from "../../redux/actions/lists";
import Thumbnail from '../../components/thumbnail';
import Loader from '../../components/loader';

function Portfolio(props){

    const { loading, projects } = useSelector((state)=>state.listings)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listChanges({prop:'loading', value:true}))
        dispatch(listProjects());
    }, []);

    //useMemo used here cos this will require some amount of processing
    // and we do not want this to render everytime the component renders
    // the cached value is returned instead;
    const lists = () => useMemo(()=><Thumbnail projects= {projects}/>,[projects])
    return(
        <Wrapper title={`PortFolio`} viewId='portfolio' desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
          <div className="container">
			<div className="site-title text-center">
				<h3>Portfolio</h3>
			</div>
            
	<div className="row">
        {loading?<div className='col-md-offset-5 col-md-2'><Loader size={`16px`} text={`Loading`}/> </div>: null}
		{!loading && !projects.length ? <div className='col-md-offset-5 col-md-2'> No Rows found! </div> : null}
        <div className='list-group gallery'>
            {lists()}
        </div>
	</div> 
</div> 
         </Wrapper>
    )
}

export default memo(Portfolio);