import styled from "styled-components";
import slogan from "../assets/pants.svg";
import trophy from "../assets/trophy.svg";
import rank from "../assets/rank.svg";
import { Link } from "react-router-dom";

export default function HomeDislocated() {
    return (
        <Total>
            <RegisteLogin>
                <Login to={'/signin'} >Entra</Login>
                <Register to={'/signup'}>Cadastra-se</Register>
            </RegisteLogin>
            <Slogan>
                <img src={slogan} />
            </Slogan>
            <Ranking>
            <img src={trophy} />
            <img src={rank} />
            </Ranking>
            <Box>
                <BoxRanking>
                   Pessoas do ranl
                </BoxRanking>
            </Box>
            <LargeRegistry>
                <Text>
                <p>Crie sua conta para usar nosso serviço!</p>
                </Text>
            </LargeRegistry>


        </Total>
    )
}

const Total = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`
const RegisteLogin = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    text-decoration: none;
`
const Login = styled(Link)`
    width: 80px;
    height: 18px;
    display: flex;
    margin-left: 50px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Register = styled(Link)`
    width: 90px;
    height: 18px;
    display: flex;
    margin-left: 10px;
    margin-right: 100px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Slogan = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
`
const Ranking = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 76px;
    img{
        margin-left: 10px; 
    }
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 57px;
`
const BoxRanking = styled.div`
    width: 1017px;
    height: 100%;
    border-radius: 10px;
    border-radius: 24px 24px 0px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
`
const LargeRegistry = styled(Link)`
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 82px;

`
const Text = styled.div`
    p{
        color: #000;
        font-family: Lexend Deca;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`