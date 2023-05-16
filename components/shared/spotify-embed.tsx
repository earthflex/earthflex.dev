import React from 'react';

export default function SpotifyEmbed({
    type,
    id,
    width = '100%',
    height = '152',
}: {
    type: 'track' | 'album' | 'playlist';
    id: string;
    width?: string;
    height?: string;
}) {
    
    const embedUrl = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;

    return (
        <iframe style={{ borderRadius: '14px' }}
            src={embedUrl}
            title="Spotify Embed"
            width={width}
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
    );
};