module.exports = {
    homeText: `Хочешь ездить на метро всего лишь за 415 руб/мес? 

Теперь это возможно благодаря социальной карте!! 

—————————————————
📃У нас сейчас действует СУПЕРСКИДКА на оформление социальной карты

Чтоб узнать актуальную цену ,подписывайтесь на канал @SOCCARTAA`,
    homeMarkup: [
        [{text: `Преимущества карты`, url: process.env.BTN_ONE}],
        [{text: `Цена карты`, url: process.env.BTN_THREE}],
        [{text: `Связь с менеджером`, url: process.env.BTN_FOUR}]
    ],
    homeMedia: 'AgACAgIAAxkBAAMPYIadLfngurxGcwl3aO3vmVbDm8oAAjyyMRscVThI0xyvZLbJfdqPk5uiLgADAQADAgADeQAD9HIBAAEfBA',
    formAnswerMessage: `Отлично!
По всем вопросам и для заказа, можете обратиться к нашему <a href="https://t.me/SOCCARTA">МЕНЕДЖЕРУ</a>`,
    kbCreateText: `Напишите кнопки. Каждая кнопка с новой строки
    Пример:
Перейти - https://t.me/soccarta
Другая ссылка - https://example.com
    `
}