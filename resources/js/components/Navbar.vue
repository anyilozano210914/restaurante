<template>
    <div style="margin-bottom: 60px">
        <v-app-bar :collapse="!collapseOnScroll" :collapse-on-scroll="collapseOnScroll" absolute color="deep-purple accent-4" dark scroll-target="#scrolling-techniques-6">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Restaurant System</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-checkbox v-model="collapseOnScroll" color="white" hide-details></v-checkbox>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-6" class="overflow-y-auto">
            <v-container></v-container>
        </v-sheet>
    </div>
</template>
<script>
  export default {
    data: () => ({
      collapseOnScroll: true,
    }),
  }
</script>
