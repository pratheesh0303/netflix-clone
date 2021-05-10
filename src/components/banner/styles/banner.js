import styled from 'styled-components/macro';

export const BannerContainer =  styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    background-image: linear-gradient( to bottom,rgb(2 2 2) 0%,rgb(53 38 38 / 82%) 10%,rgb(64 64 64 / 62%) 90%,rgba(64,64,64,1) 100% ),url(/images/netflix.jpeg);

`;
export const Topbar =  styled.div`
    display: block;
    width : 100%;
    background-color: transparent;
    position: relative;

`;
export const Logo =  styled.img`
    position: absolute;
    top: 10px;
    width: 150px;
    height: 80px;
    padding: 5px 30px;
    margin-right:auto;
    
    @media(max-width: 600px){
        width: 106px;
        height: 60px;
        padding: 5px 5px;
    }
`;
export const LanguageDropdown =  styled.select`
    display: inline-block;
    position: absolute;
    right:190px;
    top: 40px;
    height: 30px;
    width: 100px;
    background: rgba(0,0,0,.4);
    border: 1px solid #aaa;
    color: #fff;
    font-size: .875rem;
    padding: .25rem .25rem;
    
    @media(max-width: 600px){
        right: 120px;
        top: 34px;
        height: 28px;
        width: 85px;
    }
`;
export const SigninBtn =  styled.button`
    display: inline-block;
    position: absolute;
    right:50px;
    top: 40px;
    height: 30px;
    width: 100px;
    background: red;
    color: #FFFFFF;
    font-size: .875rem;
    padding: .25rem 1.5rem;
    cursor: pointer;
    
    @media(max-width: 600px){
        right: 11px;
        top: 25px;
        height: 28px;
        width: 92px;
        font-size: .875rem;
        padding: .25rem 1.25rem;
    }

`;
export const TextConatiner =  styled.div`
    margin: auto;
    padding: 180px 30px;
    color: white;
    text-align: center;

    @media(max-width:600px){
        padding: 130px 20px;
    }


`;
export const Title =  styled.h1`
    
font-size: 48px;
margin: 5px 5px;
@media(max-width:600px){
    font-size: 24px;
}

`;
export const SubTitle =  styled.h2`

font-size: 30px;
font-weight: 400;
margin: 1rem auto;
@media(max-width:600px){
    font-size: 20px;
}
`;