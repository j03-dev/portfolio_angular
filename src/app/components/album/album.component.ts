import { Component } from '@angular/core';

@Component({
    selector: 'app-album',
    imports: [],
    template: `
    <div class="flex w-full">
      <div class="w-[55%]">
        <img class="rounded-l-[20px]" src="/assets/image.jpeg" />
      </div>
      <div
        class="bg-sgcolor md:rounded-r-[20px] md:w-[45%] text-mybgcolor flex justify-center items-center flex-col p-4 text-center"
      >
        <h2 class="text-xl font-bold mb-5">
          The Mysteries of the Ancient Pyramid: Secrets of the Pharaohs Revealed
        </h2>
        <p>
          Uncover the secrets hidden within the heart of the oldest pyramid
          known to mankind. Join us on a thrilling journey through time as we
          delve into the enigmatic world of ancient Egypt. Discover the untold
          stories of the pharaohs who once ruled this mystical land, and explore
          the intricate hieroglyphs that have baffled historians for centuries.
          Marvel at the advanced engineering and architectural prowess that
          enabled the construction of these monumental structures. From hidden
          chambers to legendary treasures, our expedition will shed light on the
          mysteries that have captivated the imaginations of people for
          generations. Embark on this adventure and witness the grandeur of an
          era long past, as we piece together the puzzle of one of the greatest
          civilizations in human history.
        </p>
      </div>
    </div>
  `,
    styles: ``
})
export class AlbumComponent {}
