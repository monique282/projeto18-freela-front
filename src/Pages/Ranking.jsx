import styled from "styled-components";
import slogan from "../assets/pants.svg";
import trophy from "../assets/trophy.svg";
import rank from "../assets/rank.svg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Total>
            <Above>
                <Welcome>Seja bem-vindo(a), Pessoa!</Welcome>
                <RomeRankExit>
                    <Homer to={'/'} >Home</Homer>
                    <Rank to={'/ranking'}>Ranking</Rank>
                    <Exit>Sair</Exit>
                </RomeRankExit>
            </Above>
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
        </Total>
    )
}

const Total = styled.div`
    width: 100%;
    height: 100%;
`
const Above = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 60px;
`
const RomeRankExit = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
`
const Welcome = styled.div`
    color: #5D9040;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    margin-left: 100px;
    text-decoration: none;
    justify-content: flex-start;
`
const Homer = styled(Link)`
    width: 80px;
    height: 18px;
    display: flex;
    margin-right: 10px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Rank = styled(Link)`
    width: 90px;
    height: 18px;
    display: flex;
    margin-left: 10px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Exit = styled(Link)`
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