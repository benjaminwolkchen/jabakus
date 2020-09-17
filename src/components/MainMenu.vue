<template>
<h1 class="title is-1">Jabakus {{emoji}}</h1>

<a href="/plus" class="button is-primary is-large">Plus</a><br><br>
<a href="/minus" class="button is-primary is-large">Minus</a><br><br>
<a href="/times" class="button is-primary is-large">Mal</a><br><br>
<a href="/dividing" class="button is-primary is-large">Geteilt</a><br><br>
</template>

<script>
export default {
  name: 'MainMenu',
  props: {
    emoji: String
  }
}
</script>