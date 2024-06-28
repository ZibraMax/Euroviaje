import { PhotoView } from "./js/PhotoSlide.js";

const parent = document.getElementById("page_content");

const content = {};

const el_content = document.createElement("div");
el_content.classList.add("top-left");
el_content.innerHTML =
	"<p>Estamos construyendo la experiencia</p><p>El viernes estará terminado</p>";

content["main"] = { type: "html", content: el_content };
content["main"] = { type: "text", content: "dfsad" };
content["camera"] = "Vivitar 3000 - Fujifilm 200";
content["location"] = "Lisboa, Portugal. 2 Jun, 2024";
const img_src = "WIPBG.jpg";
const wip_page = new PhotoView(parent, content, img_src);
const wip_page2 = new PhotoView(parent, content, img_src);
const wip_page3 = new PhotoView(parent, content, img_src);
