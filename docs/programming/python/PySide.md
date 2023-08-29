# PySide6

## 资源文档

### 网站

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/index.html)

:globe_with_meridians:[Qt示例](https://doc.qt.io/qt-6/qtexamplesandtutorials.html)

:globe_with_meridians:[C++Qt文档](https://doc.qt.io/)



## 开发经验

MacOs系统在设置菜单栏时如果使用Quit会失效。

## 基本命令

```bash
pyside6-uic widget.ui > ui_widget.py
pyside6-rcc test_rc.qrc > test_rc.py
# 会删除源文件
pyside6-rcc resource.qrc -o resource_rc.py
```



## QtDesigner

### QUiLoader(加载ui文件)

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtUiTools/QUiLoader.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox
from PySide6.QtGui import QPixmap, QFont
from PySide6.QtUiTools import QUiLoader

loader = QUiLoader()

app = QApplication([])
window = loader.load('widget.ui', None)


def do_something():
    print(window.full_name_line_edit.text(), "is a", window.occupation_line_edit.text())


window.setWindowTitle("User data")
window.submit_button.clicked.connect(do_something)
window.show()
app.exec()
```

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox
from PySide6.QtGui import QPixmap, QFont
from PySide6.QtUiTools import QUiLoader
from PySide6 import QtCore

loader = QUiLoader()


class UserInterface(QtCore.QObject):
    def __init__(self):
        super().__init__()
        self.ui = loader.load('widget.ui')
        self.ui.setWindowTitle('User data')
        self.ui.submit_button.clicked.connect(self.do_something)

    def show(self):
        self.ui.show()

    def do_something(self):
        print(self.ui.full_name_line_edit.text(), "is a", self.ui.occupation_line_edit.text())


app = QApplication([])
window = UserInterface()
window.show()
app.exec()
```



### uiFileToPython

> 命令

```bash
pyside6-uic widget.ui > ui_widget.py
```

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox
from PySide6.QtGui import QPixmap, QFont
from PySide6.QtUiTools import QUiLoader
from PySide6 import QtCore

from src.table.ui_widget import Ui_Form


class Widget(QWidget, Ui_Form):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('User data')
        self.submit_button.clicked.connect(self.do_something)

    def do_something(self):
        print(self.full_name_line_edit.text(), "is a", self.occupation_line_edit.text())


app = QApplication([])
window = Widget()
window.show()
app.exec()

```

### ResourceFile

文件路径组织

> 命令

```bash
pyside6-rcc resource.qrc -o resource_rc.py
```

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox
from PySide6.QtGui import QPixmap, QFont, QIcon
from PySide6.QtUiTools import QUiLoader
from PySide6 import QtCore

from src.table.ui_widget import Ui_Widget


class Widget(QWidget, Ui_Widget):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.setWindowTitle('User data')
        self.spin_box.setValue(50)
        self.plus_button.clicked.connect(self.plus)
        self.main_button.clicked.connect(self.minus)

        plus_icon = QIcon(":/image/logo.png")
        minus_icon = QIcon(":/image/logo.png")

        self.plus_button.setIcon(plus_icon)
        self.main_button.setIcon(minus_icon)

    def plus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value + 1)

    def minus(self):
        value = self.spin_box.value()
        self.spin_box.setValue(value - 1)


app = QApplication([])
window = Widget()
window.show()
app.exec()

```



## 组件

### QTmainWindow

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui version="4.0">
 <class>Form</class>
 <widget class="QWidget" name="Form">
  <property name="geometry">
   <rect>
    <x>0</x>
    <y>0</y>
    <width>486</width>
    <height>358</height>
   </rect>
  </property>
  <property name="windowTitle">
   <string>Form</string>
  </property>
  <layout class="QVBoxLayout" name="verticalLayout">
   <item>
    <layout class="QHBoxLayout" name="horizontalLayout">
     <item>
      <widget class="QLabel" name="label">
       <property name="text">
        <string>Fullname:</string>
       </property>
      </widget>
     </item>
     <item>
      <widget class="QLineEdit" name="full_name_line_edit"/>
     </item>
    </layout>
   </item>
   <item>
    <layout class="QHBoxLayout" name="horizontalLayout_2">
     <item>
      <widget class="QLabel" name="label_2">
       <property name="text">
        <string>Occupations</string>
       </property>
      </widget>
     </item>
     <item>
      <widget class="QLineEdit" name="occupation_line_edit"/>
     </item>
    </layout>
   </item>
   <item>
    <widget class="QPushButton" name="submit_button">
     <property name="text">
      <string>Submit</string>
     </property>
    </widget>
   </item>
  </layout>
 </widget>
 <resources/>
 <connections/>
</ui>

```

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox,QMainWindow
from PySide6.QtGui import QPixmap, QFont, QIcon
from PySide6.QtUiTools import QUiLoader
from PySide6 import QtCore

from src.table.ui_mainwindow import Ui_MainWindow


class Widget(QMainWindow, Ui_MainWindow):
    def __init__(self,app):
        super().__init__()
        self.setupUi(self)
        self.app = app
        # self.setWindowTitle('User data')

        self.actionQuit.triggered.connect(self.quit)
        self.actionQuit.triggered.connect(self.copy)

    def quit(self):
        pass

    def copy(self):
        pass


app = QApplication([])
window = Widget(app)
window.show()
app.exec()

```



### QPushButton

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QPushButton.html)

#### 按钮事件

```python
from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication
from PySide6.QtGui import QPixmap


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Custom mainwindow")

        button = QPushButton("Click")
        button.clicked.connect(self.button_clicked)
        button.pressed.connect(self.button_pressed)
        button.released.connect(self.button_release)

        layout = QVBoxLayout()
        layout.addWidget(button)

        self.setLayout(layout)

    def button_clicked(self):
        print("button is clicked")

    def button_pressed(self):
        print("button is pressed!")

    def button_release(self):
        print("button is release")


app = QApplication([])

widget = Widget()
widget.show()
app.exec()
 
```



### QLabel

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QLabel.html)

