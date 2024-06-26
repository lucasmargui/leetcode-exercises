# Leetcode 

Online platform for coding interview preparation and the service provides coding and algorithmic problems intended for users to practice coding.


## Two Pointers

The two-point technique involves using two indices or pointers that traverse a data structure, usually moving according to certain conditions. The two hands can move in several ways:

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/f3d3b4b9-ad87-4407-9a3d-0c513ca8ad61)


One at the beginning and one at the end: The hands start at opposite ends and move toward the center.
Both from the beginning: One pointer can be slower or faster than the other, useful in problems where the relationship between elements in different positions needs to be checked.


Initialize two pointers: one at the beginning (left) and one at the end (right) of the array.

#### 1. Check target sum

<details>
<summary>Show content</summary>
    
  ![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/1f82d9e7-5b87-42ec-ac9c-a9b6db4effe2)
  
  
  - Calculate the sum of the elements indicated by left and right.
  - If the sum equals the target, the numbers have been found.
  - If the sum is less than the target, move the left pointer to the right (increment).
  - If the sum is greater than the target, move the right pointer to the left (decrement).
  - Repeat until the hands cross or the sum is found.

 </details>

#### 2. Remove Duplicates
  <details>
  <summary>Show content</summary>
    
  ![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/017f15e7-f93e-4a17-a68d-96f09c085797)
    
  </details>

#### 3. Check Palindrome
  <details>
  <summary>Show content</summary>
  
  ![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/37f667cb-924e-47b1-8b0b-18ccb91ae07c)
  
  </details>

#### 4. Container with most Water 

  <details>
  <summary>Show content</summary>
  
  ![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/3233fc0d-e177-455f-89c5-002263d6e3cc)
  
  </details>



## Sliding Window

The "sliding window" technique is an approach used to efficiently solve problems involving subarrays or substrings within an array or string. The main idea is to use a window that moves across the dataset, maintaining a fixed range of elements and updating the conditions as needed.

Features of Sliding Window
Efficiency: Reduces time complexity in many cases from O(n^2) to O(n).
Applications: Often used to solve subarray sum problems, find substrings, or any situation where we need to examine all elements in a continuous range.
Flexibility: Can be used on both arrays and strings.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/6e6c1792-acc3-4c4e-87ab-a58a6549df33)


#### 1. Minimum Size Subarray Sum

<details>
    
<summary>Show content</summary>
    
![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/bf9fc408-e378-4e0f-b83a-81465ac7513d)
    
</details>

#### 2. Longest Substring Without Repeating Characters

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/70ca3fba-5500-4a4f-afb9-438afd9ecbc2)

</details>


## Matrix

An Matrix is a data structure that stores elements in a two-dimensional grid. Each element is identified by two indices: one for the row and one for the column. Matrices are widely used in various applications such as image processing, graphics, scientific simulations, and linear algebra


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/9b0f8051-5bef-470a-bb1d-1a34a35a7258)




#### 1. Rotate Image

<details>
    
<summary>Show content</summary>

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/05543586-77c2-4222-879a-5d53d0e91909)


- Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
- Output: [[7,4,1],[8,5,2],[9,6,3]]


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/8f964430-2f67-4ad6-9115-d0090f684358)


</details>

#### 2. Set Matrix Zeroes

<details>
    
<summary>Show content</summary>

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/dfcb9248-91eb-4aff-8597-06b1fdbfe834)

- Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
- Output: [[1,0,1],[0,0,0],[1,0,1]]

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/e27874f9-1927-408c-9a62-f97e312b7951)
  
</details>


#### 3. Spiral Matrix

<details>
    
<summary>Show content</summary>

Given an m x n matrix, return all elements of the matrix in spiral order.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/157a56c8-aef2-4f32-9872-f4aa0a774bcf)


- Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
- Output: [1,2,3,6,9,8,7,4,5]

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/60ed867b-97be-420e-9e0f-0614f77554de)

</details>


## Depth-First Search

Depth-First Search (DFS) is an algorithm used to traverse or search for elements in data structures, such as graphs and trees. DFS explores as deeply as possible along each branch before backtracking. It uses a stack approach (LIFO - Last In, First Out) to remember the vertices to be explored, which can be implemented recursively or iteratively.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/75339a61-9373-468f-bc5c-b040b07c4418)


