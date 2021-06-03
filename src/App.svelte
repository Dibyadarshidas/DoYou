<script>
	import Header from './constants/Header.svelte';
	import TriviaBox from './components/TriviaBox.svelte';
</script>

<Header/>
<TriviaBox/>

<style>
	main {
		text-align: center;
		padding: 1rem;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
