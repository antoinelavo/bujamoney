const totalMoney = 12760000000000; // 12.76조 KRW
let remainingMoney = totalMoney;

const items = [
    { name: "삼성 갤럭시 S24", price: 1500000, img: "https://your-supabase-url/samsung-galaxy.jpg" },
    { name: "서울 아파트", price: 1500000000, img: "https://your-supabase-url/seoul-apartment.jpg" },
    { name: "K-POP 콘서트 VIP 티켓", price: 500000, img: "https://your-supabase-url/kpop-ticket.jpg" },
    { name: "한우 세트", price: 300000, img: "https://your-supabase-url/korean-beef.jpg" },
    { name: "제주도 여행", price: 1200000, img: "https://your-supabase-url/jeju-trip.jpg" }
];

const itemsContainer = document.getElementById("items-container");
const remainingMoneyElement = document.getElementById("remaining-money");

function updateRemainingMoney() {
    remainingMoneyElement.textContent = new Intl.NumberFormat("ko-KR").format(remainingMoney) + " KRW";
}

function buyItem(price) {
    if (remainingMoney >= price) {
        remainingMoney -= price;
        updateRemainingMoney();
    } else {
        alert("잔액이 부족합니다!");
    }
}

function createItemElement(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    
    itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${new Intl.NumberFormat("ko-KR").format(item.price)} KRW</p>
        <button onclick="buyItem(${item.price})">구매</button>
    `;
    
    return itemDiv;
}

items.forEach(item => {
    itemsContainer.appendChild(createItemElement(item));
});

updateRemainingMoney();