#### Image



### QlineEdit



:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QLineEdit.html)

#### 示例

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout
from PySide6.QtGui import QPixmap


class Widget(QWidget):
    def __init__(self):
        super().__init__()
        label = QLabel("Fullname:")
        self.line_edit = QLineEdit()
        self.line_edit.textChanged.connect(self.text_changed)
        self.line_edit.cursorPositionChanged.connect(self.cursor_position_changed)
        self.line_edit.editingFinished.connect(self.editing_finished)
        self.line_edit.returnPressed.connect(self.return_pressed)
        self.line_edit.selectionChanged.connect(self.selection_changed)
        self.line_edit.textEdited.connect(self.text_edit)

        button = QPushButton("Grab data")
        button.clicked.connect(self.button_clicked)
        self.text_holder_label = QLabel("i am here")

        h_layout = QHBoxLayout()
        h_layout.addWidget(label)
        h_layout.addWidget(self.line_edit)

        v_layout = QVBoxLayout()
        v_layout.addLayout(h_layout)
        v_layout.addWidget(button)
        v_layout.addWidget(self.text_holder_label)

        self.setLayout(v_layout)

    def button_clicked(self):
        print("Fullname:", self.line_edit.text())
        self.text_holder_label.setText(self.line_edit.text())

    def text_changed(self):
        self.text_holder_label.setText(self.line_edit.text())

    def cursor_position_changed(self, old, new):
        print(f"cursor old position:{old},-new position:{new}")

    def editing_finished(self):
        print("edit finished")

    def return_pressed(self):
        print("return pressed")

    def text_edit(self, new_text):
        print(f"text edit new text:{new_text}")

    def selection_changed(self):
        print("selection changed:", self.line_edit.selectedText())

    def change_layout(self):
        text = ['a', 'b', 'c', 'd']
        random_text = random.choice(text)
        self.line_edit.setText(random_text)
        self.text_holder_label.setText(random_text)

    def handle_cursor_position_changed(self):
        print(self.line_edit.textEdited)
        self.text_holder_label.setText(self.line_edit.text())


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```



### QTextEdit

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QTextEdit.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('AutoTool')

        self.text_edit = QTextEdit()

        current_text_button = QPushButton("Current Text")
        current_text_button.clicked.connect(self.current_text_button_clicked)

        copy_button = QPushButton("Copy")
        copy_button.clicked.connect(self.text_edit.copy)

        cut_button = QPushButton("Cut")
        cut_button.clicked.connect(self.text_edit.cut)

        paste_button = QPushButton("Paste")
        paste_button.clicked.connect(self.text_edit.paste)

        undo_button = QPushButton("Undo")
        undo_button.clicked.connect(self.text_edit.undo)

        redo_button = QPushButton("Redo")
        redo_button.clicked.connect(self.text_edit.redo)

        set_plain_text_button = QPushButton("set plain text")
        set_plain_text_button.clicked.connect(self.set_plain_text)

        set_html_button = QPushButton("set html")
        set_html_button.clicked.connect(self.set_html)

        clear_button = QPushButton("Clear")
        clear_button.clicked.connect(self.text_edit.clear)

        h_layout = QHBoxLayout()
        h_layout.addWidget(copy_button)
        h_layout.addWidget(cut_button)
        h_layout.addWidget(paste_button)
        h_layout.addWidget(undo_button)
        h_layout.addWidget(redo_button)
        h_layout.addWidget(set_plain_text_button)
        h_layout.addWidget(set_html_button)
        h_layout.addWidget(clear_button)
        h_layout.addWidget(current_text_button)

        v_layout = QVBoxLayout()
        v_layout.addLayout(h_layout)
        v_layout.addWidget(self.text_edit)
        self.setLayout(v_layout)

    def current_text_button_clicked(self):
        print(self.text_edit.toPlainText())

    def set_plain_text(self):
        self.text_edit.setPlainText("测试")

    def set_html(self):
        self.text_edit.setHtml("<h1>html</h1> <br> <p style=\"color:red\">内容</p>")

    def paste(self):
        """
        自己实现插槽
        :return:
        """
        self.text_edit.paste()


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```

