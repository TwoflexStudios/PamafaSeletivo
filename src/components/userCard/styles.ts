import styled from 'styled-components';

export const CardContainer = styled.div`
    width: calc(100% / 3.2);
    max-width: 320px;
    height: auto;
    min-height: 330px;
    background-color: #FAFAFA;
    border: 1px solid darkgray;
    border-radius: 2px;
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.03);
    }

    .card-people-name{
        font-size: 17px;
        font-weight: bold;
        margin: 10px;
        font-family: "Poppins";
    }

    .username {
        font-size: 15px;
        margin: 5px;
        margin-left: 10px;
        font-family: "Poppins";
    }

    .email {
        font-size: 15px;
        margin: 5px;
        margin-left: 10px;
        font-family: "Poppins";
    }

    .website{
        margin: 10px;
        font-size: 15px;
        margin: 5px;
        margin-left: 10px;
        font-family: "Poppins";
        text-decoration: none;
    }
`;

export const CardImage = styled.div`
    width: 100%;
    height: 180px;
    background: #00275B;
    img {
        width: 100%;
        height: 100%;
        border-bottom: 1px solid darkgray;
    }
`;
