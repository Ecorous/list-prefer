<script lang="ts">
    import { onMount } from "svelte";
    let list: any[] = [];
    onMount(async () => {
        list = await fetch("/api/data").then((res) => res.json());
        setInterval(async () => {
            list = await fetch("/api/data").then((res) => res.json());
            // [match_a, match_b] = await randomMatch();
        }, 500);
    });

    function perc(wins: number, matches: number): number {
        let a = Math.round((wins / matches) * 10000) / 100;

        if (Number.isNaN(a)) {
            return 0;
        }
        return a;
    }
</script>

{#key list}
    <ul>
        {#each (list.sort((a, b) => {
            // @ts-ignore
            return (perc(a.wins, a.matches) < perc(b.wins, b.matches) ) + 0
        })) as item}
            <li>{item.name}: {perc(item.wins, item.matches)}% ({item.wins}/{item.matches})</li>
            <br/>
        {/each}
    </ul>
{/key}

<style lang="scss">
    @import "$lib/mocha.scss";

    :root, * {
        font-family: sans-serif;
        background-color: $base;
        color: $text;
    }
</style>