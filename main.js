import { PhotoView, TitleView, MosaicView } from "./js/PhotoSlide.js";

const parent = document.getElementById("page_content");

fetch("./resources/main.json")
	.then((response) => response.json())
	.then((json) => parse_data(json));

function parse_data(json) {
	document.title = json.title;
	for (const page of json.content) {
		const type = page.type;
		const content = page.content;
		if (type == "title_view") {
			new TitleView(parent, content.title, content.subtitles);
		} else if (type == "photo_view") {
			const img_src = page.img_src;
			const el_content = document.createElement("div");
			el_content.classList.add("PhotoView_content");

			var text = "";
			for (const con of page.contents) {
				text += `<h3>${con.title}</h3><p>${con.text}</p><br>`;
			}

			el_content.innerHTML = text;
			const parsed_content = {};
			parsed_content["main"] = { type: "html", content: el_content };
			parsed_content["camera"] = page.camera;
			parsed_content["location"] = page.location;
			new PhotoView(parent, parsed_content, img_src);
		} else {
			new MosaicView(parent, page.imgs);
		}
	}
}
