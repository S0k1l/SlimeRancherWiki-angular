import { Component } from '@angular/core';
import { TitleTag } from '../../components/title-tag/title-tag';
import { InfoItem } from '../../components/info/info-item/info-item';
import { InfoGroup } from '../../components/info/info-group/info-group';

@Component({
  selector: 'app-slime-page',
  imports: [TitleTag, InfoItem, InfoGroup],
  templateUrl: './slime-page.html',
  styleUrl: './slime-page.css',
})
export class SlimePage {
  slime = {
    name: 'Рожевий слайм',
    imgUrl: 'slimes/Pink_Slime.webp',
    toy: { id: '1', name: "Пляжний м'яч", imgUrl: 'toys/Beach_Ball.webp' },
    locations: [
      { id: '2', name: 'Сухий Риф', imgUrl: './locations/world/The_Dry_Reef.webp' },
      { id: '3', name: "Індиговий Кар'єр", imgUrl: './locations/world/Indigo_Quarry.webp' },
      { id: '4', name: 'Моховий Покрив', imgUrl: './locations/world/The_Moss_Blanket.webp' },
      { id: '5', name: 'Стародавні Руїни', imgUrl: './locations/world/The_Ancient_Ruins.webp' },
      { id: '6', name: 'Скляна Пустеля', imgUrl: './locations/world/The_Glass_Desert.webp' },
      { id: '7', name: 'Дикі Землі', imgUrl: './locations/world/The_Wilds.webp' },
      { id: '8', name: 'Швидка Долина', imgUrl: './locations/world/Nimble_Valley.webp' },
      { id: '9', name: 'Слаймуляція', imgUrl: './locations/world/Slimeulation.webp' },
      { id: '10', name: 'Слаймове Море', imgUrl: './locations/world/The_Slime_Sea.webp' },
    ],
    diet: { name: 'Всеїдний', imgUrl: 'diets/All.webp' },
    favFood: { id: '1', name: 'Погофрукт', imgUrl: 'diets/fruits/Pogofruit.webp' },
    plort: { id: '1', name: 'Рожевий плорт', imgUrl: 'plorts/PlortPINK.webp' },
  };
}
