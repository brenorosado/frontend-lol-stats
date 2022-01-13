import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    margin-top: 20px;

    form {
        width: 35vw;
        min-width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;

        .nickname-input {
            width: 100%;
        }

        input {
            height: 45px;
            padding: 10px;
            border: none;
            text-align: center;
            font: 16px comic-sans, sans-serif;
        }  

        .submit-button {
            cursor: pointer;
            background: #2b4570;
            color: white;
        }

        div:hover .dropdown-list{
            opacity: 1;
            visibility: visible;
        }

        div {
            background-color: #fff;
            width: 5rem;
            position: relative;
            
            .dropdown-selected {
                height: 45px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                font: 16px comic-sans, sans-serif;
                font-weight: bold;
                padding: 10px 14px;
                cursor: pointer;
                background-color: #7180AC;
                color: white;
            }

            .dropdown-list {
                background-color: #fff;
                position: absolute;
                top: 110%;
                left: 0;
                right: 0;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.2s linear, visibility 0.2s linear;

                .dropdown-list__item {
                    padding: 8px 8px;
                    cursor: pointer;
                }

                .dropdown-list__item:hover {
                    color: white;
                    background-color: #8b97bb;
                }
            }
        }
        @media(max-width: 414px){
            form{
                width: 350px;
            }

            h1{
            font-size: 20px;
            }
        }
    }
`;