### QCheckBox and QRadioButton

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QCheckBox.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('AutoTool')

        os = QGroupBox("Choose operating system")
        windows = QCheckBox("Windows")
        windows.toggled.connect(self.windows_box_toggled)

        linux = QCheckBox("Linux")
        linux.toggled.connect(self.linux_box_toggled)

        mac = QCheckBox("Mac")
        mac.toggled.connect(self.mac_box_toggled)

        os_layout = QVBoxLayout()
        os_layout.addWidget(windows)
        os_layout.addWidget(linux)
        os_layout.addWidget(mac)
        os.setLayout(os_layout)

        drinks = QGroupBox("Choose your drink")
        beer = QCheckBox("Beer")
        juice = QCheckBox("Juice")
        coffe = QCheckBox("Coffe")
        beer.setChecked(True)
        # 设置按钮只能选一个
        exclusive_button_group = QButtonGroup(self)
        exclusive_button_group.addButton(beer)
        exclusive_button_group.addButton(juice)
        exclusive_button_group.addButton(coffe)
        exclusive_button_group.setExclusive(True)

        drink_layout = QVBoxLayout()
        drink_layout.addWidget(beer)
        drink_layout.addWidget(juice)
        drink_layout.addWidget(coffe)
        drinks.setLayout(drink_layout)

        answers = QGroupBox("Choose Answer")
        answers_a = QRadioButton("A")
        answers_b = QRadioButton("B")
        answers_c = QRadioButton("C")
        answers_a.setChecked(True)
        answers.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)

        answer_layout = QVBoxLayout()
        answer_layout.addWidget(answers_a)
        answer_layout.addWidget(answers_b)
        answer_layout.addWidget(answers_c)
        answers.setLayout(answer_layout)

        # 最终展示
        # layout = QVBoxLayout()
        layout = QGridLayout()
        layout.addWidget(os, 0, 0)
        layout.addWidget(drinks, 0, 1)
        layout.addWidget(answers, 1, 0, 1, 2)

        self.setLayout(layout)

    def windows_box_toggled(self, checked):
        if checked:
            print("window box checked")
        else:
            print("window box unchecked")

    def linux_box_toggled(self):
        pass

    def mac_box_toggled(self):
        pass


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```

### QListWidget

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QListWidget.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('AutoTool')
        self.list_widget = QListWidget(self)
        self.list_widget.setSelectionMode(QAbstractItemView.SelectionMode.ExtendedSelection)
        self.list_widget.addItem("One")
        self.list_widget.addItems(["Two", "Three"])
        self.list_widget.currentItemChanged.connect(self.current_item_changed)
        self.list_widget.currentTextChanged.connect(self.current_text_changed)

        # 双击修改元素事件
        self.list_widget.itemDoubleClicked.connect(self.item_double_clicked)

        button_add_item = QPushButton("Add item")
        button_add_item.clicked.connect(self.add_item)

        button_delete_item = QPushButton("Delete item")
        button_delete_item.clicked.connect(self.delete_item)

        button_item_count = QPushButton("Item count")
        button_item_count.clicked.connect(self.item_count)

        button_selected_items = QPushButton("Selected items")
        button_selected_items.clicked.connect(self.selected_items)

        v_layout = QVBoxLayout()
        v_layout.addWidget(self.list_widget)
        v_layout.addWidget(button_add_item)
        v_layout.addWidget(button_delete_item)
        v_layout.addWidget(button_item_count)
        v_layout.addWidget(button_selected_items)
        self.setLayout(v_layout)

    def current_item_changed(self, current: QListWidgetItem, previous: QListWidgetItem):
        if current:
            print(current.text())
        if previous:
            print(previous.text())

    def current_text_changed(self, text):
        print("the selection text is :", text)

    def add_item(self):
        new_text, ok = QInputDialog.getText(self, "Modify Item", "Enter new text", QLineEdit.EchoMode.Normal)
        if ok and new_text:
            self.list_widget.addItem(new_text)
        # self.list_widget.addItem("New Item")

    def item_count(self):
        print("Item count:", self.list_widget.count())

    def delete_item(self):
        self.list_widget.takeItem(self.list_widget.currentRow())

    def selected_items(self):
        list = self.list_widget.selectedItems()
        for i in list:
            print(i.text())

    def item_double_clicked(self, item: QListWidgetItem):
        current_text = item.text()
        new_text, ok = QInputDialog.getText(self, "Modify Item", "Enter new text:", QLineEdit.EchoMode.Normal,
                                            current_text)
        if ok and new_text:
            item.setText(new_text)


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```

