import React from 'react'
import './UploadImage.css'

export default function UploadImage() {
  return (
    <div className='uploadMain'>
        <div className='uploadContainer'>
            <div className='uploadBox'>
                <input type="file" />
                <button>Upload</button>
            </div>
            
        </div>
    </div>
  )
}
