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
    homeMedia: path.join(__dirname, 'database', '812e5957-e4d9-4ac9-bfa9-fc1113e91e8b.jpg'),
    formAnswerMessage: `Отлично!
По всем вопросам и для заказа, можете обратиться к нашему менеджеру: @KartaSoc `,
    kbCreateText: `
📰Подписаться на канал - https://t.me/KartaSocMsk
💬Отзывы - https://t.me/KartaSocMsk/3
    `
}
