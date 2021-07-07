<script lang="ts" context="module">
  export const prerender = true;

  export async function load({ session }) {
    const guides = session.guides;
    return { props: { guides } };
  }
</script>

<script lang="ts">
  import PostPreview from "../../components/blog/post-preview.svelte";
  import Write from "./write.svelte";

  export let guides = [];
</script>

<header>
  <h1>Guides</h1>
  <p>Follow these guides to use Gitpod with any project</p>
</header>

<div>
  {#each guides as guide}
    <div>
      <PostPreview post={guide} type="guides" isMostRecent />
    </div>
  {/each}
</div>

<Write />
