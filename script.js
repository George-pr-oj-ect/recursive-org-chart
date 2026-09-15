// TREE vocabulary:
// root = the very top node (no parent above it)
// leaf = a node with NO children (end of a branch)
// parent = a node that has children below it
// child = a node connected below a 
// BINARY TREE = each node has AT MOST 2 children
// Usually called "left" and "right"
// A node structure looks like:
// { data: value, left: node or null, right: node or null }
// BINARY TREE = each node has AT MOST 2 children (left, right)
// Same concept as linked list nodes, just branches in 2 directions
// instead of one straight line
//
// root = top node, no parent
// leaf = node with NO children (left AND right are both null)
// Build trees bottom-up, same as linked lists, deepest nodes first
// Real world uses of trees:
// - File systems (exactly what you built, folders containing folders/files)
// - HTML DOM itself (every webpage is literally a tree - html > body > div > p...)
// - Company org charts (CEO at root, branching down to managers, employees)
// - Decision trees (used in AI/ML - if X then go left, else go right)
// - Databases use trees (B-trees) to keep data sorted and searchable fast
// - Family trees / genealogy
// - Autocomplete / spell checkers (Tries, a specific tree type)
// - Binary Search Trees specifically: fast searching, O(log n) instead of
//   checking every item one by one like an array

/*function createTreeNode(data){
    return{
        data:data,
        left:null,
        right:null
    }
}
let leftInnerLeaf = createTreeNode(1)
let rightInnerLeaf = createTreeNode(4)

let leafLeft = createTreeNode(3)
leafLeft.left = leftInnerLeaf
leafLeft.right = rightInnerLeaf
let rightLeaf = createTreeNode(8)

let root = createTreeNode(5)
root.left = leafLeft
root.right = rightLeaf

//tree trversal
// DFS TRAVERSAL - three orders, same recursive shape, different sequence:
//
// PRE-ORDER:  node -> left -> right   (5,3,1,4,8)
// IN-ORDER:   left -> node -> right   (1,3,4,5,8) - sorted! only true on a BST
// POST-ORDER: left -> right -> node   (1,4,3,8,5) - used for safely deleting a tree
//
// All three share the same base case:
// if(node == null){ return }
// Only the ORDER of the "visit" line vs the two recursive calls changes
// PRE-ORDER: node -> left -> right
// PRE-ORDER: node -> left -> right (visit node BEFORE its children)
// Useful for copying a tree, or creating a prefix expression
//
// There are two other DFS orders, same recursive shape, different
// ORDER of the three lines:
// IN-ORDER: left -> node -> right (used for BSTs, gives sorted output)
// POST-ORDER: left -> right -> node (used for deleting a tree safely)
/*function preOrder(node){
    if(node == null){
        return 
    }else{
        console.log(node.data)
        preOrder(node.left)
        preOrder(node.right)
    }
}

preOrder(root)

//in-order
// IN-ORDER: left -> node -> right
// IN-ORDER: left -> node -> right
// On a BINARY SEARCH TREE specifically, in-order traversal
// ALWAYS gives you the values in sorted order, smallest to largest
// This is why BSTs are so useful, you get free sorting just by
// walking the tree the "in-order" way
function inOrder(node){
    if(node ==null){
        return
    }else{
        inOrder(node.left)
        console.log(node.data)
        inOrder(node.right)

    }
}

inOrder(root)

//Post-order
//LEFT → RIGHT → NODE
function postOrder(node){
    if(node == null){
        return
    }else{
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.data)
    }
}
postOrder(root)
*/


//MINI PROJECT

function createTreeNode(data){
    return{
        data:data,
        left:null,
        right:null
    }
}

// Level 1 - CEO
let ceo = createTreeNode({ name: "Sarah", role: "CEO" })

// Level 2 - Managers, reporting to the CEO
let managerJames = createTreeNode({ name: "James", role: "Manager" })
let managerAmina = createTreeNode({ name: "Amina", role: "Manager" })

ceo.left = managerJames
ceo.right = managerAmina

// Level 3 - staff reporting to James
let jamesStaffBen = createTreeNode({ name: "Ben", role: "Employee" })
let jamesStaffGeorge = createTreeNode({ name: "George", role: "Clerk" })

managerJames.left = jamesStaffBen
managerJames.right = jamesStaffGeorge

// Level 3 - staff reporting to Amina
let aminaStaffErick = createTreeNode({ name: "Erick", role: "Personal assistant" })
let aminaStaffRiziki = createTreeNode({ name: "Riziki", role: "Secretary" })

managerAmina.left = aminaStaffErick
managerAmina.right = aminaStaffRiziki

// Level 4 - staff reporting to Riziki
let rizikiStaffAisha = createTreeNode({ name: "Aisha", role: "User" })
let rizikiStaffNjuguna = createTreeNode({ name: "Njuguna", role: "User" })

aminaStaffRiziki.left = rizikiStaffAisha
aminaStaffRiziki.right = rizikiStaffNjuguna

let root = ceo



let chart = document.querySelector(".chart")
function renderNode(node,chart){
    let wrap = document.createElement('div')
    wrap.classList.add("node-wrap")
    
    let dataContainer = document.createElement('div')
    dataContainer.classList.add("node")
    dataContainer.innerHTML = `
    <p class="name">${node.data.name}</p>
     <p class="role">${node.data.role}</p>
    `

    wrap.appendChild(dataContainer)
    chart.appendChild(wrap)

    if(node.left || node.right){
        let childWrap = document.createElement('div')
        childWrap.classList.add("children")
        wrap.appendChild(childWrap)
            if(node.left){
            renderNode(node.left,childWrap)
            }if(node.right){
                renderNode(node.right,childWrap)
            }
        
    }

}

renderNode(root,chart)