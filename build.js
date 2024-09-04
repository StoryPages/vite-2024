import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

const templatePath = path.join(process.cwd(), 'views', 'index.ejs')

const outputPath = path.join(process.cwd(), 'index.html')

fs.readFile(templatePath, 'utf-8', (err, data) => {
	if (err) {
		console.error('Error reading template:', err)
		return
	}

	const html = ejs.render(data, {}, { filename: templatePath })

	fs.writeFile(outputPath, html, err => {
		if (err) {
			console.error('Error writing index.html:', err)
			return
		}
		console.log('index.html has been generated successfully!')
	})
})
