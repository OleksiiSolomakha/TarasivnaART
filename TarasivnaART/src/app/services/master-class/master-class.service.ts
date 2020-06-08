import { Injectable } from '@angular/core';

export interface MasterClassItem {
  title: string;
  background: string;
  description: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MasterClassService {

  public masterClasses: MasterClassItem[] = [
    { title: 'ОЛІЙНИЙ ЖИВОПИС', background: '../../../assets/masterclass-1.jpg', description: 'Запрошую Вас на майстер-клас з олійного живопису. Отримуйте новий досвід, знімайте стрес, заряджайтесь позитивом та надихайтесь – пишіть картини для себе та в подарунок близьким. Беручи участь у майстер-класі, Ви не лише отримаєте професійні художні поради, але й отримаєте чудову нагоду поринути в приємну творчу атмосферу художньої студії. Я не лише навчу Вас різноманітним технікам живопису, але й знайду підхід до кожного учасника майстер-класу. Якщо Ви хвилюєтесь, що давно не тримали в руках пензлі, або ніколи раніше не торкались цього дивного інструменту – просто приходьте в арт-студію та переконайтесь, що за три години Ви зможете написати картину олійними фарбами власноруч. Обирайте будь-яку тему майбутнього шедевра на полотні й починайте писати картини! Особливості олійного живопису: Олійні фарби дозволяють легко правити живопис на полотні. Це дає можливість створювати чудові картини навіть новачкам. Ви можете писати гладко або пастозно – на ваш вибір. Особливо гарними у наших відвідувачів виходять картини в імпресіоністському стилі. Побувавши на майстер-класі з олійного живопису ви обов’язково захочете повернутися ще! Запрошую вас чудово провести час у творчій атмосфері!', images: ['url'] },
    { title: 'РОЗПИС НА ТКАНИНІ', background: '../../../assets/masterclass-2.jpg', description: 'Майстер-клас із розпису футболок, джинсовок або еко-сумок – захоплююче заняття, що не залишить байдужим ані дітей, ні дорослих. Я навчу вас основним технікам розпису текстильних поверхонь та допоможу створити оригінальний дизайн вашої улюбленої речі. Уміння малювати стане у нагоді, але його відсутність не буде завадою у створенні неповторного малюнку. На майстер-класі з розпису футболок (джинсовок, сумок) ми використовуємо спеціальні практичні та стійкі фарби, тож ваша улюблена річ буде радувати вас яскравими кольорами довгий час. Як проходить майстер-клас із розпису футболок та сумок. На наших заняттях завжди панує гарний настрій та творча атмосфера, адже процес надання будь-якій речі з тканини власного дизайну надзвичайно захоплює і подобається всім! Футболки або сумки можна приносити свої – і ваші улюблені речі набудуть нового оригінального вигляду. Якщо ж ви бажаєте відвідати майстер-клас веселою компанією від 5 чоловік, то є можливість замовити однакові футболки для розпису. Що ми робимо на майстер-класах: обираємо веселий малюнок до душі; робимо розмітку на тканині за допомогою олівця(крейди); додаємо яскравих барв; тішимось чудовим результатом! Догляд за розписаною річчю дуже простий: через декілька днів після заняття футболку або еко-сумку потрібно вивернути і попрасувати, а в подальшому їх можна буде прати із застосуванням делікатного режиму. Унікальні та оригінальні речі завжди цінні і привертають до себе увагу. Приходьте до нас на майстер-клас з розпису тканини та створіть свій власний дизайн, яким захоплюватимуться всі довкола!', images: ['url'] },
    { title: 'АКВАРЕЛЬ', background: '../../../assets/masterclass-1.jpg', description: 'Картини, написані аквареллю, дивовижно легкі та насичені повітрям. Проте сам процес створення картин ще більш захоплюючий та таємничий. Майстер-клас акварельного живопису дасть вам можливість дізнатися про особливості цього виду живопису та навчитися створювати справжні шедеври на папері. Наші заняття допоможуть вам освоїти наступні техніки малювання: “по-мокрому”; сухим пензлем; “багатошарове письмо”. Кожна з цих технік має цікаві особливості, які дозволяють надзвичайно тонко передавати задуману атмосферу намальованого сюжету. Знаючи такі нюанси, ви зможете створити чудову картину власноруч! Чим буде цікавий майстер-клас із акварелі: Під моїм керівництвом ви створите власну роботу близької для вас тематики та отримаєте професійні поради по роботі з аквареллю. Впродовж майстер-класу ви будете знаходитися у незвичайному світі мистецтва та зможете відсторонитися від всіх своїх повсякденних турбот. На майстер-класі з акварелі ви відчуєте себе справжнім художником, який із задоволенням та натхненням творить на полотні справжнє диво! Завітайте до нас, насолоджуйтеся процесом реалізації власних творчих здібностей, відпочивайте та проводьте час із користю.', images: ['url'] },
    { title: 'FLUID ART', background: '../../../assets/masterclass-2.jpg', description: 'Одна з найбільш розповсюджених причин чому люди, які хочуть малювати, не малюють – полягає в невпевненості у власних силах, не знанні основних технік та прийомів побудови об’єктів на полотні. Техніка рідкого акрилу вирішує усі ці питання. Тут не треба робити складних побудов, достатньо включити фантазію та дозволити фарбі створювати неповторні образи, розтікаючись на полотні.Фарба в техніці Fluid art, що розтікається на полотні, створює узори, які чекають, щоб автор їх розпізнав та трактував по своєму, зробивши необхідні штрихи для завершення композиції. Абстрактний живопис пройшов червоною ниткою через усе мистецтво 20 століття, найвидатніші художники прагнули відійти від предметного, реалістичного живопису та поринути у фантастичний світ абстракції. Саме таке занурення в абстрактне мистецтво чекає вас на майстер-класі з рідкого акрилу.', images: ['url'] },
    { title: 'ALCOHOL-INK', background: '../../../assets/masterclass-1.jpg', description: 'Напевно кожен з нас стикався з абстрактним мистецтвом. Коли дивишся на картину і нічого не розумієш. І замислюєшся, в чому ж був насправді задум митця? Які думки та емоції він хотів передати. Вдивляєшся, і знаходиш щось своє. Форми, силуети, захід сонця, нестримне море або навпаки - дивні клякси). Зовсім нещодавно до нас в Україну прийшов такий різновид мистецтва як малювання спиртовими чорнилами. На майстер-класі ми користуємось найякіснішими матеріалами, які дозволяють зберегти результат надовго. А саме продукцією Поліни Каменської. Замість пензля використовуємо фен. Створи інтер’єрну картину, яка здивує всіх знайомих, а процес подарує незабутні емоції та відчуття!', images: ['url'] },
    { title: 'ART-ПІКНІК', background: '../../../assets/masterclass-2.jpg', description: 'В хорошу погоду, кожної неділі я влаштовую пінік біля озера, де ми спілкуємось та пишемо картини. Картини обираємо завчасно на вибір, також ви можете обрати величину полотна, та матеріали (олійні чи акрилові фарби).', images: ['url'] },
    { title: 'ART-PARTY', background: '../../../assets/masterclass-1.jpg', description: 'Мені подобається долучати до мистецтва якомога більше людей та поєднувати декілька видів діяльності, саме тому з’явився новий напрям у моїй роботі, це організація вечірок! Ми не тільки пишемо каритини, ми танцюємо, готуємо страви, робимо квіткові композиції, дегустуємо смачні страви та напої. Кожного місяця нова вечірка! Слідкуй за анонсами – долучайся сам та приводь із собою друзів! Також, якщо Ви плануєте корпоратив, весілля, день народження або іншу важливу подію? Я пропоную зробити Вашу подію не лише веселою та радісною, але й творчою. Я з радістю підберу для Вас найкращий варіант творчих майстер-класів від написання картини-пазла з зображенням Ваших ключових продуктів до розпису футболок в корпоративному стилі. Корпоративи та дні народження можуть проводитись як у мене в студії, так і на Вашій території. Вартість корпоративів розраховується індивідуально, з урахування усіх Ваших побажань. Корпоративний майстер-клас – надихаючий і мотивуючий захід, це  - не тільки цікаве та захоплююче дозвілля, а й можливість творчо проявити себе для кожного учасника заходу. Сумісна творчість допомагає побачити один одного з кращого боку, відкрити нові грані таланту людей, з якими працюєш пліч-о-пліч щодня.', images: ['url'] },
    { title: 'ТВОРЧЕ ПОБАЧЕННЯ', background: '../../../assets/masterclass-2.jpg', description: 'Майстер-клас для двох, буде неймовірно романтичним подарунком! Вас чекає святкова атмосфера, шампанське, красива музика та майстер-клас від художника! Можна обрати будь-який із видів майсер-класів та зробити його у форматі побачення! Напишіть свою історію кохання та збережіть пам’ять на довгі роки!', images: ['url'] },
    { title: 'ART FOR KIDS', background: '../../../assets/masterclass-1.jpg', description: 'Всі дітки люблять малювати! Бажання творити з’являється у кожного з раннього дитинства, як тільки до рук потрапляє перший олівець або фарби. За допомогою малюнку ми проявляємо свої емоції і почуття, розвиваємося духовно та емоційно. Дитяча художня студія запрошує хлопчиків та дівчаток від 5 років розкрити свій талант художника. Навчитися малювати в різних стилях і техніках. Завдання студії: • розбудити художника в дитині • надати простір її індивідуальним нахилам • зробити заняття святково бажаними, неждано новими та яскравими • закласти фундамент, на якому виросте з дитини багатогранна особистість. В художній майстерні діти мають можливість спробувати себе у всіх видах образотворчого мистецтва: Малюнок: • олівцем • аквареллю • гуашшю • пастеллю Графічний малюнок: • гелевими ручками • фломастерами • маркерами Індивідуальний підхід до кожної дитини та допомога у розкритті індивідуальності, а також неймовірна кількість яскравих творчих робіт та позитивного настрою.  Заняття відбуваються круглорічно: Молодші групи (4-9 років) середа – 15,16,17:00 у суботу – 13,14,15:00   Стараша група (10-14 років) Субота – 17:00–20:00', images: ['url'] },
  ];

  constructor() { }

  public getMasterClassItems(): MasterClassItem[] {
    return this.masterClasses;
  }
}
