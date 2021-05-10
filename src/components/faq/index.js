import React from 'react';
import {FaqContainer, Title} from './styles/faq';
import Accordion from '../../utils/accordion';
export default function Faq({children, ...restProps}){
    return (
        <FaqContainer {...restProps}>{children}</FaqContainer>
    )
}

Faq.Title = function FaqTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Faq.Accordion = function FaqAccordion({ children, ...restProps }) {
    return <Accordion {...restProps}>{children}</Accordion>;
};