from cx_Freeze import setup, Executable 

executables = [Executable("rffbd x64.py", base="Win32GUI", icon='../../icon.ico')]

packages = ["idna", "sys", "os", "PyQt6", "openpyxl", "sqlite3", "PyQt5"]

include_files = ['databases', 'icon.ico']
options = {
    'build_exe': {    
        'include_msvcr': True,
        'packages':packages,
        'include_files': include_files,
        'build_exe': '../../builds/x64',
    },    
}

setup(
    name = "phys",
    options = options,
    version = "0.0.1",
    description = '',
    executables = executables
)