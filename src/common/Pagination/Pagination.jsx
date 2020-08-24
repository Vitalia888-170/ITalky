import React,{useState} from 'react';
import Classes from './../../components/Users/Users.module.css';


const Paginator = ({totalCountPage, pageSize,portionSize = 5, ...props}) =>{
		let countPages= Math.ceil(totalCountPage/pageSize);
		let pages=[];
		for (let i=1; i <= countPages; i++){
			pages.push(i);
		}	
		let portionCount = Math.ceil(countPages/portionSize);
		let [portionNumber, setPortionNumber] = useState(1);
		let leftSidePageNumber = (portionNumber - 1) * portionSize + 1;
		let rightSidePageNumber = portionNumber * portionSize ;

		return(
			<div className={Classes.page}>
			{portionNumber>1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Prev</button>
				}
				{ pages
				.filter(p=> p>= leftSidePageNumber && p<= rightSidePageNumber)
				.map(p=>{
				return <span className={props.currentPage === p && Classes.selectedPage} 
				onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})
				}
				{portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>Next</button>
				}
			</div>
			)
			}

		

export default Paginator;