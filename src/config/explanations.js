const explanations = {
    R: `<h2>Реалістичний тип (Realistic)</h2>
<p>Несоціальний, орієнтований на теперішнє, емоційно стабільний, займається конкретними об'єктами (речами, інструментами, машинами), віддає перевагу заняттям, що вимагають моторної спритності, конкретності. Розвинені математичні, невербальні здібності.</p>
<h3>Психологічні характеристики:</h3>
<p>Активність, агресивність, діловитість, наполегливість, раціональність, практичне мислення, хороші рухові навички, просторове уявлення, технічні здібності.</p>
<h3>Уподобання:</h3>
<p>Конкретний результат, теперішні речі, предмети та їх практичне використання, заняття, що вимагають фізичного розвитку, спритності, відсутність орієнтації на людей і обмежену інформацію.</p>
<h3>Професійне середовище:</h3>
<p>Техніка, сільське господарство, військова справа. Рішення конкретних завдань, що вимагають рухливості, рухових умінь, фізичної сили. Соціальні навички потрібні в мінімальній мірі і пов'язані з прийомом-передачею обмеженої інформації.</p>
<h3>Приклади професій:</h3>
<p>Механік, електрик, інженер, фермер, геолог, гравер, агроном, садівник, водій, пілот, поліцейський, охоронець (тілоохоронець), зварник, стоматолог.</p>
<h3>Типові захоплення:</h3>
<p>Реставрація старих механізмів. Ремонт, конструювання, збірка різних пристроїв. Будівельні та відновлювальні роботи. Фермерство, облаштування дачі, заміського будинку. Садівництво, полювання, риболовля, туризм, фізично небезпечні види спорту.</p>`,

    I: `<h2>Дослідницький тип (Investigative)</h2>
<p>Несоціальний, аналітичний, раціональний, незалежний, оригінальний. Переважають теоретичні цінності, любить вирішувати завдання, що вимагають абстрактного мислення, інтелекту. Гармонійно розвинені вербальні та невербальні здібності.</p>
<h3>Психологічні характеристики:</h3>
<p>Аналітичний розум, незалежність і оригінальність суджень, гармонійний розвиток мовних і математичних здібностей, критичність, допитливість, схильність до фантазії, інтенсивне внутрішнє життя, низька фізична активність.</p>
<h3>Уподобання:</h3>
<p>Ідеї, теоретичні цінності, усвідомлений труд, вирішення інтелектуальних творчих завдань, що вимагають абстрактного мислення, відсутність орієнтації на спілкування та відсутність інформаційного характеру спілкування.</p>
<h3>Професійне середовище:</h3>
<p>Наука. Вирішення завдань, що вимагають абстрактного мислення і творчих здібностей. Міжособистісні стосунки грають незначну роль, хоча необхідно мати уявлення і сприймати складні ідеї.</p>
<h3>Приклади професій:</h3>
<p>Фізик, астроном, лінгвіст, програміст, мікробіолог, архітектор, економіст (аудитор, аналітик), фармацевт, мистецтвознавець, історик, етнограф, археолог.</p>
<h3>Типові захоплення:</h3>
<p>Робота (дослідницький тип часто повністю поглинається своєю роботою). Складні види діяльності (яхтовий спорт, підводне плавання, альпінізм). Комп'ютери, читання (художня література, наукові статті).</p>`,

    A: `<h2>Артистичний тип (Artistic)</h2>
<p>Спирається на емоції, уяву, інтуїцію; має складний погляд на життя. Незалежний у рішеннях, оригінальний. Високо розвинені рухові і мовні здібності. Для представників даного типу характерне високе життєве ідеал з твердженням свого Я. Він несоціальний у тому сенсі, що не дотримується умовностей суспільства.</p>
<h3>Психологічні характеристики:</h3>
<p>Уява та інтуїція, емоційно складний погляд на життя, незалежність, гнучкість і оригінальність мислення, хороші рухові здібності та сприйняття.</p>
<h3>Уподобання:</h3>
<p>Емоції та почуття, самовираження, творчі заняття, уникнення діяльності, що вимагає фізичної сили, регламентованого робочого часу, слідування правилам і традиціям.</p>
<h3>Професійне середовище:</h3>
<p>Образотворче мистецтво, музика, література. Вирішення проблем, що вимагають художнього смаку і уяви.</p>
<h3>Приклади професій:</h3>
<p>Музикант, художник, візажист, фотограф, актор, режисер, дизайнер.</p>
<h3>Типові захоплення:</h3>
<p>Фотографія. Малювання. Живопис. Відвідування танцювальних та музичних концертів, театрів, музеїв. Написання поезії, оповідань. Художнє колекціонування. Гра на музичних інструментах. Заняття танцями, співом.</p>`,

    S: `<h2>Соціальний тип (Social)</h2>
<p>Має соціальні вміння, потребує контакту. Риси його характеру: прагнення навчати і виховувати, психологічний настрій на людину, гуманність. Представники даного типу намагаються триматися в стороні від інтелектуальних проблем; активні, але часто залежні від думки групи людей. Проблеми вирішує спираючись на емоції, почуття, вміння спілкуватися. Має хороші мовні здібності.</p>
<h3>Психологічні характеристики:</h3>
<p>Уміння спілкуватися, гуманність, здатність до співпереживання, активність, залежність від оточуючих і суспільної думки, пристосованість, вирішення проблем з опорою на емоції та почуття, переважання мовних здібностей.</p>
<h3>Уподобання:</h3>
<p>Люди, спілкування, встановлення контактів з оточуючими, прагнення навчати, виховувати, уникнення інтелектуальних проблем.</p>
<h3>Професійне середовище:</h3>
<p>Освіта, охорона здоров'я, соціальне забезпечення, обслуговування, спорт. Ситуації і проблеми, пов'язані з умінням розбиратися в поведінці людей, вимагають постійного особистого спілкування, уміння переконувати.</p>
<h3>Приклади професій:</h3>
<p>Лікар, педагог, психолог, екскурсовод, журналіст, менеджер з продажу, діджей, телеведучий.</p>
<h3>Типові захоплення:</h3>
<p>Організація розваг для інших. Відвідування громадських заходів, зборів. Добровільне виконання благодійної та соціальної роботи.</p>`,

    E: `<h2>Підприємницький тип (Enterprising)</h2>
<p>Уникає цілей, які дозволяють виявити енергію, ентузіазм, імпульсивність, любить пригоди. Представник даного типу домінантний, любить визнання, любить керувати. Йому не подобається практична праця, а також заняття, що вимагають інтелектуальних зусиль, усвідомленості. Добре вирішує завдання, пов'язані з керівництвом, статусом і владою, агресивний і підприємливий, має хороші мовні здібності.</p>
<h3>Психологічні характеристики:</h3>
<p>Енергія, імпульсивність, підприємливість, агресивність, готовність до ризику, оптимізм, впевненість в собі, переважання мовних здібностей, хороші організаторські якості.</p>
<h3>Уподобання:</h3>
<p>Лідерство, визнання, керівництво, влада, особистий статус, уникнення занять, що вимагають зусиль, великого обсягу, рухових навичок і концентрованої уваги, інтерес до економіки і політики.</p>
<h3>Професійне середовище:</h3>
<p>Вирішення нечітких завдань, спілкування з представниками різних типів в різноманітних ситуаціях, що вимагають уміння розбиратися в мотивах поведінки інших людей і красномовство.</p>
<h3>Приклади професій:</h3>
<p>Бізнесмен, маркетолог, менеджер, директор, заводчик, журналіст, ріелтор, дипломат, юрист, політик, менеджер з продажу, біржовий брокер.</p>
<h3>Типові захоплення:</h3>
<p>Членство в клубах, організаціях, партіях. Відвідування зборів, конференцій. Спортивні змагання в якості глядача або учасника. Престижний відпочинок, розваги. Організація вечірок, розваг. Політична діяльність.</p>`,

    C: `<h2>Традиційний/Конвенційний тип (Conventional)</h2>
<p>Віддає перевагу чітко структурованій діяльності. Характер стереотипний, конкретний, практичний. Не проявляє критичність, оригінальність, консервативний, залежний, не любить зміну діяльності. Слабо розвинені організаторські здібності, переважають математичні здібності.</p>
<h3>Психологічні характеристики:</h3>
<p>Здібності до обробки числової інформації, стереотипний підхід до проблем, консервативний характер, підпорядкованість, залежність, слідування звичаям, конформність, виконавчість, переважання математичних здібностей.</p>
<h3>Уподобання:</h3>
<p>Порядок, чітко розписана діяльність, робота за інструкцією, заданим алгоритмом, уникнення невизначених ситуацій, соціальної активності та фізичної напруги, прийняття позиції керівництва.</p>
<h3>Професійне середовище:</h3>
<p>Економіка, зв'язок, розрахунки, бухгалтерія, діловодство, що вимагає здібностей до обробки рутинної інформації і числових даних.</p>
<h3>Приклади професій:</h3>
<p>Бухгалтер, фінансист, економіст, канцелярський працівник, бібліотекар, контролер, хімік-технолог, кресляр, коректор, логіст, товарознавець.</p>
<h3>Типові захоплення:</h3>
<p>Колекціонування марок, монет. Будівництво моделей. Проекти покращення житла. Участь в громадських і суспільних організаціях. Ігри з ясними і чіткими правилами.</p>`
};

export default explanations;
