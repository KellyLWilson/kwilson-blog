import React from 'react';
import Image from 'react-bootstrap/Image';



export default function Home() {

    return (
        <>
        <div className="Container">
        <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
        <h1>Kelly L Wilson</h1>
        <h2>Welcome to My Blog</h2>
        </div>
        </div>
        <div className="Row">
          {/* <div className="Col xs={6} md={4}">
            <Image src="./images/family.jpg" rounded />
          </div> */}
          <div className="Col xs={6} md={4}">
            <Image src="./images/happy-place.jpg" roundedCircle />
          </div>
          {/* <div className="Col xs={6} md={4}">
            <Image src="./images/flat-lick.jpg" thumbnail />
            </div> */}
        </div>
      </div>  
    </>
    
    );
}
