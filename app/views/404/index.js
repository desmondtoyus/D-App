import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react';
import Wrapper from '../../components/wrapper';

function NotFound(props){

    return(
        <Wrapper viewId='404' desc={`desmond.pro - Page cannot be found`}>
         <div className="container" style={{marginTop:'10%'}}>
			<div className="site-title text-center">
				<h3>Page Not Found</h3>
			</div>
            </div>
         </Wrapper>
    )
}

export default memo(NotFound);