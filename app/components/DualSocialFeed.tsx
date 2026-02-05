'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

interface TikTokVideo {
  id: string;
  caption: string;
  thumbnail_url: string;
  video_url: string;
  permalink: string;
  timestamp: string;
  views?: string;
}

export default function DualSocialFeed() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [tiktokVideos, setTiktokVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const [instagramRes, tiktokRes] = await Promise.all([
          fetch('/api/instagram-feed'),
          fetch('/api/tiktok-feed')
        ]);

        if (instagramRes.ok) {
          const instagramData = await instagramRes.json();
          setInstagramPosts(instagramData.posts || []);
        }

        if (tiktokRes.ok) {
          const tiktokData = await tiktokRes.json();
          setTiktokVideos(tiktokData.videos || []);
        }
      } catch (error) {
        console.error('Failed to fetch social feeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeeds();
    // Refresh feeds every 10 minutes
    const interval = setInterval(fetchFeeds, 600000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="h-80 bg-riviera-neutral/50 animate-pulse" />
        <div className="h-80 bg-riviera-neutral/50 animate-pulse" />
      </div>
    );
  }

  // Duplicate feeds multiple times for seamless infinite scroll
  const duplicatedInstagram = [...instagramPosts, ...instagramPosts, ...instagramPosts];
  const duplicatedTikTok = [...tiktokVideos, ...tiktokVideos, ...tiktokVideos];

  return (
    <div className="space-y-12">
      {/* Instagram Feed - Scrolling Right to Left */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-riviera-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <h3 className="text-sm tracking-widest text-riviera-text font-medium">INSTAGRAM</h3>
          </div>
          <a
            href="https://www.instagram.com/rivierawaterfrontmansion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-riviera-gold hover:text-riviera-text transition-colors"
          >
            @rivierawaterfrontmansion
          </a>
        </div>

        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-riviera-neutral to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-riviera-neutral to-transparent z-10 pointer-events-none" />
          
          {instagramPosts.length > 0 ? (
            <div className="flex animate-scroll-left gap-4">
              {duplicatedInstagram.map((post, index) => (
                <a
                  key={`${post.id}-${index}`}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-none w-72 sm:w-80 relative overflow-hidden bg-white border border-riviera-neutral hover:border-riviera-gold transition-all"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={post.media_url}
                      alt={post.caption?.slice(0, 100) || 'Instagram post'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-xs font-light text-riviera-text/70 line-clamp-2 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                  {/* Instagram icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-riviera-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-sm text-riviera-text/50">Follow us on Instagram for the latest updates</p>
            </div>
          )}
        </div>
      </div>

      {/* TikTok Feed - Scrolling Left to Right (Opposite Direction) */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-riviera-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <h3 className="text-sm tracking-widest text-riviera-text font-medium">TIKTOK</h3>
          </div>
          <a
            href="https://www.tiktok.com/@rivierawaterfrontmansion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-riviera-gold hover:text-riviera-text transition-colors"
          >
            @rivierawaterfrontmansion
          </a>
        </div>

        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-riviera-neutral to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-riviera-neutral to-transparent z-10 pointer-events-none" />
          
          {tiktokVideos.length > 0 ? (
            <div className="flex animate-scroll-right gap-4">
              {duplicatedTikTok.map((video, index) => (
                <a
                  key={`${video.id}-${index}`}
                  href={video.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-none w-72 sm:w-80 relative overflow-hidden bg-white border border-riviera-neutral hover:border-riviera-gold transition-all"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={video.thumbnail_url}
                      alt={video.caption?.slice(0, 100) || 'TikTok video'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="320px"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-riviera-text ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    {/* Views badge */}
                    {video.views && (
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-xs font-medium text-white flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                          {video.views}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-xs font-light text-riviera-text/70 line-clamp-2 leading-relaxed">
                      {video.caption}
                    </p>
                  </div>
                  {/* TikTok icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-riviera-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-sm text-riviera-text/50">Follow us on TikTok for behind the scenes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
