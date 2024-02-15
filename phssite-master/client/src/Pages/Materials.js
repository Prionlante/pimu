import React, { Component } from 'react'
import { Col, Container, Nav, Tab, Row } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
export default class Materials extends Component {
    render() {
        const defaultTab = this.props.match.params.tab === "upgradeKurses" ? "Возрастная физиология" : "Статьи"
        const cookies = new Cookies();
        if(cookies.get('token')){
            return (
                <Redirect to='/' />
            )
        }
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey={defaultTab}>
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-5">
                                <Nav.Item>
                                    <Nav.Link eventKey="Положение"> Положение </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="План работы"> План работы </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Методические разработки"> Методические разработки по блокам предметов </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Монографии"> Монографии </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Статьи"> Статьи </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Тестовый материал"> Тестовый материал </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Оценочные таблицы"> Оценочные таблицы </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Паспорт здоровья"> Паспорт здоровья учащегося (ВУЗ, СОШ) </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Методологическое сопровождение"> Методологическое сопровождение </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Свидетельства регистраций Баз Данных"> Свидетельства регистраций Баз Данных </Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="Курсы повышения квалификации" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="Возрастная физиология">Возрастная физиология</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="Положение">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/polojenie.pdf" 
                                                download="Положение.pdf" 
                                                target="_blank"> 
                                                Положение.
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="План работы">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/plan1.pdf" 
                                                download="Отчет НИЛ МФЗУВСО 2015г.pdf" 
                                                target="_blank"> 
                                                Отчет НИЛ МФЗУВСО 2015г. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/plan2.pdf" 
                                                download="План НИЛ МФЗУВСО на 2016г.pdf" 
                                                target="_blank"> 
                                                План НИЛ МФЗУВСО на 2016г. 
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Методические разработки">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul>
                                        <li>
                                            <h6>Физиология:</h6>
                                            <ul type="circle">
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_01.pdf" 
                                                        download="Дневник самоконтроля - пластичных физиологических констант 2020.pdf" 
                                                        target="_blank"> 
                                                        Дневник самоконтроля - пластичных физиологических констант 2020. 
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_02.pdf" 
                                                        download="Возрастная физиология. Пособие 1 часть.pdf" 
                                                        target="_blank"> 
                                                        Возрастная физиология. Пособие 1 часть.
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_03.pdf" 
                                                        download="Возрастная физиология. Пособие 2 часть.pdf" 
                                                        target="_blank"> 
                                                        Возрастная физиология. Пособие 2 часть.
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_04.pdf" 
                                                        download="Возрастная физиология. Рабочая тетрадь Часть 1.pdf" 
                                                        target="_blank"> 
                                                        Возрастная физиология. Рабочая тетрадь Часть 1.
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_05.pdf" 
                                                        download="Возрастная физиология. Рабочая тетрадь Часть 2.pdf" 
                                                        target="_blank"> 
                                                        Возрастная физиология. Рабочая тетрадь Часть 2.
                                                    </a> 
                                                </li> 
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/physiology/pg_06.pdf" 
                                                        download="Дневник самоконтроля Пластичных физиологических констант ДНК 2021 год.pdf" 
                                                        target="_blank"> 
                                                        Дневник самоконтроля Пластичных физиологических констант ДНК 2021 год.
                                                    </a> 
                                                </li> 
                                            </ul>
                                        </li>
                                        <li>
                                            <h6>Безопасность Жизнедеятельности:</h6>
                                            <ul type="circle">
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_01.pdf" 
                                                        download="Автономное выживание человека в природе.pdf" 
                                                        target="_blank"> 
                                                        Автономное выживание человека в природе. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_02.pdf" 
                                                        download="БЖД пособие. Ниретин Н.И. 2008г.pdf" 
                                                        target="_blank"> 
                                                        БЖД пособие Ниретин Н.И. 2008г. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_03.pdf" 
                                                        download="БЖД учебное пособие. Ниретин Н.И. 2007г.pdf" 
                                                        target="_blank"> 
                                                        БЖД учебное пособие Ниретин Н.И. 2007г. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_04.pdf" 
                                                        download="БЖД учебное пособие. Калюжный Е.А. и др. 2012г.pdf" 
                                                        target="_blank"> 
                                                        БЖД учебное пособие. Калюжный Е.А. и др. 2012г. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                    href="/files/pdf/bgd/bgd_05.pdf" 
                                                    download="Вопросы к зачету по БЖД.pdf" 
                                                    target="_blank"> 
                                                    Вопросы к зачету по БЖД. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_06.pdf" 
                                                        download="Методические рекомендации по БЖД. Ниретин Н.И. 2007г.pdf" 
                                                        target="_blank"> 
                                                        Методические рекомендации по БЖД. Ниретин Н.И. 2007г. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_07.pdf" 
                                                        download="Рабочая тетрадь БЖД - 2018 год. Калюжный Е.А.pdf" 
                                                        target="_blank"> 
                                                        Рабочая тетрадь БЖД - 2018 год. Калюжный Е.А. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_08.pdf" 
                                                        download="Подготовка к воинской службе.pdf" 
                                                        target="_blank"> 
                                                        Подготовка к воинской службе. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_09.pdf" 
                                                        download="Рабочая тетрадь по БЖД для заочного отделения.pdf" 
                                                        target="_blank"> 
                                                        Рабочая тетрадь по БЖД для заочного отделения. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_10.pdf" 
                                                        download="Рабочая тетрадь по БЖД для очного отделения.pdf" 
                                                        target="_blank"> 
                                                        Рабочая тетрадь по БЖД для очного отделения. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_11.pdf" 
                                                        download="Современные средства поражения.pdf" 
                                                        target="_blank"> 
                                                        Современные средства поражения. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_12.pdf" 
                                                        download="Соц.культ. серв и туризм БЖД вопросы к зачету.pdf" 
                                                        target="_blank"> 
                                                        Соц.культ. серв и туризм БЖД вопросы к зачету. 
                                                    </a> 
                                                </li>                                            
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_13.pdf" 
                                                        download="Тесты БЖД для СКСиТ.pdf" 
                                                        target="_blank"> 
                                                        Тесты БЖД для СКСиТ. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_14.pdf" 
                                                        download="Учебное пособие. Басуров В.А. 2013г.pdf" 
                                                        target="_blank"> 
                                                        Учебное пособие. Басуров В.А. 2013г. 
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/bgd/bgd_15.pdf" 
                                                        download="Учебное пособие. Калюжный Е.А. 2018г.pdf" 
                                                        target="_blank"> 
                                                        Учебное пособие. Калюжный Е.А. 2018г. 
                                                    </a> 
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6> Основы Медицинских Знаний и Здорового Образа Жизни: </h6>
                                            <ul type="circle">
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_01.pdf" 
                                                        download="Вопросы к зачету по ОМЗ и ЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Вопросы к зачету по ОМЗ и ЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_02.pdf" 
                                                        download="Вопросы к экзамену по ОЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Вопросы к экзамену по ОЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_03.pdf" 
                                                        download="Методические рекомендации ОМЗ и ЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Методические рекомендации ОМЗ и ЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_04.pdf" 
                                                        download="Методические рекомендации по ОЗОЖ.pdf" 
                                                        target="_blank"> 
                                                       Методические рекомендации по ОЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_05.pdf" 
                                                        download="Практические задания по ОМЗ и ЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Практические задания по ОМЗ и ЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_06.pdf" 
                                                        download="Рабочая тетрадь ОМЗ и ЗОЖ для очного отделения.pdf" 
                                                        target="_blank"> 
                                                        Рабочая тетрадь ОМЗ и ЗОЖ для очного отделения.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_07.pdf" 
                                                        download="Рабочая тетрадь ОМЗ и ЗОЖ для студентов заочного отделения.pdf" 
                                                        target="_blank"> 
                                                        Рабочая тетрадь ОМЗ и ЗОЖ для студентов заочного отделения.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_08.pdf" 
                                                        download="Результаты тестирования.pdf" 
                                                        target="_blank"> 
                                                        Результаты тестирования.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_09.pdf" 
                                                        download="Тесты ОЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Тесты ОЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_10.pdf" 
                                                        download="Тесты ОМЗ и ЗОЖ.pdf" 
                                                        target="_blank"> 
                                                        Тесты ОМЗ и ЗОЖ.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_11.pdf" 
                                                        download="Учебное пособие ОМЗ и ЗОЖ. 2006 год.pdf" 
                                                        target="_blank"> 
                                                        Учебное пособие ОМЗ и ЗОЖ. 2006 год.
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a 
                                                        href="/files/pdf/omz/omz_12.pdf" 
                                                        download="Учебное пособие ОМЗ и ЗОЖ. 2012 год.pdf" 
                                                        target="_blank"> 
                                                        Учебное пособие ОМЗ и ЗОЖ. 2012 год.
                                                    </a> 
                                                </li>
                                                <li type="disc">
                                                    <h6> Тематические материалы: </h6>
                                                    <ul type="circle">
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_01.pdf" 
                                                                download="Здоровое поколение.pdf" 
                                                                target="_blank"> 
                                                                Здоровое поколение.
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_02.pdf" 
                                                                download="Как остаться в живых.pdf" 
                                                                target="_blank"> 
                                                                Как остаться в живых.
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_03.pdf" 
                                                                download="Курить - здоровью вредить.pdf" 
                                                                target="_blank"> 
                                                                Курить - здоровью вредить.
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_04.pdf" 
                                                                download="Массаж - основы.pdf" 
                                                                target="_blank"> 
                                                                Массаж - основы.
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_05.pdf" 
                                                                download="Основы здорового питания.pdf" 
                                                                target="_blank"> 
                                                                Основы здорового питания.
                                                            </a> 
                                                        </li>
                                                        <li>
                                                            <a 
                                                                href="/files/pdf/omz/thematic_materal/tm_06.pdf" 
                                                                download="Половое воспитания.pdf" 
                                                                target="_blank"> 
                                                                Половое воспитания.
                                                            </a> 
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="/files/pdf/methodological_support/ms_12.pdf"
                                                download="Шкалы Регрессии Федеральный стандарт Самара 2022 Нижегородская область.pdf"
                                                target="_blank">
                                                Шкалы Регрессии Федеральный стандарт Самара 2022 Нижегородская область стр 69.
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Монографии">
                                <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/monographs/mn_01.pdf" 
                                                download="Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг.pdf" 
                                                target="_blank"> 
                                                Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/monographs/mn_02.pdf"
                                                download="Морфологическая и функциональная адаптация. Калюжный Е.А. 2006г.pdf" 
                                                target="_blank"> 
                                                Морфологическая и функциональная адаптация. Калюжный Е.А. 2006г. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/monographs/mn_03.pdf"
                                                download="Особенности морфофункционального развития. Калюжный Е.А. и др. коллективная. 2013г.pdf" 
                                                target="_blank"> 
                                                Особенности морфофункционального развития. Калюжный Е.А. и др. коллективная. 2013г. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/monographs/mn_04.pdf"
                                                download="Актуальные проблемы образования 2020г.pdf" 
                                                target="_blank"> 
                                                Актуальные проблемы образования 2020г. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/monographs/mn_05.pdf"
                                                download="Морфофункциональное состояние и адаптационные возможности учащихся образовательных учреждений в современных условиях. Калюжный Е.А. 2020г.pdf" 
                                                target="_blank"> 
                                                Морфофункциональное состояние и адаптационные возможности учащихся образовательных учреждений в современных условиях. Калюжный Е.А. 2020г. 
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Статьи" >
                                    <h4> Список статей: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=44058453" 
                                                target="_blank">
                                                Особенности физиологических характеристик учащихся юга Нижегородской области.
                                            </a>
                                            <p>Калюжный Е.А., Мухина И.В., Лавров А.Н., Красникова Л.И., Болтачева Е.А., Харитонова Л.П.
                                            В книге: Актуальные проблемы образования и здоровья обучающихся. Монография. 
                                            Под редакцией В.И. Стародубова, В.А. Тутельяна. Москва, 2020. С. 229-242.</p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=42717150" 
                                                target="_blank"> 
                                                Морфофункциональное состояние и адаптационные возможности учащихся образовательных учреждений в современных условиях.
                                            </a>
                                            <p>Калюжный Е.А. Арзамас, 2020. </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=44016200" 
                                                target="_blank"> 
                                                Индекс адаптационного потенциала - математическая модель функционального резерва организма.
                                            </a>
                                            <p>Калюжный Е.А., Астанакулов Т.М., Курахтанов Р.О., Бобоха Е.Ю.
                                            В сборнике: Агаджаняновские чтения. материалы III Всероссийской научно-практической конференции с международным участием. 
                                            Российский университет дружбы народов. Москва, 2020. С. 99-101.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=39380669" 
                                                target="_blank"> 
                                                Математическое моделирование адаптационных возможностей современных учащихся.
                                            </a>
                                            <p>Калюжный Е.А., Агафонова А.С., Храмов А.А.
                                            В сборнике: XV Колмогоровские чтения. Сборник статей участников Международной научно-практической конференции, посвящённой памяти профессора М.И. Зайкина. 
                                            Научный редактор С.В. Миронова, ответственный редактор С.В. Напалков; 
                                            Арзамасский филиал федерального государственного автономного образовательного учреждения высшего образования 
                                            "Национальный исследовательский Нижегородский государственный университет им. Н.И. Лобачевского", 
                                            Ярославский государственный педагогический университет им. К.Д. Ушинского. 2019. С. 234-238.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=42211947" 
                                                target="_blank"> 
                                                Прикладная физиология как дополнительная общеобразовательная - общеразвивающая программа.
                                            </a>
                                            <p>Калюжный Е.А., Агафонова А.С., Храмов А.А.
                                            Человек-Природа-Общество: Теория и практика безопасности жизнедеятельности, экологии и валеологии. 2019. № 5 (12). С. 142-147.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=38239701" 
                                                target="_blank"> 
                                                Функциональные резервы организма современных учащихся.
                                            </a>
                                            <p>Калюжный Е.А., Агафонова А.С., Храмов А.А.
                                            Ученые записки Крымского инженерно-педагогического университета. Серия: Биологические науки. 2019. № 1. С. 60-66.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=41283182" 
                                                target="_blank"> 
                                                Физическое развитие детей и подростков в системе здоровьесберегающей деятельности образовательной организации.
                                            </a>
                                            <p>Яковлева М.А., Гладышева О.С., Калюжный Е.А. Нижний Новгород, 2018.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=35675146" 
                                                target="_blank"> 
                                                Антропологические характеристики арзамасских учащихся.
                                            </a>
                                            <p>Калюжный Е.А.
                                            В сборнике: ПРОБЛЕМЫ СОВРЕМЕННОЙ МОРФОЛОГИИ ЧЕЛОВЕКА. сборник научных трудов, посвященный 90-летию
                                            кафедры анатомии ГЦОЛИФК и 85-летию со дня рождения заслуженного деятеля науки РФ, 
                                            члена корреспондента РАМН, профессора Б.А. Никитюка. 2018. С. 110-112. 
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=38177937" 
                                                target="_blank"> 
                                                Памяти В.Н. КРЫЛОВА (02.01.1947 - 17.02.2018) профессора, докторая биологических наук, заслуженного деятеля науки РФ.
                                            </a>
                                            <p>Дерюгина А.В., Крылова А.В., Гладышева О.С., Малафеева Е.Ф., Сабурцев А.И., Калюжный Е.А.
                                            В сборнике: Адаптация учащихся всех ступеней образования в условиях современного образовательного процесса. 
                                            Сборник статей участников XІV Всероссийской научно-практической конференции с международным участием. 
                                            Под общей редакцией Ю.Г. Кузмичева. 2018. С. 11-14.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=32845549" 
                                                target="_blank"> 
                                                Физическое развитие учащихся города Арзамаса и района Нижегородской области.
                                            </a>
                                            <p>Калюжный Е.А., Лавров А.Н., Красникова Л.И., Цопов А.В., Болтачева Е.А., Харитонова Л.П., Русакова Н.Л., Горшков Е.А., Сидоров Д.Г.
                                            В книге: Агаджаняновские чтения. Материалы II Всероссийской научно-практической конференции. 
                                            Посвящается 90-летию со дня рождения академика Н.А. Агаджаняна. 2018. С. 113-114.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=38177968" 
                                                target="_blank"> 
                                                Физическое здоровье и духовно-нравственное воспитание учащихся Арзамасской православной гимназии.
                                            </a>
                                            <p>Калюжный Е.А., Лавров А.Н., Красникова Л.И., Цопов А.В., Болтачева Е.А., Харитонова Л.П., Русакова Н.Л., Горшков Е.А., Сидоров Д.Г.
                                            В книге: Агаджаняновские чтения. Материалы II Всероссийской научно-практической конференции. 
                                            Посвящается 90-летию со дня рождения академика Н.А. Агаджаняна. 2018. С. 113-114.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=30627861" 
                                                target="_blank"> 
                                                Экология среды и физиология адаптационных возможностей учащихся села.
                                            </a>
                                            <p>Калюжный Е.А., Лавров А.Н., Красникова Л.И. 
                                            Проблемы региональной экологии. 2017. № 4. С. 47-52.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=32621104" 
                                                target="_blank"> 
                                                Антропоэкология морфофункционального состояния современных учащихся Нижегородской области.
                                            </a>
                                            <p>Калюжный Е.А.
                                            Экология урбанизированных территорий. 2017. № 3. С. 27-33.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=27668280" 
                                                target="_blank"> 
                                                Гемодинамические параметры адаптационных возможностей школьников области.
                                            </a>
                                            <p>Калюжный Е.А., Кузмичев Ю.Г., Крылов В.Н., Жулин Н.В., Михайлова С.В., Болтачева Е.А.
                                            В сборнике: Агаджаняновские чтения. материалы Всероссийской научно-практической конференции. 2016. С. 54-55.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=30421543" 
                                                target="_blank"> 
                                                Морфофункциональное состояние и адаптационные возможности учащихся образовательных учреждений в современных условиях.
                                            </a>
                                            <p>Калюжный Е.А. автореферат дис. ... доктора биологических наук / Моск. пед. гос. ун-т. Москва, 2015.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=23496368" 
                                                target="_blank"> 
                                                Динамика показателей длины и массы тела сельских школьников Нижегородской области за период 1946-1968-2012 гг.
                                            </a>
                                            <p>Кузмичев Ю.Г., Калюжный Е.А., Богомолова Е.С., Лавров А.Н., Жулин Н.В.
                                            Морфология. 2015. Т. 147. № 3. С. 32-36.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=23488800" 
                                                target="_blank"> 
                                                Информативность региональных и международных стандартов оценки длины и массы тела детей и подростков.
                                            </a>
                                            <p>Кузмичев Ю.Г., Богомолова Е.С., Калюжный Е.А., Шапошникова М.В., 
                                            Бадеева Т.В., Киселева А.С., Михайлова С.В., Ашина М.В., Жулин Н.В., Болтачева Е.А.
                                            Медицинский альманах. 2015. № 2 (37). С. 83-86.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=23260120" 
                                                target="_blank"> 
                                                Оценочные таблицы физического развития сельских школьников Нижегородской области.
                                            </a>
                                            <p>Матвеева Н.А., Кузмичев Ю.Г., Богомолова Е.С., Назарова Л.В., Калюжный Е.А., 
                                            Михайлова С.В., Болтачева Е.А., Жулин Н.В., Боровкова Т.А.
                                            Приказ МЗ НО № 1719 от 19.07.2012 г. / Нижний Новгород, 2012.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/item.asp?id=16016440" 
                                                target="_blank"> 
                                                Функциональная адаптация сердечно-сосудистой системы учащихся младших классов (по данным проспективного наблюдения).
                                            </a>
                                            <p>Калюжный Е.А.
                                            диссертация на соискание ученой степени кандидата биологических наук. Нижний Новгород, 2003г.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="https://www.elibrary.ru/contents.asp?titleid=28584" 
                                                target="_blank"> 
                                                Мониторинг физического развития учащихся начальной школы по показателям длины и массы тела.
                                            </a>
                                            <p>Кузмичев Ю.Г., Якубова И.Ш., Харитонова Л.П., Калюжный Е.А.
                                            Профилактическая и клиническая медицина. 2002. № 1-2. С. 55.
                                            </p>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/articles/arcticles_01.pdf" 
                                                download="Калюжный Антропология Статья 2022_03_pp_005_016.pdf" 
                                                target="_blank"> 
                                                Сравнение результатов использования 
                                                хронологического и скелетного (биологического) 
                                                возрастов как группирующих факторов в 
                                                межпопуляционных морфологических исследованиях 
                                                детей и подростков. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/articles/arcticles_02.pdf" 
                                                download="Сравнительный анализ физического развития детей г. Самара и г. Нижний Новгород.pdf" 
                                                target="_blank"> 
                                                Сравнительный анализ физического развития детей г. Самара и г. Нижний Новгород
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/articles/arcticles_03.pdf" 
                                                download="Адаптационные возможности сельских школьников по параметрам гемодинамики и кардиоинтервалографи.pdf" 
                                                target="_blank"> 
                                                Адаптационные возможности сельских школьников по параметрам гемодинамики и кардиоинтервалографи
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Тестовый материал">
                                    <h4> Файлы доступные для скачивания: </h4>
                                        <ul type="disc">
                                            <li>
                                                Психологические тесты по Карелину:
                                                <ul type="circle">
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_01.pdf"
                                                            download="Опросник САН.pdf" 
                                                            target="_blank"> 
                                                            Опросник САН. 
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_02.pdf"
                                                            download="Русалов В.М.pdf" 
                                                            target="_blank"> 
                                                            Русалов В.М.
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_03.pdf"
                                                            download="Спилберг- Ханин.pdf" 
                                                            target="_blank"> 
                                                            Спилберг- Ханин. 
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_04.pdf"
                                                            download="Тест Айзенка.pdf" 
                                                            target="_blank"> 
                                                            Тест Айзенка. 
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_05.pdf"
                                                            download="Тест Кэттелла.pdf" 
                                                            target="_blank"> 
                                                            Тест Кэттелла. 
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/test_materials/tm_06.pdf"
                                                            download="Тест на оптимизм.pdf" 
                                                            target="_blank"> 
                                                            Тест на оптимизм. 
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/test_materials/tm_07.pdf"
                                                    download="Дневник самоконтроля (для студентов ВУЗа).pdf" 
                                                    target="_blank"> 
                                                    Дневник самоконтроля (для студентов ВУЗа). 
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/test_materials/tm_08.pdf"
                                                    download="Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг.pdf" 
                                                    target="_blank"> 
                                                    Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг. 
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/test_materials/tm_09.pdf"
                                                    download="Паспорт здоровья учащегося 2016г.pdf" 
                                                    target="_blank"> 
                                                    Паспорт здоровья учащегося 2016г. 
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/test_materials/tm_10.pdf"
                                                    download="Школа ... Дневник самоконтроля 2014гг.pdf" 
                                                    target="_blank"> 
                                                    Школа ... Дневник самоконтроля 2014гг. 
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/test_materials/tm_11.pdf"
                                                    download="Дневник самоконтроля Поластичных физиологических констант ДНК 2021 год.pdf" 
                                                    target="_blank"> 
                                                    Дневник самоконтроля Поластичных физиологических констант ДНК 2021 год
                                                </a>
                                            </li>
                                        </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Оценочные таблицы">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/validation_grids/ot_01.pdf" 
                                                download="Карта осмотра.pdf" 
                                                target="_blank"> 
                                                Карта осмотра. 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/validation_grids/ot_02.pdf" 
                                                download="Статистические параметры признаков физического развития сельских школьников Н Н области 2012 год.pdf" 
                                                target="_blank"> 
                                                Статистические параметры признаков физического развития сельских школьников Н Н области 2012 год.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/validation_grids/ot_03.pdf" 
                                                download="Центильные таблицы физ развития сельских учащихся 7-17 лет Н Н области 2012 год.pdf" 
                                                target="_blank"> 
                                                Центильные таблицы физ развития сельских учащихся 7-17 лет Н Н области 2012 год.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/validation_grids/ot_04.pdf" 
                                                download="Оценочные таблицы физиологических констант человека 7-35 лет. Нижегородская область 2019 год.pdf" 
                                                target="_blank"> 
                                                Оценочные таблицы физиологических констант человека 7-35 лет. Нижегородская область 2019 год.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/validation_grids/ot_05.pdf" 
                                                download="Оценочные таблицы 2022г Региональный стандарт.pdf" 
                                                target="_blank"> 
                                                Оценочные таблицы 2022г Региональный стандарт
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Паспорт здоровья">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/health_passport/pz_01.pdf" 
                                                download="Дневник самоконтроля (для студентов ВУЗа).pdf" 
                                                target="_blank"> 
                                                Дневник самоконтроля (для студентов ВУЗа). 
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/health_passport/pz_02.pdf" 
                                                download="Дневник самоконтроля (школа) 2014гг.pdf" 
                                                target="_blank"> 
                                                Дневник самоконтроля (школа) 2014гг.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/health_passport/pz_03.pdf" 
                                                download="Паспорт здоровья учащегося 2016г.pdf" 
                                                target="_blank"> 
                                                Паспорт здоровья учащегося 2016г.
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Методологическое сопровождение">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_01.pdf" 
                                                download="Безопасность уроков ФК. Калюжный Е.А. и др. Метод. пособие 2006г.pdf" 
                                                target="_blank"> 
                                                Безопасность уроков ФК. Калюжный Е.А. и др. Метод. пособие. 2006г.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_02.pdf" 
                                                download="ВАФ рабочая тетрадь.pdf" 
                                                target="_blank"> 
                                                ВАФ рабочая тетрадь.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_03.pdf" 
                                                download="Автореферат канд.дисс. Калюжный Е.А. 2003г.pdf" 
                                                target="_blank"> 
                                                Автореферат канд.дисс. Калюжный Е.А. 2003г.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_04.pdf" 
                                                download="Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг.pdf" 
                                                target="_blank"> 
                                                Комплексная оценка физического развития школьников. Калюжный Е.А. и др. 2012гг.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_05.pdf" 
                                                download="Компьютер и Здоровье. Калюжный Е.А. и др.pdf" 
                                                target="_blank"> 
                                                Компьютер и Здоровье. Калюжный Е.А. и др.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_06.pdf" 
                                                download="Метод рекомендации МПК ФК. 2007г.pdf" 
                                                target="_blank"> 
                                                Метод рекомендации МПК ФК. 2007г.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_07.pdf" 
                                                download="Основы ЛФК. Калюжный Е.А. 2002г.pdf" 
                                                target="_blank"> 
                                                Основы ЛФК. Калюжный Е.А. 2002г.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_08.pdf" 
                                                download="Физическая культура. методические рекомендации Калюжный Е.А. 2007г.pdf" 
                                                target="_blank"> 
                                                Физическая культура. методические рекомендации Калюжный Е.А. 2007г.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_09.pdf" 
                                                download="Физическая культура методико-практический компонент.pdf" 
                                                target="_blank"> 
                                                Физическая культура методико-практический компонент.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_10.pdf" 
                                                download="Физкультминутки в школе УМ Пособие.pdf" 
                                                target="_blank"> 
                                                Физкультминутки в школе УМ Пособие.
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/methodological_support/ms_11.xls" 
                                                download="КИГ СЕЛО.xls" 
                                                target="_blank"> 
                                                КИГ СЕЛО.
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Свидетельства регистраций Баз Данных">
                                    <h4> Файлы доступные для скачивания: </h4>
                                    <ul type="circle">
                                        <li>
                                            <a 
                                                href="/files/pdf/verify_dataBases/vf_db_01.pdf" 
                                                download="Показатели физического развития учащихся школьного возраста Нижегородской области.pdf" 
                                                target="_blank"> 
                                                Показатели физического развития учащихся школьного возраста Нижегородской области
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/verify_dataBases/vf_db_02.pdf" 
                                                download="Данные физического развития учащихся школьного возраста мегаполиса Нижнего Новгорода.pdf" 
                                                target="_blank"> 
                                                Данные физического развития учащихся школьного возраста мегаполиса Нижнего Новгорода
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/verify_dataBases/vf_db_06.pdf" 
                                                download="Нормативы физического развития, физиологических показателей учащихся школьного возраста Нижегородской области.pdf" 
                                                target="_blank"> 
                                                Нормативы физического развития, физиологических показателей учащихся школьного возраста Нижегородской области
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/verify_dataBases/vf_db_04.pdf" 
                                                download="Свидетельство о регистрациия ФИПС РФ БД Антропометрия.pdf" 
                                                target="_blank"> 
                                                Свидетельство о регистрациия ФИПС РФ БД Антропометрия
                                            </a>
                                        </li>
                                        <li>
                                            <a 
                                                href="/files/pdf/verify_dataBases/vf_db_05.pdf" 
                                                download="Физическое развитие детей, подростков и молодежи Российской Федерации В 2000-2021 годах.pdf" 
                                                target="_blank"> 
                                                Физическое развитие детей, подростков и молодежи Российской Федерации В 2000-2021 годах
                                            </a>
                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <section id = "upgradeKurses">
                                    <Tab.Pane eventKey="Возрастная физиология" >
                                        <h4> Файлы доступные для скачивания: </h4>
                                        <ul type="circle">
                                            <li>
                                                <h6>Монографии:</h6>
                                                <ul type="circle">
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/advanced_training_courses/age_physiology/Актуальные проблемы образования.pdf" 
                                                            download="Актуальные проблемы образования.pdf" 
                                                            target="_blank"> 
                                                            Актуальные проблемы образования
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h6>Свидетельства регистраций баз данных:</h6>
                                                <ul type="circle">
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/verify_dataBases/vf_db_01.pdf" 
                                                            download="Показатели физического развития учащихся школьного возраста Нижегородской области.pdf" 
                                                            target="_blank"> 
                                                            Показатели физического развития учащихся школьного возраста Нижегородской области
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/verify_dataBases/vf_db_02.pdf" 
                                                            download="Данные физического развития учащихся школьного возраста мегаполиса Нижнего Новгорода.pdf" 
                                                            target="_blank"> 
                                                            Данные физического развития учащихся школьного возраста мегаполиса Нижнего Новгорода
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/verify_dataBases/vf_db_06.pdf" 
                                                            download="Нормативы физического развития, физиологических показателей учащихся школьного возраста Нижегородской области.pdf" 
                                                            target="_blank"> 
                                                            Нормативы физического развития, физиологических показателей учащихся школьного возраста Нижегородской области
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/verify_dataBases/vf_db_04.pdf" 
                                                            download="Свидетельство о регистрациия ФИПС РФ БД Антропометрия.pdf" 
                                                            target="_blank"> 
                                                            Свидетельство о регистрациия ФИПС РФ БД Антропометрия
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a 
                                                            href="/files/pdf/verify_dataBases/vf_db_05.pdf" 
                                                            download="Физическое развитие детей, подростков и молодежи Российской Федерации В 2000-2021 годах.pdf" 
                                                            target="_blank"> 
                                                            Физическое развитие детей, подростков и молодежи Российской Федерации В 2000-2021 годах
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Адрес ссылки.docx" 
                                                    download="Адрес ссылки.docx" 
                                                    target="_blank"> 
                                                    Адрес ссылки
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Аннотация курса ПК.docx" 
                                                    download="Аннотация курса ПК.docx" 
                                                    target="_blank"> 
                                                    Аннотация курса ПК
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Диссертация Калюжный ЕА 2015 год.pdf" 
                                                    download="Диссертация Калюжный ЕА 2015 год.pdf" 
                                                    target="_blank"> 
                                                    Диссертация Калюжный ЕА 2015 год
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Дневник самоконтроля Поластичных физиологических констант  ДНК   2021 год.pdf" 
                                                    download="Дневник самоконтроля Пластичных физиологических констант ДНК 2021 год.pdf" 
                                                    target="_blank"> 
                                                    Дневник самоконтроля Пластичных физиологических констант ДНК 2021 год
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Калюжный  Антропология Статья 2022_03_pp_005_016.pdf" 
                                                    download="Калюжный  Антропология Статья 2022_03_pp_005_016.pdf" 
                                                    target="_blank"> 
                                                    Калюжный Антропология Статья
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Калюжный Е А  Автореферат 2015 год.pdf" 
                                                    download="Калюжный Е А  Автореферат 2015 год.pdf" 
                                                    target="_blank"> 
                                                    Калюжный Е А Автореферат 2015 год
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Программа Повышения Квалификации  Возрастная физиология ДНК 2022г.doc" 
                                                    download="Программа Повышения Квалификации  Возрастная физиология ДНК 2022г.doc" 
                                                    target="_blank"> 
                                                    Программа Повышения Квалификации  Возрастная физиология ДНК 2022г
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Региональный Стандарт ОЦЕНОЧНЫЕ ТАБЛИЦЫ 2022г.pdf" 
                                                    download="Региональный Стандарт ОЦЕНОЧНЫЕ ТАБЛИЦЫ 2022г.pdf" 
                                                    target="_blank"> 
                                                    Региональный Стандарт ОЦЕНОЧНЫЕ ТАБЛИЦЫ 2022г
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="/files/pdf/advanced_training_courses/age_physiology/Федеральный стандарт  Шкалы Регрессии изд Самара 2022  Нижегородская область стр 69.pdf" 
                                                    download="Федеральный стандарт  Шкалы Регрессии изд Самара 2022  Нижегородская область стр 69.pdf" 
                                                    target="_blank"> 
                                                    Федеральный стандарт  Шкалы Регрессии изд Самара 2022  Нижегородская область стр 69
                                                </a>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </section>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
