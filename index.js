import { supabase } from './supabase.js';


const totalMoney = 12760000000000; // 12.76조
let remainingMoney = totalMoney;
const cart = {};

const items = [
    { name: "서울 지하철 1회 요금", price: 1400, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/metro.webp" },
    { name: "식빵", price: 3000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/bread.webp" },
    { name: "김밥", price: 4000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/gimbap.webp" },
    { name: "쌀 1kg", price: 4000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/rice.webp" },
    { name: "즉석 라면 (5개입)", price: 3000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/ramyun.webp" },
    { name: "삼겹살 1인분", price: 16000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/porkbelly.webp" },
    { name: "월 평균 전기 요금", price: 100000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/electricity.webp" },
    { name: "서울 원룸 한 달 월세", price: 800000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/seoul.webp" },
    { name: "콘서트 티켓", price: 170000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/concert.webp" },
    { name: "출산 비용", price: 210000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/birth.webp" },
    { name: "아이폰 16 프로 맥스", price: 1900000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/iphone.webp" },
    { name: "삼성 갤럭시 S25 울트라", price: 1800000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/samsung.webp" },
    { name: "시그니엘 서울 1박", price: 1000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/hotel.webp" },
    { name: "에르메스 버킨백", price: 13000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/birkin.webp" },
    { name: "국회의원 연봉", price: 160000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/congress.webp" },
    { name: "대기업 연봉", price: 130000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/company.webp" },
    { name: "김앤장 변호사 연봉", price: 1000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/lawyer.webp" },
    { name: "1인 양육비 (대학까지)", price: 400000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/diploma.webp" },
    { name: "롤렉스 시계", price: 13000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/rolex.webp" },
    { name: "한남더힐 100평", price: 10000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/apartment.webp" },
    { name: "제네시스 G80", price: 70000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/genesis.webp" },
    { name: "람보르기니 아벤타도르", price: 700000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/lambo.webp" },
    { name: "포르쉐 911 터보 S", price: 300000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/porsche.webp" },
    { name: "개인 헬리콥터", price: 4000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/helicopter.webp" },
    { name: "보잉 737 항공기", price: 100000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/boeing.webp" },
    { name: "KBO 야구팀 인수", price: 130000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/baseball.webp" },
    { name: "초호화 크루즈", price: 1000000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/cruise.webp" },
    { name: "할리우드 영화 제작비 지원", price: 60000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/movie.webp" },
    { name: "스페이스X 우주여행", price: 60000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/spacex.webp" },
    { name: "롯데월드타워", price: 6000000000000, img: "https://rnoeqibpmgyhaurcveax.supabase.co/storage/v1/object/public/images/lotte.webp" }
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
            <span>${quantity.toLocaleString("ko-KR")}개</span>
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
        <img src="${item.img}" alt="${item.name}" loading="lazy">
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

document.getElementById("scroll-to-receipt").addEventListener("click", function() {
    document.getElementById("receipt-section").scrollIntoView({ behavior: "smooth" });
});

