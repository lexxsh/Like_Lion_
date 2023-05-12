import React from 'react';
import styled from "styled-components";
const CardB = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0rem 1rem;
    width:2.75rem;
    height: 2rem;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 400;
`;
const CardButton1 = styled.button`
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border: 1px solid #6c757d;
    background: none;
    color: #6c757d;
    &:hover{
        background-color:#6c757d ;
        cursor: pointer;
        transition: 0.2s ease-in;
        color: white;
    }
    &:not(:hover) {
    transition: 0.2s ease-out;
    }
    &:focus{
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
    `;
    const CardButton2 = styled.button`
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border: 1px solid #6c757d;
    background: none;
    color: #6c757d;
    &:hover{
        background-color:#6c757d ;
        cursor: pointer;
        transition: 0.2s ease-in;
        color: white;
    }
    &:not(:hover) {
        transition: 0.2s ease-out;
    }
    &:focus{
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
    `;

const Button = () => {
    return (
        <div>

            <CardB>
                    <CardButton1 >View</CardButton1><CardButton2 >Edit</CardButton2>
            </CardB>

        </div>
    );
};

export default Button;