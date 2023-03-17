import { ref, remove } from 'firebase/database';
import React, {  useRef } from 'react'
// import { Navigate} from 'react-router-dom';
import { db } from '../../firebase';

import './Card.css'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import del from './../../Assets/del.png'





interface Image_card{
    Url:string;
    Name:string;
    public_id:string;
    stype:string;
    
}

export default function Card(props:Image_card) {




  const DeleteDB = (public_id:string) => {

    let uuid=public_id.split('/');
    // console.log(id,uuid[2]);
    // setId(uuid[2]);
    remove(ref(db, `Image/${uuid[2]}`));
    // <Navigate to={'/Gallery/' + props.stype }/>
    window.location.reload();

  };

  let auth_token = localStorage.getItem('authtoken');
  const handledelete=(public_id:string)=>{
    console.log("delete pressed");
    console.log('publc_id',public_id)
    DeleteDB(public_id);

    
  }
  // const api_del = "https://api.cloudinary.com/v1_1/dldfmckou/image/destroy";


  const toast = useRef<Toast>(null);

  const accept = () => {
      toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      handledelete(props.public_id); 
  }

  const reject = () => {
      toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  const confirm2 = () => {
    
    confirmDialog({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        accept,
        reject
    });
};

// const check=()=>{

// if(auth_token==='true'){
//   document.getElementById('del')?.classList.remove('del_i');
//   return 'true'
// }
// document.getElementById('del')?.classList.add('del_i');
   
//  return 'false'
// }
 
  return (
    <div className='card1'>
   
       {auth_token==='true'  &&
        <div id ='del'className='del_div'>
        <Toast ref={toast} />
            <ConfirmDialog />
                         
            <img className='del_icon' onClick={confirm2} src={del} alt="del" />
            
        </div>
        }
        <img className='card_img' src={props.Url} alt="door" />
        <div className='card_p'>{props.Name}</div>

    </div>
  )
}
