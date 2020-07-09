# Reactsyntax_flux
Dataflow 資料流在 React 中又稱為 Flux

本 Code 採用 ES5 而非 ES6。

# State, 狀態

做用與屬性相同，都能存取值，然而狀態『僅屬於元件內部使用』。

# Props, 屬性

作用是藉由元件樹，將改變從父層傳到子層，開發者可從 UI 位置找到父節點，取得其元件屬性（classname），
加上存取子調整值，進行更新的 render 渲染，此改變可從樹架構中，由父傳到子。
