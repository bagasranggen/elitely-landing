import React from 'react';
import {ImageProps} from "@/@type/common";

export type PictureItemProps = {
    media?: number;
} & ImageProps;

export type PictureProps = {
    images: Array<PictureItemProps>;
};

const Picture = ({images}: PictureProps): React.ReactElement => (
    <picture>
        {images?.map((image: PictureItemProps, i: number) => {
            const isLast = i === images.length - 1;
            const ImageBlock = isLast ? 'img' : 'source';

            const ImageProps = isLast ? {
                src: image.src,
                width: image.width,
                height: image.height,
                alt: image.alt,
                class: 'img-fluid'
            } : {
                srcset: image.src,
                width: image.width,
                height: image.height,
                media: `(min-width:${image.media}px)`,
            }

            return <ImageBlock key={i} {...ImageProps} />
        })}
    </picture>
);

export default Picture;