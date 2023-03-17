import React, { useEffect } from 'react'
import './UploadImage.css'
import { useState } from 'react';
import { db } from "./../../firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
// import { randomInt } from 'crypto';


export default function UploadImage() {



  const [image, setImage] = useState<File | string>("")
  const [types, setType] = useState<string[]>([])
  const [stype, setStype] = useState("")
  const [filename, setFilename] = useState("")
// const [progress, setProgress] = useState(0);
let progress=0;
let isUploading=false;

  const uuid = uid();


  // ===============================Cloudinary=================================== 
  const dataapi = "https://api.cloudinary.com/v1_1/dldfmckou/image/upload";

  const submitImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "my_preset")
    data.append("cloud_name", "dldfmckou")
    data.append("public_id", `${stype}/${uuid}`)
    // data.append("asset_folder","Main Door")


    fetch(dataapi, {
      method: "post",
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data['secure_url']);
        writeToDatabase(data['secure_url'],data['public_id']);
        setImage("");

      }).catch((err) => {
        console.log(err);
      })

      onUpload();
  }
  
  // ===============================Cloudinary===================================


  // ============================FireBase===================================

  //write
  const writeToDatabase = (url: string,public_id:string) => {


    set(ref(db, `Image/${uuid}`), {
      url,
      uuid,
      stype,
      public_id
    });


  };

  //read
  useEffect(() => {

    // console.log("image ="+image.);
    const dbRef = ref(db, '/Type');

    setType([]);
    onValue(dbRef, (snapshot) => {

      snapshot.forEach((childSnapshot) => {

        setType((types) => [...types, childSnapshot.val().name])
        //  console.log(types,'typename',childSnapshot.val().name);
      });


    }, {
      onlyOnce: true
    });



  }, []);




  // ============================FireBase===================================
  const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
  const UploadImageOnClick = (event: any) => {


    if (hiddenFileInput.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      hiddenFileInput.current.click();
    }
    // hiddenFileInput.current.click();
  }
  // const handleChange = event => {
  // };
  const cancelUpload = () => {
    document.getElementById('inputdiv')?.classList.remove('deactive');
    document.getElementById('up_btn')?.classList.add('deactive');
    document.getElementById('upload_done')?.classList.add('deactive');


  }

  const doUpload = () => {
    document.getElementById('inputdiv')?.classList.add('deactive');
    document.getElementById('up_btn')?.classList.remove('deactive');
  }

  const onTypeSelect = () => {
    document.getElementById('input')?.classList.remove('deactive');
  }

  const onUpload = () => {
  
    document.getElementById('up_btn')?.classList.add('deactive');
    document.getElementById('uploading')?.classList.remove('deactive');
    isUploading=true;
    progressLoop();
  }
 const progressDisplay=()=> {
    const progressValue =document.getElementById('modal__progress-value') ;
    const progressFill = document.getElementById('modal__progress-fill') ;
    // progressFi
    const progressTimes100 = Math.floor(progress * 100);

    if (progressValue) progressValue.textContent = `${progressTimes100}%`;
    if (progressFill) progressFill.style.transform = `translateX(${progressTimes100}%)`;
}
const success=()=> {
  isUploading = false;
  document.getElementById('uploading')?.classList.add('deactive');
  document.getElementById('upload_done')?.classList.remove('deactive');
 
  // state = 3;
  // stateDisplay();
  progress=1;
  console.log("sucess");
  setImage("");
  setFilename("");
}
// function randomNumberInRange(min:any, max:any) {
//   // 👇️ get number between min (inclusive) and max (inclusive)
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
let  progressTimeout: NodeJS.Timeout | null = null;
async function progressLoop() {
    progressDisplay();
// console.log('upload',isUploading);
// console.log('progress',progress);
if(progressTimeout===null){
  // console.log('progress',progress);
}
    if (isUploading) {
        if (progress === 0) {
            await new Promise(res => setTimeout(res, 500));
            // fail randomly
            // if (!isUploading) {
            //     return;
            // } else if (randomNumberInRange(0,2) === 0) {
            //     // fail();
            //     return;
            // }
        }
        // …or continue with progress
        if (progress < 0.9) {
            // setProgress(progress+0.1);
            progress+=0.1;
          progressTimeout = setTimeout(progressLoop, 30);
        } else if (progress >= 0.9) {
          progress=1;
          progressTimeout = setTimeout(() => {
                if (isUploading) {
                    success();
                    // this.stateDisplay();
                    progressTimeout = null;
                }
            }, 150);
        }
    }
}





  return (
    <div className='uploadMain'>
      <div className='uploadContainer'>
        <div className='uploadBox'>

          <div className='col_left'>
            <svg className="modal_icon modal_icon--blue" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
              <g fill="none" stroke="hsl(223,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle className="modal_icon-sdo69" cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
                <polyline className="modal_icon-sdo14" points="7 12 12 7 17 12" strokeDasharray="14.2 14.2" />
                <line className="modal_icon-sdo10" x1="12" y1="7" x2="12" y2="17" strokeDasharray="10 10" />
              </g>
            </svg>
            	{/* <!-- error --> */}
			{/* <svg className="modal__icon modal__icon--red" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
				<g fill="none" stroke="hsl(3,90%,50%)" stroke-width="2" stroke-linecap="round">
					<circle className="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
					<line className="modal__icon-sdo14" x1="7" y1="7" x2="17" y2="17" stroke-dasharray="14.2 14.2" />
					<line className="modal__icon-sdo14" x1="17" y1="7" x2="7" y2="17" stroke-dasharray="14.2 14.2" />
				</g>
			</svg> */}
			{/* <!-- check --> */}
			{/* <svg className="modal_icon modal_icon--green" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
				<g fill="none" stroke="hsl(138,90%,50%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle className="modal_icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12" />
					<polyline className="modal_icon-sdo14" points="7 12.5 10 15.5 17 8.5" stroke-dasharray="14.2 14.2" />
				</g>
			</svg> */}
          </div>
          <div className="col_right">

            <div id='inputdiv' className='model_content col_r'>
              <div className='select_type'>

                <label>Door Type </label>
                <select name="" id="" defaultValue="select" onChange={(e) => { setStype(e.target.value); onTypeSelect(); }} >
                  <option value="select" disabled>select</option>
                  {types.map((type, index) => {
                    return (
                      <option key={index} value={type}>{type}</option>
                    )
                  })}
                </select>
              </div>
              <div id='input' className="input deactive">
                <label>Upload a Image</label>
                <span className="modal_button--upload " onClick={UploadImageOnClick}>Choose your File </span>

                <input type="file" onChange={(e) => { setImage(e.target.files![0]); setFilename(e.target.files![0].name); doUpload(); e.target.files=null; }} ref={hiddenFileInput} />
              </div>
            </div>

            <div id='up_btn' className='model_content up_btn deactive'>
              <h5>{filename}</h5>
              <button className='modal_button' onClick={submitImage}>UploadDB</button>
              <button className='modal_button' onClick={onUpload}>Upload</button>
              <button className='modal_button' onClick={cancelUpload}>Cancel</button>
            </div>

            <div id ='uploading'className="modal_content deactive">
              <h2 className="modal_title">Uploading…</h2>
              <p className="modal_message">Just give us a moment to process your file.</p>
              <div className="modal_actions">
                <div className="modal_progress">
                  <div className="modal_progress-value" id='modal__progress-value'data-progress-value>{progress}%</div>
                  <div className="modal_progress-bar">
                    <div className="modal_progress-fill" id='modal__progress-fill' data-progress-fill></div>
                  </div>
                </div>
              </div>
            </div>

            <div id='upload_done'className="modal_content deactive" >
              <h2 className="modal_title">Upload Successful!</h2>
              <p className="modal_message">Your file has been uploaded. </p>
              <div className="modal_actions modal_actions--center">
                {/* <button className="modal__button" type="button" data-action="copy">Copy Link</button> */}
                <button className="modal_button" type="button" onClick={cancelUpload}>Done</button>
              </div>
            </div>

          </div>





        </div>

      </div>
    </div>
  )
}
