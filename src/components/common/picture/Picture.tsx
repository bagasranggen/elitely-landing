import React from 'react';

export type PictureItemProps = {
    src: string;
    width: number;
    height: number;
    alt: string;
    media?: number;
}

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