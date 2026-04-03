fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(res => res.json())
    .then(data => {
        console.log(`ID: ${data.id}`);
        console.log(`Title: ${data.title}`);
        console.log(`Body:\n${data.body}`);
    });