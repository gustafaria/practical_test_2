import styled from "styled-components";

export const main = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr .5fr;
`;
export const gameContainer = styled.div`
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    place-items: center;
    place-self: center;
`;
export const squareOption = styled.div`
    width: 150px;
    height: 150px;
    border: 2px solid black;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font: 800 5rem "Barlow";
    text-align: center;
`;
export const scoreBoard = styled.div`
    border: 1px solid black;
    align-self: center;
    justify-self: center;
    padding: 20px;
    border-radius: 10px;
`;
export const score = styled.div`
    font: 800 3rem "Barlow";
`;