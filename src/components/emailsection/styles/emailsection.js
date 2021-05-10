import styled from 'styled-components/macro';

export const EmailSectionContainer = styled.div`
`;

export const Title = styled.h2`
    font-size: 22px;
    font-weight: 400;
    @media(max-width: 600px){
        font-size: 18px;
    }
`;
export const InputContainer = styled.div`
    display: flex;
`;
export const Input = styled.input`
    width: 520px;
    background: #FFFFFF;
    border: unset;
    margin-right:5px;
    padding: 10px;
    @media(max-width: 600px){
        width: 180px;
        padding:4px;
    }
`;

export const Button = styled.button`
    color: white;
    background: red;
    width: 180px;
    height:60px;
    margin: 0;
    font-size: 20px;
    font-weight: 300;
    justify-content: space-around;
    @media(max-width: 600px){
        width: 120px;
        height: 40px;
        font-size:12px;
    }
    
`;