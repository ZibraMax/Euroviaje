class PhotoView {
	constructor(parent, content, img_src) {
		this.img_src = img_src;
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_container");
		this.img = document.createElement("img");
		this.img.classList.add("PhotoView_img");
		this.img.src = this.img_src;
		if (content.main.type == "text") {
			this.content = document.createElement("p");
			this.content.classList.add("PhotoView_content");
			this.content.innerHTML = content.main.content;
		} else {
			this.content = content.main.content;
		}

		this.footer_left = document.createElement("div");
		this.footer_right = document.createElement("div");
		this.footer_left.classList.add("PhotoView_footer");
		this.footer_right.classList.add("PhotoView_footer");
		this.footer_left.classList.add("PhotoView_bottom-left");
		this.footer_right.classList.add("PhotoView_bottom-right");
		if (content.camera) {
			this.footer_left.innerHTML = `<p><i class="fa fa-camera"></i> ${content.camera}</p>`;
		}
		if (content.location) {
			this.footer_right.innerHTML = `<p><i class="fa fa-map-marker"></i> ${content.location}</p>`;
		}
		this.separator.appendChild(this.content);
		this.container.appendChild(this.img);
		this.container.appendChild(this.footer_left);
		this.container.appendChild(this.footer_right);
		this.separator.appendChild(this.container);
		this.line_separator = document.createElement("hr");
		this.separator.appendChild(this.line_separator);
		parent.appendChild(this.separator);
	}
}

class TitleView {
	constructor(parent, title, subtitles) {
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_title");
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_centering_container");

		this.title = document.createElement("h1");
		this.title.classList.add("PhotoView_title_header");
		this.title.innerHTML = title;
		this.container.appendChild(this.title);
		for (const subtitle_value of subtitles) {
			const subtitle = document.createElement("h3");
			subtitle.classList.add("PhotoView_title_subtitle");
			subtitle.innerHTML = subtitle_value;
			this.container.appendChild(subtitle);
		}
		this.separator.appendChild(this.container);
		parent.appendChild(this.separator);
	}
}

class MosaicView {
	constructor(parent, photos) {
		this.separator = document.createElement("div");
		this.separator.classList.add("PhotoView_separator");
		this.separator.classList.add("PhotoView_mosaic");
		this.container = document.createElement("div");
		this.container.classList.add("PhotoView_centering_container_mosaic");
		for (const photo_value of photos) {
			const img_wrap = document.createElement("div");
			img_wrap.classList.add("PhotoView_img_container");

			const img = document.createElement("img");
			img.classList.add("PhotoView_img");
			img.classList.add("PhotoView_img_mosaic");
			img.src = photo_value.src;

			const desc_cont = document.createElement("div");
			desc_cont.classList.add("PhotoView_img_overlay");

			const desc = document.createElement("div");

			desc.classList.add("PhotoView_img_text");
			desc.innerHTML = photo_value.description;

			img_wrap.appendChild(img);
			desc_cont.appendChild(desc);
			img_wrap.appendChild(desc_cont);
			this.container.appendChild(img_wrap);
		}
		this.separator.appendChild(this.container);
		parent.appendChild(this.separator);
	}
}

export { PhotoView, TitleView, MosaicView };