### QTabWidget

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QTabWidget.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        tab_widget = QTabWidget(self)

        # Information
        widget_form = QWidget()
        label_full_name = QLabel("Full name:")
        line_edit_full_name = QLineEdit()

        form_layout = QHBoxLayout()
        form_layout.addWidget(label_full_name)
        form_layout.addWidget(line_edit_full_name)
        widget_form.setLayout(form_layout)

        # Buttons
        widget_buttons = QWidget()
        button_1 = QPushButton("One")
        button_1.clicked.connect(self.button_1_clicked)
        button_2 = QPushButton("Two")
        button_3 = QPushButton("Three")
        buttons_layout = QVBoxLayout()
        buttons_layout.addWidget(button_1)
        buttons_layout.addWidget(button_2)
        buttons_layout.addWidget(button_3)
        widget_buttons.setLayout(buttons_layout)

        # Add Tabs
        tab_widget.addTab(widget_form, "Information")
        tab_widget.addTab(widget_buttons, "Buttons")

        v_layout = QVBoxLayout()
        v_layout.addWidget(tab_widget)
        self.setLayout(v_layout)

    def button_1_clicked(self):
        print("button clicked")


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```

### QComboBox

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QComboBox.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout, QGroupBox, QCheckBox, QButtonGroup, QRadioButton, QListWidget, \
    QAbstractItemView, QListWidgetItem, QInputDialog, QTabWidget, QComboBox
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.combo_box = QComboBox()

        # Add planets to the combobox
        self.combo_box.addItem("Earth")
        self.combo_box.addItem("Venus")
        self.combo_box.addItem("Mars")
        self.combo_box.addItem("Pluto")
        self.combo_box.addItem("Saturn")

        button_current_value = QPushButton("Current value")
        button_current_value.clicked.connect(self.current_value)
        button_set_current = QPushButton("Set value")
        button_set_current.clicked.connect(self.set_current)
        button_get_values = QPushButton("Get values")
        button_get_values.clicked.connect(self.get_values)

        v_layout = QVBoxLayout()
        v_layout.addWidget(self.combo_box)
        v_layout.addWidget(button_current_value)
        v_layout.addWidget(button_set_current)
        v_layout.addWidget(button_get_values)
        # 增加额外的拉伸空间
        v_layout.addSpacing(10)

        self.setLayout(v_layout)

    def current_value(self):
        print("current time:", self.combo_box.currentText(), "- current index:", self.combo_box.currentIndex())

    def set_current(self):
        self.combo_box.setCurrentIndex(2)

    def get_values(self):
        for i in range(self.combo_box.count()):
            print("index [ ", i, "] :", self.combo_box.itemText(i))


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```

