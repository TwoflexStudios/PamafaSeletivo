import styled from 'styled-components';

export const Division = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 1000px;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        border-radius: 60px;
    }
`;

export const NavArea = styled.div`
    width: 100%;
    height: 100%;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    font-family: "Poppins";
`;

export const MenuItem = styled.div`
    font-size: 18px;
    color: #C9CDD5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    
    &:hover{
        color: white;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color: #00275B;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${Division}:nth-child(2){
        margin-top: 5px;
        border-top: 1px solid #013F6D;
        align-items: center;
        font-family: "Poppins";
        font-size: 17px;
        font-weight: bold;
        color: #C9CDD5;
    }
`;