## Breadth-First Search

Breadth-First Search (BFS) is a search algorithm used to explore graphs or trees. It starts at a root node and explores all its neighbors at the current level before moving to neighbors at the next level. This means that BFS visits all nodes at a level before going to the next deeper level.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/b9ba6400-73c2-42f7-9b5c-9c90e07d3419)


## Hashmap

A HashMap is a data structure that associates keys with values. It is implemented using a hash table that allows fast data retrieval.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/4c716997-7a55-4f2b-b8e9-1bba7d8c1708)



#### 1. Group Anagrams

<details>
    
<summary>Show content</summary>

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/01e21e2a-e6b9-4c02-a8a4-cf6cc899a74f)

</details>

#### 2. Longest Consecutive Sequence

<details>
    
<summary>Show content</summary>

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/a6cade8e-6d4f-4f12-a6f3-2a4c188d4703)

</details>




## Intervals

The intervals technique is used in data structures to store and query ranges of values ​​efficiently. This technique is particularly useful in problems involving time intervals, numeric intervals, or any continuous intervals where you need to make quick queries to check for overlaps or to find specific intervals.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ab89e1d1-17d0-48bb-85c1-d0c5fd4aba9f)



#### 1. Merge Intervals

<details>
    
<summary>Show content</summary>

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/e2fa8197-6dd2-46e2-9508-9b5276faffbb)

</details>


#### 2. Insert Interval

<details>
    
<summary>Show content</summary>

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/de681cfd-a6c2-4dba-b67c-0b2ee24332c8)

</details>

#### 3. Minimum Number of Arrows to Burst Balloons

<details>
    
<summary>Show content</summary>

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

 

Example 1:

Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/1f1f0ed7-831d-4d10-98e9-069d297df09b)

</details>



## Stack

Stack is a linear data structure that follows the LIFO (Last In, First Out) principle, where the last element inserted is the first to be removed. The basic operations performed on a stack are:

- Push: Adds an element to the top of the stack.
- Pop: Removes the top element from the stack.
- Peek/Top: Returns the top element of the stack without removing it.
- IsEmpty: Checks if the stack is empty.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/2ffa7403-95da-4a0e-97cf-18b8e71eb6bb)


#### 1. Valid Parentheses

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/b55e1ffe-97a3-44c7-a578-245362413bcd)


Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 2:

Input: s = "()[]{}"
Output: true

</details>



#### 1. Evaluate Reverse Polish Notation

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/fad13c86-e9eb-4dd0-8f4a-5291fbd4e42b)

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

</details>

## Linked List

A linked list is a linear data structure that consists of a sequence of elements, where each element is a node that contains a value and a pointer to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous positions in memory, which allows dynamic and efficient memory allocation, as well as facilitating the insertion and removal of elements.

- Data (val): The value stored in the node.
- Pointer (Next): A reference (or pointer) to the next node in the list.
- Head: The linked list has a special pointer called the head, which points to the first node in the list. If the list is empty, the head will point to null.


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/17f9b50d-de9f-4812-bf8b-2be64febe37f)

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/39917fca-1baa-4ab2-a41b-a95cb0257965)



#### 1. Merge Two Sorted Lists

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ce2b5470-e13f-4bb0-970b-ab2109fbccd2)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

</details>

#### 2. Add Two Numbers

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/3fbf553b-3382-4efb-8838-6666efcef939)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

</details>


#### 2. Remove Nth Node From End of List

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ffb3b558-4bbe-46d4-ba7b-e2910daf2410)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


</details>

#### 3. Reverse Linked List II

<details>

<summary>Show content</summary>

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.


Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/e76e8a25-fb0f-4f7f-937c-3144f7837903)



</details>

#### 4. Copy List with Random Pointer

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/f8b5ba17-a70a-434a-987b-9bb4a21ff5cc)

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]


</details>

## Binary Tree General

A binary tree is a hierarchical structure composed of nodes, where each node has at most two children, called left child and right child. This structure is used to organize data in a way that facilitates search, insertion and deletion operations, which can be carried out efficiently.

