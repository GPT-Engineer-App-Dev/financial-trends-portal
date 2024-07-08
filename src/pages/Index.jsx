import React from "react";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8 object-cover" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">World</a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Business</a>
            <a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Tech</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
          <button className="text-lg font-medium text-gray-700 hover:text-gray-900">Login</button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <section className="md:col-span-2">
          <div className="mb-4">
            <img src="/placeholder.svg" alt="Featured" className="w-full h-64 object-cover" />
            <h2 className="text-2xl font-bold mt-2">Featured Article Headline</h2>
            <p className="text-gray-700 mt-1">Brief description of the featured article.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <article className="border rounded p-4">
              <img src="/placeholder.svg" alt="Article" className="w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold mt-2">Article Headline</h3>
              <p className="text-gray-700 mt-1">Brief description of the article.</p>
            </article>
            <article className="border rounded p-4">
              <img src="/placeholder.svg" alt="Article" className="w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold mt-2">Article Headline</h3>
              <p className="text-gray-700 mt-1">Brief description of the article.</p>
            </article>
            <article className="border rounded p-4">
              <img src="/placeholder.svg" alt="Article" className="w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold mt-2">Article Headline</h3>
              <p className="text-gray-700 mt-1">Brief description of the article.</p>
            </article>
            <article className="border rounded p-4">
              <img src="/placeholder.svg" alt="Article" className="w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold mt-2">Article Headline</h3>
              <p className="text-gray-700 mt-1">Brief description of the article.</p>
            </article>
          </div>
        </section>

        <aside className="space-y-4">
          <section className="border rounded p-4">
            <h3 className="text-xl font-semibold">Trending Articles</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Trending Article 1</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Trending Article 2</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Trending Article 3</a></li>
            </ul>
          </section>
          <section className="border rounded p-4">
            <h3 className="text-xl font-semibold">Latest News</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Latest News 1</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Latest News 2</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Latest News 3</a></li>
            </ul>
          </section>
          <section className="border rounded p-4">
            <h3 className="text-xl font-semibold">Advertisements</h3>
            <div className="w-full h-32 bg-gray-200 flex items-center justify-center">Ad Space</div>
          </section>
        </aside>
      </main>

      <footer className="mt-8 py-4 border-t">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;