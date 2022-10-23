import React from "react";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function Meme() {
    // const [dataList, setDataList] = useState({data:[]});
    const [memeURLs, setMemeURLs] = useState({memeUrl:[]});
    const [memeList, setMemeList] = useState([]);
    let memeArr = [];

    useEffect(() => {
        fetchMeme();

    }, [])
    useEffect(() => {
        loadMeme();
    }, [memeURLs])
    const fetchMeme = async () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(
            (result) => {
                const urls = result.data.memes.map(meme => meme.url)
                setMemeURLs({memeUrl: urls});
                // console.log(memeURLs);
            },
            (error) => {
                console.log(error.message);
            }
        )
    }

    const randNumber = () => {
        const min = 0;
        const max = 99;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        return rand;
    }

    

    const loadMeme = () => {
        memeArr = Array(6).fill(null);
        for(let i = 0; i < 6; i++)
        {
            const num = randNumber();
            const meme = memeURLs.memeUrl[num];
            memeArr[i] = meme;
        }
        setMemeList(memeArr);
        console.log(memeList);
    }

    return (
        <div>
            <Button sx={{ width: 150, padding: 1, margin: 2 }} variant="outlined"
                onClick={() => {
                loadMeme();
              }}>
                Random
            </Button>
            <div class="pin_container">
            <div class="card card_small">
            <img src={memeList[0]} />
            </div>
            <div class="card card_small">
            <img src={memeList[1]} />
            </div>
            <div class="card card_small">
            <img src={memeList[2]} />
            </div>
            <div class="card card_small">
            <img src={memeList[3]} />
            </div>
            <div class="card card_small">
            <img src={memeList[4]} />
            </div>
            <div class="card card_small">
            <img src={memeList[5]} />
            </div>
            </div>
        </div>
      );
}


export default Meme