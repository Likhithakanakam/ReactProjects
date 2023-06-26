import React from 'react';
import '../index.css';

export default function Meme(){
    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:""
    });

    const [allMemeImages,setAllMemeImages] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    },[])
    

    function onClickForImage(){
        let randomNumber = Math.floor(Math.random() * allMemeImages.length) ;
        let randomMeme= allMemeImages[randomNumber];
        setMeme(prevObject => ({...prevObject,randomImage:randomMeme.url}));
    }

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevForm => ({
            ...prevForm,
            [name]:value
        }))
    }
    
    return (
        <main>
        <div className='form'>
            <input type='text' className='form_input1' placeholder='Top text' 
                    name="topText"
                    value= {meme.topText} onChange={handleChange}
                    />
            <input type='text' className='form_input2' placeholder='Bottom text'
                    name="bottomText"
                    value= {meme.bottomText} onChange={handleChange}/>
            <button className='form_button' onClick={onClickForImage}>Get a new meme image 🖼</button>
        </div>
        <div className='meme'>
        <img src={meme.randomImage} alt="Image" className='main_img'></img>
        <h2 className="meme_text toptext">{meme.topText}</h2>
        <h2 className="meme_text bottomtext">{meme.bottomText}</h2>
        </div>
        </main>
    )
} 