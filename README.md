# convertor_bsu_task
BSU Software Design and Development Technologies - Training task

"Написать веб-сервис, который выполняет преобразование температуры, расстояния и массы между различными системами мер:
1. масса: граммы, фунты, пуды
2. расстояние: метры, мили, версты
3. температура: цельсий, фаренгейт, кельвин

Конверторы должны реализовывать интерфейс IConvert, использовать паттерны Factory, Chain of responsibility, Singleton.
Пример запроса на преобразование -  Convert(""-10"",""C"", ""K"")- из цельсия в кельвины;
Код может бюыть написан на любом языке и размещен в репозитории на GitHub."	

# How to
## Install
```
npm install
``` 
## Run
### Compile code changes on the fly
```
npm run watch-ts
```
### Running server
```
npm run watch-node
```
##API
```
Example: http://localhost:3000/?value=1&from=pood&to=pound
```
###Params
**value** - value to be converted

**from** = name

**to** = name

Where name is a string value from the table below: 
```
Ditance Types: 'm', 'mi', 'vst'
Weight Types: 'gr', 'pound', 'pood'
Temperature Types: 'C', 'K', 'F'
``` 