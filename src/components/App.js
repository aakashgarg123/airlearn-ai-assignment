import React,{useState} from 'react';
import './App.css'
// import axios from 'axios';

// const CLIENTID = '8b6f5eb93a1ccac'

// const CLIENTSECRET = '0f72e8afbd75e46249aa15151c748873e17b8dcf'

const App = () => {

    const [selectedFiles,setSelectedFiles] = useState([])

    const fileHandleChange = (event) => {
        //
        if(event.target.files){
            const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file))
            

            setSelectedFiles((preview) => preview.concat(fileArray))
            
        }
        
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return (
                <div className="col-sm">
                    <div >
                    <img className="rounded" src={photo} key={photo} />
                    </div>
            </div>
            )
        })
    }
    return (
        <div>

            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand  h1">React Image Upload</span>
                <span className="navbar-text text-white" style={{paddingRight:'10px'}}>
                    Made with ❤ for <a href="https://airlearn.ai/">Airlearn AI</a>
                </span>
            </nav>
            <div className="container">
                <div className="d-flex justify-content-center">
                <input type="file"  multiple id="file" onChange={fileHandleChange} accept="image/*" />
                </div>
                        
                        <div className="row">
                            {renderPhotos(selectedFiles)}
                        </div>
                </div>
        

            
        </div>
    )
}


export default App;