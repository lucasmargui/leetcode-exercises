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



