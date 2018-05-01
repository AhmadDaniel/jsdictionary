# jsdictionary
Javascript dictionary data structure

Initiation:
var mydictionary = new jsdictionary();

Add item:
mydictionary.add("color", "Blue");

Access the item:
var color = mydictionary["color"];

Methods:
mydictionary.containsKey("color"); // true
mydictionary.containsValue("Red"); // false
mydictionary.count();
mydictionary.remove("color");
mydictionary.clear();
