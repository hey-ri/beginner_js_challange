const quotes = [
    {
        quote: "뭔가를 배울 수 있는 실수들은 가능하면 일찍 저질러 보는 것이 이득이다.",
        author: "Winston Churchill",
    },
    {
        quote: "실패하면 실망할지 모른다, 그러나 시도하지 않는 것은 불행한 삶이다.",
        author: "Beverly Shields",
    },
    {
        quote: "가치 있는 삶을 사는 사람들은 모두 좋은 생각, 좋은 마음, 좋은 의도를 가지고 있다. 하지만 그것을 행동으로 옮기는 사람은 극히 드물다.",
        author: "John Hancock",
    },
    {
        quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든 믿는 대로 될 것이다.",
        author: "Henry Ford",
    },
    {
        quote: "강인하고 긍정적인 태도는 그 어떤 특효약보다 더 많은 기적을 만들어 낸다.",
        author: "Ryan barbino",
    },
    {
        quote: "좋은 아이디어를 얻는 방법은 아이디어를 많이 얻고 나쁜 아이디어는 버리는 것입니다.",
        author: "Linus Pauling",
    },
    {
        quote: "글은 병든 마음의 치유자와 같다.",
        author: "Aeschylus",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "Goethe",
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "Tolstoy",
    },
    {
        quote: "만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다.",
        author: "Solon",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;
