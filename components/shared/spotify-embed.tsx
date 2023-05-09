import React, { useEffect, useState } from 'react';
interface SpotifyEmbedProps {
    type: 'track' | 'album' | 'playlist';
    id: string;
    width?: string;
    height?: string;
}

export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
    type,
    id,
    width = '100%',
    height = '152',
}) => {

    const embedUrl = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;

    return (
        <iframe style={{ borderRadius: '14px' }}
            src={embedUrl}
            title="Spotify Embed"
            width={width}
            height={height}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
    );
};