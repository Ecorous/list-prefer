<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    let list: {
        name: string;
        desc: string;
        cat: string;
        matches: number;
        wins: number;
    }[] = [];

    

    let change = "";

    async function randomMatch(): Promise<
        [
            {
                name: string;
                desc: string;
                cat: string;
                matches: number;
                wins: number;
            },
            {
                name: string;
                desc: string;
                cat: string;
                matches: number;
                wins: number;
            },
        ]
    > {
        let a = Math.floor(Math.random() * list.length);
        let b = Math.floor(Math.random() * list.length);
        if (a === b) {
            return randomMatch();
        }
        change = "changed"
        setTimeout(() => {
            change = ""
        }, 1000);
        return [list[a], list[b]];
    }
    let match_a = { name: "", desc: "", cat: "", matches: 0, wins: 0 };
    let match_b = { name: "", desc: "", cat: "", matches: 0, wins: 0 };
    

    onMount(async () => {
        list = await fetch("/api/data").then((res) => res.json());
        [match_a, match_b] = await randomMatch();
        setInterval(async () => {
            list = await fetch("/api/data").then((res) => res.json());
            // [match_a, match_b] = await randomMatch();
        }, 1000);
    });

    async function choose(name: string) {
        /*
            if name is match_a.name, increment list(a).matches and list(a).wins and list(b).matches
            if name is match_b.name, increment list(b).matches and list(b).wins and list(a).matches
        */

        let a = list.findIndex((item) => item.name === match_a.name);
        let b = list.findIndex((item) => item.name === match_b.name);

        let new_list = list;

        if (name === match_a.name) {
            new_list[a].matches++;
            new_list[a].wins++;
            new_list[b].matches++;
        } else {
            new_list[b].matches++;
            new_list[b].wins++;
            new_list[a].matches++;
        }

        await fetch("/api/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_list),
        });

        let rm = await randomMatch();
        setTimeout(() => {
            match_a = rm[0];
            match_b = rm[1];
        }, 400);
    }
</script>

<!-- <details>
    <summary>Debug</summary>
{@debug list}
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
</details> -->

<p class="question">
    Do you prefer <nonsense>{match_a.name}</nonsense> or
    <nonsense>{match_b.name}</nonsense>?
</p>
<br />
<br />

<!-- {#key match_a} -->
<button class={change} onclick={() => choose(match_a.name)}>
    <h1>{match_a.name}</h1>
    <i>{match_a.cat}</i>
    <p>{match_a.desc}</p>
</button>

<button class={change} onclick={() => choose(match_b.name)}>
    <h1>{match_b.name}</h1>
    <i>{match_b.cat}</i>
    <p>{match_b.desc}</p>
</button>
<!-- {/key} -->

<style lang="scss">
    @import "$lib/mocha";

    p.question {
        font-size: 150%;
        font-weight: bold;
        margin: 0;
    }

    nonsense {
        color: $blue;
        font-size: 110%;
        font-weight: bold;
    }
    :root {
        display: flex;
        justify-content: center;
        margin-top: 10%;
        background-color: $base;
    }
    *,
    :root {
        text-align: center;
        font-size: larger;
        color: $text;
        font-family: sans-serif;
        // animation: fading 1.1s infinite;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fading{0%{opacity:1}50%{opacity:0}100%{opacity:1}}

    button {
        background-color: $surface0;
        border: none;
        border-radius: 8px;
        margin: 5px;
        padding: 20px;
        cursor: pointer;
        opacity: 1;
        // transition: all 4s ease-in-out;
        // animation: fading 1s infinite;
    }

    :global(button.changed) {
        // transition: all 1s ease-in-out;
        animation: fading 1s;
    }
</style>
