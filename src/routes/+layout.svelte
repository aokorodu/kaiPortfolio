<script>
  let { children } = $props();
  import { base } from "$app/paths";
</script>

<div class="container">
  <nav>
    <a class="nametag" href="{base}/">kai okorodudu</a>
    <a href="{base}/contact">contact</a>
    <a href="{base}/motion">motion</a>
    <a href="{base}/code">code</a>
    <a href="{base}/about">about</a>
  </nav>
  {@render children()}
</div>

<style>
  :global {
    a {
      color: black;
      text-decoration: underline;
      font-weight: 800;
    }
  }

  .container {
    font-family: "IBM Plex Mono", serif;
    max-width: 1000px;
    margin: 1rem auto;
    padding: 1rem;
  }

  .nametag {
    font-size: 2rem;
  }
</style>
