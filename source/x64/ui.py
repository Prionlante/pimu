# Form implementation generated from reading ui file 'MainWindowMultiply.ui'
#
# Created by: PyQt6 UI code generator 6.2.2
#
# WARNING: Any manual changes made to this file will be lost when pyuic6 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt6 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(910, 709)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.gridLayout = QtWidgets.QGridLayout(self.centralwidget)
        self.gridLayout.setObjectName("gridLayout")
        self.calculateButton = QtWidgets.QPushButton(self.centralwidget)
        self.calculateButton.setObjectName("calculateButton")
        self.gridLayout.addWidget(self.calculateButton, 14, 0, 1, 1)
        self.label_3 = QtWidgets.QLabel(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Policy.Minimum, QtWidgets.QSizePolicy.Policy.Minimum)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.label_3.sizePolicy().hasHeightForWidth())
        self.label_3.setSizePolicy(sizePolicy)
        self.label_3.setObjectName("label_3")
        self.gridLayout.addWidget(self.label_3, 5, 0, 1, 1)
        self.minAge = QtWidgets.QLineEdit(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Policy.Minimum, QtWidgets.QSizePolicy.Policy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.minAge.sizePolicy().hasHeightForWidth())
        self.minAge.setSizePolicy(sizePolicy)
        self.minAge.setObjectName("minAge")
        self.gridLayout.addWidget(self.minAge, 6, 0, 1, 1)
        self.fileNameEdit = QtWidgets.QLineEdit(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Policy.Minimum, QtWidgets.QSizePolicy.Policy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.fileNameEdit.sizePolicy().hasHeightForWidth())
        self.fileNameEdit.setSizePolicy(sizePolicy)
        self.fileNameEdit.setObjectName("fileNameEdit")
        self.gridLayout.addWidget(self.fileNameEdit, 0, 0, 1, 1)
        self.boysRadio = QtWidgets.QRadioButton(self.centralwidget)
        self.boysRadio.setObjectName("boysRadio")
        self.gridLayout.addWidget(self.boysRadio, 1, 0, 1, 1)
        self.tableOutputExcel = QtWidgets.QTableView(self.centralwidget)
        self.tableOutputExcel.setEnabled(True)
        self.tableOutputExcel.setObjectName("tableOutputExcel")
        self.gridLayout.addWidget(self.tableOutputExcel, 0, 3, 15, 1)
        self.saveFileButton = QtWidgets.QPushButton(self.centralwidget)
        self.saveFileButton.setObjectName("saveFileButton")
        self.gridLayout.addWidget(self.saveFileButton, 14, 1, 1, 1)
        self.label = QtWidgets.QLabel(self.centralwidget)
        self.label.setText("")
        self.label.setObjectName("label")
        self.gridLayout.addWidget(self.label, 13, 0, 1, 2)
        self.maxAge = QtWidgets.QLineEdit(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Policy.Minimum, QtWidgets.QSizePolicy.Policy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.maxAge.sizePolicy().hasHeightForWidth())
        self.maxAge.setSizePolicy(sizePolicy)
        self.maxAge.setObjectName("maxAge")
        self.gridLayout.addWidget(self.maxAge, 6, 1, 1, 1)
        self.allRadio = QtWidgets.QRadioButton(self.centralwidget)
        self.allRadio.setObjectName("allRadio")
        self.gridLayout.addWidget(self.allRadio, 3, 0, 1, 1)
        self.label_4 = QtWidgets.QLabel(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Policy.Minimum, QtWidgets.QSizePolicy.Policy.Minimum)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.label_4.sizePolicy().hasHeightForWidth())
        self.label_4.setSizePolicy(sizePolicy)
        self.label_4.setObjectName("label_4")
        self.gridLayout.addWidget(self.label_4, 5, 1, 1, 1)
        self.cancelRadio = QtWidgets.QRadioButton(self.centralwidget)
        self.cancelRadio.setCursor(QtGui.QCursor(QtCore.Qt.CursorShape.ArrowCursor))
        self.cancelRadio.setChecked(True)
        self.cancelRadio.setObjectName("cancelRadio")
        self.gridLayout.addWidget(self.cancelRadio, 4, 0, 1, 1)
        self.label_2 = QtWidgets.QLabel(self.centralwidget)
        self.label_2.setObjectName("label_2")
        self.gridLayout.addWidget(self.label_2, 1, 1, 1, 1)
        self.numberBox = QtWidgets.QComboBox(self.centralwidget)
        self.numberBox.setObjectName("numberBox")
        self.gridLayout.addWidget(self.numberBox, 2, 1, 1, 1)
        self.addFileButton = QtWidgets.QPushButton(self.centralwidget)
        self.addFileButton.setObjectName("addFileButton")
        self.gridLayout.addWidget(self.addFileButton, 0, 1, 1, 1)
        self.girlsRadio = QtWidgets.QRadioButton(self.centralwidget)
        self.girlsRadio.setObjectName("girlsRadio")
        self.gridLayout.addWidget(self.girlsRadio, 2, 0, 1, 1)
        self.applyAgesButton = QtWidgets.QPushButton(self.centralwidget)
        self.applyAgesButton.setObjectName("applyAgesButton")
        self.gridLayout.addWidget(self.applyAgesButton, 7, 0, 1, 2)
        self.statisticButton = QtWidgets.QPushButton(self.centralwidget)
        self.statisticButton.setObjectName("statisticButton")
        self.gridLayout.addWidget(self.statisticButton, 8, 0, 1, 2)
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 910, 21))
        self.menubar.setObjectName("menubar")
        self.menu = QtWidgets.QMenu(self.menubar)
        self.menu.setObjectName("menu")
        self.menu_2 = QtWidgets.QMenu(self.menubar)
        self.menu_2.setObjectName("menu_2")
        self.menu_3 = QtWidgets.QMenu(self.menubar)
        self.menu_3.setObjectName("menu_3")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)
        self.add = QtGui.QAction(MainWindow)
        self.add.setObjectName("add")
        self.exit = QtGui.QAction(MainWindow)
        self.exit.setObjectName("exit")
        self.clear = QtGui.QAction(MainWindow)
        self.clear.setObjectName("clear")
        self.faq = QtGui.QAction(MainWindow)
        self.faq.setObjectName("faq")
        self.authors = QtGui.QAction(MainWindow)
        self.authors.setObjectName("authors")
        self.menu.addAction(self.add)
        self.menu.addAction(self.exit)
        self.menu_2.addAction(self.clear)
        self.menu_3.addAction(self.faq)
        self.menu_3.addAction(self.authors)
        self.menubar.addAction(self.menu.menuAction())
        self.menubar.addAction(self.menu_2.menuAction())
        self.menubar.addAction(self.menu_3.menuAction())

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.calculateButton.setText(_translate("MainWindow", "Отправить"))
        self.label_3.setText(_translate("MainWindow", "Возраст от"))
        self.boysRadio.setText(_translate("MainWindow", "Мальчики"))
        self.saveFileButton.setText(_translate("MainWindow", "Сохранить таблицу"))
        self.allRadio.setText(_translate("MainWindow", "Все"))
        self.label_4.setText(_translate("MainWindow", "Возраст до"))
        self.cancelRadio.setText(_translate("MainWindow", "Снять всё"))
        self.label_2.setText(_translate("MainWindow", "Выберите пациента"))
        self.addFileButton.setText(_translate("MainWindow", "Добавить файл"))
        self.girlsRadio.setText(_translate("MainWindow", "Девочки"))
        self.applyAgesButton.setText(_translate("MainWindow", "Применить"))
        self.statisticButton.setText(_translate("MainWindow", "Показать статистику"))
        self.menu.setTitle(_translate("MainWindow", "Файл"))
        self.menu_2.setTitle(_translate("MainWindow", "Правка"))
        self.menu_3.setTitle(_translate("MainWindow", "О программе"))
        self.add.setText(_translate("MainWindow", "Добавить"))
        self.exit.setText(_translate("MainWindow", "Выйти"))
        self.clear.setText(_translate("MainWindow", "Очистить всё"))
        self.faq.setText(_translate("MainWindow", "Справка"))
        self.authors.setText(_translate("MainWindow", "Авторы"))
