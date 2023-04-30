import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavLink({ href, exact, children, ...props }) {
    const router = useRouter();
    const isActive = exact ? router.pathname === href : router.pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}