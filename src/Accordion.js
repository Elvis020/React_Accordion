import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from './Data';
import { IconContext } from 'react-icons/lib';
import { FiPlus, FiMinus } from 'react-icons/fi'

const Accordion = () => {
    const [clicked, setClicked] = useState(false);


    const toggleIcon = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <IconContext.Provider value={{ color: '#00ffb9', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {data.map((item, index) => (
                        <>
                            <Wrap onClick={() => toggleIcon(index)} key={index}>
                                <h1 >{item.question}</h1>
                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>
                            {clicked === index && (
                                <Dropdown>
                                    <p>{item.answer}</p>
                                </Dropdown>
                            )}
                        </>
                    ))}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    )
}


export default Accordion;


const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background:#fff;
`
const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153,153,153,.3);
`
const Wrap = styled.div`
    background: #272727;
    color:#fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;
    width: 100%;
    h1{
        padding:2rem;
        font-size: 2rem;
    }
`
const Dropdown = styled.div`
    background: #1c1c1c;
    color: #00ffb9;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;
    p{
        font-size: 2rem; 
    }
`

