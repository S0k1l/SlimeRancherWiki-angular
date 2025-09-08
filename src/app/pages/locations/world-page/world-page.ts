import { Component } from '@angular/core';
import { TitleTag } from '../../../components/title-tag/title-tag';
import { InfoGroup } from '../../../components/info/info-group/info-group';

@Component({
  selector: 'app-world-page',
  imports: [TitleTag, InfoGroup],
  templateUrl: './world-page.html',
  styleUrl: './world-page.css',
})
export class WorldPage {
  location = {
    id: '2',
    name: 'Сухий Риф',
    imgUrl: 'locations/world/The_Dry_Reef.webp',
    meat: [
      { id: '2', name: 'Кур-курочка', imgUrl: 'diets/meats/Hen_Hen.webp' },
      { id: '3', name: 'Півень', imgUrl: 'diets/meats/Roostro.webp' },
      { id: '4', name: "Кам'янисте курчатко", imgUrl: 'diets/meats/Stony_Chickadoo.webp' },
    ],
    fruits: [
      { id: '1', name: 'Погофрукт', imgUrl: 'diets/fruits/Pogofruit.webp' },
      { id: '2', name: 'Кубниця', imgUrl: 'diets/fruits/Cuberry.webp' },
    ],
    veggie: [
      { id: '1', name: 'Морква', imgUrl: 'diets/veggie/Carrot.webp' },
      { id: '2', name: 'Ока-ока', imgUrl: 'diets/veggie/Oca_Oca.webp' },
      { id: '3', name: 'Серцебуряк', imgUrl: 'diets/veggie/Heart_Beet.webp' },
      { id: '4', name: 'Срібний пастернак', imgUrl: 'diets/veggie/Silver_Parsnip.webp' },
    ],
    pump: [
      { id: '1', name: 'Первісна нафта', imgUrl: 'science/pump/Primordy_Oil.webp' },
      { id: '2', name: 'Спіральна пара', imgUrl: 'science/pump/SpiralSteam_SP.webp' },
      { id: '3', name: 'Глибиний розсіл', imgUrl: 'science/pump/DeepBrine_SP.webp' },
      { id: '4', name: 'Лавовий пил', imgUrl: 'science/pump/LavaDust_SP.webp' },
    ],
    apiary: [
      { id: '1', name: 'Жужжащий віск', imgUrl: 'science/apiary/BuzzWax_SP.webp' },
      { id: '2', name: 'Гексосота', imgUrl: 'science/apiary/Hexacomb_SP.webp' },
      { id: '3', name: 'Королівське желе', imgUrl: 'science/apiary/RoyalJelly_SP.webp' },
    ],
    drill: [
      { id: '1', name: 'Желекамінь', imgUrl: 'science/drill/Jellystone_SP.webp' },
      { id: '2', name: "Скам'янілості слайму", imgUrl: 'science/drill/SlimeFossil_SP.webp' },
      { id: '3', name: 'Дивний діамант', imgUrl: 'science/drill/StrangeDiamond_SP.webp' },
    ],
    slimes: [
      { id: '1', name: 'Рожевий слайм', imgUrl: 'slimes/Pink_Slime.webp' },
      { id: '2', name: "Кам'яний слайм", imgUrl: 'slimes/Rock_Slime.webp' },
      { id: '3', name: 'Смугастий слайм', imgUrl: 'slimes/Tabby_Slime.webp' },
      { id: '4', name: 'Фосфорний слайм', imgUrl: 'slimes/Phosphor_Slime.webp' },
      { id: '5', name: 'Рад-слайм', imgUrl: 'slimes/Rad_Slime.webp' },
      { id: '6', name: 'Бум-слайм', imgUrl: 'slimes/Boom_Slime.webp' },
      { id: '7', name: 'Медовий слайм', imgUrl: 'slimes/Honey_Slime.webp' },
    ],
    pods: [
      {
        id: '1',
        name: 'Зелена капсула',
        imgUrl: 'locations/pods/TreasurePod1.webp',
        quantity: 7,
      },
      {
        id: '2',
        name: 'Синя капсула',
        imgUrl: 'locations/pods/TreasurePod2.webp',
        quantity: 5,
      },
      {
        id: '3',
        name: 'Фіолетова капсула',
        imgUrl: 'locations/pods/TreasurePod3.webp',
        quantity: 2,
      },
      {
        id: '4',
        name: 'DLC капсула',
        imgUrl: 'locations/pods/TreasurePodSecret.webp',
        quantity: 5,
      },
    ],
  };
}
