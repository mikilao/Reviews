import React , {useState} from 'react';
import people from "./data";
//import './App.css';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

function Review() {
    const [index, setIndex] = useState(0);
    const {name, job, image , text} = people[index];
    const indexLength = (number) => {
        if (number > people.length - 1) {
            return 0;
          }
          if (number < 0) {
            return people.length - 1;
          }
          return number;
        };
    const prevPerson =() => {
        setIndex((index) => { 
        let newIndex = index - 1;
        return indexLength(newIndex);
        })
    }
    const nextPerson =() => {
        setIndex((index) => { 
        let newIndex = index + 1;
        return indexLength(newIndex);
        })
        
    }
    const randomPerson =() => {
            
            let ranNumber = Math.floor(people.length * Math.random());
            if (ranNumber === index) {
                ranNumber = index + 1;
              }
          setIndex(indexLength(ranNumber));
            }
        
    return(
         
            <article className="review">
                <div className="img-container">
                    <img src={image} alt = {name} className="person-img"/>
                    <span className="quote-icon">
                        <FaQuoteRight/>
                    </span>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="info review">{text}</p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                            <FaChevronLeft />
                        
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight />
                        
                        </button>
                        <button className="random-btn" onClick={randomPerson}>suprise me!</button>
                    </div>
                               </div> 

            </article>
        
    )
}

export default Review
