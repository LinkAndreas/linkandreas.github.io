import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Metadata({ title, description, children }) {
    return (
        <div>
            <Helmet>
                { /* Standard tags */}
                <title>{title}</title>
                if (description) {
                    <meta name='description' content={description} />
                }

                { /* Facebook tags */}
                <meta property='og:type' content='article' />
                <meta property='og:title' content={title} />
                if (description) {
                    <meta property='og:description' content={description} />
                }

                { /* Twitter tags */}
                <meta name='twitter:creator' content='Andreas Link' />
                <meta name='twitter:card' content='article' />
                <meta name='twitter:title' content={title} />
                if (description) {
                    <meta name='twitter:description' content={description} />
                }
            </Helmet>
            {children}
        </div>
    )
}