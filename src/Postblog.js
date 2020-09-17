import Image from 'react-bootstrap/Image';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Home from './home.js';



export default function Postblog(props) {

    return (

            <div className="container-fluid">
               <h5 className="text-center">Thoughts After Boot Camp</h5>
                    <h5>Post #1</h5>
                        <p>I never thought I would find myself trying to begin a new career
                            in the middle of a pandemic, but I guess none of us ever thought we 
                            would find ourselves here.  This has certainly been a challenging time for us all!
                            This is where I have to be completely honest and say that I have struggled 
                            with balancing my time with trying to help my four kids navigate the uncertainty of 
                            virtual school and enhancing my knowledge of code.  I'm excited to get back to 
                            normal, even if that is a new normal.  I feel like I have a good grasp on how 
                            to balance my needs as a "baby" developer and a virtual learning mom, after a 
                            few bumps and bruises.  I'm currently working on a new project and hope to 
                            really dive into that this week.  In these uncertain times, we are all doing the best
                            we can to navigate a new world and I am excited to make development a part of mine!
                        </p>
        
              
            </div >
        
          )
        
        }