Basic concepts:
- Root: The main node of the tree.
- Node: Each element of the tree.
- Child: A node connected to another node directly above it.
- Parent: The node that has children.
- Leaf: A node that has no children.
- Subtree: A tree formed by a node and its descendants

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/e85e316a-fa8f-407d-98d8-1514a7201814)


#### 1. Maximum Depth of Binary Tree

<details>
    
<summary>Show content</summary>


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ba5b295c-3603-46fa-9eac-0eba0f8193e8)


Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3

</details>

#### 2. Invert Binary Tree

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/2e77b39f-5f0c-49c8-a1ed-ed051eb6b29c)

Given the root of a binary tree, invert the tree, and return its root.


Example 3:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]



</details>

#### 4. Symmetric Tree 

<details>
    
<summary>Show content</summary>


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/91baa45c-0467-4318-9b57-2017ea504fc5)

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true


</details>


#### 5. Construct Binary Tree from Preorder and Inorder Traversal

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/22f73fe5-ea09-4e15-83a9-a63d66738aac)

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]


</details>


#### 6. Populating Next Right Pointers in Each Node II 

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/0e77a420-33cf-4028-8afc-47660968cd21)

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



Example 1:


Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.


</details>





## Binary Tree BFS

The Breadth-First Search (BFS) technique in binary trees is an exploration method that visits all nodes at a level before moving to the next level. Unlike Depth-First Search (DFS), which follows a branch to the end before going back and exploring other branches, BFS explores the tree layer by layer.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/404df9dd-1098-4f91-b082-ca5f32585161)

#### 1. Binary Tree Right Side View

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/cc1f9df6-9917-4bee-87a8-db5b3e405519)

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]


</details>

#### 2. Average of Levels in Binary Tree

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/45ca4e69-5e50-4ea4-b2a1-3120dab9b2c1)

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].


</details>


## Binary Search Tree

The Binary Search Tree (BST) is a data structure in the form of a binary tree, where each node has a maximum of two children, and is organized in such a way that, for each node:

The node values ​​in the left subtree are less than the node value.
The node values ​​in the right subtree are greater than the node value.
This property facilitates the search, insertion and removal of elements in the tree, making these operations more efficient, generally with O(log n) complexity on average.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/da4bc846-e9c8-4827-84a9-32b856a9c5c9)


#### 1. Kth Smallest Element in a BST

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/c01345df-3002-4b31-9a1f-e1661b3e39d1)


Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1

</details>


## Graph

A técnica de representação de grafos em matrizes 2D é uma forma comum de modelar grafos usando estruturas de dados. Em particular, essa abordagem utiliza uma matriz de adjacência, que é uma matriz bidimensional (2D)

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ed3826b5-f684-4fa9-9c45-69aeb37c3d0b)



#### 1. Number of Islands 

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/c1d5fbef-93cf-47cf-a67d-c478e7b25e56)


Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

</details>

#### 2. Surrounded Regions

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/68c0b5d3-8a74-4a5a-8163-107e130cf798)


You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

</details>

#### 3. Clone Graph

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/1aeb5e6c-41f5-437c-b0a5-29afa3c4e454)


Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).


</details>



## Graph BFS

The Breadth-First Search (BFS) technique is widely used in graphs and can be applied to 2D matrices to solve various types of problems, such as finding the shortest path, checking component connectivity, and more. In a 2D matrix, each cell can be considered a node and the connections between adjacent cells represent the edges of the graph.

Description of the Technique
BFS starts at a source node and explores all its neighbors at the same level before advancing to the next level nodes. This is accomplished using a queue to track the nodes to be explored.

Steps for Implementation:

- Initialization: Start from a starting node (or cell). Mark this node as visited and queue it.
- Exploration: While the queue is not empty, remove a node from the queue, process it and add all its unvisited neighbors to the queue, marking them as visited.
- Stopping Condition: Exploration continues until all accessible nodes are processed.

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/358fb972-b1a2-4653-af0a-8be1828fb85f)


#### 1. Minimum Genetic Mutation

<details>
    
<summary>Show content</summary>

A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

Example 1:

Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2


</details>

#### 2. Snakes and Ladders

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/0824334e-6490-49f5-a61c-8487688fed39)


ou are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.

You start on square 1 of the board. In each move, starting from square curr, do the following:

Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
The game ends when you reach the square n2.
A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 do not have a snake or ladder.

Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.