### Qt Designer

## 布局

### Grid Layout

:globe_with_meridians:[文档](https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QGridLayout.html)

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy, QGridLayout
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('AutoTool')

        button_1 = QPushButton("One")
        button_2 = QPushButton("Two")
        button_3 = QPushButton("Three")
        button_3.setSizePolicy(QSizePolicy.Policy.Fixed, QSizePolicy.Policy.Expanding)
        button_4 = QPushButton("Four")
        button_5 = QPushButton("Five")
        button_6 = QPushButton("Six")
        button_7 = QPushButton("Seven")

        grid_layout = QGridLayout()
        grid_layout.addWidget(button_1, 0, 0)
        grid_layout.addWidget(button_2, 0, 1, 1, 2)
        grid_layout.addWidget(button_3, 1, 0, 2, 1)
        grid_layout.addWidget(button_4, 1, 1)
        grid_layout.addWidget(button_5, 1, 2)
        grid_layout.addWidget(button_6, 2, 1)
        grid_layout.addWidget(button_7, 2, 2)

        self.setLayout(grid_layout)


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```



### 小组件布局

```python
import random

from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox, QApplication, QLabel, QLineEdit, \
    QHBoxLayout, QTextEdit, QSizePolicy
from PySide6.QtGui import QPixmap, QFont


class Widget(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle('AutoTool')

        label = QLabel("Some text :")
        line_edit = QLineEdit()

        # 小部件行内样式设置
        line_edit.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)
        label.setSizePolicy(QSizePolicy.Policy.Expanding, QSizePolicy.Policy.Fixed)

        h_layout_1 = QHBoxLayout()
        h_layout_1.addWidget(label)
        h_layout_1.addWidget(line_edit)

        button_1 = QPushButton("One")
        button_2 = QPushButton("Two")
        button_3 = QPushButton("Three")

        h_layout_2 = QHBoxLayout()
        h_layout_2.addWidget(button_1, 2)
        h_layout_2.addWidget(button_2, 1)
        h_layout_2.addWidget(button_3, 1)

        v_layout = QVBoxLayout()
        v_layout.addLayout(h_layout_1)
        v_layout.addLayout(h_layout_2)
        self.setLayout(v_layout)


app = QApplication([])

widget = Widget()
widget.show()
app.exec()

```



## 示例

### 按钮点击事件

```python
from PySide6.QtWidgets import QApplication,QPushButton

def button_clicked():
    print("you clicked the button")

