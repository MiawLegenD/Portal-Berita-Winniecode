import { SVGAttributes } from 'react';
import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img {...props} src="/storage/images/logo.png" alt="Logo Perusahaan" className="h-36 w-auto" />
    );
}
