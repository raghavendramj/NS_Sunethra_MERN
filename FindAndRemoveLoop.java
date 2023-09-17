package com.linked.list;

import java.util.Arrays;
import java.util.List;

public class FindAndRemoveLoop {


    private static Node head;

    private static void addElementsFromRear(int data) {

        if (head == null) {
            head = new Node(data);
            return;
        }

        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = new Node(data);

    }

    public static Node createLinkedList(List<Integer> integerList) {
        for (Integer eachNode : integerList) {
            addElementsFromRear(eachNode);
        }
        LinkedListBasicsOperations.printLinkedList(head);
        return head;

    }

    static void createLoop(int data) {
        Node temp = head;
        Node toBeAttached = null;
        while (temp.next != null) {
            if (temp.data == data) {
                toBeAttached = temp;
            }
            temp = temp.next;
        }

        temp.next = toBeAttached;
    }

    public static void main(String[] args) {

        List<Integer> integerList = Arrays.asList(1, 2, 3, 4, 5);
        Node createdNode = createLinkedList(integerList);
        createLoop(3);
        System.out.println("Loop Exists :- ? " + checkForLoop(createdNode));
        printLinkedList(createdNode);
        findAndRemoveLoop(createdNode);
        printLinkedList(createdNode);
    }

    public static void printLinkedList(Node currNode) {
        Node temp = currNode;

        System.out.println("\n\nPrint method --> ");
        int count = 0;
        while (temp != null && count++ < 20) {
            System.out.print(temp.data);
            if (temp.next != null) {
                System.out.print(" -> ");
            }
            temp = temp.next;
        }
    }


    public static boolean checkForLoop(Node node) {
        Node slow = node, fast = node;

        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }
        return false;
    }

    public static void findAndRemoveLoop(Node node) {
        Node slow = node, fast = node;

        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                break;
            }
        }

        if (slow == fast) {
            slow = head;

            if (slow != fast) {
                while (slow.next != fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }
                fast.next = null;
            } else {
                while (fast.next != slow) {
                    fast = fast.next;
                }
                fast.next = null;
            }
        }
    }
}
