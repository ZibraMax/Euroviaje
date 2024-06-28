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

export { PhotoView };
