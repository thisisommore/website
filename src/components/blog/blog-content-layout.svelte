<script lang="ts">
  import RecentArticlesPreview from "./recent-articles-preview.svelte";
  import NewsletterSignup from "./newsletter-signup.svelte";
  import PostContentLayout from "../post-content-layout.svelte";
</script>

<PostContentLayout {...$$restProps}>
  <slot />
</PostContentLayout>

<NewsletterSignup />
<RecentArticlesPreview />
