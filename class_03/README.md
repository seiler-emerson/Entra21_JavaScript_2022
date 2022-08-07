## Creating elements in Html
- Similar to Java, functions can separate code executions so that they are called when necessary to make a call, just inform the name (necessary parameters) to be executed.
    - let new_element = document.createElement("i")
    - new_element.innXXXXXerHTML="Element I created with javascript "
    - document.body.append(new_element)

## Read content of elements in Html
- let read = document.getElementById("p_ler").textContent
- console.log(read);

## Cycle through a list of elements by selector name
- let paragraphs =[...document.getElementsByTagName('p')];
- paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

## Cycle through a list of elements by class name
- let mesma_class =[...document.getElementsByClassName('btn')]; mesma_class.forEach(item => {
    console.log(item.textContent);
});

## Extract html content from items
- mesma_class.forEach(item => {
    console.log(item.innerHTML);
});

