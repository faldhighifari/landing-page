import React from 'react'

import LP from "../images/Landing Page.png";
import EC from "../images/EC.png";
import NP from "../images/NP.png";
import LG from "../images/LGmobile.png";

export default function Portfolio() {
  return (
    <section id="portfolio" class="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">New Project</h2>
            <p class="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
            </p>
          </div>
        </div>

        <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src={LP} alt="Landing Page" width="w-full" />
            </div>
            <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white"><a href="https://heartfelt-starship-441219.netlify.app/">Landing Page with React & TailwindCSS</a></h3>
            <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src={EC} alt="E-Commerce" width="w-full" />
            </div>
            <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white"><a href="https://stalwart-frangollo-f70c84.netlify.app/">E-Commerce</a></h3>
            <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src={NP} alt="Technical Documentation" width="w-full" />
            </div>
            <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white"><a href="http://portalberita4.herokuapp.com/">News Portal with Laravel</a></h3>
            <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img src={LG} alt="Tribute Page" width="w-full" />
            </div>
            <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white"><a href="https://silver-sfogliatella-1a45f3.netlify.app/">Cloning LG Mobile page</a></h3>
            <p class="text-base font-medium text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
