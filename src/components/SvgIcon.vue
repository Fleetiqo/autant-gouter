<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  class: { type: String, default: 'w-6 h-6' },
})
</script>

<template>
  <!-- Filled star (ratings) -->
  <svg
    v-if="name === 'starFilled'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="class"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill-rule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clip-rule="evenodd"
    />
  </svg>

  <!-- Outline icons (Feather / Heroicons-compatible strokes) -->
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="class"
    aria-hidden="true"
    focusable="false"
  >
    <!-- leaf -->
    <path
      v-if="name === 'leaf'"
      d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
    />
    <!-- clock -->
    <g v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </g>
    <!-- map-pin -->
    <g v-else-if="name === 'mapPin'">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </g>
    <!-- truck -->
    <g v-else-if="name === 'truck'">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </g>
    <!-- phone -->
    <path
      v-else-if="name === 'phone'"
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.53 2.37a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.71-1.1a2 2 0 0 1 2.11-.45c.77.23 1.56.41 2.36.53A2 2 0 0 1 22 16.92Z"
    />
    <!-- fire -->
    <path
      v-else-if="name === 'fire'"
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
    />
    <!-- mug: simple cup -->
    <g v-else-if="name === 'mug'">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Z" />
      <path d="M6 1v3M10 1v3M14 1v3" />
    </g>
    <!-- cookie -->
    <g v-else-if="name === 'cookie'">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="11" cy="15" r="1.25" fill="currentColor" stroke="none" />
    </g>
    <!-- home -->
    <g v-else-if="name === 'home'">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M9 22V12h6v10" />
    </g>
    <!-- building stadium -->
    <g v-else-if="name === 'building'">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12h12" />
      <path d="M6 16h12" />
      <path d="M10 6h4M10 22v-4h4v4" />
    </g>
    <!-- arrow right -->
    <path v-else-if="name === 'arrowRight'" d="M5 12h14M12 5l7 7-7 7" />
    <!-- chevron down -->
    <path v-else-if="name === 'chevronDown'" d="m6 9 6 6 6-6" />
  </svg>
</template>
