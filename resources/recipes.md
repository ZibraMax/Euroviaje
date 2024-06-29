### Title view

```json
{
	"type": "title_view",
	"content": {
		"title": "Hola!",
		"subtitles": [
			"Si estas viendo esta página es porque recibiste una postal!",
			"Esta es la historia de mi viaje",
			"Algunas partes tienen audio!, no olvides subir el volumen!!",
			"Desliza para ver las fotos!"
		]
	}
}
```

### Photo view

```json
{
	"type": "photo_view",
	"img_src": "./resources/images/WIPBG.jpg",
	"camera": "Vivitar 3000 - Fuji iso 200",
	"location": "Lisboa, Portugal",
	"contents": [
		{ "title": "Avionsitosuu", "text": "Loren Ipsum" },
		{ "title": "Otracosas", "text": "Loren Ipsum" }
	]
}
```

### NPhoto view

```json
{
	"type": "nphoto_view",
	"images": [
		{
			"src": "./resources/images/WIPBG.jpg",
			"camera": "Vivitar 3000 - Fuji iso 200",
			"location": "Lisboa, Portugal"
		},
		{
			"src": "./resources/images/WIPBG.jpg",
			"camera": "Vivitar 3000 - Fuji iso 200",
			"location": "Lisboa, Portugal"
		}
	],
	"contents": [
		{ "title": "Avionsitosuu", "text": "Loren Ipsum" },
		{ "title": "Otracosas", "text": "Loren Ipsum" }
	]
}
```

### Mosaic View

```json
{
	"type": "mosaic_view",
	"imgs": [
		{
			"src": "./resources/images/WIPBG.jpg",
			"description": "Avionsitosuu"
		},
		{
			"src": "./resources/images/WIPBG.jpg",
			"description": "Otracosas"
		},
		{
			"src": "./resources/images/WIPBG.jpg",
			"description": "Otracosas3"
		},
		{
			"src": "./resources/images/WIPBG.jpg",
			"description": "Otracosas65"
		}
	]
}
```
