<template>
  <v-card
    density="compact"
    height="100%"
    :max-height="props.big === true ? '52vh' : '25vh'"
  >
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
    <v-img
      class="mt-2"
      cover
      :height="props.child ? '90%' : '100%'"
      :src="image"
    />
  </v-card>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    image?: string;
    big?: boolean;
    child?: boolean;
  }>(),
  {
    title: "",
    subtitle: "",
    image: "404",
    big: false,
    child: false,
  }
);

function getImageUrl(name: string) {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
}

const image = computed(() => getImageUrl(props.image));
</script>
