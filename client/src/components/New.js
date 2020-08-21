import React, {useState} from 'react';
import styled from 'styled-components';
import './fonts/font-face.css'

export const New = () => {
    const [title, setTitle] = useState('');
    const [titleLines, setTitleLines] = useState(1);
    const [paragraph, setParagraph] = useState('');
    const [paragraphLines, setParagraphLines] = useState(1);

    document.title = 'Yay. New essay';

    const changeTitle = async (e) => {
        e.preventDefault();
        let length = e.target.value.length;
        await setTitle(e.target.value);
        length < 20 ? setTitleLines(1) : setTitleLines(length / 20);
        document.getElementById('newTitle').focus();
        document.getElementById('newTitle').textContent(title);
    }

    const changeParagraph = async (e) => {
        e.preventDefault();
        let length = e.target.value.length;
        await setParagraph(e.target.value);
        length < 20 ? setParagraphLines(1) : setParagraphLines(length / 20);
        document.getElementById('newParagraph').focus();
        document.getElementById('newParagraph').textContent(paragraph);
    }

    const Title = styled.textarea`
        display: inline-block;
        border: none;
        height: ${(titleLines * 60)}px;        
        font-family: 'Hauss-Bold-Italic';
        font-size: 30pt;  
        line-height: 1.4;
        color: #323232;               
        margin-bottom: 40px;
        resize: none;
        overflow: hidden;
               
        ::placeholder {
            color: #d6d6d6;
        }          
        &:focus {
        outline: none;
        }       
    `;

    const P = styled.textarea`
        display: inline-block;
        border: none;
        min-height: 400px;       
        max-height: ${(paragraphLines * 30)}px;
        width: 100%;
        font-family: 'Hauss-Book';
        font-size: 15pt;  
        line-height: 1.6;
        color: #323232;                    
        margin-bottom: 30px;
        resize: none;
        overflow: hidden;
               
        ::placeholder { color: #d6d6d6; }        
        &:focus { outline: none; }
    `;

    const Saver = styled.div`             
        display: flex;
        justify-content: center;
        width: 30%;               
        font-family: 'Hauss-Bold-Italic';       
        font-size: 15pt;          
        background-color: #d6d6d6;
        color: #ffffff;
        border-radius: 50px;
        padding: 5px 0;
        cursor: pointer;
        
        &:hover { background-color: #323232; }                               
    `;

    const Block = styled.div`
        display: flex;
        flex-wrap: no-wrap;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;      
    `;

    return (
        <div>
            <Block>
                <Title id = 'newTitle' placeholder = 'Type a title' onChange = {e => changeTitle(e)}/>
                <P id = 'newParagraph' placeholder = 'Type a paragraph' onChange = {e => changeParagraph(e)}/>
                <Saver> ok,  save </Saver>
            </Block>
        </div>
    )


}

export default New;