For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1.

 

Example 1:


Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation: 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.

</details>


#### 3. Word Ladder

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/5e19e504-f6ad-4144-8221-840f407e45f7)


A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.


</details>

## Backtracking

Backtracking is a search technique that attempts to solve problems by trial and error, going back (backtracking) when a solution cannot be completed. It is widely used to solve decision problems such as puzzles, constraint satisfaction problems, and combinations. The algorithm explores all possible solutions, building them incrementally and abandoning (backtracking) a solution as soon as it determines that it cannot lead to a valid final solution.

How it works
- Choose an option: Try to solve part of the problem.
- Check validity: Check whether the current choice can lead to a valid solution.
- Recursive Decision: If valid, proceed to solve the next part of the problem recursively.
- Backtrack: If the current choice does not lead to a valid solution, backtrack and try another option.
- Complete Solution: If all parts are resolved, a solution has been found


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/eafc13f6-bb5c-4d80-bf69-dcd8421dc9c6)


#### 1. Combinations

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/1a7ea4d2-59be-4739-960f-36bb6009ed12)


Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

</details>

#### 2. Permutations

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/741556a2-f047-4ee8-94f9-90767ed44cf2)

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/2aec274b-3797-4fe7-b815-627ea31dc5fe)

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]



</details>

#### 3. Generate parenthesis

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/ba656d7f-cfc9-4a19-9ddd-27a246c51510)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

</details>



## Divide and Conquer

The "Divide and Conquer" technique is an algorithmic approach that involves dividing a problem into smaller, simpler subproblems, solving each of these subproblems individually, and then combining the subproblems' solutions to solve the problem. original problem. This technique is especially useful for solving complex problems efficiently, both in terms of time and space.

The Divide and Conquer approach can be divided into three main steps:

- Division: Divide the problem into smaller subproblems.
- Achievement: Solve subproblems recursively. If the subproblems are small enough, solve them directly.
- Combination: Combining the solutions of the subproblems to obtain the solution to the original problem.

 
![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/e3a8acb7-01d5-47b9-b048-8fe7ea3b7c88)



    


    
#### 1. Splitting linked list

<details>
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/a7b30bca-06f9-4d00-b91e-caa646645ac9)

</details>

#### 2. Binary Search


<details>
<summary>Show content</summary>

Binary search is an algorithm for finding an element in a sorted array by repeatedly dividing the part of the array that can contain the element, until reducing the possible locations to just one.


![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/d1a735c3-724a-4dad-b285-085c365fbba7)

</details>


#### 3. Sort Linked List

<details>
    
<summary>Show content</summary>

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/a20aee79-1b4d-4925-841c-e9d5fc52fdb5)

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/63442bec-71ee-4a0f-abb7-e42f7bd8c196)

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/a4fb122b-bd01-40f7-b516-6a6ec6884bf7)


- Base Case Check:
    The sortList function starts by checking if the list is either empty or contains only one node. If either condition is true, it returns the list as it is already sorted:

- Splitting the List:
    The getMid function uses the "tortoise and hare" algorithm, where slow moves one step at a time and fast moves two steps at a time:
    By the time fast reaches the end of the list, slow is at the midpoint. This effectively splits the list into two halves.

- Adjusting the Pointers:
    After getting the midpoint, the list is split into two halves:
    right is adjusted to point to the start of the second half of the list by temporarily storing the next node of right and setting right.next to null to break the list into two separate parts.
  
- Recursive Sorting:
     Each half of the list is recursively sorted:
     left remains as the head of the first half, and right is the head of the second half. These halves are recursively passed back into sortList, which continues to split them further until each sublist has one or no elements.

- Merging the Sorted Halves:
    Finally, the sorted halves are merged back together using the merge function:


</details>

## Kadane´s Algorithm

The Kadane technique is an algorithm used to solve the problem of finding the subarray with the largest sum in an array of integers. This problem is known as the "maximum subarray problem". Kadane's algorithm is efficient, with time complexity 

![image](https://github.com/lucasmargui/leetcode-exercises/assets/157809964/5808b4d6-a744-4832-ba0a-39a4254f69e1)



## Binary tree
## Bit Manipulation
## One Dimensional Dynamic Programing
## Multidimensional Dynamic Programing



