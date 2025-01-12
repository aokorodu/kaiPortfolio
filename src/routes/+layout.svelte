<script>
  let { children } = $props();
</script>

<div class="container">
  <div class="header">
    <div>
      <a href="/"><h1>kai.okoroduduz</h1></a>
    </div>
    <nav>
      <a href="/about">about</a>
      <a href="/motion-graphics">motion graphics</a>
      <a href="/illustrations">illustrations</a>
      <a href="/creative-coding">creative coding</a>
    </nav>
  </div>
  {@render children()}
</div>

<style>
  * {
    font-family: "Roboto", sans-serif;
  }

  .container {
    max-width: 1000px;
    margin: 1rem auto;
    padding: 1rem;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
