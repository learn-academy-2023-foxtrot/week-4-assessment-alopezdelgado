# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: DLD

1. What is object-oriented programming? How is it different than functional programming?

Your answer: object oriented programming bases the code on objects, while functional programming bases it on functions. Object oriented programming is something like ruby, where everything is an object and programmers can use it and itll be easier because data are grouped due to their behavior and data type opposed to functional programming where data and behavior are separate. OOP in my experience is easier because if it quacks like a duck and walks like a duck well... its a duck. So, if something is similar to something else in behavior why not group it together. YAY RUBY 

Researched answer: OOP combines data with its behavior into objects. While functional programming distinguishes between data and behavior, so they are separate. OOP means the code is longer usually, according to scand.com.

2. Ruby has an implicit return. What does that mean?

Your answer: It means you dont have to type return to have a return for the function inside of your code block for example if i made a function called test, and i wanted it to return "nice test" i would just do this 

def test
    "nice test"
end 

and it would work, because ruby has an implicit return. 
Researched answer: it means if the return is the last thing in the code block, you dont need to type the word return. So, like my example was the only thing in the code block so it didnt need a return because it was the last thing between the def and end so if i had a variable or something in there and then typed my return after the conditional, without typing the word return, it would return whatever i typed last before the end. 

3. What is a block in Ruby?

Your answer: its an anonymous function that you can pass to a ruby method in order to do something. So for example if I wanted ruby to multiply each of the values in my array by 5 i would use the .each block, which starts with do and ends with end. Ex: 
arr = [1,2,3,4]

arr.each do
    arr *5
end 

and this should return each number in the array multiplied by 5. 

Researched answer: its an anonymous function passed to a method determine the outcome, so basically what i said, there is also the .times block that repeats code a certain number of times, it is also structured with a do and end because all blocks are. And then if i used it with my array mentioned previously, it would return [1,2,3,4] repeated whatever number of times i told it to. 

4. How do you extract a single value from a Ruby hash?

Your answer: you would pass the name of the hash followed by [] and the number of the key with a colon before the number of the key. so for example: 

soccer_players[:arsenal]

the symbol : is given to each key. 

Researched answer: by loggin the name of the hash and the corresponding key, as mentioned above. 

5. STRETCH: What is a version manager?

Your answer: it is a software that tracks the version of the code. For example, git is a version manager where you can use an app such as github to store code, download it, change it and upload it. It tracks the version of each change and lets you change code without changing what you have already done by using branches when you are making changes and then pushing and merging those branches to main once you are sure the code works. Main is the source of truth in the version manager so you don't want to make changes directly on it, and git software helps with that. 

Researched answer: responsible for managing changes to computer programs. Like git as i mentioned. 

## Looking Ahead: Terms for Next Week

1. Test-driven development: its a software development practice where you test your code before writing the actual code. 

2. PostgreSQL: free and open source relational database management system (im excited for this one)

3. CRUD: Create, read, update, delete 
