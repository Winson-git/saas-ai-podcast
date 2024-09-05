"use client"

import PodcastCard from '@/components/PodcastCard'
import React from 'react'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { cn } from '@/lib/utils';
import { useAudio } from '@/providers/AudioProvider';

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const { audio } = useAudio();

  return (
    <div className={cn('mt-9 flex flex-col gap-9',{'h-[calc(100vh-140px)]': audio?.audioUrl })}>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Treding Podcasts</h1>
        <div className='podcast_grid'>
          {trendingPodcasts?.map(({ _id, imageUrl, podcastTitle, podcastDescription}) =>
            <PodcastCard 
              key={_id}
              imgUrl={imageUrl!}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            /> 
          )}
        </div>
        
      </section>
    </div>
  )
}

export default Home