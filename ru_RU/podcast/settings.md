# Настройки подкаста
Эти поля в основном используются для генерации RSS-потока подкаста.

## Как открыть
![Скриншот настроек подкаста](/images/settings-1.png)

## Справка по полям
| Поле | Описание |
|---|---|
| Podcast RSS URL | Показывает текущий RSS-адрес подкаста только для чтения. Можно нажать в поле, чтобы выделить и скопировать его, либо открыть сам feed. |
| Podcast Title <span style="color: red;">*</span> | Обязательно. Название подкаста. Если пусто, RSS вернётся к названию сайта. |
| Podcast Subtitle | Необязательно. Краткий подзаголовок или слоган подкаста, который показывают некоторые приложения. |
| Podcast Description <span style="color: red;">*</span> | Обязательно. Описание подкаста в простом тексте. Попадает в RSS как description / сводка iTunes. |
| Podcast Author (itunes:author) <span style="color: red;">*</span> | Обязательно. Автор или продюсер подкаста, который отображается в каталогах. |
| Owner Name <span style="color: red;">*</span> | Обязательно. Значение `<itunes:owner><itunes:name>` для сведений о владельце. |
| Owner Email <span style="color: red;">*</span> | Обязательно. Значение `<itunes:owner><itunes:email>`. Укажите адрес, который может получать письма с проверкой. |
| Podcast Cover (1400-3000px square) <span style="color: red;">*</span> | Обязательно. Обложка подкаста. Формат JPG/PNG, квадратная, 1400-3000 px и меньше 512 KB. |
| Default Explicit Flag <span style="color: red;">*</span> | Обязательно. Флаг откровенного контента по умолчанию. Выберите clean или explicit. Поля эпизода могут его переопределять. |
| Language (RFC 5646) <span style="color: red;">*</span> | Обязательно. Язык подкаста, например en-US, zh-CN или ja-JP. |
| Primary Category (Apple Podcasts) <span style="color: red;">*</span> | Обязательно. Основная категория Apple Podcasts. Нужно выбрать хотя бы одну. |
| Secondary Category (optional) | Необязательно. Вторая категория, которую поддерживают некоторые каталоги подкастов. |
| Copyright (optional) | Необязательно. Уведомление об авторских правах, которое выводится в `<copyright>`. |
| iTunes Type (itunes:type) | Необязательно. Тип шоу Apple Podcasts. Варианты: не задано, episodic, serial. |
| iTunes Title (optional) | Необязательно. Специальное название для Apple Podcasts. Используйте только если оно должно отличаться от обычного названия подкаста. |
| iTunes Block (itunes:block) | Необязательно. yes скрывает весь подкаст в Apple Podcasts. Значение по умолчанию: no. |
| iTunes Complete (itunes:complete) | Необязательно. yes означает, что подкаст завершён и больше не будет обновляться. Значение по умолчанию: no. |
| iTunes New Feed URL (itunes:new-feed-url) | Необязательно. Используйте только при переносе на новый RSS-адрес. |
| podcast:locked | Поле Podcasting 2.0. По умолчанию yes, чтобы предотвратить несанкционированный перенос feed. |
| podcast:locked owner (optional) | Необязательно. E-mail владельца, используемый для проверки переноса feed в Podcasting 2.0. |
| podcast:guid (optional) | Необязательно. GUID Podcasting 2.0. Если пусто, feed использует URL сайта как запасной вариант. |
| Apple Podcasts Verify Code | Необязательно. Код проверки Apple Podcasts, выводится как `podcast:txt purpose="applepodcastsverify"`. |
| Podcasting 2.0 Funding Links | Составное поле. Можно добавить несколько ссылок на финансирование или поддержку; каждая запись содержит URL и Label. Если пусто, `podcast:funding` не выводится. |
| Generator (optional) | Необязательно. Содержимое `<generator>` RSS. Если пусто, тег не выводится. |

## Примечания
- Поля, отмеченные <span style="color: red;">*</span>, обязательны.
