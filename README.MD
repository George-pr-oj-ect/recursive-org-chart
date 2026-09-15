# Recursive Org Chart 🌳

An interactive team structure chart rendered entirely from a **binary tree** using **recursion**, no hardcoded HTML for any person.

## How it works

Each employee is a tree node:

```javascript
{
    data: { name: "...", role: "..." },
    left: <node or null>,
    right: <node or null>
}
```

A `renderNode(node, container)` function recursively walks the tree the same way pre-order traversal does, visit the current node (draw their card), then recurse into `node.left` and `node.right` to draw their reports, nested inside a `.children` container so the hierarchy shows visually through indentation.

```javascript
function renderNode(node, container){
    // draw this person's card into container

    if(node.left || node.right){
        // create a nested children container
        if(node.left)  renderNode(node.left, childrenContainer)
        if(node.right) renderNode(node.right, childrenContainer)
    }
}
```

Adding a new person to the org chart just means adding one more node to the data and connecting it, the rendering handles itself automatically, no matter how deep the tree gets.

## Features
- Tree data structure (binary tree, up to 2 direct reports per node)
- Fully recursive rendering, zero hardcoded person cards
- Sideways-growing tree-view style UI with indentation and connector lines
- Scales to any depth or team size just by adding tree nodes

## Tech Stack
- HTML5
- CSS3 (flexbox, nested indentation, dashed connectors)
- JavaScript (binary trees, recursion, DOM manipulation)

## What I Learned
This project connected tree traversal directly to a real UI problem. Understanding pre-order traversal (visit node, then recurse into children) made it clear that rendering a tree on screen isn't a separate skill from walking a tree in memory, it's the exact same recursive pattern applied to the DOM instead of a console.log.