import styled from "styled-components";
import slogan from "../assets/pants.svg";
import bin from "../assets/bin.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
//import { AuthContext } from "./Contex";

export default function HomeLogged() {

    //const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        const dados = {
            email: email,
            senha: senha
        }
        const url = `${import.meta.env.VITE_API_URL}/`
        const promise = axios.post(url, dados);
        setDisabled(true);
        promise.then(resposta => {
            localStorage.setItem("user", JSON.stringify({ email, token: resposta.data.token, nome: resposta.data.nome }));
            setAuth({ email, token: resposta.data.token, nome: resposta.data.nome })
            navigate("/L");

        });
        promise.catch(resposta => {
            alert(resposta.response.data.message);
            setDisabled(false);
        });
    }
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
            <SingInContainer>
                <TopForm >
                    <Input placeholder="Links que cabem no bolso" type="link" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                    <button type='submit' disabled={disabled} data-test="sign-in-submit">
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#A328D6" color="#FFFFFF" font-size={9} />
                        ) : (
                            <p>Encurtar link</p>
                        )}
                    </button>
                </TopForm>
                <Bottom>
                    <div>

                    </div>
                    <button type='submit' disabled={disabled} data-test="sign-in-submit">
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#A328D6" color="#FFFFFF" font-size={9} />
                        ) : (
                            <img src={bin}></img>
                        )}
                    </button>
                </Bottom>
                <Bottom>
                    <div>

                    </div>
                    <button type='submit' disabled={disabled} data-test="sign-in-submit">
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#A328D6" color="#FFFFFF" font-size={9} />
                        ) : (
                            <img src={bin}></img>
                        )}
                    </button>
                </Bottom>
                <Bottom>
                    <div>

                    </div>
                    <button type='submit' disabled={disabled} data-test="sign-in-submit">
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#A328D6" color="#FFFFFF" font-size={9} />
                        ) : (
                            <img src={bin}></img>
                        )}
                    </button>
                </Bottom>
            </SingInContainer>
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
const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
`
const TopForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
                color: wheat;
                width: 182px;
                height: 60px;
                border-radius: 10px;
                margin-top: 25px;
                border-radius: 12px;
                border: 1px solid rgba(120, 177, 89, 0.25);
                box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
                background-color: #5D9040;
                margin-left: 20px;
            }
`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        div{
            width: 769px;
            height: 60px;
            margin-top: 25px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
            background-color: #80CC74;   
        }
        button{
            color: wheat;
            width: 130px;
            height: 60px;
            border-radius: 10px;
            margin-top: 25px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            background: #FFF;
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
            margin-left: 20px;
        }
`
const Input = styled.input`
    width: 715px;
    height: 60px;
    margin-top: 25px;
    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
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