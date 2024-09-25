import ejs from 'ejs'
import fs from 'fs/promises'
import path from 'path'

const templatePath = path.join(process.cwd(), 'views', 'main.ejs')
const outputPath = path.join(process.cwd(), 'index.html')

async function generateHtml(data = {}) {
	try {
		// Чтение шаблона
		const template = await fs.readFile(templatePath, 'utf-8')

		// Рендеринг HTML
		const html = ejs.render(template, data, { filename: templatePath })

		// Запись сгенерированного HTML в файл
		await fs.writeFile(outputPath, html)

		console.log('index.html успешно сгенерирован!')
	} catch (err) {
		console.error('Error:', err)
	}
}

// Вызов функции для генерации HTML при сборке
generateHtml()
