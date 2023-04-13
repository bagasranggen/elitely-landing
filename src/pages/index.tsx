import React from 'react';

import {Container} from "react-bootstrap";
import HeadingOffset from "@/components/common/heading/headingOffset/HeadingOffset";

export type IndexProps = {};

const Index = ({}: IndexProps): React.ReactElement => {
    return <>
        <Container className='my-5'>
            <HeadingOffset
                className='text-center'
                option={{level: "h1", animation: {position: 'top'}}}>This is sign up page</HeadingOffset>
        </Container>
    </>
}

export default Index;