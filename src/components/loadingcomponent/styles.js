import styled from 'styled-components';

export const LoaderContainer = styled.div`
    animation: is-rotating 1s infinite;
    width: 50px;
    height: 50px;
    border: 6px solid #e5e5e5;
    border-top-color: #51d4db;
    border-radius: 50%;
    margin: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;