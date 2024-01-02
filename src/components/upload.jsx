import '../assets/styles/upload.css'
import app from '../firebase';
import close from "../assets/images/cross.svg"
import { useEffect,useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Upload=({closeUpload})=>{

    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVideoPerc] = useState(0);
    const [inputs, setInputs] = useState({});
    const [tags, setTags] = useState([]);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleTags = (e) => {
        setTags(e.target.value.split(","));
    };

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
            switch (snapshot.state) {
            case "paused":
                console.log("Upload is paused");
                break;
            case "running":
                console.log("Upload is running");
                break;
            default:
                break;
            }
        },
        (error) => {},
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setInputs((prev) => {
                return { ...prev, [urlType]: downloadURL };
            });
            });
        }
        );
    };

    useEffect(() => {
        video && uploadFile(video , "videoUrl");
    }, [video]);

    useEffect(() => {
        img && uploadFile(img, "imgUrl");
    }, [img]);

    const handleUpload = async (e)=>{
        e.preventDefault();
        const res = await axios.post("/api/videos", {...inputs, tags})
        closeUpload();
        res.status===200 && navigate(`/video/${res.data._id}`)
    }

    return(
        <>
        <div className="upload">
            <div className="upload-helper">
                <div onClick={closeUpload} className="upload-close"><img src={close} alt="" /></div>
                <div className="upload-helper-helper">
                    <h1>Upload a Video</h1>
                    <div className='upload-unit'>
                        <label>Video:</label>
                        {videoPerc>0 ? ("Uploading: "+videoPerc+"%"):<input type="file" accept='video/*' onChange={e=>setVideo(e.target.files[0])}/>}
                    </div>
                    <div className="upload-unit">
                        <label>Title:</label>
                        <input type="text" placeholder='Title' name='title' onChange={handleChange}/>
                    </div>
                    <div className="upload-unit">
                        <label>Description:</label>
                        <textarea rows="8" placeholder='Description' name='desc' onChange={handleChange}></textarea>
                    </div>
                    <div className="upload-unit">
                        <label>Tags:</label>
                        <input type="text" placeholder='Seperate tags with commas.' onChange={handleTags} />
                    </div>
                    <div className='upload-unit'>
                        <label>Image:</label>
                        {imgPerc>0 ?("Uploading: "+imgPerc+"%"):<input type="file" accept='image/*' onChange={e=>setImg(e.target.files[0])} />}
                    </div>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Upload