import styled from 'styled-components/macro';

export const LoginContainer = styled.div`
    height: 500px;
    width: 300px;
    padding: 40px 40px;
    background: rgba(0,0,0,.75);

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:nth-child(3) {
        flex-basis:50%;
       
        
    }
`;

export const Title = styled.h1`
    color: white;
    text-align: left;
`;

export const TextField = styled.input`
    padding: 20px;
    background: black;
    color: white;
    margin-top: 10px;
    margin-bottom: 15px;
    background: #333333;
    border: 1px solid transparent;
    
`;

export const Button = styled.button`
    padding: 20px;
    background: red;
    color:#FFFFFF;
    cursor:pointer;
    text-align: center;
`;

export const SignupBlock = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;

export const SignupTitle = styled.p`
    margin-right:10px;
`;

export const SignupLink = styled.p`
    cursor: pointer;

    &:active{
        color: blue;
        text-decoration: underline;
    }
`;
