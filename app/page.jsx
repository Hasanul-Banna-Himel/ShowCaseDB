'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

export default function ShowCaseBD() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Fixed Sidebar */}
      <aside className="w-64 h-screen bg-blue-900 text-white fixed top-0 left-0 flex flex-col justify-between">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-8">ShowCaseBD</h1>
          <nav className="space-y-4">
            <a href="#now-showing" className="block text-white hover:bg-blue-800 p-2 rounded">
              Now Showing
            </a>
            <a href="#coming-soon" className="block text-white hover:bg-blue-800 p-2 rounded">
              Coming Soon
            </a>
            <a href="#top-rated" className="block text-white hover:bg-blue-800 p-2 rounded">
              Top Rated
            </a>
            <a href="#new-releases" className="block text-white hover:bg-blue-800 p-2 rounded">
              New Releases
            </a>
          </nav>
        </div>
        <div className="p-4">
          <p className="text-sm">&copy; 2024 ShowCaseBD</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 w-full">
        {/* Sheet for mobile navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="bg-blue-600 text-white p-2 rounded-md lg:hidden">Menu</button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 bg-blue-900 text-white">
            <nav className="space-y-4">
              <a href="#now-showing" className="block text-white hover:bg-blue-800 p-2 rounded">
                Now Showing
              </a>
              <a href="#coming-soon" className="block text-white hover:bg-blue-800 p-2 rounded">
                Coming Soon
              </a>
              <a href="#top-rated" className="block text-white hover:bg-blue-800 p-2 rounded">
                Top Rated
              </a>
              <a href="#new-releases" className="block text-white hover:bg-blue-800 p-2 rounded">
                New Releases
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <section id="new-releases" className="mb-12">
          <h2 className="text-4xl font-bold mb-6">New Releases</h2>
          <Carousel className="w-full max-w-4xl">
            <CarouselPrevious className="text-gray-700 hover:text-gray-900 transition" />
            <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 6" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 7" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 8" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="text-gray-700 hover:text-gray-900 transition" />
          </Carousel>
        </section>

        <section id="new-releases" className="mb-12">
          <h2 className="text-4xl font-bold mb-6">New Releases</h2>
          <Carousel className="w-full max-w-4xl">
            <CarouselPrevious className="text-gray-700 hover:text-gray-900 transition" />
            <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 6" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 7" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 8" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="text-gray-700 hover:text-gray-900 transition" />
          </Carousel>
        </section>

        <section id="new-releases" className="mb-12">
          <h2 className="text-4xl font-bold mb-6">New Releases</h2>
          <Carousel className="w-full max-w-4xl">
            <CarouselPrevious className="text-gray-700 hover:text-gray-900 transition" />
            <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 6" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 7" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 8" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="text-gray-700 hover:text-gray-900 transition" />
          </Carousel>
        </section>

        {/* New Releases Section with Carousel */}
        <section id="new-releases" className="mb-12">
          <h2 className="text-4xl font-bold mb-6">New Releases</h2>
          <Carousel className="w-full max-w-4xl">
            <CarouselPrevious className="text-gray-700 hover:text-gray-900 transition" />
            <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 6" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 7" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
              <CarouselItem className="basis-1/3 flex-shrink-0">
                <MovieCard title="Movie Title 8" description="A brief description of the movie." image="fc.jpeg" />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="text-gray-700 hover:text-gray-900 transition" />
          </Carousel>
        </section>
      </main>
    </div>
  );
}

function MovieCard({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
