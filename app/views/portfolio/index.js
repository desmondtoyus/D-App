import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react';
import Wrapper from '../../components/wrapper';
import myImg from '../../assets/images/desmond.jpg'

function Portfolio(props){

    return(
        <Wrapper title={`PortFolio`} desc={`Desmond Ademiluyi -  hands-on React (& Redux) and NodeJS Engineer, I have over 7 years’ experience working with JavaScript.`}>
          <div className="container">
			<div className="site-title text-center">
				<h3>Portfolio</h3>
				{/* <p>Experienced JavaScript Developer with over seven years’ experience developing scalable, high-performance, and responsive web applications.</p> */}
			</div>
	<div className="row">
		<div className='list-group gallery'>
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Sharable Social Counter</small>
                    </div>
                </a>
            </div> 
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Image Title</small>
                    </div> 
                </a>
            </div> 
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Image Title</small>
                    </div> 
                </a>
            </div> 
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Image Title</small>
                    </div> 
                </a>
            </div> 
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Image Title</small>
                    </div> 
                </a>
            </div> 
            <div className='col-md-6'>
                <a className="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png" target="_blank">
                    <img className="img-responsive" alt="" src="http://placehold.it/320x320" />
                    <div className='text-right'>
                        <small className='text-muted'>Image Title</small>
                    </div> 
                </a>
            </div> 
        </div>
	</div> 
</div> 
         </Wrapper>
    )
}

export default memo(Portfolio);