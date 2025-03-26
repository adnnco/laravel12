import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
            {/* L */}
            <path fillRule="evenodd" clipRule="evenodd" d="M10 8V30H22V25H15V8H10Z" />
            {/* First 1 */}
            <path fillRule="evenodd" clipRule="evenodd" d="M24 8V30H29V8H24Z" />
            {/* Second 1 */}
            <path fillRule="evenodd" clipRule="evenodd" d="M31 8V30H36V8H31Z" />
        </svg>
    );
}
