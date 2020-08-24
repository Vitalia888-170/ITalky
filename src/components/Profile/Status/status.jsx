import React,{useState, useEffect} from 'react';


 const ProfileStatus = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	 	const activateStatus=()=>{
	 		 setEditMode(true);
 			};

 			const deactivateStatus=()=>{
	 		 setEditMode(false);
	 		 props.updateStatusThunk(status);
 			};		

 			const changeStatus = (e) =>{
 			setStatus(e.currentTarget.value);
 			}

 			useEffect( () =>{
 				setStatus(props.status);
 			},[props.status]);

		return(
				<div>
					{ !editMode &&
					<div>
						<span onDoubleClick={activateStatus}>{ props.status}</span>
					</div>
					}
					
					{editMode &&
					<div>
						<input  onChange={changeStatus} autoFocus={true} 
						onBlur={deactivateStatus} value={status}/>
					</div>
					}
					
				</div>
		)
}
export default ProfileStatus;