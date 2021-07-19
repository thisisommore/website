<script>
  import FeedbackWidget from "../docs/feedback-widget.svelte";
  import PostContentLayout from "../post-content-layout.svelte";
</script>

<PostContentLayout {...$$restProps}>
  <slot />
</PostContentLayout>
<FeedbackWidget type="guides" class="mb-huge" />
