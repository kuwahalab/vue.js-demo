const vm = new Vue({
    el: '#app',
    data: {
        results: [
            // {title: "aaaaaaaaa", abstract: "aaaaaaaaa"},
            // {title: "bbbbbbbbb", abstract: "bbbbbbbbb"},
            // {title: "ccccccccc", abstract: "ccccccccc"},
            // {title: "ddddddddd", abstract: "ddddddddd"},
        ]
    },
    mounted() {
        axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=your-api-key")
        .then(response => {this.results = response.data.results})
    }
});
