import React, { Component } from 'react'
import { Card, Container, Media, Col, Row, ListGroup } from "react-bootstrap";

import diploma1 from '../assets/diploma/1.jpg'
import diploma2 from '../assets/diploma/2.jpg'
import diploma3 from '../assets/diploma/3.jpg'
import diploma4 from '../assets/diploma/4.jpg'
import diploma5 from '../assets/diploma/5.jpg'
import diploma6 from '../assets/diploma/6.jpg'
import diploma7 from '../assets/diploma/7.jpg'
import diploma8 from '../assets/diploma/8.jpg'
import diploma9 from '../assets/diploma/9.jpg'

import certificate1 from '../assets/certificates/sert_01.jpg'
import certificate2 from '../assets/certificates/sert_02.PNG'

import icoMail from '../assets/icons/email.png'
import icoPhone from '../assets/icons/phone.png'
import icoWhatsApp from '../assets/icons/whatsapp.png'

import Picture from '../assets/picBlog.jpg'
import '../style.css'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <img
                                width={840}
                                height={400}
                                className="mt-3"
                                src={Picture}
                                alt="center"                                
                        />
                        <Media className="m-5">
                            
                            <Media.Body>
                                <h5>ОБО МНЕ</h5>
                                <p>
                                    <strong>Калюжный Евгений Александрович</strong> - кандидат биологических наук, доцент,</p>
                                    <ul>
                                        <li>доцент кафедры нормальной физиологии им. Н.Ю. Беленкова ФГБОУ ВО &laquo;ПИМУ&raquo; МЗ РФ;</li>
                                        <li>методист образовательного цента &laquo;ДНК&raquo; ФГБОУ ВО &laquo;ПИМУ&raquo; МЗ РФ;</li>
                                        <li>SPIN-код автора: <a href="https://elibrary.ru/author_items.asp?authorid=681068">9919-8643</a></li>
                                        <li><a href="https://orcid.org/0000-0002-0792-1190">ORCID</a></li>
                                        <li>мт- 8-904-782-66-95;</li>
                                        <li><a href="mailto:eakmail@mail.ru">e-mail</a></li>
                                    </ul>
                                <p>
                                    В 1980 году окончил среднюю школу №9 села Винсады, Предгорного района, Ставропольского края. Позже окончил Арзамасское медицинское училище по специальности фельдшер, специализация акушерство – гинекология, скорая помощь. Имеет высшую категорию по дополнительной специальности – лечебный массаж. Прошел специализацию в центре Дикуля, г. Москва, по классу – лечебный, реабилитационный массаж, мануальная терапия.
                                </p>
                                <p>
                                    Служба в армии – Черноморский флот, г. Севастополь, бухта Казачья, бригада морской пехоты, старший матрос- наводчик батальонного миномета.
                                </p>
                                <p>
                                    Окончил Арзамасский государственный педагогический институт имени А.П. Гайдара по специальности «Биология».
                                </p>
                                <p>
                                    Ученая степень кандидата биологических наук присуждена диссертационным советом К 212.166.02 при Нижегородском государственном университете им. Н.И. Лобачевского 23 октября 2003 года (протокол № 2) и утверждена коллегией ВАК РФ 9 января 2004года (диплом КТ № 111959).
                                </p>
                                <p>
                                    Решением ВАК РФ, г. Москва, от ноября 2006г., утверждено ученое звание – доцент.
                                </p>
                                <p>
                                    Стаж научно-педагогической работы в вузе составляет 22 года, в том числе стаж педагогической работы в ВУЗе - 22 года. 
                                </p>
                                <p>
                                    Пять лет работал заведующим кафедрой Медицинской подготовки и безопасности жизнедеятельности Арзамасского Государственного Педагогического Института им. А.П. Гайдара и Арзамасского Филиала Нижегородского Государственного Университета им. Н.И. Лобачевского. 
                                </p>
                                <p>
                                    Читает лекционный курс «Нормальная физиология» «Основы медицинских знаний и здорового образа жизни», «Безопасность жизнедеятельности», «Возрастная физиология» «Физическая культура», «Физиология человека в экстремальных условиях», «Основы классического массажа», «Курсы повышения квалификации учителей лечебной физической культуры средних школ».
                                </p>
                                <p>
                                    Ведет методико-практические курсы «Эврика» НОУ, «Малая академия» «Физиологические паттерны человека» ДНК, «Спортивный туризм», «Гигиена физической культуры», «Лечебная физическая культура в средней и высшей школе»; учебно-тренировочный курс «Лечебная физкультура». Разработал и реализует образовательную программу «Педагог-инструктор пешеходного, водного, горного туризма».
                                </p>
                                <p>
                                    Разработал и провел со студентами ряд спортивных горнотуристских и альпинистских экспедиций за пределами Нижегородской области, в том числе: Центральный Кавказ- восхождение на Эльбрус Восточная -5624м., 2к.с.; Центральный Кавказ- восхождение на Эльбрус Западная -5642м, 3к.с.
                                </p>
                                <p>
                                    Организовал и осуществляет руководство научно исследовательской лабораторией «Мониторинг физического здоровья учащихся всех ступеней образования». В рамках темы НИЛ участниками лаборатории защищены две кандидатские диссертации по педагогическим и биологическим наукам.
                                </p>
                                <p>
                                    Неоднократно проходил курс повышения квалификации в научно исследовательском институте возрастной физиологии Российской Академии Образования (НИИ ВФРАО), по специальности: «Возрастная Физиология и здоровье сберегающая деятельность общеобразовательных учреждений», «Школа Здоровья».
                                </p>
                                <p>
                                    В 2020 году, на базе МГУ, окончил курс повышения квалификации по направлению «Физиология высшей нервной деятельности». В 2021 году на базе ПИМУ прошел курсы повышения по теме «Медико-биологическая статистика и организация эксперимента».
                                </p>
                                <p>
                                    Участвует в интеграционной работе по профилю «Школа-ВУЗ» в контексте городских Нижегородских программ: «НОУ Эврика», «ДНК - Дом Научной Коллаборации» в руководстве и реализации научного направления «Социально-гигиенический мониторинг», «Здоровое будущее», «Стратегия развития Нижегородской области».
                                </p>
                                <p>
                                    Имеет 295 публикаций, из них по теме диссертационных исследований- 210 в отечественных и зарубежных изданиях, из них 32 в изданиях списка перечня ВАК, 69– РИНЦ, 2 - в журнале базы цитирования Scopus, 35 методических разработок, методико-практических пособий, рекомендаций и указаний, 5 из них имеют гриф УМО РФ, 3 монографии.
                                </p>
                                <p>
                                    Индекс Хирша - 14.
                                </p>
                                <p>
                                    Награжден:
                                    <ul>
                                        <li>
                                            Благодарственным письмом Областного Законодательного Собрания (2004г.); 
                                        </li>
                                        <li>
                                            Почетной грамотой Министерства Образования и Науки РФ (2007г.);
                                        </li>
                                        <li>
                                            Почетной грамотой Министерства Образования Нижегородской области (2009г.);  
                                        </li>
                                        <li>
                                            Нагрудным знаком «Почетный работник высшего профессионального образования» (2012г.).
                                        </li>
                                        <li>
                                            Грамотой Арзамасского Благочиния «За благословенные труды во славу святой церкви» (2018г.).
                                        </li>
                                        <li>
                                            Почетной грамотой Министерства Образования Нижегородской области (2021г.);
                                        </li>
                                    </ul>
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="3">
                    {/* <h5 className="text-center mt-5">Categories</h5> */}
                        <Card className="mt-5">
                            <ListGroup variant="flush">
                                <ListGroup.Item> <a href="/materials"> Статьи</a> </ListGroup.Item>
                                <ListGroup.Item> <a href="/projects"> Проекты</a> </ListGroup.Item>
                                <ListGroup.Item> <a href="#diplomas"> Грамоты</a> </ListGroup.Item>
                                <ListGroup.Item> <a href="#certificates"> Сертификаты</a> </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="ligth">
                            <Card.Body>
                                <Card.Title className="contact-Title"> Контакты </Card.Title>
                                <Card.Text>
                                    <div>
                                        <img 
                                            style={{marginBottom:'2px'}} 
                                            src={icoMail}
                                            width="32" 
                                            height="32"
                                            alt=""
                                        />
                                        <a
                                            style={{marginLeft: '5px'}}
                                            href="mailto:eakmail@mail.ru" 
                                            className="contact">
                                            eakmail@mail.ru
                                        </a> 
                                    </div>
                                    
                                    <div>
                                        <img 
                                            style={{marginBottom:'2px'}} 
                                            src={icoPhone}
                                            width="32" 
                                            height="32"
                                            alt=""
                                        />
                                        <a 
                                            style={{marginLeft: '5px'}}
                                            href="tel:+79047826695" 
                                            className="contact">
                                            +7-904-782-66-95
                                        </a>
                                    </div>

                                    <div>
                                    <img 
                                            style={{marginBottom:'3px'}} 
                                            src={icoWhatsApp}
                                            width="32" 
                                            height="32"
                                            alt=""
                                        />
                                        <a 
                                            style={{marginLeft: '5px'}}
                                            href="https://wa.me/79047826695" 
                                            className="contact">
                                            WhatsApp
                                        </a>
                                    </div>


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                

                <h2 id="diplomas" className="text-center display-3"> НАГРАДЫ </h2>
                <p className="mt-3">
                    <img src={diploma1} alt="Фотография 1" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma2} alt="Фотография 2" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma4} alt="Фотография 3" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma7} alt="Фотография 7" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma8} alt="Фотография 8" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma5} alt="Фотография 4" width="310" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma3} alt="Фотография 5" width="653" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma6} alt="Фотография 6" width="653" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={diploma9} alt="Фотография 9" width="653" height="500" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                </p>

                <a name="certificates"></a>
                <h2 id="certificates" className="text-center display-3"> СЕРТИФИКАТЫ </h2>
                <p className="mt-3">
                    <img src={certificate1} alt="Фотография 1" width="510" height="360" className="scale m-3" style={{border: "thick double #32a1ce"}} />
                    <img src={certificate2} alt="Фотография 2" width="510" height="360" className="scale m-3" style={{border: "thick double #32a1ce"}} />                 
                </p>
            </Container>
            
        )
    }
}

