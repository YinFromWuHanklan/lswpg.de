<div class="intro">
    <slot name="intro_bg"></slot>
</div>

<style lang="scss">
	.intro {
		height: 40vh;
        display: flex;
        align-items: center;

        @media (max-width: 672px) {
            height: 25vh;
        }
	}
</style>
