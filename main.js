import { PhotoView, TitleView, MosaicView } from "./js/PhotoSlide.js";

const parent = document.getElementById("page_content");

const content = {};

const el_content = document.createElement("div");
el_content.classList.add("top-left");
el_content.innerHTML =
	"<p>Estamos construyendo la experiencia</p><p>El viernes estará terminado</p>";

content["main"] = { type: "html", content: el_content };
content["main"] = {
	type: "text",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est odio, condimentum et purus in, sollicitudin tristique eros. Pellentesque hendrerit lobortis ex nec maximus. In hac habitasse platea dictumst. In molestie eget ipsum quis pulvinar. In aliquam nibh id bibendum aliquam. Sed auctor massa erat, in vulputate arcu volutpat sed. Aliquam efficitur enim gravida, vehicula lacus in, semper orci. Etiam lacinia maximus congue. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est odio, condimentum et purus in, sollicitudin tristique eros. Pellentesque hendrerit lobortis ex nec maximus. In hac habitasse platea dictumst. In molestie eget ipsum quis pulvinar. In aliquam nibh id bibendum aliquam. Sed auctor massa erat, in vulputate arcu volutpat sed. Aliquam efficitur enim gravida, vehicula lacus in, semper orci. Etiam lacinia maximus congue.",
};
content["camera"] = "Vivitar 3000 - Fujifilm 200";
content["location"] = "Lisboa, Portugal. 2 Jun, 2024";
const img_src = "WIPBG.jpg";
const title = new TitleView(parent, "BOGOTÁ D.C.", [
	"28/5/24 - 1/6/24",
	"Población 9' habitantes",
]);
const wip_page = new PhotoView(parent, content, img_src);
const title2 = new TitleView(parent, "LISBOA, PORTUGAL", ["28/5/24 - 1/6/24"]);
const wip_page2 = new PhotoView(parent, content, img_src);
const title3 = new TitleView(parent, "MADRID, ESPAÑA", ["28/5/24 - 1/6/24"]);
const wip_page3 = new PhotoView(parent, content, img_src);
const mos_page3 = new MosaicView(parent, [
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
]);
const mos_page4 = new MosaicView(parent, [
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
]);
const mos_page5 = new MosaicView(parent, [
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
	{ src: "WIPBG.jpg", description: "sample" },
]);
