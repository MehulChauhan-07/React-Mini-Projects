# 📌 React + TypeScript Dependency Graph

This guide helps you **generate a visual dependency graph** of your React + TypeScript project using **Dependency Cruiser** and **Graphviz**.

---

## 🔧 Prerequisites

### **1️⃣ Install Dependency Cruiser**

```sh
npm install -g dependency-cruiser
```

### **2️⃣ Install Graphviz (Required for Graph Generation)**

#### **Option 2: Install via Winget**

```sh
winget install Graphviz
```

#### **Option 3: Install Manually**

1. Download Graphviz from [Graphviz Official Site](https://graphviz.gitlab.io/download/)
2. Install it with default settings.
3. Add `C:\Program Files\Graphviz\bin` to your **System PATH** if not automatically set.

Verify installation:

```sh
dot -V
```

It should return a version number like:

```
dot - graphviz version 2.50.0
```

---

## 🚀 Generating the Dependency Graph

### **1️⃣ Initialize Dependency Cruiser**

Run this in your project root (if not already initialized):

```sh
npx depcruise --init
```

### **2️⃣ Generate the Graph (.dot Format)**

```sh
npx depcruise --output-type dot src > dependency-graph.dot
```

### **3️⃣ Convert to SVG for Visualization**

```sh
dot -T svg dependency-graph.dot -o dependency-graph.svg
```

### **4️⃣ Convert to PNG (Optional)**

```sh
dot -T png dependency-graph.dot -o dependency-graph.png
```

---

## 🎯 Automate with NPM Script

To make this easier, add a script to your `package.json`:

```json
"scripts": {
  "dep-graph": "npx depcruise --output-type dot src | dot -T svg -o dependency-graph.svg"
}
```

Now, generate the graph with:

```sh
npm run dep-graph
```

---

## ✅ Viewing the Graph

Open `dependency-graph.svg` or `dependency-graph.png` in any browser or image viewer.

---

## 🔄 Troubleshooting

### **1️⃣ Graphviz Not Recognized?**

If `dot` is not recognized:

- Ensure Graphviz is installed.
- Restart your terminal.
- Add `C:\Program Files\Graphviz\bin` to your **System PATH**.

### **2️⃣ Commander Module Not Found?**

If you get an error related to `commander`:

```sh
npm install -g commander
```

---

## 🎉 Done!

Now you can **visualize your project's dependencies** and improve its structure! 🚀
