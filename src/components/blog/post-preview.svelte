<script lang="ts">
  import type { BlogPost } from "../../types/blog-post.type";
  import type { SocialMediaLinks } from "../../types/avatars.type";

  import { authors } from "../../contents/authors";
  import Avatars from "../avatars.svelte";

  export let post: BlogPost;
  export let isMostRecent: boolean = false;
  export let type: "blog" | "guides";

  const authorSocialMediaLinks: SocialMediaLinks = Object.entries(
    authors
  ).reduce((displayNames, [username, profile]) => {
    displayNames[
      username
    ] = `https://twitter.com/${profile.socialProfiles.twitter}`;
    return displayNames;
  }, {});
  export let headlineOrder: "h3";
</script>

<style type="text/postcss">
  .blurb {
    @apply flex flex-wrap;
  }

  .blog .blurb {
    @apply flex-col h-full;
  }

  .blurb > :first-child {
    @media (min-width: 1280px) {
      flex: 0 0 75%;
    }
  }

  h2,
  h3 {
    @apply text-h4;
  }
  h2 a,
  h3 a {
    @apply no-underline text-black;
  }
  h2 a:focus,
  h3 a:hover,
  h2 a:hover,
  h3 a:focus {
    @apply underline;
  }

  p {
    @apply mt-micro;
  }
</style>

<div
  class:bg-sand-dark={!isMostRecent}
  class="blogPreview {type} flex flex-col max-w-md {type === 'blog'
    ? ''
    : 'lg:flex-row lg:max-w-max mx-auto'} rounded-xl bg-off-white"
>
  {#if isMostRecent}
    <a href="/{type}/{post.slug}" sveltekit:prefetch>
      <img
        src="/images/{type}/{post.slug}/{post.image}"
        alt={`Blog post: ${post.title}`}
        class="object-cover m-auto overflow-hidden h-60"
        style="border-radius: {type === 'blog'
          ? '0.75rem 0.75rem 0 0'
          : '0.75rem 0 0 0.75rem'};"
        height="248"
        width="400"
      />
    </a>
  {/if}
  <div class="blurb p-x-small pt-small">
    <div>
      {#if headlineOrder === "h3"}
        <h3 class="h2">
          <a href="/{type}/{post.slug}" sveltekit:prefetch>
            {post.title}
          </a>
        </h3>
      {:else}
        <h2>
          <a href="/{type}/{post.slug}" sveltekit:prefetch>
            {post.title}
          </a>
        </h2>
      {/if}
      <p>{post.excerpt}</p>
    </div>
    <p>
      <span>
        <Avatars
          usernames={post.author}
          socialMediaLinks={authorSocialMediaLinks}
          socialMediaLinkClasses="filter hover:drop-shadow"
        />
        <a
          href="/blog/{post.slug}"
          class="date no-underline text-p-small ml-macro"
          sveltekit:prefetch
        >
          {new Date(Date.parse(post.date)).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </a>
      </span>
    </p>
  </div>
</div>
