import { Component } from '@angular/core';
import { TabsContainer } from '../../components/tabs/tabs-container/tabs-container';
import { Tab } from '../../components/tabs/tab/tab';
import { NavigationTabs } from '../../components/tabs/navigation-tabs/navigation-tabs';
import { TitleTag } from '../../components/title-tag/title-tag';

@Component({
  selector: 'app-home-page',
  imports: [TabsContainer, Tab, NavigationTabs, TitleTag],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  fetchSlimes = () => [
    { id: '1', name: 'Рожевий слайм', imgUrl: 'slimes/Pink_Slime.webp' },
    { id: '2', name: "Кам'яний слайм", imgUrl: 'slimes/Rock_Slime.webp' },
    { id: '3', name: 'Смугастий слайм', imgUrl: 'slimes/Tabby_Slime.webp' },
    { id: '4', name: 'Фосфорний слайм', imgUrl: 'slimes/Phosphor_Slime.webp' },
    { id: '5', name: 'Рад-слайм', imgUrl: 'slimes/Rad_Slime.webp' },
    { id: '6', name: 'Бум-слайм', imgUrl: 'slimes/Boom_Slime.webp' },
    { id: '7', name: 'Медовий слайм', imgUrl: 'slimes/Honey_Slime.webp' },
    { id: '8', name: 'Калюжний слайм', imgUrl: 'slimes/Puddle_Slime.webp' },
    { id: '9', name: 'Кристалевий слайм', imgUrl: 'slimes/Crystal_Slime.webp' },
    { id: '10', name: 'Мисливець-слайм', imgUrl: 'slimes/Hunter_Slime.webp' },
    { id: '11', name: 'Квантовий слайм', imgUrl: 'slimes/Quantum_Slime.webp' },
    { id: '12', name: 'Вогняний слайм', imgUrl: 'slimes/Fire_Slime.webp' },
    { id: '13', name: 'Вихорний слайм', imgUrl: 'slimes/Dervish_Slime.webp' },
    { id: '14', name: 'Ліанний слайм', imgUrl: 'slimes/Tangle_Slime.webp' },
    { id: '15', name: 'Мозаїчний слайм', imgUrl: 'slimes/Mosaic_Slime.webp' },
    { id: '16', name: 'Саблезубий слайм', imgUrl: 'slimes/Saber_Slime.webp' },
    { id: '17', name: 'Ртутний слайм', imgUrl: 'slimes/Quicksilver_Slime.webp' },
    { id: '18', name: 'Глітч-слайм', imgUrl: 'slimes/Glitch_Slime.webp' },
    { id: '19', name: 'Золотий слайм', imgUrl: 'slimes/Gold_Slime.webp' },
    { id: '20', name: 'Слайм удачі', imgUrl: 'slimes/Lucky_Slime.webp' },
  ];
  fetchWorld = () => [
    { id: '1', name: 'Далекі Далекі Землі', imgUrl: 'locations/world/Far_Far_Range.webp' },
    { id: '2', name: 'Сухий Риф', imgUrl: 'locations/world/The_Dry_Reef.webp' },
    { id: '3', name: "Індиговий Кар'єр", imgUrl: 'locations/world/Indigo_Quarry.webp' },
    { id: '4', name: 'Моховий Покрив', imgUrl: 'locations/world/The_Moss_Blanket.webp' },
    { id: '5', name: 'Стародавні Руїни', imgUrl: 'locations/world/The_Ancient_Ruins.webp' },
    { id: '6', name: 'Скляна Пустеля', imgUrl: 'locations/world/The_Glass_Desert.webp' },
    { id: '7', name: 'Дикі Землі', imgUrl: 'locations/world/The_Wilds.webp' },
    { id: '8', name: 'Швидка Долина', imgUrl: 'locations/world/Nimble_Valley.webp' },
    { id: '9', name: 'Слаймуляція', imgUrl: 'locations/world/Slimeulation.webp' },
    { id: '10', name: 'Слаймове Море', imgUrl: 'locations/world/The_Slime_Sea.webp' },
  ];
  fetchRanch = () => [
    { id: '1', name: 'Ранчо', imgUrl: 'locations/ranch/The_Ranch.webp' },
    { id: '2', name: 'Грот', imgUrl: 'locations/ranch/The_Grotto.webp' },
    { id: '3', name: 'Зарослі', imgUrl: 'locations/ranch/Overgrowth.webp' },
    { id: '4', name: 'Лабораторія', imgUrl: 'locations/ranch/The_Lab.webp' },
    { id: '5', name: 'Доки', imgUrl: 'locations/ranch/The_Docks.webp' },
    { id: '6', name: 'Притулок Огдена', imgUrl: 'locations/ranch/Ogdens_Retreat.webp' },
    { id: '7', name: 'Садиба Мочі', imgUrl: 'locations/ranch/Mochis_Manor.webp' },
    { id: '8', name: 'Майстерня Віктора', imgUrl: 'locations/ranch/Viktors_Workshop.webp' },
  ];
  fetchFruits = () => [
    { id: '1', name: 'Погофрукт', imgUrl: 'diets/fruits/Pogofruit.webp' },
    { id: '2', name: 'Кубниця', imgUrl: 'diets/fruits/Cuberry.webp' },
    { id: '3', name: "М'ятне манго", imgUrl: 'diets/fruits/Mint_Mango.webp' },
    { id: '4', name: 'Фазовий лимон', imgUrl: 'diets/fruits/Phase_Lemon.webp' },
    { id: '5', name: 'Колюча груша', imgUrl: 'diets/fruits/Prickle_Pear.webp' },
    { id: '6', name: 'Кукадоба', imgUrl: 'diets/fruits/Kookadoba.webp' },
  ];

  fetchVeggie = () => [
    { id: '1', name: 'Морква', imgUrl: 'diets/veggie/Carrot.webp' },
    { id: '2', name: 'Ока-ока', imgUrl: 'diets/veggie/Oca_Oca.webp' },
    { id: '3', name: 'Серцебуряк', imgUrl: 'diets/veggie/Heart_Beet.webp' },
    { id: '4', name: 'Срібний пастернак', imgUrl: 'diets/veggie/Silver_Parsnip.webp' },
    { id: '5', name: 'Дивна цибуля', imgUrl: 'diets/veggie/Odd_Onion.webp' },
    { id: '6', name: 'Позолочений імбир', imgUrl: 'diets/veggie/Gilded_Ginger.webp' },
  ];

  fetchMeat = () => [
    { id: '1', name: 'Курчатко', imgUrl: 'diets/meats/Chickadoo.webp' },
    { id: '2', name: 'Кур-курочка', imgUrl: 'diets/meats/Hen_Hen.webp' },
    { id: '3', name: 'Півень', imgUrl: 'diets/meats/Roostro.webp' },
    { id: '4', name: "Кам'янисте курчатко", imgUrl: 'diets/meats/Stony_Chickadoo.webp' },
    { id: '5', name: "Кам'яниста курочка", imgUrl: 'diets/meats/Stony_Hen.webp' },
    { id: '6', name: 'Чагарникове курчатко', imgUrl: 'diets/meats/Briar_Chickadoo.webp' },
    { id: '7', name: 'Чагарникова курочка', imgUrl: 'diets/meats/Briar_Hen.webp' },
    { id: '8', name: 'Фарбоване курчатко', imgUrl: 'diets/meats/Painted_Chickadoo.webp' },
    { id: '9', name: 'Фарбована курочка', imgUrl: 'diets/meats/Painted_Hen.webp' },
    { id: '10', name: 'Старенька курочка', imgUrl: 'diets/meats/Elder_Hen.webp' },
    { id: '9', name: 'Старенький півень', imgUrl: 'diets/meats/Elder_Roostro.webp' },
  ];

  fetchPlorts = () => [
    { id: '1', name: 'Рожевий плорт', imgUrl: 'plorts/PlortPINK.webp' },
    { id: '2', name: "Кам'яний плорт", imgUrl: 'plorts/PlortROCK.webp' },
    { id: '3', name: 'Смугастий плорт', imgUrl: 'plorts/PlortTABBY.webp' },
    { id: '4', name: 'Фосфорний плорт', imgUrl: 'plorts/PlortPHOSPHOR.webp' },
    { id: '5', name: 'Рад-плорт', imgUrl: 'plorts/PlortRAD.webp' },
    { id: '6', name: 'Бум-плорт', imgUrl: 'plorts/PlortBOOM.webp' },
    { id: '7', name: 'Медовий плорт', imgUrl: 'plorts/PlortHONEY.webp' },
    { id: '8', name: 'Калюжний плорт', imgUrl: 'plorts/PlortPUDDLE.webp' },
    { id: '9', name: 'Кристалевий плорт', imgUrl: 'plorts/PlortCRYSTAL.webp' },
    { id: '10', name: 'Мисливець-плорт', imgUrl: 'plorts/PlortHUNTER.webp' },
    { id: '11', name: 'Квантовий плорт', imgUrl: 'plorts/PlortQUANTUM.webp' },
    { id: '12', name: 'Вогняний плорт', imgUrl: 'plorts/PlortFIRE.webp' },
    { id: '13', name: 'Вихорний плорт', imgUrl: 'plorts/PlortDERVISH.webp' },
    { id: '14', name: 'Ліанний плорт', imgUrl: 'plorts/PlortTANGLE.webp' },
    { id: '15', name: 'Мозаїчний плорт', imgUrl: 'plorts/PlortMOSAIC.webp' },
    { id: '16', name: 'Саблезубий плорт', imgUrl: 'plorts/PlortSABER.webp' },
    { id: '17', name: 'Ртутний плорт', imgUrl: 'plorts/PlortQUICKSILVER.webp' },
    { id: '18', name: 'Золотий плорт', imgUrl: 'plorts/PlortGOLD.webp' },
  ];
}
