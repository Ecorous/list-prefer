<script lang="ts">
    let jsonString: string;
    let attribution: string;
    let output: string;

    function convert() {
        try {
            let json = JSON.parse(jsonString);
            let result = json.map((item: any) => {
                return {
                    name: item.name,
                    desc: item.ability,
                    cat: item.team,
                    matches: 0,
                    wins: 0,
                    attr: attribution
                }
            });
            output = JSON.stringify(result, null, 2);
        } catch (e: any) {
            output = e.message;
        }
    }
</script>


<textarea bind:value={jsonString} id="input" placeholder="Enter your json here" rows="10" cols="50"></textarea>
<br/><br/>
<input bind:value={attribution} placeholder="Attribution" id="attribution" type="text" />
<br/><br/>
<button on:click={convert} id="convert">Convert</button>
<br/><br/><br/>
<textarea bind:value={output} id="output" rows="10" cols="50" placeholder="OUTPUT"></textarea>
<style lang="scss">
    @import "$lib/mocha.scss";

    :root, * {
        font-family: sans-serif;
        background-color: $base;
        color: $text;
    }

    textarea {
        width: 95%;
        font-family: monospace;
    }

    button, textarea, input {
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: $surface0;
    }
</style>