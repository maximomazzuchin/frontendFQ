import React, {useState} from "react";


function ImageCompressor(props){

    const [baseImage, setBaseImage] = useState("");

    const uploadImage = async(e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        //console.log(base64);
        setBaseImage(base64);
        props.onImageSelected(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };


    return(
        <div className="ImageCompressor">
            <input type="file" onChange={(e) => {
                uploadImage(e)
                }}
            />
        </div>
    )

};

export default ImageCompressor;