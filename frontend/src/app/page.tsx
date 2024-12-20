"use client";
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Carousel Section */}
      <div className="flex-grow flex flex-col justify-center">
        <Carousel className="max-w-7xl mx-auto">
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />

          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  layout="intrinsic"
                  width={1140}
                  height={500}
                  className="object-cover w-full h-full"
                  alt='phone'
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="/images/cover.jpg"
                  layout="intrinsic"
                  width={1140}
                  height={500}
                  className="object-cover w-full h-full"
                  alt='phone'
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className="w-full h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
                  layout="intrinsic"
                  width={1140}
                  height={500}
                  className="object-cover w-full h-full"
                  alt='phone'
                />
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </div>
  );
}
