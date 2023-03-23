import React from 'react';
import {Container} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";

export type IndexProps = {};

const Index = ({}: IndexProps): React.ReactElement => {
    return <>
        <Container as='section'>
            <HeadingOffset className='text-center'>Meeting <span className="fc--tertiary">new people</span>,
                having <span className='fc--secondary'>new experiences</span>, connecting
                with each other — that’s what <span className="fc--primary">dating</span> should be
                about!</HeadingOffset>
        </Container>
    </>
}

export default Index;