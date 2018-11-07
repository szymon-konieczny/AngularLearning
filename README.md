
Zrób serwis random-number.service, który będzie miał dwie metody:
- getRandomNumber(x, y) (z jakiegoś przedziału)
- getRandomNumbersArray(x, y, z) (z jakiegoś przedziału oraz ile tych liczb) 
Wykorzystaj ten serwis w tym komponencie żeby stworzyć tablice 10 losowych liczb
które będą stanowiły wartości 10 różnych liczników.
Liczniki wyświetl w komponencie za pomocą *ngFor i przekażesz im te losowe liczby

Natomiast w counterach wykorzystasz ten serwis żeby wylosować losową wartość o którą
będziesz inkrementował/dekrementował wartość licznika.

-----------------------

1. Przekazywać teraz do counterów obiekty zamiast liczb. Każdy obiekt niech ma property 
startingValue i stepValue.

2. Route '/' niech wyświetla informacje, że adres jest nieprawidłowy i należy użyć `/:start?end=number`. Następnie przy '/:start?end=number' niech komponent rodzica pobiera liczby start i end z adresu i używa ich jako wartości zakresu liczb generowanych dla liczników. Example: `http://localhost:4200/12?end=34`.

3. Napisz dyrektywe `highlight`, która będzie na bazie wartości licznika podświetlała odpowiednio licznik. Jeśli wartość licznika jest dodatnia to niech będzie to kolor zielony a jak wartość licznika będzie ujemna to niech kolor będzie czerwony.
