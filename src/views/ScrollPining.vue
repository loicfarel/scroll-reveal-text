<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

const lists = [
  'Playlistes sur mesure.',

  'Explore, écoute, aime.',

  'Audio immersive.',

  ' Nouveaux hits.',

  'Partage musical facile.',

  'Écoute hors ligne.',

  'Musique à emporte.',

  'Lyrics en direct.'
]

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.set('.section__item', {
    opacity: 0,
    scale: 0.5,
    y: 100
  })
  gsap.set('.section__item:first-child', {
    opacity: 1,
    scale: 1,
    y: 0
  })

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.section__inner',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  })

  const items = document.querySelectorAll('.section__item')

  items.forEach((item, index) => {
    if (index > 0) {
      timeline.to(items[index - 1], {
        opacity: 0,
        scale: 0.5,
        y: -100,
        ease: 'none'
      })
    }

    timeline.to(
      item,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'none'
      },
      '-=.9'
    )

    if (index < items.length - 1) {
      timeline.to(
        item,
        {
          opacity: 0,
          scale: 0.5,
          y: -100,
          ease: 'none'
        },
        '-=.4'
      )
    }
  })
})
</script>

<template>
  <div class="w-full h-full background-container">
    <main class="w-full text-slate-50 backdrop-blur-md">
      <section>
        <div>
          <div class="max-w-screen-xl mx-auto space-y-6 text-center">
            <h2 class="pb-3 text-[5vw] font-semibold">Nouveautés</h2>
            <p class="text-xl">
              Sois le premier à découvrir les dernières sorties et les nouveaux artistes en vogue.
              Élargis tes horizons musicaux avec des suggestions basées sur tes goûts. Profite d'une
              qualité sonore exceptionnelle grâce à notre nouvelle technologie de streaming haute
              résolution. Ressens chaque note comme jamais auparavant. Découvrez une interface
              épurée et simple à utiliser, conçue pour te permettre de naviguer sans effort entre
              tes artistes et genres préférés.
            </p>
          </div>

          <div class="section__inner relative w-full flex justify-center h-[600vh]">
            <div class="sticky top-0 flex items-center w-full h-screen max-w-screen-xl">
              <div
                v-for="(item, index) in lists"
                :key="index"
                class="section__item absolute w-full py-2.5 px-1 left-0 text-center rounded-xl text-[5vw] font-semibold"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="flex justify-center py-4 text-lg font-medium">
        <a href="https://bento.me/loicfarel" target="_blank" rel="noopener noreferrer"
          >Made by <span class="font-semibold underline"> @loicfarel</span></a
        >
      </footer>
    </main>
  </div>
</template>

<style scoped>
.section__item {
  will-change: transform, opacity;
}

.background-container {
  background: rgb(24, 61, 87);
  background: radial-gradient(
    circle,
    rgba(24, 61, 87, 1) 6%,
    rgba(50, 137, 186, 1) 66%,
    rgba(18, 43, 64, 1) 91%
  );
}
</style>
