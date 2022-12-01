const path = require('path')
module.exports = {
    homeText: `Хочешь ездить на метро всего лишь за 435 руб/мес? 

Теперь это возможно благодаря социальной карте!! 

—————————————————
📃У нас сейчас действует СУПЕРСКИДКА на оформление социальной карты

Чтоб узнать актуальную цену ,подписывайтесь на канал @KartaSocMsk`,
    homeMarkup: [
        [{text: `✅Преимущества карты`, url: process.env.BTN_ONE}],
        [{text: `📄Отзывы`, url: process.env.BTN_THREE}],
        [{text: `📨Связь с менеджером`, url: process.env.BTN_FOUR}]
    ],
    homeMedia: path.join(__dirname, 'database', 'img.png'),
    formAnswerMessage: `Отлично!
По всем вопросам и для заказа, можете обратиться к нашему <a href="https://t.me/KartaSoc">МЕНЕДЖЕРУ</a>`,
    kbCreateText: `Напишите кнопки. Каждая кнопка с новой строки
    Пример:
Перейти - https://t.me/soccarta
Другая ссылка - https://example.com
    `
}