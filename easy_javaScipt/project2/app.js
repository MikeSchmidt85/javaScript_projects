let data = [
    {
        name: "Mike Schmidt",
        age: '30'
    },
    {
        name: "Joey Schmidt",
        age: '26'
    },
    {
        name: "Pauline schmidt",
        age: '7'
    },
    {
        name: "Christi Schmidt",
        age: '59'
    },
    {
        name: "Dave Schmidt",
        age: '57'
    },
    {
        name: "Linda Perez",
        age: '30'
    },
    {
        name: "Patrick Perez",
        age: '26'
    },
    {
        name: "Anton Perez",
        age: '32'
    }
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old." + "</div>";
});

info.innerHTML = details.join("\n");