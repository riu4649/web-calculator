import tkinter as tk

root = tk.Tk()

root.title("電卓")
root.geometry("300x400")

label = tk.Label(root, text="0",font=("Arial", 24))
label.pack()

root.mainloop()