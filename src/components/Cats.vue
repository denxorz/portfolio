<template>
  <div class="cat-tag-banner">
    <div class="text-center  mt-2">Projects involving cats, I didn't do that yet. But I can always count on the furry-home-office-crew for some code reviews!</div>

    <div class="cat-cards-row">
      <v-card      
        density="compact"
        height="350"
        width="360"
      >
        <v-card-title>Max</v-card-title>
        <v-card-subtitle>Part of the furry crew</v-card-subtitle>
        <v-img
          alt="Max"
          class="mx-auto mt-2 cat-img"
          cover
          src="/assets/projects/c1.avif"
        />
      </v-card>

      <v-card
        density="compact"
        height="350"
        width="360"
      >
        <v-card-title>Jochem</v-card-title>
        <v-card-subtitle>Part of the furry crew</v-card-subtitle>
        <v-img
          alt="Jochem"
          class="mx-auto mt-2 cat-img"
          cover
          src="/assets/projects/c2.avif"
        />
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed
</script>

<style scoped>
.cat-tag-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cat-cards-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
}
.v-card {
  width: 360px;
  max-width: 95vw;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}
.cat-img {
  width: 100%;
  max-width: 320px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  margin: 0 auto 12px auto;
}
@media (max-width: 800px) {
  .cat-cards-row {
    flex-direction: column;
    gap: 24px;
  }
  .v-card {
    max-width: 100vw;
  }
  .cat-img {
    max-width: 95vw;
    height: 140px;
  }
}
</style> 