app = QApplication()
button = QPushButton("click me")
button.clicked.connect(button_clicked)

button.show()
app.exec()
```

### 选择框

```python
from PySide6.QtWidgets import QApplication,QPushButton

def button_clicked(data):
    print("you clicked the button",data)

app = QApplication()
button = QPushButton("click me")
button.setCheckable(True)
button.clicked.connect(button_clicked)

button.show()
app.exec()
```

### 滑块

```python
from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QSlider, QVBoxLayout, QWidget


def respond_to_slider(data):
    print("slider moved to:", data)


app = QApplication([])

# 创建父级窗口
window = QMainWindow()
central_widget = QWidget(window)
window.setCentralWidget(central_widget)
layout = QVBoxLayout(central_widget)

# 创建滑块并设置属性
slider = QSlider()
slider.setOrientation(Qt.Horizontal)
slider.setMinimum(0)
slider.setMaximum(100)
slider.setValue(25)
slider.valueChanged.connect(respond_to_slider)
# 将滑块添加到布局中
layout.addWidget(slider)

# 显示窗口
window.show()

app.exec()

```

### 文件组织

Main.py

```python
from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QSlider, QVBoxLayout, QWidget
import sys
from src.table.rockwidget import RocWidget

app = QApplication(sys.argv)
# 创建父级窗口
window = RocWidget()
window.show()

app.exec()

```

rockwidget.py

```python
from PySide6.QtWidgets import QWidget, QPushButton, QHBoxLayout, QVBoxLayout


