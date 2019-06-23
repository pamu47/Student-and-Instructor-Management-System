import React, {Fragment, useState} from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';


const FileUpload = () => {

    //setting up the states

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);





    const onChange = e => {
        //array of files - single file upload
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);

    }

    const onSubmit = async e => {
        //prevent the default method
        e.preventDefault();
        const formData = new FormData();

        //backend file req.files.file <-
        formData.append('file', file);

        try{
            const res = await axios.post('/upload', formData, {
               headers:{
                   'Content-Type': 'multipart/form-data'
               },

                onUploadProgress: progressEvent => {
                   setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100)/progressEvent.total)))

                    //clear percentage
                    setTimeout(()=> setUploadPercentage(0), 1000);
                }

            });


            const { fileName, filePath} = res.data;

            setUploadedFile({fileName, filePath});


            setMessage('File Uploaded');

        }catch (err) {
            if(err.response.status === 500){
                setMessage('there was a problem with the server');
            }else{
                setMessage(err.response.data.msg);
            }
        }
    }

    return(
        <Fragment>
            <div>
                <h1 align="center">Upload Your Assignments Here</h1>
                <br/>
                <h2><img src="https://img.icons8.com/color/48/000000/key.png"/>File Name should be your indexno_assignmentID</h2><br/>
                <h2><img src="https://img.icons8.com/color/48/000000/key.png"/>When submitting one page you can either upload an image or a file</h2><br/>
                <p>


                </p>
            </div>
            <h2>
            {message ? <Message msg={message}/> : null}
            <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input type="file"
                       className="custom-file-input"
                       id="customFile"
                       onChange={onChange}/>

                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
            </div>
                
                <Progress percentage={uploadPercentage}/>

                <input type="submit" value="upload" className="btn btn-primary btn-block mt-4"/>
            </form>

            { uploadedFile ? (
                <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <h3 className="text-center">{uploadedFile.fileName}</h3>
                    <img style={{width:'100%'}} src={uploadedFile.filePath} alt=""/>

                </div>
                </div>):null
            }
            </h2>
        </Fragment>
    )
}

export default FileUpload;