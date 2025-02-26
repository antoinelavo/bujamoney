const totalMoney = 12760000000000; // 12.76조
let remainingMoney = totalMoney;
const cart = {};

const items = [
    { name: "식빵", price: 3000, img: "https://your-supabase-url/bread.jpg" },
    { name: "김밥", price: 4000, img: "https://your-supabase-url/gimbap.jpg" },
    { name: "쌀 1kg", price: 4000, img: "https://your-supabase-url/rice.jpg" },
    { name: "즉석 라면 (5개입)", price: 3000, img: "https://your-supabase-url/instant-noodles.jpg" },
    { name: "삼겹살 1인분", price: 16000, img: "https://your-supabase-url/beef.jpg" },
    { name: "월 평균 전기 요금", price: 100000, img: "https://your-supabase-url/electric-bill.jpg" },
    { name: "서울 원룸 한 달 월세", price: 800000, img: "https://your-supabase-url/seoul-rent.jpg" },
    { name: "서울 지하철 1회 승차권", price: 1400, img: "https://your-supabase-url/subway-ticket.jpg" },

    { name: "아이폰 16 프로 맥스", price: 1900000, img: "https://your-supabase-url/iphone16.jpg" },
    { name: "삼성 갤럭시 S25 울트라", price: 1800000, img: "https://your-supabase-url/galaxy-s25.jpg" },
    { name: "콘서트 티켓", price: 140000, img: "https://your-supabase-url/bts-ticket.jpg" },
    { name: "시그니엘 서울 1박", price: 1000000, img: "https://your-supabase-url/luxury-hotel.jpg" },
    { name: "롤렉스 시계", price: 13000000, img: "https://your-supabase-url/rolex.jpg" },
    { name: "람보르기니 아벤타도르 SVJ", price: 700000000, img: "https://your-supabase-url/lamborghini.jpg" },
    { name: "한남더힐 100평", price: 10000000000, img: "https://your-supabase-url/gangnam-villa.jpg" },
    { name: "아이 출산", price: 210000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "김앤장 변호사 연봉", price: 1000000000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "국회의원 연봉", price: 160000000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "대기업 연봉", price: 130000000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "에르메스 버킨백", price: 13000000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "포르쉐 911 터보 S", price: 300000000, img: "https://your-supabase-url/porsche-911.jpg" },
    { name: "제네시스 G80", price: 70000000, img: "https://your-supabase-url/genesis-g80.jpg" },


    { name: "개인 헬리콥터", price: 4000000000, img: "https://your-supabase-url/helicopter.jpg" },
    { name: "보잉 737 항공기", price: 100000000000, img: "https://your-supabase-url/boeing-747.jpg" },
    { name: "초호화 크루즈", price: 1000000000000, img: "https://your-supabase-url/cruise-ship.jpg" },
    { name: "롯데월드타워", price: 6000000000000, img: "https://your-supabase-url/lotte-tower.jpg" },
    { name: "KBO 야구팀 인수", price: 130000000000, img: "https://your-supabase-url/k-league-team.jpg" },
    { name: "할리우드 영화 제작비 지원", price: 60000000000, img: "https://your-supabase-url/hollywood-movie.jpg" },
    { name: "K2 흑표 전차", price: 8500000000, img: "https://your-supabase-url/k2-tank.jpg" },
    { name: "스페이스X 우주여행", price: 60000000000, img: "https://your-supabase-url/spacex-trip.jpg" },

    // Cost of Raising a Child
    { name: "한국에서 아이를 대학까지 키우는 비용", price: 400000000, img: "https://your-supabase-url/child-raising.jpg" }
];


const itemsContainer = document.getElementById("items-container");
const remainingMoneyElement = document.getElementById("remaining-money");
const receiptContainer = document.getElementById("receipt");
const grandTotalElement = document.getElementById("grand-total");
const remainingMoneyKoreanElement = document.createElement("div");
remainingMoneyKoreanElement.id = "remaining-money-korean";
receiptContainer.parentElement.appendChild(remainingMoneyKoreanElement);

function formatKoreanNumber(number) {
    const units = ["", "만", "억", "조", "경", "해", "자", "양", "구", "간", "정", "재", "극", "항하사"];
    let unitIndex = 0;
    let isNegative = number < 0;
    number = Math.abs(number);

    while (number >= 10000 && unitIndex < units.length - 1) {
        number /= 10000;
        unitIndex++;
    }

    // Ensure one decimal place if not a whole number
    const formattedNumber = number % 1 === 0 ? Math.floor(number) : number.toFixed(1);

    return (isNegative ? "-" : "") + formattedNumber + units[unitIndex];
}


function formatWithCommas(number) {
    return number.toLocaleString("ko-KR");
}

function updateReceipt() {
    receiptContainer.innerHTML = "";
    let grandTotal = 0;
    let newRemainingMoney = totalMoney;
    
    Object.keys(cart).forEach(itemName => {
        const { price, quantity } = cart[itemName];
        const total = price * quantity;
        grandTotal += total;
        newRemainingMoney -= total;

        const itemRow = document.createElement("div");
        itemRow.classList.add("receipt-item");
        itemRow.innerHTML = `
            <span>${itemName}</span>
            <span>${quantity}개</span>
            <span>${formatKoreanNumber(total)} 원</span>
        `;
        receiptContainer.appendChild(itemRow);
    });
    
    remainingMoney = newRemainingMoney;
    remainingMoneyElement.textContent = formatWithCommas(remainingMoney) + " 원";
    grandTotalElement.textContent = formatKoreanNumber(grandTotal) + " 원";
    remainingMoneyKoreanElement.textContent = `남은 돈: ${formatKoreanNumber(remainingMoney)} 원`;
}

function updateCart(itemName, price, inputField, change) {
    const quantity = (parseInt(inputField.value) || 0) + change;
    if (quantity < 0) return;
    inputField.value = quantity;
    cart[itemName] = { price, quantity };
    updateReceipt();
}

function createItemElement(item) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    
    const inputField = document.createElement("input");
    inputField.type = "number";
    inputField.min = "0";
    inputField.placeholder = "수량";
    inputField.value = "0";
    inputField.addEventListener("input", () => updateCart(item.name, item.price, inputField, 0));
    
    const sellButton = document.createElement("button");
    sellButton.textContent = "판매";
    sellButton.onclick = () => updateCart(item.name, item.price, inputField, -1);
    
    const buyButton = document.createElement("button");
    buyButton.textContent = "구매";
    buyButton.onclick = () => updateCart(item.name, item.price, inputField, 1);
    
    itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${formatKoreanNumber(item.price)} 원</p>
    `;
    
    itemDiv.appendChild(sellButton);
    itemDiv.appendChild(inputField);
    itemDiv.appendChild(buyButton);
    itemsContainer.appendChild(itemDiv);
}

items.forEach(item => {
    createItemElement(item);
});