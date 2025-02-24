1. Установка Node.js и Yarn
Перед началом работы убедитесь, что у вас установлены Node.js и Yarn.

Установите Node.js:

Скачайте и установите Node.js с официального сайта.

Проверьте установку, выполнив в терминале:

node -v
npm -v

Установите Yarn глобально через npm:
npm install -g yarn

Проверьте установку:
yarn -v

2. Клонирование проекта с GitHub
Перейдите в папку, где вы хотите разместить проект.

Клонируйте репозиторий с GitHub:
git clone https://github.com/MalrboroI/Test-task.git

3. Установка зависимостей
Установите зависимости проекта с помощью Yarn:
yarn install
Эта команда установит все зависимости, указанные в файле package.json.

4. Запуск проекта
Запуск в режиме разработки:

Если проект использует сборку (например, через Webpack или Vite), выполните:
yarn dev
Это запустит локальный сервер разработки. Обычно сервер доступен по адресу http://localhost:5173/ (порт может отличаться в зависимости от настроек).

Сборка проекта:
Для сборки проекта в production-режиме выполните:
yarn build
Собранные файлы будут размещены в папке dist или build (в зависимости от настроек проекта).

Запуск production-версии:
yarn start или npm start.
