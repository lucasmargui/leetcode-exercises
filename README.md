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
## Intervals
## Linked List
## Binary Tree General
## Binary Tree BFS
## Binary Search Tree
## Graph
## Graph BFS
## Trie
## Backtracking
## Divid e Conquer
## Kadane´s Algorithm
## Binary tree
## Bit Manipulation
## One Dimensional Dynamic Programing
## Multidimensional Dynamic Programing



