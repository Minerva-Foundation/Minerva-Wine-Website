export default function meta(title: String = 'Minerva - A new era of Wine', des: String = "Purchase 'en primeur' wine sourced directly from producers with confirmation of sale stored safely on the blockchain, accompanied by a unique artwork for each sale phase, while earning yield on it until delivery. Winemakers from across the world are hand-picked by our community for their unique narrative, quality, and innovation.", siteName: String = "Minerva", keywords: String = '', img: String = "/images/Minerva_Banner.jpg") {

    return [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: des },
        { hid: 'description', name: 'description', content: des },
        { hid: 'og:image', name: 'og:image', content: img },  
        { hid: 'og:site_name', name: "og:site_name", content: siteName },
        { hid: 'keywords', name: 'keywords', content: keywords },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: des,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: img,
          },{hid: "twitter:site", name: "twitter:site", content: "@Minerva_NFT" },
          {hid: "twitter:site", name: "twitter:site", content: "summary_large_image" },{
            hid: "twitter:url",
            name: "twitter:url",
            content: "https://www.minerva.market",
          }
          
    ]
}