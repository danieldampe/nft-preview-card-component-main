import NftPreviewCard from "./components/NftPreviewCard.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const nftCard = {
    img: "image-equilibrium.jpg",
    title: "Equilibrium #3429",
    content: "Our Equilibrium collection promotes balance and calm.",
    price: [0.041, "ETH"],
    timeLeft: [3, "day"],
    author: {
        img: "image-avatar.png",
        name: "Jules Wyvern"
    }
};

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        NftPreviewCard(nftCard)
    );
});
