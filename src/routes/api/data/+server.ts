let currentData: { name: string; desc: string; cat: string; attr: string, matches: number; wins: number }[] =
[
    {
        name: "Apple",
        desc: "A red fruit",
        cat: "Fruit",
        attr: "God",
        matches: 0,
        wins: 0,
    },
    {
        name: "Orange",
        desc: "An orange fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Banana",
        desc: "A yellow fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Pear",
        desc: "A green fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Pineapple",
        desc: "A spikey fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Grapes",
        desc: "A bunch of grapes",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Coconut",
        desc: "A hard-shelled fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Plum",
        desc: "A purple fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Lemon",
        desc: "A sour fruit",
        cat: "Fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
    {
        name: "Kiwi",
        desc: "A hairy fruit",
        cat: "fruit",
        attr: "",
        matches: 0,
        wins: 0,
    },
];

export async function GET( {url} ) {
    return new Response(JSON.stringify(currentData), {
        headers: {
            "content-type": "application/json",
        },
    });
}

export async function POST( {url, request} ) {
    const body = await request.json();
    currentData = body;
    return new Response(JSON.stringify(currentData), {
        headers: {
            "content-type": "application/json",
        },
    });
}