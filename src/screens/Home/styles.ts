import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    background: whitesmoke;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    align-items: center;
    margin-bottom: 60px; /*CLEAR FOOTER*/
    margin-top: 20px; /*CLEAR HEADER*/
`;

export const CardImageContainer = styled.div`
    width: calc(100% / 3.2);
    max-width: 550px;
    min-width: 300px;
    min-height: 350px;
    max-height: 350px;
    background-color: #FAFAFA;
    border: 1px solid darkgray;
    border-radius: 2px;
    overflow: hidden;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;

    img {
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover > .card-content {
        width:  calc(100% - 10px);
        height: 100%;
        padding: 10px;
    }

    .card-content {
        width: 100%;
        height: 0px;
        position: absolute;
        bottom: 0;
        justify-content: center;
        display: flex;
        align-items: center;
        text-align: center;
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        color: black;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.7);
    }
`;