class RocWidget(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("autoTool")
        button1 = QPushButton("button1")
        button1.clicked.connect(self.button1_clicked)
        button2 = QPushButton("button2")
        button2.clicked.connect(self.button2_clicked)

        button_layout = QVBoxLayout()
        button_layout.addWidget(button1)
        button_layout.addWidget(button2)

        self.setLayout(button_layout)

    def button1_clicked(self):
        print("button1 clicked")

    def button2_clicked(self):
        print("button2 clicked")

```



### 主窗口菜单栏

```python
import time

from PySide6.QtWidgets import QApplication, QMainWindow, QMenu, QToolBar, QMenuBar, QPushButton, QStatusBar
from PySide6.QtCore import QSize, Qt, QTimer
from PySide6.QtGui import QAction, QIcon
import sys


class MainWindow(QMainWindow):
    def __init__(self, app: QApplication):
        super().__init__()
        self.setWindowTitle("AutoTool")
        self.resize(800, 600)
        self.app = app
        menu_bar = self.menuBar()
        file_menu = menu_bar.addMenu('&File')
        quit_action = file_menu.addAction(" Quit", self.quit)

        edit_menu = menu_bar.addMenu('Edit')
        edit_menu.addAction('Copy')
        edit_menu.addAction('Cut')
        edit_menu.addAction('Paste')
        edit_menu.addAction('Undo')
        edit_menu.addAction('Redo')

        window_menu = menu_bar.addMenu('Window')
        window_menu.addAction('')
        setting_menu = menu_bar.addMenu('Setting')
        setting_menu.addAction('')
        help_menu = menu_bar.addMenu('Help')
        help_menu.addAction('')

        toolbar = QToolBar("My main toolbar")
        toolbar.setIconSize(QSize(16, 16))
        toolbar.setOrientation(Qt.Orientation.Horizontal)
        self.addToolBar(toolbar)

        toolbar.addAction(quit_action)

        # 自定义action
        action1 = QAction("Some Actoin", self)
        ## 鼠标悬停提示
        action1.setStatusTip("Status message for some action")
        action1.triggered.connect(self.toolbar_button_click)
        toolbar.addAction(action1)

        action2 = QAction(QIcon('logo.icns'), "action", self)
        action2.setStatusTip("Status message for some other action")
        action2.triggered.connect(lambda: self.toolbar_button_click1(action2))
        action2.setCheckable(True)
        toolbar.addAction(action2)

        # 分隔符
        toolbar.addSeparator()

        toolbar.addWidget(QPushButton("Click here"))

        # 状态栏
        self.setStatusBar(QStatusBar(self))

        button1 = QPushButton("Button1")
        button1.clicked.connect(self.button1_clicked)
        self.setCentralWidget(button1)

    def quit(self):
        self.app.quit()

    def toolbar_button_click(self):
        print("action1 triggered")

    def toolbar_button_click1(self, action):
        print("action2 triggered,and this is data")
        self.statusBar().showMessage("message from my app with icons", 3000)
        action.setCheckable(False)

    def button1_clicked(self):
        print("Clicked on the button")


app = QApplication(sys.argv)
# 创建父级窗口
window = MainWindow(app)
window.show()

app.exec()

```

### 消息弹窗

```python
from PySide6.QtWidgets import QWidget, QPushButton, QVBoxLayout, QMessageBox
from PySide6.QtGui import QPixmap


class Widget(QWidget):
    def __init__(self, app):
        super().__init__()
        self.app = app
        self.setWindowTitle('MessageBox ')
        self.resize(600, 800)
        button_hard = QPushButton("Hard")
        button_hard.clicked.connect(self.button_clicked_hard)
        button_critical = QPushButton("Critical")
        button_critical.clicked.connect(self.button_clicked_critical)
        button_question = QPushButton("Question")
        button_question.clicked.connect(self.button_clicked_question)
        button_information = QPushButton("Information")
        button_information.clicked.connect(self.button_clicked_information)
        button_about = QPushButton("About")
        button_about.clicked.connect(self.button_clicked_about)

        layout = QVBoxLayout()
        layout.addWidget(button_hard)
        layout.addWidget(button_critical)
        layout.addWidget(button_question)
        layout.addWidget(button_information)
        layout.addWidget(button_about)
        self.setLayout(layout)

    def button_clicked_hard(self):
        message = QMessageBox()
        message.setMinimumSize(700, 200)
        message.setWindowTitle("Message Title")
        message.setText("Something happend")
        message.setInformativeText("Do you wang to do something about it?")
        # 自定义消息图标
        custom_icon = QPixmap('logo.png')
        message.setIconPixmap(custom_icon)
        # message.setIcon(QMessageBox.Icon.Critical)
        message.setStandardButtons(QMessageBox.StandardButton.Ok | QMessageBox.StandardButton.Cancel)
        message.setDefaultButton(QMessageBox.StandardButton.Ok)
        ret = message.exec()
        if ret == QMessageBox.StandardButton.Ok:
            print("User chose Ok")
        else:
            print("User chose Cancel")
        print('hard')

    def button_clicked_critical(self):
        ret = QMessageBox.critical(self, "Message title", "Critical Message!",
                                   QMessageBox.StandardButton.Ok | QMessageBox.StandardButton.Cancel)
        if ret == QMessageBox.StandardButton.Ok:
            print("User choose ok")
        else:
            print("User choose cancel")

    def button_clicked_question(self):
        ret = QMessageBox.question(self, "Message title", "Asking a question?",
                                   QMessageBox.StandardButton.Ok | QMessageBox.StandardButton.Cancel)
        if ret == QMessageBox.StandardButton.Ok:
            print("user choose ok")
        elif ret == QMessageBox.StandardButton.ButtonMask:
            print("user choose buttonmask")
        else:
            print("User choose cancle")

    def button_clicked_information(self):
        ret = QMessageBox.information(self, "Message title", "Critical Message!",
                                      QMessageBox.StandardButton.Ok | QMessageBox.StandardButton.Cancel)
        if ret == QMessageBox.StandardButton.Ok:
            print("User choose ok")
        else:
            print("User choose cancel")

    def button_clicked_about(self):
        ret = QMessageBox.about(self,"message title","cirtical message")
        if ret == QMessageBox.StandardButton.Ok:
            print("User choose ok")
        else:
            print("User choose cancel")


from PySide6.QtWidgets import QApplication
import sys

app = QApplication(sys.argv)
widget = Widget(app)
widget.show()

app.exec()

```



