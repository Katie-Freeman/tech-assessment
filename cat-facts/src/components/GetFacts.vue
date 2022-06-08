<template>
    <div>
        <button type="submit" v-on:click="fetchFacts">Get Facts</button>

        <div v-if="loading == true">
            <h3>Getting a Cat Fact...</h3>
        </div>
        <div v-else>
            <div class="card">
                <div class="body">
                    <div class="title">
                        <h4>Cat Facts</h4>
                    </div>
                    <div class="text">
                        <li v-for="fact in facts">
                            {{ fact.fact }}
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GetFacts",
    data() {
        return {
            loading: false,
            facts: "",
        };
    },

    methods: {
        async fetchFacts() {
            this.loading = true;
            const response = await fetch("https://catfact.ninja/facts?limit=9");
            console.log("Running Fetch facts...")
            const data = await response.json();
    
            if (data) {
                this.loading = false
                this.facts = data.data.length > 0 ? data.data : "No facts found";
                
            }
        }
    }
}
</script>

<style>
.body  {

    border: 1px solid black;
    max-width: 90em;
    margin: auto;

}
li {
    display: flex;
    list-style: none;
    border: 2px solid black;
    border-radius: 1em;
    padding: .5em;
    width: 400px;
    margin: 1em;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 8px 18px 1px #cff7fec5;
    transition: .2s ease-in-out;
}

li:hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px 2px #b7edf7ae;
}

.text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

}

button {
    border-radius: 2px;
    background: #cff7fe;
    font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    font-size: medium;
    font-weight: bold;
    border:#c5f3fb;
    width: 150px;
    height: 50px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    transition: .2s ease-in-out;
    margin: 2em 0;
}

button:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
}
</style>