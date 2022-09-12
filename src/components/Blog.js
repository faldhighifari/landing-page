import React from 'react'

export default function Blog() {
  return (
    <section id="blog" class="bg-slate-100 pt-36 pb-32 dark:bg-dark">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">On the Spot</h2>
            <p class="text-md font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam perspiciatis blanditiis dolores?</p>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?programming" alt="Programming" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Lorem</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Read</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Ipsum</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis illum in.</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Read</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800">
              <img src="https://source.unsplash.com/360x200?coffee" alt="Coffee" class="w-full" />
              <div class="py-8 px-6">
                <h3>
                  <a href="#" class="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">Dolor</a>
                </h3>
                <p class="mb-6 text-base font-medium text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam ipsum ea quam sequi velit sunt.</p>
                <a href="#" class="rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80">Read</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
