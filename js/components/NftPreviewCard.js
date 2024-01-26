export default function NftPreviewCard({img, title, content, price, timeLeft, author}) {
    // *** *** *** Variables *** *** ***
    const IMG_SRC = "./images/";

    const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });

    const $template = document.getElementById("nft-preview-card").content,
        $clone = document.importNode($template, true),
        $img = $clone.querySelector("[data-img]"),
        $title = $clone.querySelector("[data-title]"),
        $content = $clone.querySelector("[data-content]"),
        $price = $clone.querySelector("[data-price]"),
        $timeLeft = $clone.querySelector("[data-time-left]"),
        $authorImg = $clone.querySelector("[data-author-img]"),
        $authorName = $clone.querySelector("[data-author-name]");

    // *** *** *** Execution *** *** ***
    $img.src = IMG_SRC + img;
    $img.alt = title;
    $title.textContent = title;
    $content.textContent = content;
    $price.textContent = price.join(" ");
    $timeLeft.textContent = rtf1.format(...timeLeft).replace("in", "").trim() + " left";
    $authorImg.src = IMG_SRC + author.img;
    $authorImg.alt = author.name;
    $authorName.textContent = author.name;
    return $clone;
};
