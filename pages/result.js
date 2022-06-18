import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import {useEffect} from "react";
import { fetchGetJSON } from "../utils/apiHelpers";
import Layout from "../layout/Layout";
import styled from "styled-components";
import {colors} from "../utils";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.ligthGreyHEX};

`

const TextDiv = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  background: transparent;
  box-shadow: none;
  padding: 5px;
  border: 2px solid ${colors.ligthGreyHEX};
  cursor: pointer;
  color: ${colors.ligthGreyHEX};

`;

const HrStyled = styled.hr`
  width: 100%;`

const ResultPage = () => {
    const router = useRouter();
    const { data, error } = useSWR(
        router.query.session_id
            ? `/api/checkout_sessions/${router.query.session_id}`
            : null,
        fetchGetJSON
    );

    if (error) {
        return <div>failed to load</div>;
    }
    const name = data?.payment_intent.charges.data[0].billing_details.name
    const email = data?.payment_intent.charges.data[0].billing_details.email

    let mailData = {
        name,
        email,
    }

    const mailSender = () => {

        fetch('/api/mailing/mailing', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailData)
        }).then((res) => {
            console.log('SUCCESS!', res.status, res.text);
        }, error => {
            console.log('FAILED...', error);
        })
    }



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        mailSender()
    },[mailData])
    return (
        <Layout>
        <Container>
            <TextDiv>

            <HrStyled />
            <h2>
                Dziękujemy za zaufanie, {data?.payment_intent.charges.data[0].billing_details.name}
            </h2>
            <br/>
            <p>Twoje zamówienie jest w trakcie przygotowania i wyruszy do Ciebie niezwłocznie</p>
            <p>
                Został również skierowany do Ciebie e-mail potiwerdzający zamówienie
                <br/><br/>
                {data?.payment_intent.charges.data[0].billing_details.email}
            </p>
            <HrStyled />
            </TextDiv>

            <Link href="/">
                <ButtonStyled>Wróć do sklepu</ButtonStyled>
            </Link>
        </Container>
        </Layout>
    );
};


export default ResultPage;