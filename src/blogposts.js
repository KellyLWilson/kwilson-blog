import Image from 'react-bootstrap/Image';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Home from './home.js';


export default function BlogPosts(props) {

    return (

            <div className="container-fluid">
               <h5 className="text-center">Blog Questions and Answers</h5>
              <table key='id' className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Week #</th>
                    <th scope="col">Question</th>
                    <th scope="col">Answer</th>
                  </tr>
                </thead>
        
                <tbody>
                  {props.posts.map((post, index) => 
                     (
                    
                    <React.Fragment key={index}>
                    <tr>
        
                      
                      
                          
                   <td>{post.week}</td>
                      <td>{post.question}</td>
                      <td>{post.answer}</td>
                    </tr>
                  
        </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div >
        
          )
        
        }
        
        
        


//         <>
//         <div className="Container">
//         <div className="row">
//         <div className="col"></div>
//         <div className="col"></div>
//         <div className="col">
//         <h1 font-style="fantasy">Kelly L Wilson</h1>
//         </div>
//         </div>
//         <div className="Row">
//           {/* <div className="Col xs={6} md={4}">
//             <Image src="./images/family.jpg" rounded />
//           </div> */}
//           <div className="Col xs={6} md={4}">
//             <Image src="./images/happy-place.jpg" roundedCircle />
//           </div>
//           {/* <div className="Col xs={6} md={4}">
//             <Image src="./images/flat-lick.jpg" thumbnail />
//             </div> */}
//         </div>
//       </div>  
//     </>
    
//     );
// }