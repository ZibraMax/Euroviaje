import {
	PhotoView,
	TitleView,
	MosaicView,
	NPhotoView,
} from "./js/PhotoSlide.js";

const parent = document.getElementById("page_content");

fetch("./resources/main.json")
	.then((response) => response.json())
	.then((json) => parse_data(json));

function parse_data(json) {
	document.title = json.title;
	for (const page of json.content) {
		const type = page.type;
		if (type == "title_view") {
			const content = page.content;
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
		} else if (type == "nphoto_view") {
			const contents = [];
			const images = page.images;
			for (const content of page.contents) {
				const parsed_content = document.createElement("div");
				parsed_content.classList.add("PhotoView_content");
				parsed_content.classList.add("PhotoView_content2");
				parsed_content.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p><br>`;
				contents.push(parsed_content);
			}
			new NPhotoView(parent, contents, images);
		} else {
			new MosaicView(parent, page.imgs);
		}
	}
}
