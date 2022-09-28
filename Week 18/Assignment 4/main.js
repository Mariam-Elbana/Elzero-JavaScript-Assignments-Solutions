// تكليفات JavaScript Bootcamp من الدرس 134 إلى 146

// التكليف 04

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// s?            => ? means the "s" i s optional found one time or not found at all
// :             => colon
// \/\/          => slash and we skip it by backslash
// (?:[-\w]+\.)? => optional group of special characters
//   ?           => it means it found one time or not found
//   :           => colon
//   [-\w]       => matches word characters [a-z A-Z 1-9 And Underscore]
//   +           => one or more
//   \.          => matches any characters except new line or other terminators
// .*            => any character except the new line [one or more]
// ([-\w]+)      => mandatory group of characters [one or more]
// \w+           => matches word characters [a-z A-Z 1-9 And Underscore] [one or more]
// (?:\.\w+)?    => optional group
