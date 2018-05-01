# jsdictionary
Javascript dictionary data structure

Ininiation:
var mydictionary = new jsdictionary();

Add item:
mydictionary.add("color", "Blue");

Access item:
var color = mydictionary["color"];

Methods:
mydictionary.containsKey("color"); // true
mydictionary.containsValue("Red"); // false
mydictionary.count();
mydictionary.remove("color");
mydictionary.clear();
